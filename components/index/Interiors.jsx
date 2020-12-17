
// Components
import { BgImage } from 'components/ui'

// Component
export default function Interiors () {
  return (
    <section className="page__index__interiors">
      <BgImage src="/img/index/image3.jpg" />

      <article>
        <span className="panel-name">Interiors</span>

        <h2 className="panel-tagline">More Space.</h2>

        <p className="panel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <button className="btn__more">
          <i className="material-icons">add</i>
          <span>More on the interiors</span>
        </button>
      </article>
    </section>
  )
}
