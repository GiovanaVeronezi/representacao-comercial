import gallery from "../data/gallery";

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">NOSSOS PROJETOS</span>

          <h2>Exemplos de projetos que ofereço</h2>

          <p>Confira alguns de nossos projetos realizados para maior satisfação.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <article className="gallery-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
