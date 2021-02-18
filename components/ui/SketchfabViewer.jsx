
// Dependencies
import { useRef, useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'

// Utils
import { getNewPastilleURL, sketchfabConfig } from 'utils'

// Component
export default function SketchfabViewer ({ setActiveHome, activeLevel }) {
  const iframeModelTypical = useRef(null)
  const iframeModelPenthouse = useRef(null)
  const iframeModelTH1 = useRef(null)
  const iframeModelTH2 = useRef(null)
  const iframeModelTH3 = useRef(null)
  const [ allModelsLoaded, setAllModelsLoaded ] = useState(false)
  const [ viewerInstances, setViewerInstances ] = useState({
    typical : { api : null, annotations : null },
    penthouse : { api : null, annotations : null },
    townhome_level_1 : { api : null, annotations : null },
    townhome_level_2 : { api : null, annotations : null },
    townhome_level_3 : { api : null, annotations : null }
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
      const [ unitNumber, planType ] = annotation.name.split(' - ')
      const formattedPlanType = unitNumber.substring(0,2) === '26' ? `S${planType}` : planType

      setTimeout( () => setActiveHome([ unitNumber, formattedPlanType ]), 250)
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
  const loadTH1Model = () => new Promise(( resolve, reject ) => {
    const client = new window.Sketchfab( iframeModelTH1.current )

    client.init( sketchfabConfig.models.townhome_level_1, {
      ...sketchfabConfig.viewerArgs,
      success : api => {
        console.log( 'Townhome Level 1 model loaded' )
        resolve(api)
      },
      error : () => {
        console.error( 'Townhome Level 1 model error' )
        reject('Townhome Level 1 model error')
      }
    })
  })

  //
  const loadTH2Model = () => new Promise(( resolve, reject ) => {
    const client = new window.Sketchfab( iframeModelTH2.current )

    client.init( sketchfabConfig.models.townhome_level_2, {
      ...sketchfabConfig.viewerArgs,
      success : api => {
        console.log( 'Townhome Level 2 model loaded' )
        resolve(api)
      },
      error : () => {
        console.error( 'Townhome Level 2 model error' )
        reject('Townhome Level 2 model error')
      }
    })
  })

  //
  const loadTH3Model = () => new Promise(( resolve, reject ) => {
    const client = new window.Sketchfab( iframeModelTH3.current )

    client.init( sketchfabConfig.models.townhome_level_3, {
      ...sketchfabConfig.viewerArgs,
      success : api => {
        console.log( 'Townhome Level 2 model loaded' )
        resolve(api)
      },
      error : () => {
        console.error( 'Townhome Level 3 model error' )
        reject('Townhome Level 3 model error')
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
      },
      townhome_level_1 : {
        api : await loadTH1Model(),
        annotations : null
      },
      townhome_level_2 : {
        api : await loadTH2Model(),
        annotations : null
      },
      townhome_level_3 : {
        api : await loadTH3Model(),
        annotations : null
      }
    })
  }

  //
  useEffect( () => {
    if ( activeModel ) {
      console.log('registering annotation events');
      viewerInstances[activeModel].api.addEventListener( 'annotationSelect', onAnnotationSelect )
    }

    return () => {
      if ( activeModel ) {
        console.log('deregistering annotation events');
        viewerInstances[activeModel].api.removeEventListener( 'annotationSelect', onAnnotationSelect )
      }
    }
  }, [ activeModel ])

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
    const isTownhome1 = activeLevel === 0
    const isTownhome2 = activeLevel === 1
    const isTownhome3 = activeLevel === 2

    if ( isPenthouseLevel && activeModel !== 'penthouse' ) {
      console.log('setting active model to penthouse');
      setActiveModel('penthouse')
    }

    if ( isTypicalLevel && activeModel !== 'typical' ) {
      console.log('setting active model to typical');
      setActiveModel('typical')
    }

    if ( isTownhome1 && activeModel !== 'townhome_level_1' ) {
      console.log('setting active model to townhome_level_1');
      setActiveModel('townhome_level_1')
    }

    if ( isTownhome2 && activeModel !== 'townhome_level_2' ) {
      console.log('setting active model to townhome_level_2');
      setActiveModel('townhome_level_2')
    }

    if ( isTownhome3 && activeModel !== 'townhome_level_3' ) {
      console.log('setting active model to townhome_level_3');
      setActiveModel('townhome_level_3')
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
    const isTH1FullyLoaded = viewerInstances.townhome_level_1.annotations && viewerInstances.townhome_level_1.annotations
    const isTH2FullyLoaded = viewerInstances.townhome_level_2.annotations && viewerInstances.townhome_level_2.annotations
    const isTH3FullyLoaded = viewerInstances.townhome_level_3.annotations && viewerInstances.townhome_level_3.annotations

    if ( viewerInstances.typical.api && !viewerInstances.typical.annotations ) {
      console.log('load typical annotations');
      initModel('typical', viewerInstances.typical)
    }

    if ( isTypicalFullyLoaded && viewerInstances.penthouse.api && !viewerInstances.penthouse.annotations ) {
      console.log('load penthouse annotations');
      initModel('penthouse', viewerInstances.penthouse)
    }

    if ( isPenthouseFullyLoaded && viewerInstances.townhome_level_1.api && !viewerInstances.townhome_level_1.annotations ) {
      console.log('load TH1 annotations');
      initModel('townhome_level_1', viewerInstances.townhome_level_1)
    }

    if ( isTH1FullyLoaded && viewerInstances.townhome_level_2.api && !viewerInstances.townhome_level_2.annotations ) {
      console.log('load TH2 annotations');
      initModel('townhome_level_2', viewerInstances.townhome_level_2)
    }

    if ( isTH2FullyLoaded && viewerInstances.townhome_level_3.api && !viewerInstances.townhome_level_3.annotations ) {
      console.log('load TH3 annotations');
      initModel('townhome_level_3', viewerInstances.townhome_level_3)
    }

    if ( isTypicalFullyLoaded && isPenthouseFullyLoaded && isTH1FullyLoaded && isTH2FullyLoaded && isTH3FullyLoaded ) {
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
      <iframe className="model--th-lvl-1" data-active={ activeModel === 'townhome_level_1' } ref={ iframeModelTH1 }></iframe>
      <iframe className="model--th-lvl-2" data-active={ activeModel === 'townhome_level_2' } ref={ iframeModelTH2 }></iframe>
      <iframe className="model--th-lvl-3" data-active={ activeModel === 'townhome_level_3' } ref={ iframeModelTH3 }></iframe>
    </div>
  )
}
