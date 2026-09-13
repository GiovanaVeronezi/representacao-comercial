import { Link } from "react-router-dom";

import company from "../data/company";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >
            {company.name}
          </Link>

          <p>
            {company.description}
          </p>

        </div>

        <div className="footer-column">

          <h3>
            Navegação
          </h3>

          <Link to="/">
            Início
          </Link>

          <Link to="/sobre">
            Sobre
          </Link>

          <Link to="/portoes">
            Produtos
          </Link>

          <Link to="/contato">
            Contato
          </Link>

        </div>

        <div className="footer-column">

          <h3>
            Contato
          </h3>

          <a href={`tel:${company.phone}`}>
            {company.phone}
          </a>

          <a href={`mailto:${company.email}`}>
            {company.email}
          </a>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="container">

          <p>
            © {new Date().getFullYear()} {company.name}.
            Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;