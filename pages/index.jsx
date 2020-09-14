
// Components
import { Seo, Register } from 'components/common'
import { Cover, Gallery } from 'components/index'

// Component
const Index = () => (
	<main className="page__index">
		<Seo />
		<Cover />
		<Gallery />
		<Register reversed={ true } />
	</main>
)

// Export
export default Index
