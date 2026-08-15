import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <Link to="/" className="logo">
          Nome da Empresa
        </Link>

        <nav className="nav">

          <Link to="/" className="nav-link">
            Início
          </Link>

          <Link to="/sobre" className="nav-link">
            Quem Somos
          </Link>

          <Link to="/servicos" className="nav-link">
            Serviços
          </Link>

          <Link to="/diferenciais" className="nav-link">
            Diferenciais
          </Link>

          <Link to="/contato" className="nav-link">
            Contato
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Header;