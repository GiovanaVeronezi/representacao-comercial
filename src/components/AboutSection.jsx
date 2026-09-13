import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="container">

        <div className="about-grid">

          <div className="about-image">

            <img
              src="/imagens/foto-diogo.jpg"
            />

          </div>

          <div className="about-content">

            <span className="section-label">
              SOBRE MIM
            </span>

            <h2>
              Olá, eu sou o Diogo!
            </h2>

            <p>
              Sou representante comercial da Cyborg, atuando para aproximar você das melhores soluções em portões e produtos para segurança e acesso.
            </p>

            <p>
              Meu objetivo é entender a necessidade de cada cliente e ajudar você a encontrar a solução ideal para o seu projeto, oferecendo atendimento personalizado, orientação e todo o suporte necessário durante a escolha.              
            </p>

            <p>
              Se você está construindo, reformando ou procurando uma solução para melhorar a segurança e o acesso do seu imóvel, conte comigo para encontrar a melhor opção
            </p>

            <Link
              to="/sobre"
              className="button button-primary"
            >
              Conheça a empresa
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;