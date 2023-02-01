// Dependencies
import { useEffect } from 'react'
import { Seo } from 'components/common'
import { useDispatch, useSelector } from 'react-redux'

// Store
import { UI_HEADER_THEME_BLUE } from 'store/constants'
import { uiUpdateHeaderTheme } from 'store/actions'

// Components
import { RegisterLasso } from 'components/common'

// Component
export default function ThankYou() {
	const dispatch = useDispatch()
	const ui = useSelector(state => state.ui)

	//
	useEffect(() => {
		dispatch(uiUpdateHeaderTheme(UI_HEADER_THEME_BLUE))
		document.querySelector('.locale button:last-child').click()
	}, [])

	//
	return (
		<main className="page__register">
			<Seo title="Register Your Interest" />
			<RegisterLasso reversed="false" />
		</main>
	)
}
