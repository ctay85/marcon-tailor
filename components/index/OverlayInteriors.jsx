
//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <OverlayGallery images={[
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-291.jpg`, caption : '2 Bedroom', blurb : 'Kitchen' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/Tailor-Web-7.jpg`, caption : '2 Bedroom', blurb : 'Living' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-248.jpg`, caption : '2 Bedroom', blurb : 'Living' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-419.jpg`, caption : '2 Bedroom', blurb : 'Kitchen' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/3_200619-152_3600x2399.jpg`, caption : '1 Bedroom', blurb : 'Living' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-088.jpg`, caption : '1 Bedroom', blurb : 'Kitchen' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-210.jpg`, caption : '1 Bedroom', blurb : 'Bathroom' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/Tailor-Web-18.jpg`, caption : '1 Bedroom', blurb : 'Bedroom' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/Tailor-Web-22.jpg`, caption : '2 Bedroom', blurb : 'Bedroom' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-377.jpg`, caption : '2 Bedroom', blurb : 'Bedroom' },
      ]} />
    </Overlay>
  )
}
