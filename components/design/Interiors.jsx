
// Dependencies
import { useState } from 'react'

//
const GALLERY_TWO_BEDS = 'GALLERY_TWO_BEDS'
const GALLERY_ONE_BEDS = 'GALLERY_ONE_BEDS'

// Component
const Interiors = () => {
  const [ activeGallery, setActiveGallery ] = useState(GALLERY_TWO_BEDS)

  return (
    <section className="page__design__interiors" id="interiors">
      <div className="wrap--reg">

        <div className="section-intro less-border">
          <h2 data-reveal="hidden">More Home.</h2>

          <aside>
            <p data-reveal="hidden" className="text--display">Our interiors have been planned to maximize space and are finished to stand the test of time.</p>
          </aside>
        </div>

        <div className="gallery" data-reveal="hidden">
          <nav>
            <button
              className="btn btn--text btn--line-hover"
              data-active={ activeGallery === GALLERY_TWO_BEDS }
              onClick={ () => setActiveGallery(GALLERY_TWO_BEDS) }
            >
              Two Bedroom
            </button>

            <button
              className="btn btn--text btn--line-hover"
              data-active={ activeGallery === GALLERY_ONE_BEDS }
              onClick={ () => setActiveGallery(GALLERY_ONE_BEDS) }
            >
              One Bedroom
            </button>
          </nav>

          <div className="grid two-beds" data-active={ activeGallery === GALLERY_TWO_BEDS }>
            <div className="row-1">
              <div className="grid__item">
                <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/design/interiors/Tailor-2-bedroom-living-5000x3626.jpg)` }}></div>
              </div>
              <div className="grid__item">
                <img src={ `${process.env.BASE_PATH}/img/design/interiors/Tailor-2-bedroom-bath-2400x3572.jpg` } />
              </div>
            </div>
            <div className="row-2">
              <div className="grid__item">
                <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/design/interiors/Tailor-2-bedroom-living-kitchen-1920x1279.jpg)` }}></div>
              </div>
              <div className="grid__item">
                <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/design/interiors/Tailor-2-bedroom-bedroom-5000x3626.jpg)` }}></div>
              </div>
              <div className="grid__item">
                <img src={ `${process.env.BASE_PATH}/img/design/interiors/Tailor-2-bedroom-living-02-2400x2476.jpg` } />
              </div>
            </div>
          </div>

          <div className="grid one-beds"  data-active={ activeGallery === GALLERY_ONE_BEDS }>
            <div className="row-1">
              <div className="grid__item">
                <img src={ `${process.env.BASE_PATH}/img/design/interiors/Tailor-1-bedroom-bath-2400x3295.jpg` } />
              </div>
              <div className="grid__item">
                <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/design/interiors/3_200619-152_2400x1599.jpg)` }}></div>
              </div>
            </div>
            <div className="row-2">
              <div className="grid__item">
                <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/design/interiors/Tailor-1-bedroom-kitchen-2400x1586.jpg)` }}></div>
              </div>
              <div className="grid__item">
                <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/design/interiors/Tailor-1-bedroom-bedroom-2400x1617.jpg)` }}></div>
              </div>
              <div className="grid__item">
                <img src={ `${process.env.BASE_PATH}/img/design/interiors/Tailor-1-bedroom-kitchen-02-2400x2917.jpg` } />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// Export
export default Interiors
