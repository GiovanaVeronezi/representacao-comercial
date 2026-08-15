import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <section className="section">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                NOSSAS SOLUÇÕES
              </span>

              <h2>
                Produtos e serviços
              </h2>

              <p>
                Conheça nossas principais soluções.
              </p>

            </div>


            <div className="cards">

              <article className="card">

                <div className="card-image">
                  Imagem
                </div>

                <div className="card-content">

                  <h3>
                    Portões
                  </h3>

                  <p>
                    Soluções em portões para
                    diferentes projetos.
                  </p>

                  <a href="/portoes">
                    Saiba mais →
                  </a>

                </div>

              </article>


              <article className="card">

                <div className="card-image">
                  Imagem
                </div>

                <div className="card-content">

                  <h3>
                    Estruturas
                  </h3>

                  <p>
                    Soluções em estruturas
                    para diferentes aplicações.
                  </p>

                  <a href="/servicos">
                    Saiba mais →
                  </a>

                </div>

              </article>


              <article className="card">

                <div className="card-image">
                  Imagem
                </div>

                <div className="card-content">

                  <h3>
                    Automação
                  </h3>

                  <p>
                    Soluções em automação
                    e tecnologia.
                  </p>

                  <a href="/servicos">
                    Saiba mais →
                  </a>

                </div>

              </article>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;