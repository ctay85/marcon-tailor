
// Dependencies
import { useRef, useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'

// Utils
import { getNewPastilleURL, sketchfabConfig } from 'utils'

// Component
export default function SketchfabViewer ({ setActiveHome, activeLevel }) {
  const iframeModelTypical = useRef(null)
  const iframeModelPenthouse = useRef(null)
  const [ allModelsLoaded, setAllModelsLoaded ] = useState(false)
  const [ viewerInstances, setViewerInstances ] = useState({
    typical : { api : null, annotations : null },
    penthouse : { api : null, annotations : null }
  })
  const [ northIndicatorShown, setNorthIndicatorShown ] = useState(true)
  const [ activeModel, setActiveModel ] = useState(null)

  //
  const onViewerClick = () => {
    if ( northIndicatorShown ) {
      setNorthIndicatorShown(false)
    }
  }

  //
  const onAnnotationSelect = i => {
    if ( i === -1 ) return
    
    viewerInstances[activeModel].api.getAnnotation(i, ( err, annotation ) => {
      setActiveHome(annotation.name.split(' - '))
    })
  }

  //
  const setAnnotationTexture = api => {
    const url = getNewPastilleURL('#01516B', 'none', '#041C2A', 'none', activeLevel, 50, 512, 256)
    api.setAnnotationsTexture(url, function () {})
  }

  //
  const updateAnnotations = key => {
    viewerInstances[key].annotations.forEach(( annotation, i ) => {
      const [ num, plan ] = annotation.name.split(' - ')
      const title = `${activeLevel}0${i+1} - ${plan}`
      viewerInstances[key].api.updateAnnotation(i, { title })
    })

    setAnnotationTexture(viewerInstances[key].api)
  }

  //
  const initModel = ( key, instance ) => {
    instance.api.start()

    instance.api.addEventListener('viewerready', () => {
      instance.api.addEventListener( 'click', onViewerClick )
      instance.api.getAnnotationList(( err, annotations ) => setViewerInstances({
        ...viewerInstances,
        [key] : {
          ...viewerInstances[key],
          annotations
        }
      }))
      instance.api.setAnnotationCameraTransition(true, true)
      setAnnotationTexture(instance.api)
    })
  }

  //
  const loadTypicalModel = () => new Promise(( resolve, reject ) => {
    const client = new window.Sketchfab( iframeModelTypical.current )

    client.init( sketchfabConfig.models.typical, {
      ...sketchfabConfig.viewerArgs,
      success : api => {
        console.log( 'Typical model loaded' )
        resolve(api)
      },
      error : () => {
        console.error( 'Typical model error' )
        reject('Typical model error')
      }
    })
  })

  //
  const loadPenthouseModel = () => new Promise(( resolve, reject ) => {
    const client = new window.Sketchfab( iframeModelPenthouse.current )

    client.init( sketchfabConfig.models.penthouse, {
      ...sketchfabConfig.viewerArgs,
      success : api => {
        console.log( 'Penthouse model loaded' )
        resolve(api)
      },
      error : () => {
        console.error( 'Penthouse model error' )
        reject('Penthouse model error')
      }
    })
  })

  //
  const loadModels = async () => {
    setViewerInstances({
      typical : {
        api : await loadTypicalModel(),
        annotations : null
      },
      penthouse : {
        api : await loadPenthouseModel(),
        annotations : null
      }
    })
  }

  //
  useEffect( () => {
    if ( viewerInstances.typical.annotations && viewerInstances.penthouse.annotations && activeModel ) {
      viewerInstances.typical.api.addEventListener( 'annotationSelect', onAnnotationSelect )
      viewerInstances.penthouse.api.addEventListener( 'annotationSelect', onAnnotationSelect )
    }
  }, [ viewerInstances.typical.annotations, viewerInstances.penthouse.annotations, activeModel ])

  //
  useEffect( () => {
    if ( activeModel ){
      console.log('activeModel set, updating annotations');
      updateAnnotations(activeModel)
    }
  }, [ activeModel ])

  //
  useEffect( () => {
    if ( !allModelsLoaded ) return
    const isPenthouseLevel = activeLevel === 26 || activeLevel === 27
    const isTypicalLevel = activeLevel > 2 && activeLevel < 26

    if ( isPenthouseLevel && activeModel !== 'penthouse' ) {
      console.log('setting active model to penthouse');
      setActiveModel('penthouse')
    }

    if ( isTypicalLevel && activeModel !== 'typical' ) {
      console.log('setting active model to typical');
      setActiveModel('typical')
    }

    if ( activeModel ) {
      console.log('activeLevel or allModelsLoaded changed, updating annotations');
      updateAnnotations(activeModel)
    }
  }, [ activeLevel, allModelsLoaded ])

  //
  useEffect( () => {
    const isTypicalFullyLoaded = viewerInstances.typical.api && viewerInstances.typical.annotations
    const isPenthouseFullyLoaded = viewerInstances.penthouse.api && viewerInstances.penthouse.annotations

    if ( viewerInstances.typical.api && !viewerInstances.typical.annotations ) {
      console.log('load typical annotations');
      initModel('typical', viewerInstances.typical)
    }

    if ( isTypicalFullyLoaded && viewerInstances.penthouse.api && !viewerInstances.penthouse.annotations ) {
      console.log('load penthouse annotations');
      initModel('penthouse', viewerInstances.penthouse)
    }

    if ( isTypicalFullyLoaded && isPenthouseFullyLoaded ) {
      console.log( 'all models fully loaded', viewerInstances )
      setAllModelsLoaded(true)
    }
  }, [ viewerInstances ])

  //
  useEffect(loadModels, [])

  //
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe className="model--typical" data-active={ activeModel === 'typical' } ref={ iframeModelTypical }></iframe>
      <iframe className="model--penthouse" data-active={ activeModel === 'penthouse' } ref={ iframeModelPenthouse }></iframe>

      <div className="north-indicator" data-shown={ northIndicatorShown }>
        <SVG src="/svg/compass.svg" />
      </div>
    </div>
  )
}
