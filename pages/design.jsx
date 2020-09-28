
// Dependencies
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'

// Classes
import Reveal from 'classes/Reveal'

// Components
import { Seo, RegisterSalesforce } from 'components/common'
import { Architecture, WindVeil, Interiors } from 'components/design'

// Component
const Design = () => {
	const router = useRouter()

	//
	useEffect( () => {
		const elements = [...document.querySelectorAll('[data-reveal="hidden"]')]
		const reveal = new Reveal({ elements })
		const ScrollToPlugin = require('gsap/ScrollToPlugin')

		//
    gsap.registerPlugin(ScrollToPlugin);

		//
		if ( router.query.anchor ) {
			setTimeout( () => {
				gsap.to( window, { duration : 1, scrollTo : `#${router.query.anchor}`, ease : 'power2' })
			}, 500)
		}

		return () => reveal.destroy()
	}, [])

	//
	return (
		<main className="page__design">
			<Seo title="Design" description="Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base." />
			<Architecture />
			<WindVeil />
			<Interiors />
			<RegisterSalesforce />
		</main>
	)
}

// Export
export default Design
