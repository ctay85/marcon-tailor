
// Component
const Architecture = () => (
  <section className="page__design__architecture" id="architecture">
    <div className="wrap--reg">

      <div className="section-intro">
        <h2>More Thought.</h2>

        <aside>
          <p className="text--display">Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.</p>
        </aside>
      </div>

      <div className="gallery-grid">
        <div className="row-1">
          <figure>
            <div className="bg-image" style={{ backgroundImage : `url(/img/design/architecture/B&TB_MARCON_TAILOR_DUSK_UP_FINAL_2400x3199.jpg)` }}></div>
          </figure>
          <figure>
            <img src="/img/design/architecture/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg" />
            <img src="/img/design/architecture/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL_2400x2400.jpg" />
            <img src="/img/design/architecture/B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL_2400x2400.jpg" />
          </figure>
        </div>
        <div className="row-2">
          <figure>
            <img src="/img/design/architecture/B&TB_MARCON_TAILOR_OUTDOOR_AMENITY_FINAL_2400x2400.jpg" />
          </figure>
          <figure>
            <div className="bg-image" style={{ backgroundImage : `url(/img/design/architecture/B&TB_MARCON_TAILOR_STREET_VIEW_FINAL_2400x1357.jpg)` }}></div>
          </figure>
        </div>
      </div>

    </div>
  </section>
)

// Export
export default Architecture
