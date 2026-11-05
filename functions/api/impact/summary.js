// GET /api/impact/summary
// Returns the final summary snapshot measured on the previous
// platform (updatedAt is the original measurement time and is
// intentionally left unchanged). Live counting resumes once the
// storage binding described in functions/api/impact/events.js
// is connected.
// TODO: replace this snapshot with live aggregation from storage.
const PAYLOAD = {
  "status": "live",
  "updatedAt": "2026-11-05T10:09:36.507Z",
  "metrics": {
    "lab_opened": {
      "events": 57,
      "sessions": 57
    },
    "site_visit": {
      "events": 331,
      "sessions": 331
    },
    "verified_historical_run": {
      "events": 7,
      "sessions": 7
    }
  },
  "measurement": {
    "verified": [
      "verified_historical_run"
    ],
    "unverifiedSignals": [
      "site_visit",
      "lab_opened",
      "challenge_opened",
      "reproduce_opened"
    ],
    "retentionDays": 90,
    "countingWindow": "rolling"
  }
};

export function onRequestGet() {
  return Response.json(PAYLOAD);
}
