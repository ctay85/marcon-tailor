// Dependencies
import { useSelector } from 'react-redux'

// Components
import { Overlay, OverlayGallery } from 'components/index'

// Component
export default function OverlayDesign(props) {
	const { locale } = useSelector(state => state)

	//
	return (
		<Overlay {...props}>
			<OverlayGallery
				active={props.active}
				images={locale.overlays.design.images.map(image => ({
					...image,
					file: `${process.env.BASE_PATH}${image.file}`
				}))}
			/>
		</Overlay>
	)
}
