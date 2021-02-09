
// Dependencies
import SVG from 'react-inlinesvg'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { uiUpdateHeaderTheme } from 'store/actions'
import { UI_HEADER_THEME_BLUE } from 'store/constants'

// Components
import { Seo } from 'components/common'

//
const homes = [
  {
    name : 'A',
    type : '1 Bedroom + 1 Bath',
    image : '/svg/plans/A.svg',
    pdf : 'Tailor_Floorplans_Sheets_A.pdf',
    area : {
      total : 670,
      interior : 538,
      outdoor : 132
    }
  },
  {
    name : 'A1',
    type : '1 Bedroom + 1 Bath',
    image : '/svg/plans/A1.svg',
    pdf : 'Tailor_Floorplans_Sheets_A1.pdf',
    area : {
      total : 659,
      interior : 538,
      outdoor : 121
    }
  },
  {
    name : 'B',
    type : '1 Bedroom + 1 Bath',
    image : '/svg/plans/B.svg',
    pdf : 'Tailor_Floorplans_Sheets_B.pdf',
    area : {
      total : 723,
      interior : 646,
      outdoor : 77
    }
  },
  {
    name : 'C',
    type : '2 Bedroom + 2 Bath',
    image : '/svg/plans/C.svg',
    pdf : 'Tailor_Floorplans_Sheets_C.pdf',
    area : {
      total : 991,
      interior : 764,
      outdoor : 227
    }
  },
  {
    name : 'C1',
    type : '2 Bedroom + 2 Bath',
    image : '/svg/plans/C1.svg',
    pdf : 'Tailor_Floorplans_Sheets_C1.pdf',
    area : {
      total : 960,
      interior : 786,
      outdoor : 174
    }
  },
  {
    name : 'D',
    type : '2 Bedroom + 2 Bath',
    image : '/svg/plans/D1.svg',
    pdf : 'Tailor_Floorplans_Sheets_D.pdf',
    area : {
      total : 1116,
      interior : 893,
      outdoor : 223
    }
  },
  {
    name : 'D1',
    type : '2 Bedroom + 2 Bath',
    image : '/svg/plans/D1.svg',
    pdf : 'Tailor_Floorplans_Sheets_D1.pdf',
    area : {
      interior : 893,
      outdoor : 223,
      total : 1116
    }
  },
  {
    name : 'E',
    type : 'Jr 1 Bedroom + 1 Bath',
    image : '/svg/plans/E.svg',
    pdf : 'Tailor_Floorplans_Sheets_E.pdf',
    area : {
      interior : 484,
      outdoor : 156,
      total : 640
    }
  },
  {
    name : 'F',
    type : 'Studio + 1 Bath',
    image : '/svg/plans/F.svg',
    pdf : 'Tailor_Floorplans_Sheets_F.pdf',
    area : {
      interior : 366,
      outdoor : 163,
      total : 529
    }
  },
  {
    name : 'TH1',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    image : '/svg/plans/TH1.svg',
    pdf : 'Tailor_Floorplans_Sheets_TH1.pdf',
    area : {
      interior : 1701,
      outdoor : 677,
      total : 2378
    }
  },
  {
    name : 'TH2',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    image : '/svg/plans/TH2.svg',
    pdf : 'Tailor_Floorplans_Sheets_TH2.pdf',
    area : {
      interior : 1679,
      outdoor : 673,
      total : 2352
    }
  },
  {
    name : 'TH3/4',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    image : '/svg/plans/TH34.svg',
    pdf : 'Tailor_Floorplans_Sheets_TH3-4.pdf',
    area : {
      interior : 1679,
      outdoor : 673,
      total : 2352
    }
  },
  {
    name : 'TH5',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    image : '/svg/plans/TH5.svg',
    pdf : 'Tailor_Floorplans_Sheets_TH5.pdf',
    area : {
      interior : 1701,
      outdoor : 821,
      total : 2522
    }
  }
]

// Component
export default function Homes () {
  const dispatch = useDispatch()
  const levelLabel = useRef(null)

  //
  const onMouseEnter = e => {
    const y = e.offsetY
    const group = e.currentTarget
    const num = group.id.replace('L', '')

    levelLabel.current.innerText = `Level ${num}`
    levelLabel.current.style = `top:${y}px`
  }

  //
  const onElevationSvgLoaded = () => {
    return false
    const levelGroups = [...document.querySelectorAll('.elevation-view svg g[id^="L"]')]
    levelGroups.forEach( group => group.addEventListener('mouseenter', onMouseEnter) )
  }

  //
  useEffect( () => {
    dispatch(uiUpdateHeaderTheme(UI_HEADER_THEME_BLUE))
  }, [])

  //
  return (
    <>
      <Seo title="Homes" />

      <main className="page__homes">
        <div className="wrap--reg wrap--flex">

          <aside>
            <figure className="elevation-view">
              <SVG src="/svg/plans/Elevation-East-View.svg" onLoad={ onElevationSvgLoaded } />
              <span className="elevation-label">East Elevation</span>
              <span className="level-label" ref={ levelLabel }></span>
            </figure>

            <figure className="floor-plate">
              <SVG src="/svg/plans/Key-Plan-A.svg" />
            </figure>
          </aside>

          <div className="grid">
            {
              homes.map(( home, i ) => (
                <div className="grid__item" key={ i }>
                  <div className="unit-info">
                    <span className="unit-name">{ home.name }</span>
                    <span className="unit-type">{ home.type }</span>
                  </div>

                  <figure>
                    <img src={ home.image } />
                  </figure>

                  <div className="areas">
                    <span className="area area--total"><strong>Total Living</strong> { home.area.total } SF</span>
                    <span className="area area--interior"><strong>Interior</strong> { home.area.interior } SF</span>
                    <span className="area area--outdoor"><strong>Outdoor</strong> { home.area.outdoor } SF</span>
                  </div>

                  <a href={ `${process.env.BASE_PATH}/rel/plans/${home.pdf}` } className="btn__download btn btn--solid">Download PDF</a>
                </div>
              ))
            }
          </div>

        </div>
      </main>
    </>
  )
}
