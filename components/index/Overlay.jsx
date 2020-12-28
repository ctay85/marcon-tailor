
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
      <span className="category">{ category }</span>
      <h2 className="title">{ title }</h2>
      { children }
    </article>
  )
}

//
export function Overlay ({ active, fnClose, children }) {
  const [ showContent, setShowContent ] = useState(false)

  //
  const closeOverlay = () => {
    setShowContent(false)
    setTimeout(fnClose, 1000)
  }

  //
  useEffect( () => {
    if ( active ) setShowContent(true)
  }, [ active ])

  //
  return (
    <section className="overlay__index" data-active={ active } data-show-content={ showContent }>
      <button className="btn__close" onClick={ closeOverlay }>
        <i className="material-icons">close</i>
      </button>

      { children }
    </section>
  )
}
