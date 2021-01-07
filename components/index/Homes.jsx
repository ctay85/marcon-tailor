
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Utils
import { indexPanelAnimations } from 'utils'

// Component
export default function Homes ({ active }) {
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
    <motion.section className={ sectionClass.current } data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Homes</span> &mdash; More Intimate</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>Modern architecture paired with a rare level of intimacy and connection, with only 8 homes on each floor. Expansive balconies up to 319 sf, select homes with bedrooms large enough for king beds, view windows above kitchen sinks, Tailor offers more space and function than Brentwood has ever seen.</motion.p>
      </article>
    </motion.section>
  )
}
