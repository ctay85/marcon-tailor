
// Components
import { BgImage } from 'components/ui'

// Component
export default function Brendwood () {
  return (
    <section className="page__index__brentwood">
      <BgImage src="/img/index/19067_Marcon_TailorAerial_AerialL01_st.jpg" />

      <article>
        <span className="panel-name">Brentwood</span>

        <h2 className="panel-tagline">Celebrate More.</h2>

        <p className="panel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <button className="btn__more">
          <i className="material-icons">add</i>
          <span>More on brentwood</span>
        </button>
      </article>
    </section>
  )
}
