
// Dependencies
import { useEffect, useRef, useState } from 'react'
import SVG from 'react-inlinesvg'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

// Components
import { Intro, Cover, Design, Homes, Interiors, PublicArt, Brentwood, OverlayDesign, OverlayInteriors, OverlayPublicArt, OverlayHomes, OverlayBrentwood, OverlayEnquire, OverlayHome } from 'components/index'
import { Seo } from 'components/common'

// Store
import { INDEX_OVERLAY_KEY_DESIGN, INDEX_OVERLAY_KEY_INTERIORS, INDEX_OVERLAY_KEY_PUBLICART, INDEX_OVERLAY_KEY_HOMES, INDEX_OVERLAY_KEY_HOME, INDEX_OVERLAY_KEY_BRENTWOOD, INDEX_OVERLAY_KEY_ENQUIRE, UI_HEADER_THEME_WHITE, UI_HEADER_THEME_BLUE } from 'store/constants'
import { uiUpdateHeaderTheme } from 'store/actions'

// Component
export default function Index () {
  const dispatch = useDispatch()
  const config = useRef({ wheelDelta : 90, touchDelta : 30, transitionDuration : 1000 })
  const ui = useSelector( state => state.ui )
  const [ isAnimating, setIsAnimating ] = useState(false)
  const [ lastPanelActive, setLastPanelActive ] = useState(false)
  const [ activePanelClass, setActivePanelClass ] = useState('page__index__homes')
  const [ activeOverlayKey, setActiveOverlayKey ] = useState(null)
  const [ isEnquireOpen, setIsEnquireOpen ] = useState(false)
  const [ activeHome, setActiveHome ] = useState(null)

  //
  const blockExecution = () => {
    if ( isAnimating ) return false
    setIsAnimating(true)
    setTimeout( () => setIsAnimating(false), config.current.transitionDuration )
  }

  //
  const changePanel = direction => {
    if ( isAnimating || activeOverlayKey !== null || (activePanelClass === 'page__index__cover' && direction === 'up') ) return false
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
      case 'page__index__design' :
        newTheme = UI_HEADER_THEME_WHITE;
      break;
    }

    dispatch( uiUpdateHeaderTheme(newTheme) )
  }, [ activePanelClass ])

  //
  useEffect( () => {

    //
    const onResize = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    onResize()

    //
    const onScroll = () => {
      if ( !lastPanelActive ) window.scrollTo(0,0)
    }

    //
    let touchYStart = 0
    const onTouchStart = e => touchYStart = e.changedTouches[0].clientY
    const onTouchEnd = e => {
      const touchYEnd = e.changedTouches[0].clientY
      const direction = touchYEnd < touchYStart ? 'down' : 'up'
      const distance = direction === 'down'
        ? touchYStart - touchYEnd
        : touchYEnd - touchYStart

      if ( distance > config.current.wheelDelta ) {
        blockExecution()
        changePanel(direction)
        isLastPanel()
      }
    }

    //
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

    //
    window.addEventListener( 'touchstart', onTouchStart )
    window.addEventListener( 'touchend', onTouchEnd )
    window.addEventListener( 'mousewheel', onMouseWheel )
    window.addEventListener( 'resize', onResize )

    //
    return () => {
      window.removeEventListener( 'touchstart', onTouchStart )
      window.removeEventListener( 'touchend', onTouchEnd )
      window.removeEventListener( 'mousewheel', onMouseWheel )
      window.removeEventListener( 'resize', onResize )
    }
  }, [ isAnimating, activePanelClass, activeOverlayKey ])

  //
  useEffect( () => {
    window.scrollTo(0,0)
    document.documentElement.classList.add('no-scroll')

    return () => document.documentElement.classList.remove('no-scroll')
  }, [])

  //
  useEffect( () => {
    if ( activeHome ) {
      setActiveOverlayKey(INDEX_OVERLAY_KEY_HOME)
    }
  }, [ activeHome ])

  //
  return (
    <>
      <Seo title="Made For Brentwood" description="The homes at Tailor offer more than Brentwood has ever seen, built for life by Marcon." />

      <main className="page__index">
        {/* <Intro /> */}
        <Cover active={ activePanelClass } />
        <Design active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Interiors active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Homes active={ activePanelClass } setActivePanelClass={ setActivePanelClass } setActiveHome={ setActiveHome } />
        <PublicArt active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Brentwood active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
      </main>

      <div className="page__index__global-actions" data-theme={ ui.headerTheme }>
        <div className="btn__enquire" data-open={ isEnquireOpen } onClick={ () => setIsEnquireOpen(!isEnquireOpen) }>
          <button className="btn__toggle">
            <span>Enquire</span>
          </button>

          <div className="menu">
            <Link href="/realtor">
              <a className="btn__realtor-hub">
                <span>Realtor Hub</span>
              </a>
            </Link>

            <button onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_ENQUIRE) }>
              <span>Arrange A Preview</span>
            </button>
          </div>
        </div>

        <button className="btn__back-to-top" onClick={ reset } title="Back To Top">
          <SVG src={ `${process.env.BASE_PATH}/svg/thin-arrow-down.svg` } />
        </button>
      </div>

      <OverlayDesign active={ activeOverlayKey === INDEX_OVERLAY_KEY_DESIGN } fnClose={ closeOverlay } />
      <OverlayInteriors active={ activeOverlayKey === INDEX_OVERLAY_KEY_INTERIORS } fnClose={ closeOverlay } />
      <OverlayPublicArt active={ activeOverlayKey === INDEX_OVERLAY_KEY_PUBLICART } fnClose={ closeOverlay } />
      <OverlayHomes active={ activeOverlayKey === INDEX_OVERLAY_KEY_HOMES } fnClose={ closeOverlay } />
      <OverlayBrentwood active={ activeOverlayKey === INDEX_OVERLAY_KEY_BRENTWOOD } fnClose={ closeOverlay } />
      <OverlayEnquire active={ activeOverlayKey === INDEX_OVERLAY_KEY_ENQUIRE } fnClose={ closeOverlay } />
      <OverlayHome active={ activeOverlayKey === INDEX_OVERLAY_KEY_HOME } fnClose={ closeOverlay } activeHome={ activeHome } />
    </>
  )
}
