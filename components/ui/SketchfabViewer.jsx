
// Dependencies
import { useRef, useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'

// Utils
import { getNewPastilleURL, sketchfabConfig } from 'utils'

// Component
export default function SketchfabViewer ({ setActiveHome, activeLevel }) {
  const [ api, setApi ] = useState(null)
  const [ annotations, setAnnotations ] = useState(null)
  const [ northIndicatorShown, setNorthIndicatorShown ] = useState(true)
  const iframeModelTypical = useRef(null)
  const iframeModelPenthouse = useRef(null)

  //
  const onAnnotationSelect = i => {
    if ( i === -1 ) return

    api.getAnnotation(i, ( err, annotation ) => {
      setActiveHome(annotation.name.split(' - '))
    })
  }

  //
  const setAnnotationTexture = () => {
    let url = getNewPastilleURL(
        '#01516B',
        'none',
        '#041C2A',
        'none',
        activeLevel,
        50,
        512,
        256
    )
    api.setAnnotationsTexture(url, function () {})
  }

  //
  const onViewerClick = () => {
    if ( northIndicatorShown ) {
      setNorthIndicatorShown(false)
    }
  }

  //
  useEffect( () => {
    if ( !annotations ) return

    annotations.forEach(( annotation, i ) => {
      const [ num, plan ] = annotation.name.split(' - ')
      const title = `${activeLevel}0${i+1} - ${plan}`
      api.updateAnnotation(i, { title })
    })

    setAnnotationTexture()
  }, [ activeLevel ])

  //
  useEffect( () => {
    if ( !api ) return

    api.start()

    api.addEventListener('viewerready', () => {
      api.addEventListener( 'annotationSelect', onAnnotationSelect )
      api.addEventListener( 'click', onViewerClick )
      api.getAnnotationList(( err, annotations ) => setAnnotations(annotations))
      api.setAnnotationCameraTransition(true, true)
      setAnnotationTexture()
    })
  }, [ api ])

  //
  useEffect( () => {
    const client = new window.Sketchfab( iframeModelTypical.current )

    client.init( sketchfabConfig.models.typical, {
      ...sketchfabConfig.viewerArgs,
      success : apiObj => {
        console.log( 'Typical model loaded' )
        setApi(apiObj)
      },
      error : () => console.log( 'Typical model error' )
    })

    // client.init( models.current.penthouse, {
    //   ...config.current,
    //   success : () => console.log( 'Penthouse model loaded' ),
    //   error : () => console.log( 'Penthouse model error' )
    // })
  }, [])

  //
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe className="model--typical" ref={ iframeModelTypical }></iframe>
      <iframe className="model--penthouse" ref={ iframeModelPenthouse }></iframe>

      <div className="north-indicator" data-shown={ northIndicatorShown }>
        <SVG src="/svg/compass.svg" />
      </div>
    </div>
  )
}
