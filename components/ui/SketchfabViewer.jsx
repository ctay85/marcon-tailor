
// Dependencies
import { useRef, useEffect, useState } from 'react'

// Component
export default function SketchfabViewer ({ setActiveHome }) {
  const [ api, setApi ] = useState(null)
  const sketchfabIframe = useRef(null)
  const models = useRef({
    typical : '65493428a7f641cd9114bc938dceaa39'
  })
  const config = useRef({
    ui_stop : 0,
    transparent : 1,
    ui_controls : 0,
    ui_fullscreen : 0,
    ui_general_controls : 0,
    ui_help : 0,
    ui_infos : 0,
    ui_inspector : 0,
    ui_settings : 0,
    ui_watermark_link : 0,
    ui_watermark : 0
  })

  //
  const onAnnotationSelect = i => {
    if ( i === -1 ) return

    api.getAnnotation(i, ( err, annotation ) => {
      setActiveHome(annotation.name.split(' - '))
    })

    api.hideAnnotationTooltips()
  }

  //
  useEffect( () => {
    if ( !api ) return
    api.start()
    api.addEventListener( 'annotationSelect', onAnnotationSelect )
  }, [ api ])

  //
  useEffect( () => {
    const client = new window.Sketchfab( sketchfabIframe.current )

    client.init( models.current.typical, {
      ...config.current,
      success : apiObj => setApi(apiObj),
      error : () => console.log( 'Viewer error' )
    })
  }, [])

  //
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe ref={ sketchfabIframe }></iframe>
    </div>
  )
}
