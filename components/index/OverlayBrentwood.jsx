
//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <div className="brentwood">
        <img src={`${process.env.BASE_PATH}/img/index/Tailor-map_2500w_v1.jpg`} />
      </div>
    </Overlay>
  )
}
