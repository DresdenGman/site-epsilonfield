// POST /api/evidence/run  -- SKELETON, not yet functional.
//
// On the previous platform this endpoint fetched adjusted daily
// bars from a server-side market-data provider and ran the six
// evidence computations. The provider identity was only ever
// revealed in run provenance at runtime, and its credentials do
// not exist in this repository.
//
// TODO to make this live:
//   1. Choose the historical market-data provider and put its
//      credentials in environment variables (e.g. MARKET_DATA_API_KEY).
//   2. Port the six-run evidence computation.
// Until then this returns an explicit 501 instead of any
// fabricated result; synthetic (demo) mode is unaffected because
// it is computed entirely in the browser.
export function onRequestPost() {
  return Response.json(
    {
      error:
        "Historical mode is not connected yet: the market-data provider has not been wired into this deployment. Synthetic mode still runs locally in your browser.",
    },
    { status: 501 },
  );
}
