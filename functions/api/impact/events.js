// POST /api/impact/events  -- SKELETON.
// The browser tracker is fire-and-forget (it never reads this
// response), but nothing is persisted yet: there is no storage
// binding in this deployment.
//
// TODO: bind a KV namespace (e.g. EPSILON_IMPACT) in the Pages
// project settings and store { event, sessionId, source, path }
// with a 90-day retention to match the previous platform.
export function onRequestPost() {
  return Response.json({ ok: true, persisted: false }, { status: 202 });
}
