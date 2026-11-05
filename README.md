# epsilonfield.space

EPSILON — a quantitative evidence instrument. Turn a market idea
into a testable claim, change its assumptions, and keep the
evidence — including when the claim fails. Includes the fixed
historical case 001 (baseline net return −7.75%, claim rejected).

Static HTML/CSS/JS plus Cloudflare Pages Functions under
`functions/`. Current state of the API:

| Route | State |
|---|---|
| `GET /api/health` | Working; reports `historicalAdapter` as not configured until the provider below is connected |
| `POST /api/evidence/run` | **Skeleton** — returns `501`. Needs a historical market-data provider (see TODO in `functions/api/evidence/run.js`) |
| `GET /api/market-data/history` | **Skeleton** — returns `501`, same blocker |
| `POST /api/impact/events` | **Skeleton** — accepts events, persists nothing yet (storage binding TODO in the file) |
| `GET /api/impact/summary` | Serves the final summary snapshot carried over from the previous platform; live counting resumes with the storage binding |
| `/api/participation` | **Skeleton** — returns `503`. Submissions are private data; storage binding TODO in the file. No records were carried over |

Synthetic (demo) mode in the Lab is computed entirely in the
browser and works without any of the endpoints above.

## Local preview

Static pages only:

```sh
python3 -m http.server 8000
```

Including the API functions (recommended):

```sh
npx wrangler pages dev .
```

## Deployment (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages →
   Connect to Git → select this repository.
2. Framework preset: **None**. Build command: *(leave empty)*.
   Build output directory: `/`. Functions in `functions/` are
   picked up automatically.
3. Add the custom domain `epsilonfield.space` under Custom domains,
   then update DNS as prompted.
4. Later, when wiring the remaining endpoints: add provider
   credentials as environment variables / secrets in the project
   settings (never commit them), and bind storage for impact and
   participation as described in the TODO comments.

Every push to `main` redeploys automatically.
