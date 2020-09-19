
// Dependencies
import Link from 'next/link'
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

//
let lastSt = 10

// Component
const Header = () => {
  const [ isVisible, setIsVisible ] = useState(false)
  const router = useRouter()

  //
  const scrollTo = scrollTo => gsap.to( window, { duration : 1, scrollTo, ease : 'power2' })

  //
  useEffect( () => {
    const ScrollToPlugin = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollToPlugin);

    setTimeout( () => setIsVisible(true), 1000)
    return () => setIsVisible(false)
  }, [])

  //
  useEffect( () => {
    const onScroll = () => {
      const dir = window.pageYOffset > lastSt ? 'down' : 'up'

      if ( dir === 'down' && isVisible ) setIsVisible(false)
      if ( dir === 'up' && !isVisible ) setIsVisible(true)

      lastSt = window.pageYOffset
    }

    window.addEventListener( 'scroll', onScroll )
    return () => window.removeEventListener( 'scroll', onScroll )
  }, [ isVisible ])

  //
  return (
    <header className="global__header" data-slug={ router.pathname } data-visible={ isVisible }>
      <div className="left">
        {
          router.pathname === '/design' && (
            <nav>
              <ul>
                <li><button className="btn btn--line-hover" onClick={ () => scrollTo('#architecture') }>Architecture</button></li>
                <li><button className="btn btn--line-hover" onClick={ () => scrollTo('#wind-veil') }>Wind Veil</button></li>
                <li><button className="btn btn--line-hover" onClick={ () => scrollTo('#interiors') }>Interiors</button></li>
              </ul>
            </nav>
          )
        }
      </div>

      <div className="center">
        <Link href="/">
          <a className="btn__logo">
            <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Tailor-01-White-188x30.svg` } />
          </a>
        </Link>
      </div>

      <div className="right">
        { router.pathname !== '/thank-you' && <button className="btn__register" onClick={ () => scrollTo('#register') }>Register</button> }
      </div>
    </header>
  )
}

// Export
export default Header
