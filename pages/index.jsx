
// Dependencies
import { useEffect } from 'react'

// Classes
import Reveal from 'classes/Reveal'

// Components
import { Seo, Register } from 'components/common'
import { Intro, Cover, Gallery } from 'components/index'

// Component
const Index = () => {

	//
	useEffect( () => {
		const elements = [...document.querySelectorAll('[data-reveal="hidden"]')]
		const reveal = new Reveal({ elements })
		return () => reveal.destroy()
	}, [])

	//
	return (
		<main className="page__index">
			<Seo title="Made For Brentwood" />
			<Intro />
			<Cover />
			<Gallery />
			<Register reversed={ true } />
		</main>
	)
}

// Export
export default Index
