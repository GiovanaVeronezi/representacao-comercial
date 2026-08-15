import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";

function Portoes() {
  return (
    <>
      <Header />

      <main>

        <section className="page-header">

          <div className="container">

            <Breadcrumb atual="Portões" />

            <h1>
              Portões
            </h1>

            <p>
              Soluções em portões para
              diferentes tipos de projetos.
            </p>

          </div>

        </section>


        <section className="section">

          <div className="container">

            <div className="content">

              <span className="section-label">
                NOSSAS SOLUÇÕES
              </span>

              <h2>
                Portões para diferentes necessidades
              </h2>

              <p>
                Trabalhamos com diferentes soluções
                para atender projetos residenciais,
                comerciais e industriais.
              </p>

            </div>


            <div className="product-grid">

              <article className="product">

                <div className="product-image">
                  Imagem
                </div>

                <div className="product-content">

                  <h3>
                    Portão Basculante
                  </h3>

                  <p>
                    Solução para projetos que
                    necessitam de abertura vertical.
                  </p>

                  <a
                    href="/contato"
                    className="product-link"
                  >
                    Solicitar orçamento →
                  </a>

                </div>

              </article>


              <article className="product">

                <div className="product-image">
                  Imagem
                </div>

                <div className="product-content">

                  <h3>
                    Portão Deslizante
                  </h3>

                  <p>
                    Modelo com abertura lateral
                    para diferentes aplicações.
                  </p>

                  <a
                    href="/contato"
                    className="product-link"
                  >
                    Solicitar orçamento →
                  </a>

                </div>

              </article>


              <article className="product">

                <div className="product-image">
                  Imagem
                </div>

                <div className="product-content">

                  <h3>
                    Portão Pivotante
                  </h3>

                  <p>
                    Solução com abertura por
                    sistema pivotante.
                  </p>

                  <a
                    href="/contato"
                    className="product-link"
                  >
                    Solicitar orçamento →
                  </a>

                </div>

              </article>

            </div>

          </div>

        </section>


        <section className="contact-section">

          <div className="container">

            <div className="contact-grid">

              <div>

                <span className="section-label">
                  FALE CONOSCO
                </span>

                <h2>
                  Solicite seu orçamento
                </h2>

                <p>
                  Entre em contato conosco para
                  conhecer nossas soluções e
                  solicitar um orçamento.
                </p>

              </div>

              <ContactForm />

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default Portoes;