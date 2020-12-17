
// Components
import { BgImage } from 'components/ui'

// Component
export default function PublicArt () {
  return (
    <section className="page__index__public-art">
      <article>
        <span className="panel-name">Public Art</span>

        <h2 className="panel-tagline">More Function.</h2>

        <p className="panel-description">The lobby at Tailor features forty-foot ceilings to accommodate “Wind Veil”, an environmental sculpture created by artist Catherine Widgery.</p>

        <button className="btn__more">
          <i className="material-icons">add</i>
          <span>More on public art</span>
        </button>
      </article>

      <figure>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" />
      </figure>
    </section>
  )
}
