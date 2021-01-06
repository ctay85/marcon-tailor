
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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
    <motion.section className={ sectionClass.current } data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <article className="text--blue">
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>
          Design &mdash; More Thought
        </motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>
          Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.
        </motion.p>
      </article>

      <figure className="image-trigger" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_DESIGN) }>
        <motion.div className="blind" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.blind }></motion.div>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg" />
        <span className="caption">Lorem ipsum &mdash; Dolor Sit</span>
      </figure>
    </motion.section>
  )
}
