
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container } onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_PUBLICART)}>
      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Public Art</span> &mdash; More Function</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>The lobby at Tailor features forty-foot ceilings to accommodate “Wind Veil”, an environmental sculpture created by artist Catherine Widgery.</motion.p>
      </article>

      <figure className="image-trigger">
        <motion.div className="blind" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.blind }></motion.div>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" />
        <span className="caption">The image is an abstraction of points of light on water.</span>
      </figure>

      <div className="mobile-tap-indicator"><span>Learn More</span></div>
    </motion.section>
  )
}
