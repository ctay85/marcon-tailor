
// Dependencies
import { useEffect, useRef, useState } from 'react'

//
let sx, dx = 0, armed, offset = 0, prev, h = []

// Component
export default function Panorama ({ unit }) {
  const panoramaImage = useRef(null)
  const container = useRef(null)
  const settings = useRef({ dampingFactor : 0.93, historySize : 5 })
  const [ viewOffset, setViewOffset ] = useState(0)

  //
	const tick = () => {
		if (!armed && dx) {
			dx *= settings.current.dampingFactor
			offset -= dx
      setBackgroundPosition()

			if (Math.abs(dx) < 0.001) {
				dx = 0
			}
		}
	}

  //
  const onMouseDown = e => {
    sx = e.pageX - offset
    armed = true
    e.preventDefault()
  }

  //
  const onMouseMove = e => {
    let px
    if (armed) {
      px = e.pageX
      if (prev === undefined) {
        prev = px
      }
      offset = px - sx
      if (h.length > settings.current.historySize) {
        h.shift()
      }
      h.push(prev - px)

      setBackgroundPosition()

      prev = px
    }
  }

  //
  const onMouseLeave = () => {
    if (armed) {
      let i, len = h.length, v = h[len - 1]
      for (i = 0; i < len; i++) {
        v = (v * len + (h[i])) / (len + 1)
      }
      dx = v
    }
    armed = false
  }

  //
  const calcOffsetCenter = () => {
    return viewOffset + (container.current.clientWidth / 2)
  }

  //
  const setBackgroundPosition = () => {
    return panoramaImage.current.style.backgroundPosition = `${offset}px, 0%`
  }

  //
  useEffect( () => {
    offset = calcOffsetCenter()
    setBackgroundPosition()
  }, [ viewOffset ])

  //
  useEffect( () => {
    setViewOffset(unit.offset || 0)
  }, [ unit ])

  //
  useEffect( () => {

    const onResize = () => {
      if ( sx !== undefined ) {
        return false
      }

      offset = calcOffsetCenter()
      setBackgroundPosition()
    }

    //
    const loop = setInterval(tick, 16)
    panoramaImage.current.addEventListener('mousedown', onMouseDown)
    panoramaImage.current.addEventListener('touchstart', onMouseDown)
    panoramaImage.current.addEventListener('mousemove', onMouseMove)
    panoramaImage.current.addEventListener('touchmove', onMouseMove)
    panoramaImage.current.addEventListener('mouseleave', onMouseLeave)
    panoramaImage.current.addEventListener('touchend', onMouseLeave)
    panoramaImage.current.addEventListener('mouseup', onMouseLeave)
    window.addEventListener('resize', onResize)

    //
    return () => {
      clearInterval(loop)

      if ( panoramaImage.current ) {
        panoramaImage.current.removeEventListener('mousedown', onMouseDown)
        panoramaImage.current.removeEventListener('touchstart', onMouseDown)
        panoramaImage.current.removeEventListener('mousemove', onMouseMove)
        panoramaImage.current.removeEventListener('touchmove', onMouseMove)
        panoramaImage.current.removeEventListener('mouseleave', onMouseLeave)
        panoramaImage.current.removeEventListener('touchend', onMouseLeave)
        panoramaImage.current.removeEventListener('mouseup', onMouseLeave)
      }

      window.removeEventListener('resize', onResize)
    }
  }, [])

  //
  return (
    <div className="panorama" ref={ container }>
      <div className="panorama__image" ref={ panoramaImage } style={{
        backgroundImage : `url(${unit.view})`,
        backgroundPosition : `0 0`
      }}></div>
    </div>
  )
}
