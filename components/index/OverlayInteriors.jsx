
//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <OverlayGallery images={[
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-291.jpg`, caption : '2 Bedroom', blurb : 'Contemporary light filled interiors with wide-plank laminate hardwood flooring.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/Tailor-Web-7.jpg`, caption : '2 Bedroom', blurb : 'Airy 9\' ceilings with high efficiency heating and air conditioning system.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-248.jpg`, caption : '2 Bedroom', blurb : 'Smart glass LowE2 panoramic windows welcome an abundance of natural light and fresh air.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-419.jpg`, caption : '2 Bedroom', blurb : 'Premium Bosch stainless-steel appliances.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/3_200619-152_3600x2399.jpg`, caption : '1 Bedroom', blurb : 'Cabinetry doors complete with soft close hardware and full-height pantries for added storage.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-088.jpg`, caption : '1 Bedroom', blurb : 'Solid quartz countertops in ‘Yixin White’ and statuario marble hexagon mosaic honed tile backsplash.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-210.jpg`, caption : '1 Bedroom', blurb : 'Floating vanity with under-cabinet motion sensor lighting complete with soft close hardware.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/Tailor-Web-18.jpg`, caption : '1 Bedroom', blurb : 'Spacious master bedrooms for ultimate relaxation.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/Tailor-Web-22.jpg`, caption : '2 Bedroom', blurb : '4" flat stock baseboards and 2.5" flat stock door trim.' },
        { file : `${process.env.BASE_PATH}/img/index/interiors/200619-377.jpg`, caption : '2 Bedroom', blurb : 'Abundance of closet space.' },
      ]} />
    </Overlay>
  )
}
