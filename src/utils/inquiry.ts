export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

/**
 * INTEGRATION POINT — Pengo's inquiry backend is not connected yet.
 *
 * Replace the body of this function with a real request, for example:
 *   await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(payload) })
 * and throw an Error when the response is not ok so the form can show its error state.
 *
 * Until then this resolves after a short delay so the form's interaction states can be reviewed.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 1200));
}