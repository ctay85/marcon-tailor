
//
import { useState, useRef, useEffect } from 'react'

//
const images = [
  { file : `${process.env.BASE_PATH}/img/design/architecture/B&TB_MARCON_TAILOR_DUSK_UP_FINAL_2400x3199.jpg`, caption : 'Southwest View — Tower', blurb : 'Tailor sits at the corner of Alpha and Alaska' },
  { file : `${process.env.BASE_PATH}/img/design/architecture/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg`, caption : 'West View — Lobby', blurb : 'The residential lobby fronts Alpha St.' },
  { file : `${process.env.BASE_PATH}/img/design/architecture/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL_2400x2400.jpg`, caption : 'Northwest View — Lobby', blurb : 'Expansive glazing welcomes sun from the south' },
  { file : `${process.env.BASE_PATH}/img/design/architecture/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg`, caption : 'North View — Lobby', blurb : 'Public art as seen from Alaska St.' },
  { file : `${process.env.BASE_PATH}/img/design/architecture/B&TB_MARCON_TAILOR_OUTDOOR_AMENITY_FINAL_2400x2400.jpg`, caption : 'East View — Landscape', blurb : 'Extensive landscaping by PWL Partnership defines the back yard' },
  { file : `${process.env.BASE_PATH}/img/design/architecture/B&TB_MARCON_TAILOR_STREET_VIEW_FINAL_2400x1357.jpg`, caption : 'North View — Townhomes', blurb : 'Contemporary townhomes front Alaska St. at the South End' }
]

//
const Overlay = ({ overlayState, closeOverlay }) => {
  const imageContainer = useRef(null)
  const [ activeIndex, setActiveIndex ] = useState(0)

  //
  const prev = () => {
    if ( images[ activeIndex - 1 ] ) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(images.length - 1)
    }
  }

  //
  const next = () => {
    if ( images[ activeIndex + 1 ] ) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  //
  useEffect( () => {
    if ( overlayState.index === null ) {
      return
    }

    setActiveIndex(overlayState.index)
  }, [ overlayState.index ])

  //
  useEffect( () => {
    const method = overlayState.visible ? 'add' : 'remove'
    document.documentElement.classList[method]('no-scroll')
  }, [ overlayState.visible ])

  //
  return (
    <div className="overlay" data-active={ overlayState.active } data-visible={ overlayState.visible }>
      <button onClick={ closeOverlay } className="btn__close"></button>

      <aside>
        <p className="text--display">{ images[activeIndex].blurb }</p>

        <div className="bottom">
          <span className="caption">{ images[activeIndex].caption }</span>

          <div className="pagination">
            <button className="btn__prev" onClick={ prev}></button>
            <span className="count">{ activeIndex + 1 } / { images.length }</span>
            <button className="btn__next" onClick={ next }></button>
          </div>
        </div>
      </aside>

      <figure ref={ imageContainer }>
        { images.map(({ file, caption }, i ) => <img src={ file } key={ i } data-active={ i === activeIndex } /> )}
      </figure>
    </div>
  )
}

// Component
const Architecture = () => {
  const [ overlayState, setOverlayState ] = useState({ active : false, visible : false, index : 0 })

  //
  const openOverlay = index => {
    setOverlayState({ active : true, visible : false, index })
    setTimeout( () => setOverlayState({ active : true, visible : true, index }), 10)
  }

  //
  const closeOverlay = () => {
    setOverlayState({ active : true, visible : false, index : null })
    setTimeout( () => setOverlayState({ active : false, visible : false, index : 0 }), 1000)
  }

  return (
    <section className="page__design__architecture" id="architecture">
      <div className="wrap--reg">

        <div className="section-intro">
          <h2 data-reveal="hidden">More Thought.</h2>

          <aside data-reveal="hidden">
            <p className="text--display">Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.</p>
          </aside>
        </div>

        <div className="gallery-grid">
          <div className="row-1">
            <figure>
              <div data-reveal="hidden" onClick={ () => openOverlay(0) } className="bg-image" style={{ backgroundImage : `url(${images[0].file})` }}></div>
            </figure>
            <figure>
              <img data-reveal="hidden" onClick={ () => openOverlay(1) } src={ images[1].file } />
              <img data-reveal="hidden" onClick={ () => openOverlay(2) } src={ images[2].file } />
              <img data-reveal="hidden" onClick={ () => openOverlay(3) } src={ images[3].file } />
            </figure>
          </div>
          <div className="row-2">
            <figure>
              <img data-reveal="hidden" onClick={ () => openOverlay(4) } src={ images[4].file } />
            </figure>
            <figure>
              <div data-reveal="hidden" onClick={ () => openOverlay(5) } className="bg-image" style={{ backgroundImage : `url(${images[5].file})` }}></div>
            </figure>
          </div>
        </div>

      </div>

      <Overlay overlayState={ overlayState } closeOverlay={ closeOverlay } />
    </section>
  )
}

// Export
export default Architecture
