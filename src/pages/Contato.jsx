import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import company from "../data/company";

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const mensagem = `
Olá! Gostaria de solicitar informações.

Nome: ${form.nome}
Telefone: ${form.telefone}
E-mail: ${form.email}

Mensagem:
${form.mensagem}
    `;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const url = `https://wa.me/${company.whatsapp}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
  }

  const mensagemWhatsApp = encodeURIComponent(
    "Olá! Gostaria de conhecer melhor os produtos e soluções disponíveis.",
  );

  return (
    <>
      <Header />

      <main>
        <section className="page-header">
          <div className="container">
            <Breadcrumb />

            <span className="section-label">CONTATO</span>

            <h1 className="page-title">Vamos conversar sobre seu projeto</h1>

            <p>
              Entre em contato para solicitar informações, conhecer nossos
              produtos ou receber orientação para escolher a melhor solução para
              o seu projeto.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <span className="section-label">FALE COMIGO</span>

                <h2>Estou pronto para atender você</h2>

                <p>
                  Preencha o formulário ao lado e envie sua solicitação.
                  Entrarei em contato para entender melhor sua necessidade.
                </p>

                <div className="contact-info">
                  <div className="contact-info-item">
                    <h3>WhatsApp</h3>

                    <p>(11) 97078-6364</p>
                  </div>

                  <div className="contact-info-item">
                    <h3>Atendimento</h3>

                    <p>{company.businessHours}</p>
                  </div>

                  <div className="contact-info-item">
                    <h3>Localização</h3>

                    <p>{company.address}</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=${mensagemWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-button"
                >
                  Falar pelo WhatsApp
                </a>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>

                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>

                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seuemail@empresa.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>

                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre o que você precisa..."
                    rows="6"
                    required
                  />
                </div>

                <button type="submit" className="button button-primary">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contato;
