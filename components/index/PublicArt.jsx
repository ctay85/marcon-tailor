
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
    <motion.section className={ sectionClass.current } data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>Public Art</motion.span>

        <motion.h2 className="panel-tagline" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelTagline }>More Function.</motion.h2>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>The lobby at Tailor features forty-foot ceilings to accommodate “Wind Veil”, an environmental sculpture created by artist Catherine Widgery.</motion.p>

        <motion.button className="btn__more" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_PUBLICART) } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.btnMore }>
          <i className="material-icons">add</i>
          <span>More on public art</span>
        </motion.button>
      </article>

      <figure>
        <motion.div className="blind" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.blind }></motion.div>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" />
      </figure>
    </motion.section>
  )
}
