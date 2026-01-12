// ✅ Usa .env (Vite)
const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

// ✅ fallback útil si alguien olvida configurar .env
if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

async function parseResponse(res) {
  const ct = res.headers.get("content-type") || "";

  if (!res.ok) {
    let rawMessage = "Request failed.";

    try {
      if (ct.includes("application/json")) {
        const data = await res.json();
        rawMessage =
          data?.detail ||
          data?.message ||
          data?.title ||
          JSON.stringify(data);
      } else {
        rawMessage = await res.text();
      }
    } catch {}

    const normalized = normalizeAuthError(rawMessage);
    throw new Error(normalized);
  }

  // OK
  try {
    if (ct.includes("application/json")) return await res.json();
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  } catch {
    return null;
  }
}

export async function registerCustomerRequest(payload) {
  // payload esperado:
  // { name, email, password, roleId: 3, active: true, phone, dateOfBirth, address }

  const res = await fetch(`${API_BASE}/Auth/registercustomer`, {
    method: "POST",
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json-patch+json",
    },
    body: JSON.stringify(payload),
  });

  return await parseResponse(res);
}

export async function loginRequest(email, password) {
  const res = await fetch(`${API_BASE}/Auth/login`, {
    method: "POST",
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json-patch+json",
    },
    body: JSON.stringify({ email, password }),
  });

  return await parseResponse(res);
}

function normalizeAuthError(message) {
  if (!message) return "Unexpected error occurred.";

  const m = String(message).toLowerCase();

  if (m.includes("already registered")) return "This email is already registered.";
  if (m.includes("user not found")) return "User not found.";
  if (m.includes("unauthorized")) return "Invalid email or password.";

  if (m.includes("invalid") && m.includes("password")) return "Invalid password.";
  if (m.includes("invalid") && m.includes("email")) return "Invalid email address.";

  if (m.includes("password")) return "Password does not meet security requirements.";
  if (m.includes("required")) return "One or more required fields are missing.";
  if (m.includes("network")) return "Network error. Please try again.";

  return "Unable to complete the request. Please try again.";
}
