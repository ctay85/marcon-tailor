// Dependencies
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

// Store
import { uiUpdateNavOpen } from 'store/actions'

//
const nav = [
	{ label: 'Home', cls: 'page__index__cover' },
	{ label: 'Architecture', cls: 'page__index__design' },
	{ label: 'Interiors', cls: 'page__index__interiors' },
	{ label: 'Floorplans', cls: 'page__index__homes' },
	{ label: 'Public Art', cls: 'page__index__public-art' },
	{ label: 'Brentwood', cls: 'page__index__brentwood' },
	{ label: 'Sign Up' }
]

//
const parentVariants = {
	hidden: { opacity: 0, transition: { delay: 0.1 }, transitionEnd: { display: 'none' } },
	visible: { opacity: 1, display: 'flex', transition: { staggerChildren: 0.06 } }
}

const childVariants = {
	hidden: { y: '100%', transition: { duration: 0.4, ease: [0, 0.5, 0, 1] } },
	visible: { y: 0, transition: { duration: 0.4, ease: [0, 0.5, 0, 1] } }
}

// Component
export default function Nav({ setActivePanelClass, activePanelClass }) {
	const dispatch = useDispatch()
	const { navOpen } = useSelector(state => state.ui)

	//
	const changeActivePanel = cls => {
		if (cls) {
			setActivePanelClass(cls)
		} else {
			document.querySelector('.btn__enquire .btn__toggle').click()
		}

		dispatch(uiUpdateNavOpen(false))
	}

	//
	return (
		<motion.section
			className="global__nav"
			animate={navOpen ? 'visible' : 'hidden'}
			initial="hidden"
			variants={parentVariants}
		>
			<nav>
				{nav.map(({ label, cls }, i) => (
					<button key={i} data-active={activePanelClass === cls} onClick={() => changeActivePanel(cls)}>
						<motion.span variants={childVariants}>{label}</motion.span>
					</button>
				))}

				<a href="mailto:sales@tailorbymarcon.ca" target="_blank">
					<motion.span variants={childVariants}>Book Appointment</motion.span>
				</a>
			</nav>
		</motion.section>
	)
}
