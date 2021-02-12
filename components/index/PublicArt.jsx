
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SVG from 'react-inlinesvg'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_PUBLICART } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function PublicArt ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__public-art')
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
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Public Art</span> &mdash; More Function</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>The lobby at Tailor features forty-foot ceilings to accommodate “Wind Veil”, an environmental sculpture created by artist Catherine Widgery.</motion.p>
      </article>

      <figure className="image-trigger">
        <motion.div className="blind" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.blind }></motion.div>
        {/* <BgImage src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" /> */}

        <div className="video-container">
          <video src="/vid/publicart-loop-desktop.mp4" loop autoPlay muted playsInline></video>
        </div>

        <span className="caption">The image is an abstraction of points of light on water.</span>
      </figure>

      <div className="mobile-tap-indicator" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_PUBLICART) }><span>Learn More</span></div>

      <motion.button className="desktop-click-indicator" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_PUBLICART) } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.indicator }>
        <span>More</span>
        <SVG src="/svg/thin-arrow-down.svg" />
      </motion.button>
    </motion.section>
  )
}
