
// Components
import { BgImage } from 'components/ui'

// Component
export default function Design () {
  return (
    <section className="page__index__design">
      <article className="text--blue">
        <span className="panel-name">Design</span>

        <h2 className="panel-tagline">More Thought.</h2>

        <p className="panel-description">Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.</p>

        <button className="btn__more">
          <i className="material-icons">add</i>
          <span>More on the design</span>
        </button>
      </article>

      <figure>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg" />
      </figure>
    </section>
  )
}
