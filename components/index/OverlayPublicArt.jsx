
//
import { Overlay, OverlayContent, OverlayImage } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayPublicArt (props) {
  return (
    <Overlay {...props}>
      <OverlayContent category="Public Art" title="More Function">
        <p>
          Wind Veil<br />
          Catherine Widgery<br />
          2019
        </p>

        <p>Wind Veil brings to our attention the universal patterns that surround us; how light and wind interact constantly with surfaces and animate our world with a delicate wonder.</p>

        <p>Projected color, reflected glints of light and shadows all are part of the ‘veil’ through which the surface of the glass is seen so a subtle and delicate dance of light and wind plays each day.</p>

        <p>Crucial to the concept is to have an ever changing experience inside and outside the building both during the day and night. Depending on the angles of the sunlight or artificial lights and the position of the viewer, the sky is reflected in the areas of the glass that are not laser etched.</p>

        <p>It was transformed from video footage of the moving surface of water where lights were reflected. The focus was changed so that the digital translation is one of perfect overlapping circles of different densities. It is similar to what we see if we half close our eyes.</p>

        <p>Our mind makes sense of this very abstract pattern because it has registered this arrangement of light points unconsciously over countless times of seeing light on water. Yet this image also refers to a universal visual language of the natural world that suggests different things to different people.</p>

        <h3>Widgery Studio</h3>

        <p>Catherine Widgery and her team have created more than 40 site-specific public art projects across the US and Canada. Her particular interest and strength is working with communities and teams to create environmental sculptural experiences that respond to the unique spirit, shape and function of a place. Wind, light, water and computer-controlled lighting programs communicate energy and animate the space within her environmental works.</p>
      </OverlayContent>

      <OverlayImage images={[
        "/img/index/BTB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg",
        "/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg"
      ]} />
    </Overlay>
  )
}
