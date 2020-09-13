
// Component
const Register = () => (
  <section className="page__index__register bg--dark-blue">
    <div className="wrap--narrow">
      <h2>Register for more details.</h2>

      <form>
        <div className="input-group half">
          <input type="text" name="firstName" required autoComplete="off" />
          <label>First Name*</label>
        </div>

        <div className="input-group half">
          <input type="text" name="lastName" required autoComplete="off" />
          <label>Last Name*</label>
        </div>

        <div className="input-group half">
          <input type="email" name="email" required autoComplete="off" />
          <label>Email*</label>
        </div>

        <div className="input-group half">
          <input type="phone" name="phone" required autoComplete="off" />
          <label>Phone Number*</label>
        </div>

        <div className="input-group">
          <input type="text" name="postal" required autoComplete="off" />
          <label>Postal Code/Zip*</label>
        </div>

        <div className="select-group">
          <select>
            <option selected disabled>What Type of home are you looking for?*</option>
            <option>Studio</option>
            <option>One Bedroom</option>
            <option>Two Bedroom</option>
            <option>Three Bedroom</option>
          </select>
        </div>

        <div className="select-group">
          <select>
            <option selected disabled>How did you hear about us?*</option>
            <option>Lorem ipsum</option>
            <option>Lorem ipsum</option>
            <option>Lorem ipsum</option>
            <option>Lorem ipsum</option>
          </select>
        </div>

        <div className="radio-group">
          <label className="title">Are you a realtor?</label>

          <div className="inputs">
            <input type="radio" name="isRealtor[]" id="isRealtorYes" /> <label htmlFor="isRealtorYes">Yes</label>
            <input type="radio" name="isRealtor[]" id="isRealtorNo" checked /> <label htmlFor="isRealtorNo">No</label>
          </div>
        </div>

        <div className="radio-group">
          <label className="title">I would like to receive future e-communications from Marcon and Rennie Marketing Systems.</label>

          <div className="inputs">
            <input type="radio" name="futureOptIn[]" id="futureOptInYes" /> <label htmlFor="futureOptInYes">Yes</label>
            <input type="radio" name="futureOptIn[]" id="futureOptInNo" checked /> <label htmlFor="futureOptInNo">No</label>
          </div>
        </div>

        <button className="btn__register">Register</button>

        <p className="disclaimer"><small>By clicking the SUBMIT button, you consent to: (1) Rennie Marketing and Marcon and their current and future affiliates and partners sending you emails with promotional messages such as newsletters, announcements, press releases and event invitations regarding their products and services; (2) receiving calls on behalf of Rennie Marketing to discuss products and services; and (3) the collection, use and disclosure of the personal information you have provided, by or on behalf of the members of the Rennie Marketing, for the above purposes, in accordance with Rennie Marketing’s Privacy Policy. You may withdraw your consent at any time.</small></p>
      </form>
    </div>
  </section>
)

// Export
export default Register
