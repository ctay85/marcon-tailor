
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
  const [ isTransparent, setIsTransparent ] = useState(true)
  const router = useRouter()
  const header = useRef(null)

  //
  const scrollTo = scrollTo => {
    const args = { duration : 1, scrollTo, ease : 'power2' }

    if ( router.pathname !== '/design' ) {
      router.push('/design')
      setTimeout( () => gsap.to( window, args ), 1500)
    } else {
      gsap.to( window, args )
    }
  }

  //
  useEffect( () => {
    const ScrollToPlugin = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollToPlugin);

    setTimeout( () => setIsVisible(true), 1000)
    return () => setIsVisible(false)
  }, [])

  //
  useEffect( () => {

    //
    const setHeaderVisibility = () => {
      const dir = window.pageYOffset > lastSt ? 'down' : 'up'

      if ( dir === 'down' && isVisible ) setIsVisible(false)
      if ( dir === 'up' && !isVisible ) setIsVisible(true)

      lastSt = window.pageYOffset
    }

    //
    const shouldHeaderBeTransparent = () => {
      const trigger = document.querySelector('[data-transparent-header-trigger]')

      if ( !trigger ) {
        if ( isTransparent ) {
          console.log('setting not transparent, no trigger');
          setIsTransparent(false)
        }
        return
      }

      const triggerPos = trigger.getBoundingClientRect().top
      if ( triggerPos < 0 && isTransparent ) {
        console.log('setting not transparent');
        setIsTransparent(false)
      }
      if ( triggerPos > 0 && !isTransparent ) {
        console.log('setting transparent');
        setIsTransparent(true)
      }
    }

    //
    const onScroll = () => {
      setHeaderVisibility()
      shouldHeaderBeTransparent()
    }

    //
    window.addEventListener( 'scroll', onScroll )
    return () => window.removeEventListener( 'scroll', onScroll )
  }, [ isVisible, isTransparent ])

  //
  useEffect( () => {
    setIsTransparent(true)
  }, [ router.pathname ])

  //
  return (
    <header
      className="global__header"
      ref={ header }
      data-slug={ router.pathname }
      data-visible={ isVisible }
      data-transparent={ isTransparent }
    >
      <div className="left">
        <nav>
          <ul>
            <li><button className="btn btn--line-hover" onClick={ () => scrollTo('#architecture') }>Architecture</button></li>
            <li><button className="btn btn--line-hover" onClick={ () => scrollTo('#wind-veil') }>Wind Veil</button></li>
            <li><button className="btn btn--line-hover" onClick={ () => scrollTo('#interiors') }>Interiors</button></li>
          </ul>
        </nav>
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
