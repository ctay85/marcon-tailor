
//
import { useState, useRef, useEffect } from 'react'

//
const images = [
  { file : '/img/design/architecture/B&TB_MARCON_TAILOR_DUSK_UP_FINAL_2400x3199.jpg', caption : 'Lorem ipsum dolor' },
  { file : '/img/design/architecture/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg', caption : 'Lorem ipsum dolor' },
  { file : '/img/design/architecture/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL_2400x2400.jpg', caption : 'Lorem ipsum dolor' },
  { file : '/img/design/architecture/B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL_2400x2400.jpg', caption : 'Lorem ipsum dolor' },
  { file : '/img/design/architecture/B&TB_MARCON_TAILOR_OUTDOOR_AMENITY_FINAL_2400x2400.jpg', caption : 'Lorem ipsum dolor' },
  { file : '/img/design/architecture/B&TB_MARCON_TAILOR_STREET_VIEW_FINAL_2400x1357.jpg', caption : 'Lorem ipsum dolor' }
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
  return (
    <div className="overlay" data-active={ overlayState.active } data-visible={ overlayState.visible }>
      <button onClick={ closeOverlay } className="btn__close"></button>

      <aside>
        <p className="text--display">Lorem ipsum dolor sit  amet, con sectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tinc.</p>

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
          <h2>More Thought.</h2>

          <aside>
            <p className="text--display">Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.</p>
          </aside>
        </div>

        <div className="gallery-grid">
          <div className="row-1">
            <figure>
              <div onClick={ () => openOverlay(0) } className="bg-image" style={{ backgroundImage : `url(${images[0].file})` }}></div>
            </figure>
            <figure>
              <img onClick={ () => openOverlay(1) } src={ images[1].file } />
              <img onClick={ () => openOverlay(2) } src={ images[2].file } />
              <img onClick={ () => openOverlay(3) } src={ images[3].file } />
            </figure>
          </div>
          <div className="row-2">
            <figure>
              <img onClick={ () => openOverlay(4) } src={ images[4].file } />
            </figure>
            <figure>
              <div onClick={ () => openOverlay(5) } className="bg-image" style={{ backgroundImage : `url(${images[5].file})` }}></div>
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
