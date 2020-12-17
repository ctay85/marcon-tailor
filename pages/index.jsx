
// Dependencies
import { useEffect, useRef, useState } from 'react'

// Components
import { Cover, Design, Homes, Interiors, PublicArt, Brentwood } from 'components/index'
import { Seo } from 'components/common'

// Component
export default function Index () {
  const config = useRef({ wheelDelta : 200, transitionDuration : 1000 })
  const [ isAnimating, setIsAnimating ] = useState(false)
  const [ lastPanelActive, setLastPanelActive ] = useState(false)
  const [ activePanelClass, setActivePanelClass ] = useState('page__index__cover')

  //
  const blockExecution = () => {
    if ( isAnimating ) return false
    setIsAnimating(true)
    setTimeout( () => setIsAnimating(false), config.current.transitionDuration )
  }

  //
  const changePanel = direction => {
    if ( isAnimating ) return false
    const activePanel = document.querySelector(`.${activePanelClass}`)
    const nextPanel = direction === 'down'
      ? activePanel.nextElementSibling
      : activePanel.previousElementSibling

    if ( nextPanel ) {
      setActivePanelClass(nextPanel.className)
      if ( lastPanelActive ) setLastPanelActive(false)
    } else {
      setLastPanelActive(true)
    }
  }

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
      }
    }

    window.addEventListener( 'scroll', onScroll )
    window.addEventListener( 'mousewheel', onMouseWheel )

    return () => {
      window.removeEventListener( 'scroll', onScroll )
      window.removeEventListener( 'mousewheel', onMouseWheel )
    }
  }, [ isAnimating, activePanelClass ])

  //
  return (
    <>
      <Seo />

      <main className="page__index">
        <Cover active={ activePanelClass } />
        <Design active={ activePanelClass } />
        <Homes active={ activePanelClass } />
        <Interiors active={ activePanelClass } />
        <PublicArt active={ activePanelClass } />
        <Brentwood active={ activePanelClass } />
      </main>
    </>
  )
}
