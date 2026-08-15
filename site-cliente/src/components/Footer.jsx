import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>

      <div>
        <h2>Nome da Empresa</h2>

        <p>
          Soluções para seu projeto.
        </p>
      </div>


      <div>
        <h3>Institucional</h3>

        <Link to="/">
          Início
        </Link>

        <Link to="/sobre">
          Quem Somos
        </Link>

        <Link to="/servicos">
          Serviços
        </Link>

        <Link to="/contato">
          Contato
        </Link>
      </div>


      <div>
        <h3>Serviços</h3>

        <Link to="/portoes">
          Portões
        </Link>

        <Link to="/servicos">
          Todos os serviços
        </Link>
      </div>


      <div>
        <h3>Contato</h3>

        <p>
          (11) 99999-9999
        </p>

        <p>
          contato@empresa.com
        </p>

        <p>
          Salto - SP
        </p>
      </div>

    </footer>
  );
}

export default Footer;