
// Dependencies
import { useState, useEffect } from 'react'

// Components
import { BgImage } from 'components/ui'

//
export function OverlayImage ({ src }) {
  return (
    <figure>
      <BgImage src={ src } />
    </figure>
  )
}

//
export function OverlayContent ({ category, title, children }) {
  return (
    <article>
      <div className="wrap">
        <span className="category">{ category }</span>
        <h2 className="title">{ title }</h2>
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
