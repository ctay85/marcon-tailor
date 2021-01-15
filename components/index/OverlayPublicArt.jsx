
//
import { Overlay, OverlayContent, OverlayImage } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayPublicArt (props) {
  return (
    <Overlay {...props}>
      <OverlayContent category="Public Art" title="More Function">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </OverlayContent>

      <OverlayImage images={[
        "/img/index/BTB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg",
        "/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg"
      ]} />
    </Overlay>
  )
}
