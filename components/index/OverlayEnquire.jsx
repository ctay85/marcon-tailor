// Dependencies
import { useSelector } from 'react-redux'

//
import { Overlay } from 'components/index'
import { RegisterSalesforce, RegisterLasso } from 'components/common'

//
export default function OverlayInteriors(props) {
	const { locale } = useSelector(state => state)

	//
	return (
		<Overlay {...props}>
			<article className="enquire">
				<div className="wrap">
					<p className="enquire__title">{locale.overlays.enquire.title}</p>

					<p>Sales Gallery – Available by Appointment.</p>

					<p>
						{locale.overlays.enquire.bookTitle}
						<br />
						{locale.overlays.enquire.t}: <a href="tel:6042991001">604.299.1001</a>
						<br />
						{locale.overlays.enquire.e}: <a href="mailto:sales@tailorbymarcon.ca">Sales@TailorbyMarcon.ca</a>
					</p>

					<img src={`${process.env.BASE_PATH}/svg/Tailor_Map_Neighbourhood_v1.svg`} />
				</div>

				{/* <RegisterSalesforce reversed={true} /> */}
				<RegisterLasso />
			</article>
		</Overlay>
	)
}
