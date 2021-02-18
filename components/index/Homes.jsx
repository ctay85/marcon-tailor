
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
  const [ activePlate, setActivePlate ] = useState('tower')

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
    setActiveLevel( activeLevel === 2 ? 2 : activeLevel-1 )
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

    return parent.setAttribute('data-active', 'true')
  }

  //
  const onTriggerClick = ({ currentTarget : group }) => {
    const planType = group.dataset.plan
    const unitNumber = group.querySelector('text').innerHTML
    const formattedUnitNumber = unitNumber === 'TH3' || unitNumber === 'TH4'
      ? 'TH3/4'
      : unitNumber

    setActiveHome([ formattedUnitNumber, planType ])
  }

  //
  const onPlateLoaded = key => {
    const svg = document.querySelector(`.plate--${key}`)
    const triggers = [...svg.querySelectorAll('g[id^=trigger]')]

    triggers.forEach( trigger => trigger.addEventListener('click', onTriggerClick) )
  }

  //
  const changePlateNumbers = () => {
    const plate = document.querySelector('.plate--tower')
    if ( !plate ) return

    const groups = [...plate.querySelectorAll('g[id^=trigger]')]

    groups.forEach( group => {
      const unitNumber = group.querySelector('text').innerHTML
      group.querySelector('text').innerHTML = `${activeLevel}${unitNumber.substr(unitNumber.length - 2)}`
    })
  }

  //
  useEffect( () => {
    const isPenthouseLevel = activeLevel === 27
    const isSubPenthouseLevel = activeLevel === 26
    const isTowerLevel = activeLevel > 2 && activeLevel < 26
    const isTownhomeLevel = activeLevel < 3

    if ( isPenthouseLevel ) {
      setActivePlate('penthouse')
    } else if ( isSubPenthouseLevel ) {
      setActivePlate('sub-penthouse')
    } else if ( isTowerLevel ) {
      setActivePlate('tower')
      changePlateNumbers()
    } else if ( isTownhomeLevel ) {
      setActivePlate('townhome')
    }
  }, [ activeLevel ])

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
        {/* <SketchfabViewer setActiveHome={ setActiveHome } activeLevel={ activeLevel } /> */}

        <SVG onLoad={ () => onPlateLoaded('penthouse') } data-active={ activePlate === 'penthouse' } className="plate plate--penthouse" src="/rel/plans/Keyplan_Penthouse.svg" />

        <SVG onLoad={ () => onPlateLoaded('sub-penthouse') } data-active={ activePlate === 'sub-penthouse' } className="plate plate--sub-penthouse" src="/rel/plans/Keyplan_Sub-Penthouse.svg" />

        <SVG onLoad={ () => onPlateLoaded('tower') } data-active={ activePlate === 'tower' } className="plate plate--tower" src="/rel/plans/Keyplan_Tower.svg" />

        <SVG onLoad={ () => onPlateLoaded('townhome') } data-active={ activePlate === 'townhome' } className="plate plate--townhome" src="/rel/plans/Keyplan_Townhouse.svg" />

        <span className="street street--bottom">Alaska St.</span>
        <span className="street street--right">Alpha Ave.</span>
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
            <span className="title" onClick={ () => activateTownhomeLevel(0) }>Townhomes</span>
          </div>
        </div>
      </article>

      <div className="mobile-nav">
        <button className="btn__prev" onClick={ deincrementActiveLevel }><SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} /></button>
        <span className="activeLevel">{ activeLevel === 2 ? 'Townhomes' : `Level ${activeLevel}` }</span>
        <button className="btn__next" onClick={ incrementActiveLevel }><SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} /></button>
      </div>

      <button className="btn__continue" onClick={ () => setActivePanelClass('page__index__public-art') }>
        <span>Continue</span>
        <SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
      </button>

      <div className="north-indicator">
        <SVG src={`${process.env.BASE_PATH}/svg/compass.svg`} />
      </div>
    </motion.section>
  )
}
