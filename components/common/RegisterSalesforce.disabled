
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
    const textInputs = [...form.current.querySelectorAll('.input-group input[type="text"], .input-group input[type="phone"]')]
    const emailInput = form.current.querySelector('input[type="email"]')
    const selectInputs = [...form.current.querySelectorAll('select')]
    const optinInput = form.current.querySelector('input[name="optin"]')

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

    //
    if ( !optinInput.checked ) {
      optinInput.parentNode.parentNode.classList.add('error')
      formIsValid = false
    } else {
      optinInput.parentNode.parentNode.classList.remove('error')
    }

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
    form.current.setAttribute('action', 'https://gateway.rennie.com/leads')
    form.current.querySelector('[name="00N3Z00000CeVvt"]').value = 'Project Site'
    form.current.querySelector('[name="00N3Z00000CeVw9"]').value = 'Web Source'
    form.current.querySelector('[name="00N3Z00000CeVw2"]').value = '7013Z0000033sjZQAQ'
    form.current.querySelector('[name="00N3Z00000CeVw3"]').value = 'a043Z00000XIvccQAD'
    form.current.querySelector('[name="00N3Z00000CeYiQ"]').value = '1'
    form.current.querySelector('[name="00N3Z00000CeVw1"]').value = 'Web Registration'
    form.current.querySelector('[name="language"]').value = 'en'
    form.current.querySelector('[name="retURL"]').value = 'https://marcon.ca/tailor/thank-you'

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
          <input name="00N3Z00000CeVvt" type="hidden" value="" />
          <input name="00N3Z00000CeVw9" type="hidden" value="" />
          <input name="00N3Z00000CeVw2" type="hidden" value=""/>
          <input name="00N3Z00000CeVw3" type="hidden" value="" />
          <input name="00N3Z00000CeYiQ" type="hidden" value="" />
          <input name="00N3Z00000CeVw1" type="hidden" value="" />
          <input name="language" type="hidden" value="" />
          <input name="retURL" type="hidden" value="" />

          <div style={{ position : 'absolute', left : '-9999px', top : '-9999px' }}>
            <label htmlFor="pardot_extra_field">Comments</label>
            <input type="text" id="pardot_extra_field" name="pardot_extra_field" />
        	</div>

          <div className="input-group half">
            <input id="first_name" type="text" name="first_name" required autoComplete="off" />
            <label htmlFor="first_name">First Name*</label>
          </div>

          <div className="input-group half">
            <input id="last_name" type="text" name="last_name" required autoComplete="off" />
            <label htmlFor="last_name">Last Name*</label>
          </div>

          <div className="input-group half">
            <input id="email" type="email" name="email" required autoComplete="off" />
            <label htmlFor="email">Email*</label>
          </div>

          <div className="input-group half">
            <input id="phone" type="phone" name="phone" required autoComplete="off" />
            <label htmlFor="phone">Phone Number*</label>
          </div>

          <div className="input-group">
            <input id="zip" type="text" name="zip" required autoComplete="off" />
            <label htmlFor="zip">Postal Code/Zip*</label>
          </div>

          <div className="select-group">
            <select name="00Nf100000CBrGQ" defaultValue="label">
              <option value="label" disabled>What type of home are you looking for?*</option>
              <option value="Studio">Studio</option>
              <option value="Jr. 1 Bedroom">Jr. 1 Bedroom</option>
              <option value="1 Bed">One Bedroom</option>
              <option value="2 Bed">Two Bedroom</option>
              <option value="Townhome">Townhome</option>
            </select>
          </div>

          <div className="select-group">
            <select name="00Nj000000AITER" defaultValue="label">
              <option value="label" disabled>How did you hear about us?*</option>
              <option value="Print Ad/Mail">Print Ad/Mail</option>
              <option value="Realtor">Realtor</option>
              <option value="Online Search">Online Search</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="select-group">
            <select name="00Nj0000000gK0N" defaultValue="label">
              <option value="label" disabled>Are you a Realtor?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="checkbox-group">
            <div>
              <input type="checkbox" name="optin" id="futureOptInYes" />
              <label htmlFor="futureOptInYes" className="small-italic">I would like to receive future e-communications from Marcon and Rennie Marketing Systems.</label>
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
