
// Dependencies
import { useEffect } from 'react'

// Classes
import Reveal from 'classes/Reveal'

// Components
import { Seo, RegisterSalesforce } from 'components/common'
import { Architecture, WindVeil, Interiors } from 'components/design'

// Component
const Design = () => {

	//
	useEffect( () => {
		const elements = [...document.querySelectorAll('[data-reveal="hidden"]')]
		const reveal = new Reveal({ elements })
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
