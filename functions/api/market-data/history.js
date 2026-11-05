// GET /api/market-data/history  -- SKELETON, not yet functional.
// Same blocker as /api/evidence/run: no market-data provider is
// connected in this deployment yet. See functions/api/evidence/run.js.
// TODO: implement alongside the provider connection.
export function onRequestGet() {
  return Response.json(
    { error: "Market-data provider is not connected in this deployment yet." },
    { status: 501 },
  );
}
