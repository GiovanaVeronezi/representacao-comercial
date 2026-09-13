import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import company from "../data/company";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
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

          <span className="logo-name">
            {company.name}
          </span>
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

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Início
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Sobre
          </NavLink>

          <NavLink
            to="/portoes"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Produtos
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Contato
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Header;