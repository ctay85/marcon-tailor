
//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayDesign (props) {
  return (
    <Overlay {...props}>
      <OverlayGallery images={[
        { file : `${process.env.BASE_PATH}/img/index/design/B&TB_MARCON_TAILOR_DUSK_UP_FINAL_2400x3199.jpg`, caption : 'Southwest View — Tower', blurb : 'Tailor sits at the corner of Alpha and Alaska' },
        { file : `${process.env.BASE_PATH}/img/index/design/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg`, caption : 'West View — Lobby', blurb : 'The residential lobby fronts Alpha St.' },
        { file : `${process.env.BASE_PATH}/img/index/design/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL_2400x2400.jpg`, caption : 'Northwest View — Lobby', blurb : 'Expansive glazing welcomes sun from the south' },
        { file : `${process.env.BASE_PATH}/img/index/design/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg`, caption : 'North View — Lobby', blurb : 'Public art as seen from Alaska St.' },
        { file : `${process.env.BASE_PATH}/img/index/design/B&TB_MARCON_TAILOR_OUTDOOR_AMENITY_FINAL_2400x2400.jpg`, caption : 'East View — Landscape', blurb : 'Extensive landscaping by PWL Partnership defines the back yard' },
        { file : `${process.env.BASE_PATH}/img/index/design/B&TB_MARCON_TAILOR_STREET_VIEW_FINAL_2400x1357.jpg`, caption : 'North View — Townhomes', blurb : 'Contemporary townhomes front Alaska St. at the South End' }
      ]} />
    </Overlay>
  )
}
