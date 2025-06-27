import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Headear";
import "./register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefone: "",
    comment: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro("");
    setSucesso("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.telefone || !form.comment || !form.senha) {
      setErro("Preencha todos os campos!");
      return;
    }
    setErro("");
    setSucesso("Registro realizado com sucesso!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <Header hideLogin />
      <main className="container py-5" id="register">
        <div className="bg-white p-5 rounded shadow-sm mx-auto" style={{ maxWidth: 600 }}>
          <h2 className="mb-3 text-center">Crie sua conta</h2>
          <p className="text-muted text-center mb-4">
            Registro de sistema para Manutenção de computadores
          </p>
          <form id="register-form" onSubmit={handleSubmit}>
            {erro && (
              <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
                {erro}
              </div>
            )}
            {sucesso && (
              <div style={{ color: "green", marginBottom: "10px", textAlign: "center" }}>
                {sucesso}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome Completo:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Digite seu nome completo"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Digite seu email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="form-control"
                placeholder="(99) 99999-9999"
                value={form.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="form-control"
                placeholder="Crie uma senha"
                value={form.senha}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Observação:</label>
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                placeholder="Deixe seu comentário"
                value={form.comment}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid">
              <button id="button" type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}