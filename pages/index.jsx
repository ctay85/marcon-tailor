// Dependencies
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

// Components
import {
	Intro,
	Cover,
	Design,
	Homes,
	Interiors,
	PublicArt,
	Brentwood,
	OverlayDesign,
	OverlayInteriors,
	OverlayPublicArt,
	OverlayHomes,
	OverlayBrentwood,
	OverlayEnquire,
	OverlayHome
} from 'components/index'
import { Seo, Nav } from 'components/common'

// Store
import {
	INDEX_OVERLAY_KEY_DESIGN,
	INDEX_OVERLAY_KEY_INTERIORS,
	INDEX_OVERLAY_KEY_PUBLICART,
	INDEX_OVERLAY_KEY_HOMES,
	INDEX_OVERLAY_KEY_HOME,
	INDEX_OVERLAY_KEY_BRENTWOOD,
	INDEX_OVERLAY_KEY_ENQUIRE,
	UI_HEADER_THEME_WHITE
} from 'store/constants'
import { uiUpdateHeaderTheme } from 'store/actions'

// Component
export default function Index() {
	const dispatch = useDispatch()
	const config = useRef({ wheelDelta: 90, touchDelta: 30, transitionDuration: 1000 })
	const { ui, locale } = useSelector(state => state)
	const [isAnimating, setIsAnimating] = useState(false)
	const [lastPanelActive, setLastPanelActive] = useState(false)
	const [activePanelClass, setActivePanelClass] = useState('page__index__cover')
	const [activeOverlayKey, setActiveOverlayKey] = useState(null)
	const [isEnquireOpen, setIsEnquireOpen] = useState(false)
	const [activeHome, setActiveHome] = useState(null)
	const [showPopup, setShowPopup] = useState(false)

	//
	const blockExecution = () => {
		if (isAnimating) return false
		setIsAnimating(true)
		setTimeout(() => setIsAnimating(false), config.current.transitionDuration)
	}

	//
	const changePanel = direction => {
		if (
			isAnimating ||
			activeOverlayKey !== null ||
			(activePanelClass === 'page__index__cover' && direction === 'up')
		)
			return false
		window.scrollTo(0, 0)

		const activePanel = document.querySelector(`.${activePanelClass}`)
		const nextPanel = direction === 'down' ? activePanel.nextElementSibling : activePanel.previousElementSibling

		if (nextPanel) {
			setActivePanelClass(nextPanel.className)
		}
	}

	//
	const isLastPanel = () => {
		const lastPanel = document.querySelector('.page__index__brentwood[data-active="true"]')

		if (lastPanel) {
			setTimeout(() => document.documentElement.classList.remove('no-scroll'), config.current.transitionDuration)
		} else {
			document.documentElement.classList.add('no-scroll')
		}
	}

	//
	const closeOverlay = () => setActiveOverlayKey(null)

	//
	const reset = () => setActivePanelClass('page__index__cover')

	//
	const changePanelFromHash = () => {
		let newPanelClass

		switch (location.hash) {
			case '#architecture':
				newPanelClass = 'page__index__design'
				break
			case '#interiors':
				newPanelClass = 'page__index__interiors'
				break
			case '#floorplans':
				newPanelClass = 'page__index__homes'
				break
			case '#public-art':
				newPanelClass = 'page__index__public-art'
				break
			case '#brentwood':
				newPanelClass = 'page__index__brentwood'
				break
			default:
				newPanelClass = null
		}

		if (newPanelClass) {
			setActivePanelClass(newPanelClass)
		}
	}

	//
	useEffect(() => {
		setTimeout(() => setShowPopup(true), 4000)
	}, [])

	//
	useEffect(() => {
		let newTheme

		switch (activePanelClass) {
			case 'page__index__cover':
			case 'page__index__homes':
			case 'page__index__interiors':
			case 'page__index__public-art':
			case 'page__index__brentwood':
			case 'page__index__design':
				newTheme = UI_HEADER_THEME_WHITE
				break
		}

		dispatch(uiUpdateHeaderTheme(newTheme))
	}, [activePanelClass])

	//
	useEffect(() => {
		//
		const onResize = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
		onResize()

		//
		const onScroll = () => {
			if (!lastPanelActive) window.scrollTo(0, 0)
		}

		//
		let touchYStart = 0
		const onTouchStart = e => (touchYStart = e.changedTouches[0].clientY)
		const onTouchEnd = e => {
			const touchYEnd = e.changedTouches[0].clientY
			const direction = touchYEnd < touchYStart ? 'down' : 'up'
			const distance = direction === 'down' ? touchYStart - touchYEnd : touchYEnd - touchYStart

			if (distance > config.current.wheelDelta) {
				blockExecution()
				changePanel(direction)
				isLastPanel()
			}
		}

		//
		const onMouseWheel = e => {
			const isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
			const delta = isTouchPad ? config.current.touchDelta : config.current.wheelDelta
			const direction = e.deltaY > 0 ? 'down' : 'up'

			if (Math.abs(e.deltaY) > delta) {
				blockExecution()
				changePanel(direction)
				isLastPanel()
			}
		}

		//
		window.addEventListener('touchstart', onTouchStart)
		window.addEventListener('touchend', onTouchEnd)
		window.addEventListener('mousewheel', onMouseWheel)
		window.addEventListener('resize', onResize)

		//
		return () => {
			window.removeEventListener('touchstart', onTouchStart)
			window.removeEventListener('touchend', onTouchEnd)
			window.removeEventListener('mousewheel', onMouseWheel)
			window.removeEventListener('resize', onResize)
		}
	}, [isAnimating, activePanelClass, activeOverlayKey])

	//
	useEffect(() => {
		if (activeHome) {
			setActiveOverlayKey(INDEX_OVERLAY_KEY_HOME)
		}
	}, [activeHome])

	//
	useEffect(() => {
		window.scrollTo(0, 0)
		document.documentElement.classList.add('no-scroll')

		//
		if (location.hash) {
			changePanelFromHash()
		}

		//
		return () => document.documentElement.classList.remove('no-scroll')
	}, [])

	//
	return (
		<>
			<Seo
				title="Made For Brentwood"
				description="The homes at Tailor offer more than Brentwood has ever seen, built for life by Marcon."
			/>

			<main className="page__index">
				<Intro />
				<Cover active={activePanelClass} />
				<Design active={activePanelClass} setActiveOverlayKey={setActiveOverlayKey} />
				<Interiors active={activePanelClass} setActiveOverlayKey={setActiveOverlayKey} />
				<Homes active={activePanelClass} setActivePanelClass={setActivePanelClass} setActiveHome={setActiveHome} />
				<PublicArt active={activePanelClass} setActiveOverlayKey={setActiveOverlayKey} />
				<Brentwood active={activePanelClass} setActiveOverlayKey={setActiveOverlayKey} />
			</main>

			<OverlayDesign active={activeOverlayKey === INDEX_OVERLAY_KEY_DESIGN} fnClose={closeOverlay} />
			<OverlayInteriors active={activeOverlayKey === INDEX_OVERLAY_KEY_INTERIORS} fnClose={closeOverlay} />
			<OverlayPublicArt active={activeOverlayKey === INDEX_OVERLAY_KEY_PUBLICART} fnClose={closeOverlay} />
			<OverlayHomes active={activeOverlayKey === INDEX_OVERLAY_KEY_HOMES} fnClose={closeOverlay} />
			<OverlayBrentwood active={activeOverlayKey === INDEX_OVERLAY_KEY_BRENTWOOD} fnClose={closeOverlay} />
			<OverlayEnquire active={activeOverlayKey === INDEX_OVERLAY_KEY_ENQUIRE} fnClose={closeOverlay} />
			<OverlayHome
				active={activeOverlayKey === INDEX_OVERLAY_KEY_HOME}
				fnClose={closeOverlay}
				activeHome={activeHome}
			/>

			<Nav setActivePanelClass={setActivePanelClass} activePanelClass={activePanelClass} />

			<div className="page__index__global-actions" data-theme={ui.headerTheme}>
				<div className="btn__enquire" data-open={isEnquireOpen}>
					<button className="btn__toggle" onClick={() => setActiveOverlayKey(INDEX_OVERLAY_KEY_ENQUIRE)}>
						<span>Sign Up</span>
					</button>
				</div>
			</div>

			<motion.div
				className="page__index__popup"
				initial="hidden"
				animate={showPopup ? 'visible' : 'hidden'}
				variants={{
					hidden: { opacity: 0, transitionEnd: { display: 'none' } },
					visible: { opacity: 1, display: 'flex' }
				}}
			>
				<div className="content">
					<button className="btn__close" onClick={() => setShowPopup(false)}>
						<span className="material-icons">close</span>
					</button>

					<span className="title">
						5% Purchaser Incentive
						<br />
						8% Total Deposit
					</span>

					<p>With tower homes sold out, only a curated selection of Penthouse Residences and Townhomes remain.</p>

					<p>
						For a limited time, you can secure a coveted home at Tailor with a 5% purchaser incentive and 8% total
						deposit.
					</p>

					<p>
						Connect with one of our in-house
						<br /> Marcon Advisors to learn more!
					</p>

					<button className="btn btn--solid" onClick={() => setActiveOverlayKey(INDEX_OVERLAY_KEY_ENQUIRE)}><span>Register Today</span></button>
				</div>
			</motion.div>
		</>
	)
}
