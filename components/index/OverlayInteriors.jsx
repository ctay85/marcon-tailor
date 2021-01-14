
//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <OverlayGallery images={[
        { file : `/img/design/interiors/3_200619-152_2400x1599.jpg`, caption : '1 Bedroom', blurb : 'Kitchen' },
        { file : `/img/design/interiors/Tailor-1-bedroom-bath-2400x3295.jpg`, caption : '1 Bedroom', blurb : 'Bathroom' },
        { file : `/img/design/interiors/Tailor-1-bedroom-bedroom-2400x1617.jpg`, caption : '1 Bedroom', blurb : 'Bedroom' },
        { file : `/img/design/interiors/Tailor-1-bedroom-kitchen-02-2400x2917.jpg`, caption : '1 Bedroom', blurb : 'Kitchen' },
        { file : `/img/design/interiors/Tailor-1-bedroom-kitchen-2400x1586.jpg`, caption : '1 Bedroom', blurb : 'Kitchen' },
        { file : `/img/design/interiors/Tailor-2-bedroom-bath-2400x3572.jpg`, caption : '2 Bedroom', blurb : 'Bathroom' },
        { file : `/img/design/interiors/Tailor-2-bedroom-bedroom-5000x3626.jpg`, caption : '2 Bedroom', blurb : 'Bedroom' },
        { file : `/img/design/interiors/Tailor-2-bedroom-living-02-2400x2476.jpg`, caption : '2 Bedroom', blurb : 'Living Room' },
        { file : `/img/design/interiors/Tailor-2-bedroom-living-5000x3626.jpg`, caption : '2 Bedroom', blurb : 'Living Room' },
        { file : `/img/design/interiors/Tailor-2-bedroom-living-kitchen-1920x1279.jpg`, caption : '2 Bedroom', blurb : 'Kitchen' }
      ]} />
    </Overlay>
  )
}
