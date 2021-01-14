
// Dependencies
import { useEffect, useRef, useState } from 'react'
import SVG from 'react-inlinesvg'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { Cover, Design, Homes, Interiors, PublicArt, Brentwood, OverlayDesign, OverlayInteriors, OverlayPublicArt, OverlayHomes, OverlayBrentwood } from 'components/index'
import { Seo } from 'components/common'

// Store
import { INDEX_OVERLAY_KEY_DESIGN, INDEX_OVERLAY_KEY_INTERIORS, INDEX_OVERLAY_KEY_PUBLICART, INDEX_OVERLAY_KEY_HOMES, INDEX_OVERLAY_KEY_BRENTWOOD, UI_HEADER_THEME_WHITE, UI_HEADER_THEME_BLUE } from 'store/constants'
import { uiUpdateHeaderTheme } from 'store/actions'

// Component
export default function Index () {
  const dispatch = useDispatch()
  const config = useRef({ wheelDelta : 150, touchDelta : 30, transitionDuration : 1000 })
  const ui = useSelector( state => state.ui )
  const [ isAnimating, setIsAnimating ] = useState(false)
  const [ lastPanelActive, setLastPanelActive ] = useState(false)
  const [ activePanelClass, setActivePanelClass ] = useState('page__index__cover')
  const [ activeOverlayKey, setActiveOverlayKey ] = useState(null)

  //
  const blockExecution = () => {
    if ( isAnimating ) return false
    setIsAnimating(true)
    setTimeout( () => setIsAnimating(false), config.current.transitionDuration )
  }

  //
  const changePanel = direction => {
    if ( isAnimating ) return false
    window.scrollTo(0,0)

    const activePanel = document.querySelector(`.${activePanelClass}`)
    const nextPanel = direction === 'down'
      ? activePanel.nextElementSibling
      : activePanel.previousElementSibling

    if ( nextPanel ) {
      setActivePanelClass(nextPanel.className)
    }
  }

  //
  const isLastPanel = () => {
    const lastPanel = document.querySelector('.page__index__brentwood[data-active="true"]')

    if ( lastPanel ) {
      setTimeout( () => document.documentElement.classList.remove('no-scroll'), config.current.transitionDuration )
    } else {
      document.documentElement.classList.add('no-scroll')
    }
  }

  //
  const closeOverlay = () => setActiveOverlayKey(null)

  //
  const reset = () => setActivePanelClass('page__index__cover')

  //
  useEffect( () => {
    let newTheme

    switch ( activePanelClass ) {
      case 'page__index__cover' :
      case 'page__index__homes' :
      case 'page__index__interiors' :
      case 'page__index__public-art' :
      case 'page__index__brentwood' :
        newTheme = UI_HEADER_THEME_WHITE;
      break;
      case 'page__index__design' :
        newTheme = UI_HEADER_THEME_BLUE;
      break;
    }

    dispatch( uiUpdateHeaderTheme(newTheme) )
  }, [ activePanelClass ])

  //
  useEffect( () => {
    const onScroll = () => {
      if ( !lastPanelActive ) window.scrollTo(0,0)
    }

    const onMouseWheel = e => {
      const isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
      const delta = isTouchPad ? config.current.touchDelta : config.current.wheelDelta
      const direction = e.deltaY > 0 ? 'down' : 'up'

      if ( Math.abs(e.deltaY) > delta ) {
        blockExecution()
        changePanel(direction)
        isLastPanel()
      }
    }

    window.addEventListener( 'mousewheel', onMouseWheel )
    return () => window.removeEventListener( 'mousewheel', onMouseWheel )
  }, [ isAnimating, activePanelClass ])

  //
  useEffect( () => {
    window.scrollTo(0,0)
    document.documentElement.classList.add('no-scroll')

    return () => document.documentElement.classList.remove('no-scroll')
  }, [])

  //
  return (
    <>
      <Seo title="Made For Brentwood" />

      <main className="page__index">
        <Cover active={ activePanelClass } />
        <Design active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Homes active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Interiors active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <PublicArt active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Brentwood active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
      </main>

      <button className="page__index__enquire" data-theme={ ui.headerTheme }>
        <span>Enquire</span>
        <SVG src="/svg/thin-arrow-down.svg" />
      </button>

      <button className="page__index__back-to-top" data-theme={ ui.headerTheme } onClick={ reset }>
        <SVG src="/svg/thin-arrow-down.svg" />
      </button>

      <OverlayDesign active={ activeOverlayKey === INDEX_OVERLAY_KEY_DESIGN } fnClose={ closeOverlay } />
      <OverlayInteriors active={ activeOverlayKey === INDEX_OVERLAY_KEY_INTERIORS } fnClose={ closeOverlay } />
      <OverlayPublicArt active={ activeOverlayKey === INDEX_OVERLAY_KEY_PUBLICART } fnClose={ closeOverlay } />
      <OverlayHomes active={ activeOverlayKey === INDEX_OVERLAY_KEY_HOMES } fnClose={ closeOverlay } />
      <OverlayBrentwood active={ activeOverlayKey === INDEX_OVERLAY_KEY_BRENTWOOD } fnClose={ closeOverlay } />
    </>
  )
}
