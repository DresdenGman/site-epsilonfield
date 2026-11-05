// GET /api/health
// Response shape replicated from the payload measured on the
// previous platform, with two deliberate differences:
//   - timestamp is generated per request;
//   - historicalAdapter.configured / enabled are false: the
//     market-data provider is not connected in this deployment yet.
// TODO: once the historical market-data provider is connected
// (credentials via environment variables, never in code), set
// configured/enabled back to true.
const PAYLOAD = {
  "status": "operational",
  "instrument": "epsilon.evidence.v2",
  "software": {
    "productRelease": "v2.0.0",
    "packageVersion": "0.1.0",
    "evidenceFormat": "epsilon.evidence.v2",
    "engineRevision": "epsilon-instrument-2026.08.30",
    "commitSha": "55d6dd1935667851aa3e2e64457b9353d7d30d49",
    "sourceState": "modified",
    "sourceFingerprint": "e850fc2f4a40c266665699983f7dfcfab222ab3665271a99903ed8d8a11d6f6a"
  },
  "publicMode": "historical-evaluation",
  "historicalAdapter": {
    "configured": false,
    "enabled": false,
    "sharedCallBudgetPerMinute": 5,
    "suggestedRange": {
      "start": "2025-11-05",
      "end": "2026-05-09"
    }
  },
  "rawMarketDataApi": false,
  "timestamp": "2026-11-05T10:07:32.611Z"
};

export function onRequestGet() {
  const body = { ...PAYLOAD, timestamp: new Date().toISOString() };
  return Response.json(body);
}
