
// Dependencies
import { useSelector } from 'react-redux'

// Components
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

// Component
export default function OverlayDesign (props) {
  const { locale } = useSelector( state => state )

  //
  return (
    <Overlay {...props}>
      <OverlayGallery images={ locale.overlays.design.images.map( image => ({ ...image, file : `${process.env.BASE_PATH}${image.file}` }) )} />
    </Overlay>
  )
}
