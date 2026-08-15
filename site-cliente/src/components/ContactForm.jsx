function ContactForm() {

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Formulário enviado");
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >

      <div className="form-group">

        <label htmlFor="nome">
          Nome
        </label>

        <input
          id="nome"
          type="text"
          placeholder="Seu nome"
        />

      </div>


      <div className="form-group">

        <label htmlFor="email">
          E-mail
        </label>

        <input
          id="email"
          type="email"
          placeholder="Seu e-mail"
        />

      </div>


      <div className="form-group">

        <label htmlFor="telefone">
          Telefone
        </label>

        <input
          id="telefone"
          type="tel"
          placeholder="Seu telefone"
        />

      </div>


      <div className="form-group">

        <label htmlFor="mensagem">
          Mensagem
        </label>

        <textarea
          id="mensagem"
          rows="5"
          placeholder="Como podemos ajudar?"
        />

      </div>


      <button
        type="submit"
        className="button button-primary"
      >
        Enviar mensagem
      </button>

    </form>
  );
}

export default ContactForm;