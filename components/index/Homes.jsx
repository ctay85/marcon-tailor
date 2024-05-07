// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SVG from 'react-inlinesvg'
import { useSelector } from 'react-redux'

// Utils
import { indexPanelAnimations } from 'utils'

//
const soldPlanTypes = ['A', 'A1', 'B', 'C', 'C1', 'D', 'D1', 'E', 'F']
const soldUnitNumbers = [
	'301',
	'307',
	'401',
	'407',
	'501',
	'507',
	'601',
	'607',
	'701',
	'706',
	'707',
	'801',
	'806',
	'807',
	'901',
	'906',
	'907',
	'1001',
	'1006',
	'1007',
	'1101',
	'1107',
	'1201',
	'1206',
	'1207',
	'1306',
	'1406',
	'1407',
	'1506',
	'1507',
	'1606',
	'1607',
	'1706',
	'1707',
	'1806',
	'1807',
	'1901',
	'1906',
	'1907',
	'2006',
	'2001',
	'2007',
	'2101',
	'2106',
	'2107',
	'2201',
	'2206',
	'2207',
	'2301',
	'2306',
	'2307',
	'2401',
	'2406',
	'2407',
	'2501',
	'2506',
	'2507'
]

// Component
export default function Homes({ active, setActiveHome, setActivePanelClass }) {
	const levelLabel = useRef(null)
	const sectionClass = useRef('page__index__homes')
	const [animationState, setAnimationState] = useState('initial')
	const [isMobile, setIsMobile] = useState(false)
	const [activeLevel, setActiveLevel] = useState(26)
	const [activePlate, setActivePlate] = useState('tower')
	const { locale } = useSelector(state => state)

	//
	const onLevelClick = ({ currentTarget: group, offsetY }) => {
		const level = parseInt(group.id.replace('L', ''))
		console.log(level)
		if (level !== 24) return

		const penthouseY = -100
		const y = level > 25 ? penthouseY : offsetY

		//
		//levelLabel.current.innerText = `Level ${level}`
		//levelLabel.current.style = `top:${y}px`

		//
		resetLevelGroups()
		group.classList.add('active')
		setActiveLevel(level)
	}

	//
	const resetLevelGroups = () => {
		const levelGroups = [...document.querySelectorAll('.elevation svg g[id^="L"]')]
		levelGroups.forEach(levelGroup => levelGroup.classList.remove('active'))
	}

	//
	const onElevationSvgLoaded = () => {
		const levelGroups = [...document.querySelectorAll('.elevation svg g[id^="L"]')]
		levelGroups.forEach(group => group.addEventListener('click', onLevelClick))
	}

	//
	const onMouseEnter = e => {
		const y = e.offsetY
		const group = e.currentTarget
		const num = group.id.replace('L', '')

		//levelLabel.current.innerText = `Level ${num}`
		//levelLabel.current.style = `top:${y}px`
	}

	//
	const incrementActiveLevel = () => {
		setActiveLevel(activeLevel === 27 ? 27 : activeLevel + 1)
	}

	//
	const deincrementActiveLevel = () => {
		setActiveLevel(activeLevel === 2 ? 2 : activeLevel - 1)
	}

	//
	const activatePenthouseLevel = level => {
		setActiveLevel(level)
		resetLevelGroups()
		document.querySelector(`.elevation svg g[id="L${level}"]`).classList.add('active')
		//levelLabel.current.style = 'top:-100px;'
	}

	const activateTownhomeLevel = level => {
		setActiveLevel(level)
		resetLevelGroups()
		//levelLabel.current.style = 'top:-100px;'
	}

	//
	const togglePenthouseNav = ({ currentTarget: button }) => {
		const parent = button.parentNode
		const isActive = parent.dataset.active === 'true'
		const notPenthouseLevel = activeLevel < 26

		if (isActive && notPenthouseLevel) {
			return parent.removeAttribute('data-active')
		}

		return parent.setAttribute('data-active', 'true')
	}

	//
	const toggleTownhomesNav = ({ currentTarget: button }) => {
		const parent = button.parentNode
		const isActive = parent.dataset.active === 'true'

		return parent.setAttribute('data-active', 'true')
	}

	//
	const isUnitSold = unitNumber => soldUnitNumbers.indexOf(unitNumber) !== -1

	//
	const isPlanTypeSold = planType => soldPlanTypes.indexOf(planType) !== -1

	//
	const onTriggerClick = ({ currentTarget: group }) => {
		const planType = group.dataset.plan
		const unitNumber = group.querySelector('text').innerHTML
		const planTypeIsSold = isPlanTypeSold(planType)
		const unitIsSold = activePlate === 'tower' //isUnitSold(unitNumber)
		console.log(unitIsSold)

		// These plans are sold so disable the click
		// If the unit it's self is sold, disable the click
		if (planTypeIsSold || unitIsSold) {
			return false
		}

		// Townhome 2/3 is combined
		const formattedUnitNumber = unitNumber === 'TH2' || unitNumber === 'TH3' ? 'TH2/3' : unitNumber

		// D plans between 3-19 should be d1
		const formattedPlanType =
			planType === 'D' && parseInt(unitNumber.substr(0, unitNumber.length - 2)) < 20
				? 'D1'
				: planType

		setActiveHome([formattedUnitNumber, formattedPlanType])
	}

	//
	const onPlateLoaded = key => {
		const svg = document.querySelector(`.plate--${key}`)
		const triggers = [...svg.querySelectorAll('g[id^=trigger]')]

		triggers.forEach(trigger => trigger.addEventListener('click', onTriggerClick))
	}

	//
	const updateSoldStatus = group => {
		const plate = document.querySelector('.plate--tower')
		const unitNumber = group.querySelector('text').innerHTML
		const unitType = [...group.querySelectorAll('g')].pop().children[0].innerHTML
		const planTypeIsSold = isPlanTypeSold(unitType)
		const unitIsSold = isUnitSold(unitNumber)
		const shapeId = group.id.replace('trigger', 'shape')

		if (unitIsSold) {
			group.classList.add('sold')
			plate.getElementById(shapeId).classList.add('sold')
		}

		if (!unitIsSold && !planTypeIsSold) {
			group.classList.remove('sold')
			plate.getElementById(shapeId).classList.remove('sold')
		}
	}

	//
	const changePlateNumbers = () => {
		const plate = document.querySelector('.plate--tower')
		if (!plate) return
		const groups = [...plate.querySelectorAll('g[id^=trigger]')]

		groups.forEach(group => {
			const unitNumber = group.querySelector('text').innerHTML
			const unitType = [...group.querySelectorAll('g')].pop().children[0].innerHTML

			group.querySelector('text').innerHTML = `${activeLevel}${unitNumber.substr(
				unitNumber.length - 2
			)}`

			if (unitType === 'D' || unitType === 'D1') {
				if (activeLevel < 20) {
					group.querySelector('g:last-child text').innerHTML = 'D1'
				} else {
					group.querySelector('g:last-child text').innerHTML = 'D'
				}
			}

			updateSoldStatus(group)
		})
	}

	//
	useEffect(() => {
		const isPenthouseLevel = activeLevel === 27
		const isSubPenthouseLevel = activeLevel === 26
		const isTowerLevel = activeLevel > 2 && activeLevel < 26
		const isTownhomeLevel = activeLevel < 3

		if (isPenthouseLevel) {
			setActivePlate('penthouse')
		} else if (isSubPenthouseLevel) {
			setActivePlate('sub-penthouse')
		} else if (isTowerLevel) {
			setActivePlate('tower')
			setTimeout(() => changePlateNumbers(), document.querySelector('.plate--tower') ? 10 : 1000)
		} else if (isTownhomeLevel) {
			setActivePlate('townhome')
		}
	}, [activeLevel])

	//
	useEffect(() => {
		const isActive = active === sectionClass.current

		if (isActive) {
			setAnimationState('enter')
		}

		if (!isActive) {
			setAnimationState('exit')
		}
	}, [active])

	//
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth < 767 && !isMobile) setIsMobile(true)
			if (window.innerWidth > 767 && isMobile) setIsMobile(false)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [isMobile])

	//
	return (
		<motion.section
			className={sectionClass.current}
			data-panel-trigger="true"
			data-active={active === sectionClass.current}
			initial="initial"
			enter="enter"
			exit="exit"
			animate={animationState}
			variants={indexPanelAnimations.container}
		>
			<motion.div
				className="bg-animation"
				initial="initial"
				enter="enter"
				exit="exit"
				animate={animationState}
				variants={indexPanelAnimations.bgAnimation}
			>
				{/* <SketchfabViewer setActiveHome={ setActiveHome } activeLevel={ activeLevel } /> */}

				<SVG
					onLoad={() => onPlateLoaded('penthouse')}
					data-active={activePlate === 'penthouse'}
					className="plate plate--penthouse"
					src={`${process.env.BASE_PATH}/rel/plans/Keyplan_Penthouse.svg`}
				/>

				<SVG
					onLoad={() => onPlateLoaded('sub-penthouse')}
					data-active={activePlate === 'sub-penthouse'}
					className="plate plate--sub-penthouse"
					src={`${process.env.BASE_PATH}/rel/plans/Keyplan_Sub-Penthouse.svg`}
				/>

				<SVG
					onLoad={() => onPlateLoaded('tower')}
					data-active={activePlate === 'tower'}
					className="plate plate--tower"
					src={`${process.env.BASE_PATH}/rel/plans/Keyplan_Tower.svg`}
				/>

				<SVG
					onLoad={() => onPlateLoaded('townhome')}
					data-active={activePlate === 'townhome'}
					className="plate plate--townhome"
					src={`${process.env.BASE_PATH}/rel/plans/Keyplan_Townhouse.svg`}
				/>

				<div className="brochures">
					<p className="street">Brochures</p>
					<a
						href="https://cdnmarcon.sfo3.cdn.digitaloceanspaces.com/tailor/website/pdfs/tailor-penthouse_collection.pdf"
						target="_blank"
						className="btn btn--solid"
					>
						Penthouse Collection
					</a>

					<a
						href="https://cdnmarcon.sfo3.cdn.digitaloceanspaces.com/tailor/website/pdfs/tailor-townhomes_collection.pdf"
						target="_blank"
						className="btn btn--solid"
					>
						Townhomes Collection
					</a>
				</div>

				<span className="street street--bottom">Alaska St.</span>
				<span className="street street--right">Alpha Ave.</span>


			</motion.div>

			<article>
				<motion.span
					className="panel-name"
					initial="initial"
					enter="enter"
					exit="exit"
					animate={animationState}
					variants={indexPanelAnimations.panelName}
					dangerouslySetInnerHTML={{ __html: locale.index.homes.title }}
				></motion.span>

				<div className="elevation">
					<SVG
						src={`${process.env.BASE_PATH}/svg/plans/Elevation-East-View.svg`}
						onLoad={onElevationSvgLoaded}
					/>

					<div className="penthouse-labels" data-active={activeLevel === 27 || activeLevel === 26}>
						<button className="btn__toggle" onClick={togglePenthouseNav}>
							Penthouses
						</button>
						<button
							className="btn__floor btn__floor--27"
							data-active={activeLevel === 27}
							onClick={() => activatePenthouseLevel(27)}
						>
							Level 27
						</button>
						<button
							className="btn__floor btn__floor--26"
							data-active={activeLevel === 26}
							onClick={() => activatePenthouseLevel(26)}
						>
							Level 26
						</button>
					</div>

					<span className="level-label" ref={levelLabel}>
						Tower Homes
						<br /> Sold Out
					</span>

					<div className="th-labels" data-active={activeLevel >= 0 && activeLevel < 3}>
						<span className="title" onClick={() => activateTownhomeLevel(0)}>
							Townhomes
						</span>
					</div>
				</div>
			</article>



			<div className="mobile-nav">
				<button className="btn__prev" onClick={deincrementActiveLevel}>
					<SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
				</button>
				<span className="activeLevel">
					{activeLevel === 2 ? 'Townhomes' : `Level ${activeLevel}`}
				</span>
				<button className="btn__next" onClick={incrementActiveLevel}>
					<SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
				</button>
			</div>

			<button
				className="btn__continue"
				onClick={() => setActivePanelClass('page__index__public-art')}
			>
				<span>Continue</span>
				<SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
			</button>

			<div className="north-indicator">
				<SVG src={`${process.env.BASE_PATH}/svg/compass.svg`} />
			</div>
		</motion.section>
	)
}
