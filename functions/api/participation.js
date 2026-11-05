// /api/participation  -- SKELETON, storage not connected.
//
// Previous platform behavior:
//   POST { kind, text, answers, consent, website, token }
//     -> 200 { record: { token, stage: "received", ... } }
//     -> the receipt page then polls the stage for that token
//        (received -> reviewing -> responded -> resolved).
// Submissions are private data and none of the old records could
// be carried over.
//
// TODO: bind storage (KV or D1, e.g. EPSILON_PARTICIPATION),
// implement POST (store under the client-supplied token, stage
// starts at "received") and GET ?token=... (return the record's
// public stage fields only). Until storage exists, both verbs
// return an explicit error rather than pretending a submission
// was saved.
function notReady() {
  return Response.json(
    {
      error:
        "Participation storage is not connected in this deployment yet. Your text has not been saved; please keep a copy and retry later.",
    },
    { status: 503 },
  );
}

export function onRequestPost() {
  return notReady();
}

export function onRequestGet() {
  return notReady();
}
