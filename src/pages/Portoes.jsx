import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import products from "../data/products";

function Portoes() {
  return (
    <>
      <Header />

      <main>

        <section className="page-header">

          <div className="container">

            <Breadcrumb />

            <span className="section-label">
              PRODUTOS
            </span>

            <h1 className="page-title">
              Conheça mais de nossos produtos
            </h1>

            <p>
              Produtos Cyborg para mais segurança, praticidade e eficiência em seu projeto.
            </p>

          </div>

        </section>

        <section className="products-section">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                NOSSOS PRODUTOS
              </span>

              <h2>
                Produtos e soluções
              </h2>

              <p>
                Trabalhamos com soluções para diferentes aplicações,
                necessidades e projetos.
              </p>

            </div>

            <div className="products-grid">

              {products.map((product) => (
                <article
                  className="product-card"
                  key={product.id}
                >

                  <div className="product-card-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  <div className="product-card-content">

                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      {product.description}
                    </p>

                    <Link
                      to="/contato"
                      className="product-button"
                    >
                      Solicitar informações
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        <section className="cta-section">

          <div className="container">

            <div className="cta-content">

              <span className="section-label">
                PRECISA DE UMA SOLUÇÃO?
              </span>

              <h2>
                Fale conosco sobre o seu projeto
              </h2>

              <p>
                Posso ajudar você a encontrar
                a solução mais adequada para sua necessidade.
              </p>

              <Link
                to="/contato"
                className="button button-primary"
              >
                Solicitar orçamento
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Portoes;
