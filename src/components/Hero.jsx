import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">REPRESENTAÇÃO COMERCIAl</span>

          <h1 className="hero-title page-title">Automação e Segurança para seu projeto</h1>

          <p className="hero-text">
            Soluções Cyborg em portões automáticos, portões de alumínio e
            automação para residências e empresas.
          </p>

          <Link to="/contato" className="button button-primary">
            Solicitar orçamento
          </Link>

          <div
            className="hero-highlights"
            aria-label="Diferenciais Cyborg"
          ></div>
        </div>

        <div className="hero-image">
          <img
            src="/imagens/ilustracao-portaoBranco.jpg"
            alt="Soluções em representação comercial"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
