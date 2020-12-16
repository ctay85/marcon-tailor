
// Component
const WindVeil = () => (
  <section className="page__design__windveil" id="wind-veil">
    <div className="wrap--reg">

      <div className="section-intro">
        <h2 data-reveal="hidden">More Function.</h2>

        <aside data-reveal="hidden">
          <p className="text--display">Modern architecture paired with a rare level of intimacy and connection, with only 8 homes on each floor. Expansive balconies up to 319 sf, select homes with bedrooms large enough for king beds, view windows above kitchen sinks, Tailor offers more space and function than Brentwood has ever seen.</p>
        </aside>
      </div>

      <figure>
        <img data-reveal="hidden" src={ `${process.env.BASE_PATH}/img/design/wind-veil/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_2400x2400.jpg` } />
      </figure>

    </div>
  </section>
)

// Export
export default WindVeil
