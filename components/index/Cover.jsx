
// Dependencies
import Image from 'next/image'
import SVG from 'react-inlinesvg'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Cover () {
  return (
    <section className="page__index__cover">
      <BgImage src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" />

      <div className="left-column">
        <nav>
          <button>Design</button>
          <button>Homes</button>
          <button>Interiors</button>
          <button>Public Art</button>
          <button>Brentwood</button>
        </nav>

        <button className="btn__enquire">
          <span>Enquire</span>
          <SVG src="/svg/thin-arrow-down.svg" />
        </button>
      </div>

      <div className="floorplans">
        <span className="section-title">Floorplans</span>

        <figure>
          <Image src="/img/index/image2.jpg" width="343" height="154" />
        </figure>

        <div className="stat">
          <div className="left">
            <span className="title">Studios</span>
            <div className="progress"><span style={{ width : '40%' }}></span></div>
          </div>
          <div className="right">
            <span className="number">46</span>
          </div>
        </div>

        <div className="stat">
          <div className="left">
            <span className="title">One Bedrooms</span>
            <div className="progress"><span style={{ width : '60%' }}></span></div>
          </div>
          <div className="right">
            <span className="number">69</span>
          </div>
        </div>

        <div className="stat">
          <div className="left">
            <span className="title">Two Bedrooms</span>
            <div className="progress"><span style={{ width : '60%' }}></span></div>
          </div>
          <div className="right">
            <span className="number">69</span>
          </div>
        </div>

        <div className="stat">
          <div className="left">
            <span className="title">Penthouses</span>
            <div className="progress"><span style={{ width : '10%' }}></span></div>
          </div>
          <div className="right">
            <span className="number">4&nbsp;</span>
          </div>
        </div>

        <div className="stat">
          <div className="left">
            <span className="title">Townhomes</span>
            <div className="progress"><span style={{ width : '10%' }}></span></div>
          </div>
          <div className="right">
            <span className="number">5&nbsp;</span>
          </div>
        </div>
      </div>

    </section>
  )
}
