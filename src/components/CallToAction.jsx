import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <span className="section-label">VAMOS CONVERSAR?</span>

          <h2>Encontre a solução ideal para o seu projeto</h2>

          <p>Entre em contato comigo para conhecer nossos produtos.</p>

          <Link to="/contato" className="button button-primary">
            Entre em contato
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
