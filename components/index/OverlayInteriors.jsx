
//
import { Overlay, OverlayContent, OverlayImage } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <OverlayContent category="Interiors" title="More Space.">
        <Accordion>
          <AccordionItem title="Homes">
            <p>Contemporary light filled interiors</p>
            <p>High efficiency heating and air conditioning system for year-round comfort</p>
            <p>Airy 9&apos; ceilings</p>
            <p>Two contemporary colour palettes to choose from</p>
            <p>Stacked front-loading Blomberg washer and dryer</p>
            <p>Smart glass LowE2 panoramic windows welcome an abundance of natural light and fresh air</p>
            <p>Spacious master bedrooms for ultimate relaxation (room for king beds in most)</p>
            <p>Wide-plank laminate hardwood flooring either in Dahlia or Noah</p>
            <p>Sleek roller shades on all windows</p>
            <p>4&quot; flat stock baseboards and 2.5&quot; flat stock door trim</p>
          </AccordionItem>
          <AccordionItem title="Kitchens">
            <p>Contemporary light filled interiors</p>
            <p>High efficiency heating and air conditioning system for year-round comfort</p>
            <p>Airy 9&apos; ceilings</p>
            <p>Two contemporary colour palettes to choose from</p>
            <p>Stacked front-loading Blomberg washer and dryer</p>
            <p>Smart glass LowE2 panoramic windows welcome an abundance of natural light and fresh air</p>
            <p>Spacious master bedrooms for ultimate relaxation (room for king beds in most)</p>
            <p>Wide-plank laminate hardwood flooring either in Dahlia or Noah</p>
            <p>Sleek roller shades on all windows</p>
            <p>4&quot; flat stock baseboards and 2.5&quot; flat stock door trim</p>
          </AccordionItem>
          <AccordionItem title="Ensuite and Main Bath">
            <p>Contemporary light filled interiors</p>
            <p>High efficiency heating and air conditioning system for year-round comfort</p>
            <p>Airy 9&apos; ceilings</p>
            <p>Two contemporary colour palettes to choose from</p>
            <p>Stacked front-loading Blomberg washer and dryer</p>
            <p>Smart glass LowE2 panoramic windows welcome an abundance of natural light and fresh air</p>
            <p>Spacious master bedrooms for ultimate relaxation (room for king beds in most)</p>
            <p>Wide-plank laminate hardwood flooring either in Dahlia or Noah</p>
            <p>Sleek roller shades on all windows</p>
            <p>4&quot; flat stock baseboards and 2.5&quot; flat stock door trim</p>
          </AccordionItem>
        </Accordion>
      </OverlayContent>

      <OverlayImage images={[
        "/img/index/Tailor-1-bedroom-kitchen-02-3600x4376.jpg",
        "/img/index/Tailor-1-bedroom-kitchen-02-3600x4376.jpg",
        "/img/index/Tailor-1-bedroom-kitchen-02-3600x4376.jpg"
      ]} />
    </Overlay>
  )
}
