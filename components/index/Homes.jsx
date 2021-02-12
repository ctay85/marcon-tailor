
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_HOME } from 'store/constants'

// Components
import { BgImage, SketchfabViewer } from 'components/ui'

// Component
export default function Homes ({ active, setActiveHome }) {
  const levelLabel = useRef(null)
  const sectionClass = useRef('page__index__homes')
  const [ animationState, setAnimationState ] = useState('initial')
  const [ isMobile, setIsMobile ] = useState(false)
  const [ activeLevel, setActiveLevel ] = useState(3)

  //
  const onLevelClick = ({ currentTarget : group, offsetY }) => {
    const level = group.id.replace('L', '')
    const levelGroups = [...document.querySelectorAll('.elevation svg g[id^="L"]')]
    const penthouseY = window.innerWidth < 1024 ? 50 : 80
    const y = parseInt(level) > 25 ? penthouseY : offsetY

    //
    levelLabel.current.innerText = `Level ${level}`
    levelLabel.current.style = `top:${y}px`

    //
    levelGroups.forEach( levelGroup => levelGroup.classList.remove('active') )
    group.classList.add('active')
    setActiveLevel(parseInt(level))
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
          <SVG src="/svg/plans/Elevation-East-View.svg" onLoad={ onElevationSvgLoaded } />

          <span className="penthouse-label">Penthouses</span>

          <span className="level-label" ref={ levelLabel }>Level 3</span>

          <div className="th-labels">
            <span className="title">Townhomes</span>
            <span className="floor">Floor 3</span>
            <span className="floor">Floor 2</span>
            <span className="floor">Floor 1</span>
          </div>
        </div>
      </article>
    </motion.section>
  )
}
