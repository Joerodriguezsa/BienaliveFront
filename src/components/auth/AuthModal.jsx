import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext.jsx";
import {
  loginRequest,
  registerCustomerRequest,
} from "../../services/authService.js";
import "../../assets/css/auth-modal.css";

export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
  const { setSession } = useAuth();

  const [tab, setTab] = useState(defaultTab);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // registercustomer
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(""); // "YYYY-MM-DD"
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    setTab(defaultTab);
    setError("");
    setLoading(false);
  }, [isOpen, defaultTab]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const doLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginRequest(email, password);

      // ✅ adapta según lo que devuelva tu API
      // común: { token, user } o { accessToken } o simplemente "TOKEN..."
      const token =
        (data &&
          typeof data === "object" &&
          (data.token || data.accessToken)) ||
        (typeof data === "string" ? data : null);

      if (!token) throw new Error("Login OK pero no llegó token.");

      setSession({
        token,
        user: (data && typeof data === "object" && data.user) || null,
        raw: data,
      });

      onClose();
    } catch (err) {
      setError(err?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const doRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerCustomerRequest({
        name,
        email: regEmail,
        password: regPassword,
        roleId: 3,
        active: true,
        phone,
        dateOfBirth: dateOfBirth || "2000-01-01",
        address,
      });

      // ✅ auto-login después de registrar
      const loginData = await loginRequest(regEmail, regPassword);

      const token =
        (loginData &&
          typeof loginData === "object" &&
          (loginData.token || loginData.accessToken)) ||
        (typeof loginData === "string" ? loginData : null);

      if (!token) throw new Error("Registro OK pero login no devolvió token.");

      setSession({
        token,
        user:
          (loginData && typeof loginData === "object" && loginData.user) ||
          null,
        raw: loginData,
      });

      onClose();
    } catch (err) {
      setError(err?.message || "Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="auth-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target.classList.contains("auth-modal-backdrop")) onClose();
      }}
    >
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose} type="button">
          ✕
        </button>

        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-tab ${tab === "register" ? "active" : ""}`}
            onClick={() => setTab("register")}
          >
            Registro
          </button>
        </div>

        {error && <div className="auth-error">{error}</div>}

        {tab === "login" ? (
          <form onSubmit={doLogin}>
            <label className="auth-label">Email</label>
            <input
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="auth-label">Contraseña</label>
            <input
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="auth-btn" disabled={loading}>
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </form>
        ) : (
          <form onSubmit={doRegister}>
            <label className="auth-label">Nombre</label>
            <input
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="auth-label">Email</label>
            <input
              className="auth-input"
              type="email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />

            <label className="auth-label">Contraseña</label>
            <input
              className="auth-input"
              type="password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />

            <label className="auth-label">Teléfono</label>
            <input
              className="auth-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label className="auth-label">Fecha de nacimiento</label>
            <input
              className="auth-input"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />

            <label className="auth-label">Dirección</label>
            <input
              className="auth-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <button className="auth-btn" disabled={loading}>
              {loading ? "Registrando..." : "Crear cuenta"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
