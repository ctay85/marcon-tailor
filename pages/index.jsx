
// Dependencies
import { Seo } from 'components/common'

// Components
import { Cover, Gallery, Register } from 'components/index'

// Component
const Index = () => (
	<main className="page__index">
		<Seo />
		<Cover />
		<Gallery />
		<Register />
	</main>
)

// Export
export default Index
