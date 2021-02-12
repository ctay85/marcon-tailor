
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SVG from 'react-inlinesvg'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_DESIGN } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Design ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__design')
  const [ animationState, setAnimationState ] = useState('initial')

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  return (
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>
          <span>Design</span> &mdash; More Thought
        </motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>
          Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.
        </motion.p>
      </article>

      <figure className="image-trigger">
        <motion.div className="blind" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.blind }></motion.div>
        {/* <BgImage src="/img/index/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg" /> */}

        <div className="video-container">
          <video src="/vid/lobby-exterior-loop-v2.mp4" loop autoPlay muted playsInline></video>
        </div>

        <span className="caption">A new perspective on intimate high-rise living in Brentwood.</span>
      </figure>

      <div className="mobile-tap-indicator"><span>Learn More</span></div>

      <motion.button className="desktop-click-indicator" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_DESIGN) } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.indicator }>
        <span>More</span>
        <SVG src="/svg/thin-arrow-down.svg" />
      </motion.button>
    </motion.section>
  )
}
