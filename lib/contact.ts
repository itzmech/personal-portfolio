export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; fields?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate + normalize a contact payload; shared client + server. */
export function validateContact(payload: Partial<ContactPayload>) {
  const fields: Record<string, string> = {};

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2) fields.name = "Please enter your name (2+ characters).";
  if (!EMAIL_RE.test(email)) fields.email = "Please enter a valid email address.";
  if (message.length < 10)
    fields.message = "Please write a message (at least 10 characters).";
  if (message.length > 5000)
    fields.message = "Message is too long (max 5000 characters).";

  return {
    valid: Object.keys(fields).length === 0,
    fields,
    data: { name, email, message },
  };
}
