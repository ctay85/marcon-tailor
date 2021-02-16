
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_HOME, INDEX_OVERLAY_KEY_PUBLICART } from 'store/constants'

// Components
import { BgImage, SketchfabViewer } from 'components/ui'

// Component
export default function Homes ({ active, setActiveHome, setActivePanelClass }) {
  const levelLabel = useRef(null)
  const sectionClass = useRef('page__index__homes')
  const [ animationState, setAnimationState ] = useState('initial')
  const [ isMobile, setIsMobile ] = useState(false)
  const [ activeLevel, setActiveLevel ] = useState(3)

  //
  const onLevelClick = ({ currentTarget : group, offsetY }) => {
    const level = group.id.replace('L', '')

    const penthouseY = -100
    const y = parseInt(level) > 25 ? penthouseY : offsetY

    //
    levelLabel.current.innerText = `Level ${level}`
    levelLabel.current.style = `top:${y}px`

    //
    resetLevelGroups()
    group.classList.add('active')
    setActiveLevel(parseInt(level))
  }

  //
  const resetLevelGroups = () => {
    const levelGroups = [...document.querySelectorAll('.elevation svg g[id^="L"]')]
    levelGroups.forEach( levelGroup => levelGroup.classList.remove('active') )
  }

  //
  const onElevationSvgLoaded = () => {
    const levelGroups = [...document.querySelectorAll('.elevation svg g[id^="L"]')]
    levelGroups.forEach( group => group.addEventListener('click', onLevelClick) )
  }

  //
  const onMouseEnter = e => {
    const y = e.offsetY
    const group = e.currentTarget
    const num = group.id.replace('L', '')

    levelLabel.current.innerText = `Level ${num}`
    levelLabel.current.style = `top:${y}px`
  }

  //
  const incrementActiveLevel = () => {
    setActiveLevel( activeLevel === 27 ? 27 : activeLevel+1 )
  }

  //
  const deincrementActiveLevel = () => {
    setActiveLevel( activeLevel === 3 ? 3 : activeLevel-1 )
  }

  //
  const activatePenthouseLevel = level => {
    setActiveLevel(level)
    resetLevelGroups()
    document.querySelector(`.elevation svg g[id="L${level}"]`).classList.add('active')
    levelLabel.current.style = 'top:-100px;'
  }

  const activateTownhomeLevel = level => {
    setActiveLevel(level)
    resetLevelGroups()
    levelLabel.current.style = 'top:-100px;'
  }

  //
  const togglePenthouseNav = ({ currentTarget : button }) => {
    const parent = button.parentNode
    const isActive = parent.dataset.active === 'true'
    const notPenthouseLevel = activeLevel < 26

    if ( isActive && notPenthouseLevel ) {
      return parent.removeAttribute('data-active')
    }

    return parent.setAttribute('data-active', 'true')
  }

  //
  const toggleTownhomesNav = ({ currentTarget : button }) => {
    const parent = button.parentNode
    const isActive = parent.dataset.active === 'true'
    //const notPenthouseLevel = activeLevel < 26

    // if ( isActive && notPenthouseLevel ) {
    //   return parent.removeAttribute('data-active')
    // }

    return parent.setAttribute('data-active', 'true')
  }

  //
  useEffect( () => {
    const isActive = active === sectionClass.current

    if ( isActive ) {
      setAnimationState('enter')
    }

    if ( !isActive ) {
      setAnimationState('exit')
    }
  }, [ active ])

  //
  useEffect( () => {
    const onResize = () => {
      if ( window.innerWidth < 767 && !isMobile ) setIsMobile(true)
      if ( window.innerWidth > 767 && isMobile ) setIsMobile(false)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ isMobile ])

  //
  return (
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <SketchfabViewer setActiveHome={ setActiveHome } activeLevel={ activeLevel } />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Homes</span> &mdash; More Intimate</motion.span>

        <div className="elevation">
          <SVG src={`${process.env.BASE_PATH}/svg/plans/Elevation-East-View.svg`} onLoad={ onElevationSvgLoaded } />

          <div className="penthouse-labels" data-active={ activeLevel === 27 || activeLevel === 26 }>
            <button className="btn__toggle" onClick={ togglePenthouseNav }>Penthouses</button>
            <button className="btn__floor btn__floor--27" data-active={ activeLevel === 27 } onClick={ () => activatePenthouseLevel(27) }>Level 27</button>
            <button className="btn__floor btn__floor--26" data-active={ activeLevel === 26 } onClick={ () => activatePenthouseLevel(26) }>Level 26</button>
          </div>

          <span className="level-label" ref={ levelLabel }>Level 3</span>

          <div className="th-labels" data-active={ activeLevel >= 0 && activeLevel < 3 }>
            <span className="title" onClick={ toggleTownhomesNav }>Townhomes</span>
            <span className="floor" data-active={ activeLevel === 2 } onClick={ () => activateTownhomeLevel(2) }>Floor 3</span>
            <span className="floor" data-active={ activeLevel === 1 } onClick={ () => activateTownhomeLevel(1) }>Floor 2</span>
            <span className="floor" data-active={ activeLevel === 0 } onClick={ () => activateTownhomeLevel(0) }>Floor 1</span>
          </div>
        </div>
      </article>

      <div className="mobile-nav">
        <button className="btn__prev" onClick={ deincrementActiveLevel }><SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} /></button>
        <span className="activeLevel">Level { activeLevel }</span>
        <button className="btn__next" onClick={ incrementActiveLevel }><SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} /></button>
      </div>

      <button className="btn__continue" onClick={ () => setActivePanelClass('page__index__public-art') }>
        <span>Continue</span>
        <SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
      </button>
    </motion.section>
  )
}
