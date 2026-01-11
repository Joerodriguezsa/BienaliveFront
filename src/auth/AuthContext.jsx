import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "auth_session";

function isExpired(expiresAtUtc) {
  if (!expiresAtUtc) return false; // si no viene, no forzamos logout
  const t = new Date(expiresAtUtc).getTime();
  if (Number.isNaN(t)) return false;
  return t <= Date.now();
}

function readSessionFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);

    // si está expirado, lo borramos
    const expiresAtUtc =
      parsed?.expiresAtUtc ?? parsed?.raw?.expiresAtUtc ?? null;

    if (isExpired(expiresAtUtc)) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readSessionFromStorage());

  // persiste sesión
  useEffect(() => {
    try {
      if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, [session]);

  // si hay expiración, programa auto-logout
  useEffect(() => {
    if (!session) return;

    const expiresAtUtc =
      session?.expiresAtUtc ?? session?.raw?.expiresAtUtc ?? null;

    if (!expiresAtUtc) return;

    const exp = new Date(expiresAtUtc).getTime();
    if (Number.isNaN(exp)) return;

    const ms = exp - Date.now();
    if (ms <= 0) {
      setSession(null);
      return;
    }

    const id = window.setTimeout(() => setSession(null), ms);
    return () => window.clearTimeout(id);
  }, [session]);

  const value = useMemo(() => {
    const token = session?.token || null;

    // role/roleId pueden venir arriba o dentro de raw (como en tu captura)
    const role = session?.role ?? session?.raw?.role ?? null;
    const roleId = session?.roleId ?? session?.raw?.roleId ?? null;

    return {
      token,
      user: session?.user || null,
      role,
      roleId,
      isAuthenticated: Boolean(token),
      setSession,
      logout: () => setSession(null),
      hasRole: (r) => {
        if (!r) return false;
        return String(role).toLowerCase() === String(r).toLowerCase();
      },
    };
  }, [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider />");
  return ctx;
}
