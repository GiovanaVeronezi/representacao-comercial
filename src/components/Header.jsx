import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import company from "../data/company";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(path) {
  if (path === "/") {
    return location.pathname === "/";
  }

  return location.pathname.startsWith(path);
}

  return (
    <header className="header">
      <div className="header-container">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src="/imagens/logo-cyborg.jpg"
            alt="Cyborg Serralheria"
            className="logo-image"
          />

          <span className="logo-name">{company.name}</span>
        </Link>

        {/* BOTÃO DO MENU */}
        <button
          type="button"
          className={`menu-button ${
            menuOpen ? "menu-button-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU */}
        <nav
          className={`nav ${
            menuOpen ? "nav-open" : ""
          }`}
        >
          <Link
            to="/"
            className={`nav-link ${
              isActive("/") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Início
          </Link>

          <Link
            to="/sobre"
            className={`nav-link ${
              isActive("/sobre") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Sobre
          </Link>

          <Link
            to="/portoes"
            className={`nav-link ${
              isActive("/portoes") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Produtos
          </Link>

          <Link
            to="/contato"
            className={`nav-link nav-link-contact ${
            isActive("/contato") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Contato
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
