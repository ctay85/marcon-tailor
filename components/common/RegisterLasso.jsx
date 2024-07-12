// Dependencies
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

// Component
const Register = ({ reversed = true }) => {
	const recaptchaRef = useRef(null)
	const form = useRef(null)
	const [recapValue, setRecapValue] = useState(null)
	const { locale } = useSelector(state => state)

	//
	const onChange = value => setRecapValue(value)

	//
	const onExpired = () => setRecapValue(null)

	//
	const validateFormFields = () => {
		let formIsValid = true
		const textInputs = [...form.current.querySelectorAll('input[type="text"], input[type="phone"]')]
		const emailInput = form.current.querySelector('input[type="email"]')
		const selectInputs = [...form.current.querySelectorAll('select')]

		//
		textInputs.forEach(input => {
			if (input.value.length === 0) {
				input.parentNode.classList.add('error')
				formIsValid = false
			} else {
				input.parentNode.classList.remove('error')
			}
		})

		//
		if (emailInput.value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) === null) {
			emailInput.parentNode.classList.add('error')
			formIsValid = false
		} else {
			emailInput.parentNode.classList.remove('error')
		}

		//
		selectInputs.forEach(select => {
			if (select.selectedIndex === 0) {
				select.parentNode.classList.add('error')
				formIsValid = false
			} else {
				select.parentNode.classList.remove('error')
			}
		})

		return formIsValid
	}

	//
	const onSubmit = async e => {
		e.preventDefault()

		//
		const formIsValid = validateFormFields()
		if (!formIsValid) {
			return
		}

		//
		if (!recapValue) {
			console.log('reCAPTCHA not set')
			return
		}

		//
		const isRealtorElm = document.querySelector('select[name="Questions[10736]"')
		const isRealtorVal = isRealtorElm.options[isRealtorElm.selectedIndex].value

		form.current.setAttribute('action', 'https://app.lassocrm.com/registrant_signup/')
		//form.current.querySelector('[name="domainAccountId"]').value = 'LAS-541914-15'
		form.current.querySelector('[name="LassoUID"]').value = '8As8FGoXwa'
		form.current.querySelector('[name="ClientID"]').value = '374'
		form.current.querySelector('[name="ProjectID"]').value = '10032'
		form.current.querySelector('[name="RatingID"]').value = isRealtorVal === '49630' ? '31618' : '15627445'
		form.current.querySelector('[name="SignupThankyouLink"]').value = 'https://marcon.ca/tailor/thank-you'

		//
		return form.current.submit()
	}

	//
	return (
		<section className="global__register" id="register">
			<div className="wrap--reg">
				<p className="enquire__title">{locale.overlays.enquire.form.title}</p>
			</div>

			<div className="wrap--narrow">
				<form data-reversed={reversed} ref={form} method="post" validate="true">
					{/* <input type="hidden" name="domainAccountId" value="" /> */}
					<input type="hidden" name="guid" value="" />
					<input type="hidden" name="LassoUID" value="" />
					<input type="hidden" name="ClientID" value="" />
					<input type="hidden" name="ProjectID" value="" />
					<input type="hidden" name="RatingID" value="" />
					<input type="hidden" name="SourceTypeID" value="20327" />
					{/* <input type="hidden" name="SecondarySourceTypeID" value="" /> */}
					<input type="hidden" name="SignupThankyouLink" value="" />

					<div className="input-group half">
						<input type="text" name="FirstName" required autoComplete="off" />
						<label>{locale.overlays.enquire.form.fName}*</label>
					</div>

					<div className="input-group half">
						<input type="text" name="LastName" required autoComplete="off" />
						<label>{locale.overlays.enquire.form.lName}*</label>
					</div>

					<div className="input-group half">
						<input type="email" name="Emails[Primary]" required autoComplete="off" />
						<label>{locale.overlays.enquire.form.email}*</label>
					</div>

					<div className="input-group half">
						<input type="phone" name="Phones[Home]" required autoComplete="off" />
						<label>{locale.overlays.enquire.form.phone}*</label>
					</div>

					<div className="input-group">
						<input type="text" name="PostalCode" required autoComplete="off" />
						<label>{locale.overlays.enquire.form.postal}*</label>
					</div>

					<div className="select-group">
						<select name="Questions[94569]" defaultValue="label">
							<option value="label" disabled>
								{locale.overlays.enquire.form.whatType.title}*
							</option>
							<option value="340498">{locale.overlays.enquire.form.whatType.studio}</option>
							<option value="340500">{locale.overlays.enquire.form.whatType.jr1bed}</option>
							<option value="281558">{locale.overlays.enquire.form.whatType.oneBed}</option>
							<option value="281559">{locale.overlays.enquire.form.whatType.twoBed}</option>
							<option value="281562">{locale.overlays.enquire.form.whatType.townhome}</option>
						</select>
					</div>

					<div className="select-group">
						<select name="Questions[59106]" defaultValue="label">
							<option value="label" disabled>
								{locale.overlays.enquire.form.howHear.title}*
							</option>
							<option value="240192">{locale.overlays.enquire.form.howHear.realtor}</option>
							<option value="340499">{locale.overlays.enquire.form.howHear.print}</option>
							<option value="240194">{locale.overlays.enquire.form.howHear.online}</option>
							<option value="240200">{locale.overlays.enquire.form.howHear.other}</option>
						</select>
					</div>

					<div className="select-group">
						<select name="Questions[10736]" defaultValue="label">
							<option value="label" disabled>
								{locale.overlays.enquire.form.isRealtor.title}*
							</option>
							<option value="49630">{locale.overlays.enquire.form.isRealtor.yes}</option>
							<option value="49631">{locale.overlays.enquire.form.isRealtor.no}</option>
						</select>

						<i className="material-icons">keyboard_arrow_down</i>
					</div>

					<div className="radio-group">
						<label className="title small-italic">
							I would like to receive future e-communications from Marcon.
						</label>

						<div className="inputs">
							<input type="radio" name="Questions[59107]" value="240201" id="futureOptInYes" defaultChecked />{' '}
							<label htmlFor="futureOptInYes">Yes</label>
							<input type="radio" name="Questions[59107]" value="999999" id="futureOptInNo" />{' '}
							<label htmlFor="futureOptInNo">No</label>
						</div>
					</div>

					<div className="recaptcha-container">
						<ReCAPTCHA
							ref={recaptchaRef}
							sitekey={process.env.RECAPTCHA_SITE_KEY}
							onChange={onChange}
							onExpired={onExpired}
						/>
					</div>

					<button className="btn__register" type="submit" onClick={onSubmit}>
						Register
					</button>

					<p className="disclaimer">
						<small>
							By clicking the SUBMIT button, you consent to Marcon and their current and future affiliates and
							partners sending you emails with promotional messages such as newsletters, announcements, press
							releases and event invitations regarding their products and services; (2) receiving calls on behalf
							of Marcon to discuss products and services; and (3) the collection, use and disclosure of the
							personal information you have provided, by or on behalf of the members of Marcon, for the above
							purposes, in accordance with Marcon’s Privacy Policy. You may withdraw your consent at any time
						</small>
					</p>
				</form>
			</div>
		</section>
	)
}

// Export
export default Register
