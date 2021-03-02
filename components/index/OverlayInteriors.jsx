
// Dependencies
import { useSelector } from 'react-redux'

// Components
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  const { locale } = useSelector( state => state )

  //
  return (
    <Overlay {...props}>
      <OverlayGallery images={ locale.overlays.interiors.images.map( image => ({ ...image, file : `${process.env.BASE_PATH}${image.file}` }) )} />
    </Overlay>
  )
}
