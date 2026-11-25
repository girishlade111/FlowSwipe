export interface SubmissionResult {
  ok: boolean;
  mode: "endpoint" | "local-adapter";
  message: string;
}

export async function submitToAdapter(
  endpoint: string,
  payload: Record<string, unknown>,
  successMsg: string
): Promise<SubmissionResult> {
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`Submission failed with status ${res.status}`);
    }
    return { ok: true, mode: "endpoint", message: successMsg };
  }

  // Documented local development adapter when no authorized external endpoint is configured.
  await new Promise((r) => setTimeout(r, 400));
  return {
    ok: true,
    mode: "local-adapter",
    message: `${successMsg} (Development preview mode: stored locally only; no external financial or backend request sent.)`,
  };
}
