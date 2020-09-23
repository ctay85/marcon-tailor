
// Dependencies
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'

// Component
const Register = ({ reversed = false }) => {
  const recaptchaRef = useRef(null)
  const form = useRef(null)
  const [ recapValue, setRecapValue ] = useState(null)

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
    textInputs.forEach( input => {
      if ( input.value.length === 0 ) {
        input.parentNode.classList.add('error')
        formIsValid = false
      } else {
        input.parentNode.classList.remove('error')
      }
    })

    //
    if ( emailInput.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g) === null ) {
      emailInput.parentNode.classList.add('error')
      formIsValid = false
    } else {
      emailInput.parentNode.classList.remove('error')
    }

    //
    selectInputs.forEach( select => {
      if ( select.selectedIndex === 0 ) {
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
    if ( !formIsValid ) {
      return
    }

    //
    if ( !recapValue ) {
      console.log('reCAPTCHA not set');
      return
    }

    //
    form.current.setAttribute('action', 'https://app.lassocrm.com/registrant_signup/')
    form.current.querySelector('[name="domainAccountId"]').value = 'LAS-541914-15'
    form.current.querySelector('[name="LassoUID"]').value = 'HPsHyMvsqf'
    form.current.querySelector('[name="ClientID"]').value = '374'
    form.current.querySelector('[name="ProjectID"]').value = '10032'
    form.current.querySelector('[name="SignupThankyouLink"]').value = 'https://marcon.ca/tailor/thank-you'

    //
    return form.current.submit()
  }

  //
  return (
    <section className="global__register" id="register">
      <div className="wrap--reg">
        <h2 data-reveal="hidden">Register for more details.</h2>
      </div>

      <div className="wrap--narrow">
        <form data-reveal="hidden" data-reversed={ reversed } ref={ form } method="post" validate="true">
          <input type="hidden" name="domainAccountId" value="" />
          <input type="hidden" name="guid" value="" />
          <input type="hidden" name="LassoUID" value="" />
          <input type="hidden" name="ClientID" value="" />
          <input type="hidden" name="ProjectID" value="" />
          <input type="hidden" name="SignupThankyouLink" value="" />

          <div className="input-group half">
            <input type="text" name="FirstName" required autoComplete="off" />
            <label>First Name*</label>
          </div>

          <div className="input-group half">
            <input type="text" name="LastName" required autoComplete="off" />
            <label>Last Name*</label>
          </div>

          <div className="input-group half">
            <input type="email" name="Emails[Primary]" required autoComplete="off" />
            <label>Email*</label>
          </div>

          <div className="input-group half">
            <input type="phone" name="Phones[Home]" required autoComplete="off" />
            <label>Phone Number*</label>
          </div>

          <div className="input-group">
            <input type="text" name="PostalCode" required autoComplete="off" />
            <label>Postal Code/Zip*</label>
          </div>

          <div className="select-group">
            <select name="Questions[94569]" defaultValue="label">
              <option value="label" disabled>What Type of home are you looking for?*</option>
              <option value="281558">One Bedroom</option>
              <option value="281559">Two Bedroom</option>
            </select>
          </div>

          <div className="select-group">
            <select name="Questions[59106]" defaultValue="label">
              <option value="label" disabled>How did you hear about us?*</option>
              <option value="240191">Friends & Family</option>
              <option value="240192">Realtor</option>
              <option value="240194">Online Search</option>
              <option value="240196">Online Ad</option>
              <option value="240200">Other</option>
            </select>
          </div>

          <div className="radio-group">
            <label className="title">Are you a realtor?</label>

            <div className="inputs">
              <input type="radio" name="Questions[10736]" value="49630" id="isRealtorYes" /> <label htmlFor="isRealtorYes">Yes</label>
              <input type="radio" name="Questions[10736]" value="49631" id="isRealtorNo" defaultChecked /> <label htmlFor="isRealtorNo">No</label>
            </div>
          </div>

          <div className="radio-group">
            <label className="title small-italic">I would like to receive future e-communications from Marcon and Rennie Marketing Systems.</label>

            <div className="inputs">
              <input type="radio" name="Questions[59107]" value="240201" id="futureOptInYes" defaultChecked /> <label htmlFor="futureOptInYes">Yes</label>
              <input type="radio" name="Questions[59107]" value="999999" id="futureOptInNo" /> <label htmlFor="futureOptInNo">No</label>
            </div>
          </div>

          <div className="recaptcha-container">
            <ReCAPTCHA
              ref={ recaptchaRef }
              sitekey={ process.env.RECAPTCHA_SITE_KEY }
              onChange={ onChange }
              onExpired={ onExpired }
            />
          </div>

          <button className="btn__register" type="submit" onClick={ onSubmit }>Register</button>

          <p className="disclaimer"><small>By clicking the SUBMIT button, you consent to: (1) Rennie Marketing and Marcon and their current and future affiliates and partners sending you emails with promotional messages such as newsletters, announcements, press releases and event invitations regarding their products and services; (2) receiving calls on behalf of Rennie Marketing to discuss products and services; and (3) the collection, use and disclosure of the personal information you have provided, by or on behalf of the members of the Rennie Marketing, for the above purposes, in accordance with Rennie Marketing’s Privacy Policy. You may withdraw your consent at any time.</small></p>
        </form>
      </div>
    </section>
  )
}

// Export
export default Register
