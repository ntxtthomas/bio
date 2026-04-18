#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# deploy-aws.sh — Build and deploy to S3 + invalidate CloudFront cache
#
# Usage:
#   ./scripts/deploy-aws.sh
#
# Prerequisites:
#   - AWS CLI configured: aws configure --profile terrythomas
#   - S3 bucket created and CloudFront distribution set up (see wiki)
#   - Copy .env.example → .env.local and fill in DISTRIBUTION_ID
# -----------------------------------------------------------------------------

set -euo pipefail

# ── Configuration ─────────────────────────────────────────────────────────────
BUCKET="${BUCKET:-terrythomas-bio}"          # S3 bucket name
DISTRIBUTION_ID="${DISTRIBUTION_ID:-}"       # CloudFront distribution ID (set in .env.local or export)
AWS_PROFILE="${AWS_PROFILE:-terrythomas}"    # Named CLI profile
# ──────────────────────────────────────────────────────────────────────────────

# Load .env.local if present (never committed — set DISTRIBUTION_ID there)
if [[ -f "$(dirname "$0")/../.env.local" ]]; then
  # shellcheck disable=SC1091
  source "$(dirname "$0")/../.env.local"
fi

if [[ -z "$DISTRIBUTION_ID" ]]; then
  echo "Error: DISTRIBUTION_ID is not set."
  echo "  Add to .env.local: DISTRIBUTION_ID=<your-id>"
  echo "  Or export it:      export DISTRIBUTION_ID=<your-id>"
  exit 1
fi

echo "▶ Building production bundle..."
npm run build

echo "▶ Syncing dist/ to s3://$BUCKET ..."
aws s3 sync dist/ "s3://$BUCKET" \
  --delete \
  --profile "$AWS_PROFILE"

echo "▶ Invalidating CloudFront cache (distribution: $DISTRIBUTION_ID)..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --profile "$AWS_PROFILE"

echo "✓ Deploy complete — https://terrythomas.com"
