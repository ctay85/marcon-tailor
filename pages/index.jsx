
// Dependencies
import { useEffect, useRef, useState } from 'react'

// Components
import { Cover, Design, Homes, Interiors, PublicArt, Brentwood, OverlayDesign, OverlayInteriors, OverlayPublicArt } from 'components/index'
import { Seo } from 'components/common'

// Store
import { INDEX_OVERLAY_KEY_DESIGN, INDEX_OVERLAY_KEY_INTERIORS, INDEX_OVERLAY_KEY_PUBLICART } from 'store/constants'

// Component
export default function Index () {
  const config = useRef({ wheelDelta : 200, transitionDuration : 1000 })
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
  useEffect( () => {
    const onScroll = () => {
      if ( !lastPanelActive ) window.scrollTo(0,0)
    }

    const onMouseWheel = ({ deltaY }) => {
      const direction = deltaY > 0 ? 'down' : 'up'

      if ( Math.abs(deltaY) > config.current.wheelDelta ) {
        blockExecution()
        changePanel(direction)
        isLastPanel()
      }
    }

    //window.addEventListener( 'scroll', onScroll )
    window.addEventListener( 'mousewheel', onMouseWheel )

    return () => {
      //window.removeEventListener( 'scroll', onScroll )
      window.removeEventListener( 'mousewheel', onMouseWheel )
    }
  }, [ isAnimating, activePanelClass ])

  //
  useEffect( () => {
    window.scrollTo(0,0)
    document.documentElement.classList.add('no-scroll')
  }, [])

  //
  return (
    <>
      <Seo />

      <main className="page__index">
        <Cover active={ activePanelClass } />
        <Design active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Homes active={ activePanelClass } />
        <Interiors active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <PublicArt active={ activePanelClass } setActiveOverlayKey={ setActiveOverlayKey } />
        <Brentwood active={ activePanelClass } />
      </main>

      <OverlayDesign active={ activeOverlayKey === INDEX_OVERLAY_KEY_DESIGN } fnClose={ closeOverlay } />
      <OverlayInteriors active={ activeOverlayKey === INDEX_OVERLAY_KEY_INTERIORS } fnClose={ closeOverlay } />
      <OverlayPublicArt active={ activeOverlayKey === INDEX_OVERLAY_KEY_PUBLICART } fnClose={ closeOverlay } />
    </>
  )
}
