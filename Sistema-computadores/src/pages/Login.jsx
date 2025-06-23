import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Sempre força para /login se tentar sair
  if (location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const blockPopState = () => {
      if (window.location.pathname !== "/login") {
        navigate("/login", { replace: true });
      }
    };
    window.addEventListener("popstate", blockPopState);
    return () => {
      window.removeEventListener("popstate", blockPopState);
    };
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }
    setErro("");
    alert(`Email: ${email}\nSenha: ${senha}`);
  };

  return (
    <main className="login-main">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {erro && (
          <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
            {erro}
          </div>
        )}
        <label htmlFor="email" className="login-label">
          <span>Email:</span>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
        </label>
        <label htmlFor="senha" className="login-label">
          <span>Senha:</span>
          <input
            id="senha"
            type="password"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="login-input"
          />
        </label>
        <button type="submit" className="login-btn">Entrar</button>
      </form>
      <div className="login-register-area">
        <h4 className="login-register-title">Você não possui conta ainda?</h4>
        <a
          className="login-register-link"
          href="/register"
          onClick={e => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Faça o registro
        </a>
      </div>
    </main>
  );
}

