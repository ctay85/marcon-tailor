//
import { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'

//
export default function Intro () {
  const bmContainer = useRef(null)
  const [ state, setState ] = useState({ visible : true, faded : false })

  //
  useEffect( () => {
    const anim = lottie.loadAnimation({
      container: bmContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path : `/json/tailor-logo-v1.json`
    })

    anim.addEventListener('complete', () => {
      setTimeout( () => setState({ visible : true, faded : true }), 500)
      setTimeout( () => setState({ visible : false, faded : true }), 1500)
    })

    return () => {
      anim.destroy()
      setState({ visible : true, faded : false })
    }
  }, [])

  //
  return (
    <section className="page__index__intro" data-visible={ state.visible } data-faded={ state.faded }>
      <div className="bm-container" ref={ bmContainer }></div>
    </section>
  )
}
