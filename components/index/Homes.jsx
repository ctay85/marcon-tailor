
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_HOMES } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Homes ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__homes')
  const [ animationState, setAnimationState ] = useState('initial')

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  return (
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container } onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_HOMES) }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src="/img/index/3_200619-152_2400x1599.jpg" />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Homes</span> &mdash; More Intimate</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>Modern architecture paired with a rare level of intimacy and connection, with only 8 homes on each floor.</motion.p>
      </article>
    </motion.section>
  )
}
