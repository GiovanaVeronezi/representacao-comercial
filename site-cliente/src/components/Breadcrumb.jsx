import { Link } from "react-router-dom";

function Breadcrumb({ atual }) {
  return (
    <nav>
      <Link to="/">
        Início
      </Link>

      <span> / </span>

      <Link to="/servicos">
        Serviços
      </Link>

      <span> / </span>

      <span>{atual}</span>
    </nav>
  );
}

export default Breadcrumb;