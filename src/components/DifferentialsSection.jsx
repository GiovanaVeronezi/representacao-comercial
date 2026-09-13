function DifferentialsSection() {
  const differentials = [
    {
      number: "01",
      title: "Atendimento personalizado",
      text: "Cada projeto possui uma necessidade diferente. Por isso, ofereço um atendimento próximo para entender o que você procura e apresentar as melhores opções.",
    },

    {
      number: "02",
      title: "Representação Cyborg",
      text: "Atuo como representante da Cyborg, conectando você às soluções e produtos da marca com orientação durante o processo de compra.",
    },

    {
      number: "03",
      title: "Suporte na escolha",
      text: "Tem dúvidas sobre qual produto escolher? Estou disponível para explicar as opções e ajudar você a encontrar uma solução adequada ao seu portão e à sua necessidade.",
    },

    {
      number: "04",
      title: "Soluções em automação",
      text: "Encontre opções para tornar o acesso ao seu imóvel mais prático, confortável e seguro.",
    },
  ];

  return (
    <section className="differentials-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MEUS DIFERENCIAIS</span>

          <h2>Por que comprar com o Diogo?</h2>

          <p>
            Mais do que apresentar produtos, meu trabalho é ajudar você a
            encontrar a solução certa para o seu projeto.
          </p>
        </div>

        <div className="differentials-grid">
          {differentials.map((differential) => (
            <article className="differential" key={differential.number}>
              <span className="differential-number">{differential.number}</span>

              <h3>{differential.title}</h3>

              <p>{differential.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentialsSection;
