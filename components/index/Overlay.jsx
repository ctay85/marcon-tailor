
// Dependencies
import { useState, useEffect } from 'react'

// Components
import { BgImage } from 'components/ui'

//
export function OverlayImage ({ images }) {
  const [ activeImageIndex, setActiveImageIndex ] = useState(0)

  //
  useEffect( () => {
    setTimeout( () => setActiveImageIndex( images[ activeImageIndex + 1 ] ? activeImageIndex + 1 : 0 ), 3000)
  }, [ activeImageIndex ])

  //
  return (
    <figure>
      { images.map(( image, i ) => <div className="image" data-active={ activeImageIndex === i }><BgImage src={ image } key={ i } /></div> )}
    </figure>
  )
}

//
export function OverlayContent ({ category, title, children }) {
  return (
    <article>
      <div className="wrap">
        <span className="category">{ category } &mdash; { title }</span>
        { children }
      </div>
    </article>
  )
}

//
export function Overlay ({ active, fnClose, children }) {
  const [ showContent, setShowContent ] = useState(false)
  const [ isReady, setIsReady ] = useState(false)

  //
  const closeOverlay = () => {
    setShowContent(false)
    setIsReady(false)
    setTimeout(fnClose, 500)
  }

  //
  useEffect( () => {
    if ( active ) {
      setShowContent(true)
      setTimeout( () => setIsReady(true), 500)
    }
  }, [ active ])

  //
  return (
    <section className="overlay__index" data-active={ active } data-show-content={ showContent } data-ready={ isReady }>
      <button className="btn__close" onClick={ closeOverlay }>
        <i className="material-icons">close</i>
      </button>

      { children }
    </section>
  )
}
