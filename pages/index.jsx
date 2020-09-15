
// Components
import { Seo, Register } from 'components/common'
import { Intro, Cover, Gallery } from 'components/index'

// Component
const Index = () => (
	<main className="page__index">
		<Seo />
		<Intro />
		<Cover />
		<Gallery />
		<Register reversed={ true } />
	</main>
)

// Export
export default Index
