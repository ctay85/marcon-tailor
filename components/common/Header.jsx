
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
  const scrollTo = ( e, scrollTo ) => {
    const args = { duration : 1, scrollTo, ease : 'power2' }

    if ( scrollTo === '#register' ) {
      gsap.to( window, args )
    }

    if ( router.pathname === '/design' && scrollTo !== '#register' ) {
      e.preventDefault()
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

      if ( window.innerWidth < 768 ) return false
      if ( dir === 'down' && isVisible ) setIsVisible(false)
      if ( dir === 'up' && !isVisible ) setIsVisible(true)

      lastSt = window.pageYOffset < 10
        ? 10
        : window.pageYOffset
    }

    //
    const shouldHeaderBeTransparent = () => {
      const trigger = document.querySelector('[data-transparent-header-trigger]')

      if ( !trigger ) {
        if ( isTransparent && router.pathname !== '/' ) {
          setIsTransparent(false)
        }
        return
      }

      const triggerPos = trigger.getBoundingClientRect().top
      if ( triggerPos < 0 && isTransparent ) {
        setIsTransparent(false)
      }
      if ( triggerPos > 0 && !isTransparent ) {
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
            <li>
              <Link href={{ pathname : '/design', query : { anchor : 'architecture' } }} as="/design">
                <a onClick={ e => scrollTo(e, '#architecture') } className="btn btn--line-hover">Architecture</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname : '/design', query : { anchor : 'wind-veil' } }} as="/design">
                <a onClick={ e => scrollTo(e, '#wind-veil') } className="btn btn--line-hover">Design</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname : '/design', query : { anchor : 'interiors' } }} as="/design">
                <a onClick={ e => scrollTo(e, '#interiors') } className="btn btn--line-hover">Interiors</a>
              </Link>
            </li>
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
        { router.pathname !== '/thank-you' && <button className="btn__register" onClick={ e => scrollTo(e, '#register') }>Register</button> }
      </div>
    </header>
  )
}

// Export
export default Header
