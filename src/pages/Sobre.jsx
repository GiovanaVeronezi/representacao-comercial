import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

function Sobre() {
  return (
    <>
      <Header />

      <main>

        <section className="page-header">

          <div className="container">

            <Breadcrumb />

            <span className="section-label">
              SOBRE
            </span>

            <h1>
              Sobre a empresa
            </h1>

            <p>
              Conheça um pouco de quem somos e nossos príncipios.
            </p>

          </div>

        </section>

        <section className="about-section">

          <div className="container">

            <div className="about-grid">

              <div className="about-image">

                <img
                  src="/public/imagens/representacao-cyborg.jpg"
                  alt="Representação Cyborg"
                />

              </div>

              <div className="about-content">

                <span className="section-label">
                  QUEM SOMOS
                </span>

                <h2>
                  Sobre a Cyborg
                </h2>

                <p>
                  A Cyborg é uma marca voltada para soluções em automação e segurança de acessos, oferecendo produtos desenvolvidos para trazer mais praticidade, segurança e conforto para residências, comércios e empresas.
                </p>

                <p>
                  Por meio da representação do Diogo, você pode conhecer as opções disponíveis e receber orientação para escolher o produto mais adequado às necessidades do seu projeto.
                </p>

                <p>
                  A automação de portões proporciona mais comodidade para o dia a dia, permitindo controlar o acesso ao imóvel de maneira prática e segura.
                </p>

              </div>

            </div>

          </div>

        </section>

        <section className="values-section">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                NOSSOS PRINCÍPIOS
              </span>

              <h2>
                O que orienta nosso trabalho
              </h2>

            </div>

            <div className="values-grid">

              <article className="value-card">

                <span className="value-number">
                  01
                </span>

                <h3>
                  Segurança
                </h3>

                <p>
                  Proteção e tranquilidade para seu imóvel.
                </p>

              </article>

              <article className="value-card">

                <span className="value-number">
                  02
                </span>

                <h3>
                  Qualidade
                </h3>

                <p>
                  Soluções desenvolvidas para oferecer confiança e durabilidade.
                </p>

              </article>

              <article className="value-card">

                <span className="value-number">
                  03
                </span>

                <h3>
                  Compromentimento
                </h3>

                <p>
                  Atendimento próximo e atenção às necessidades de cada cliente.
                </p>

              </article>

              <article className="value-card">

                <span className="value-number">
                  04
                </span>

                <h3>
                  Tecnologia
                </h3>

                <p>
                  Soluções desenvolvidas para oferecer confiança e durabilidade.
                </p>

              </article>

            </div>

          </div>

        </section>

        <section className="cta-section">

          <div className="container">

            <div className="cta-content">

              <span className="section-label">
                FALE CONOSCO
              </span>

              <h2>
                Tem um projeto em mente?
              </h2>

              <p>
                Entre em contato para conhecer nosso trabalho.
              </p>

              <Link
                to="/contato"
                className="button button-primary"
              >
                Entre em contato
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Sobre;