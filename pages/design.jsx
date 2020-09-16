
// Dependencies
import { useEffect } from 'react'

// Classes
import Reveal from 'classes/Reveal'

// Components
import { Seo, Register } from 'components/common'
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
			<Seo title="Design" />
			<Architecture />
			<WindVeil />
			<Interiors />
			<Register />
		</main>
	)
}

// Export
export default Design
