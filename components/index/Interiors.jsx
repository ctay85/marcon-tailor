
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_INTERIORS } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Interiors ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__interiors')
  const [ animationState, setAnimationState ] = useState('initial')

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  return (
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container } onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_INTERIORS) }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src="/img/index/image3.jpg" />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Interiors</span> &mdash; More Space</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>Our interiors have been planned to maximize space and are finished to stand the test of time.</motion.p>
      </article>

      <div className="mobile-tap-indicator"><span>Learn More</span></div>
    </motion.section>
  )
}
