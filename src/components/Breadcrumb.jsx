import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  const pageNames = {
    "/sobre": "Sobre",
    "/portoes": "Produtos",
    "/contato": "Contato",
  };

  const currentPage = pageNames[location.pathname];

  if (!currentPage) {
    return null;
  }

  return (
    <nav
      className="breadcrumb"
      aria-label="Navegação estrutural"
    >

      <Link to="/">
        Início
      </Link>

      <span>/</span>

      <span>
        {currentPage}
      </span>

    </nav>
  );
}

export default Breadcrumb;