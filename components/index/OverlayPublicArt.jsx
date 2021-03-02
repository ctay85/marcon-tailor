
// Dependencies
import { useSelector } from 'react-redux'

// Components
import { Overlay, OverlayContent, OverlayImage } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

// Component
export default function OverlayPublicArt (props) {
  const { locale } = useSelector( state => state )

  //
  return (
    <Overlay {...props}>
      <OverlayContent category="Public Art" title="More Function">
        <div dangerouslySetInnerHTML={{ __html : locale.overlays.publicArt.copy }}></div>
      </OverlayContent>

      <OverlayImage images={[
        `${process.env.BASE_PATH}/img/index/BTB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg`,
        `${process.env.BASE_PATH}/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg`
      ]} />
    </Overlay>
  )
}
