
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_BRENTWOOD } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Brendwood ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__brentwood')
  const [ animationState, setAnimationState ] = useState('initial')

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  return (
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container } onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_BRENTWOOD) }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src="/img/index/19067_Marcon_TailorAerial_AerialL01_st.jpg" />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Brentwood</span> &mdash; Celebrate More</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>The homes at Tailor offer more than Brentwood has ever seen, built for life by Marcon.</motion.p>
      </article>

      <div className="mobile-tap-indicator"><span>Learn More</span></div>
    </motion.section>
  )
}
