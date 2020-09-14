
// Components
import { Seo, Register } from 'components/common'
import { Architecture, WindVeil, Interiors } from 'components/design'

// Component
const Design = () => (
	<main className="page__design">
		<Seo title="Design" />
		<Architecture />
		<WindVeil />
		<Interiors />
		<Register />
	</main>
)

// Export
export default Design
