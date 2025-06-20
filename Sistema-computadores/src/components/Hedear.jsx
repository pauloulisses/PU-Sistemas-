import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Importação do CSS

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">PU Suporte e Manutenção</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-primary me-2" to="/login">LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary me-2" to="/checkout">CHECKOUT</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="pesquisar"
                aria-label="Search"
              />
              <button className="btn btn-primary me-2" type="submit">
                pesquisar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;