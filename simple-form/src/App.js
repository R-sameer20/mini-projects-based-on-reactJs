import './App.css';
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("User submitted data : ", formData);
  }

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        
        <div className="input-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Pranay"
          />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="kanchan"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="pkan@duck.com"
          />
        </div>

        <div className="input-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="streetAddress">Street address</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            placeholder="1234 Main St"
          />
        </div>

        <div className="input-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            placeholder="Asansol"
          />
        </div>

        <div className="input-group">
          <label htmlFor="stateProvince">State / Province</label>
          <input
            type="text"
            id="stateProvince"
            name="stateProvince"
            value={formData.stateProvince}
            onChange={changeHandler}
            placeholder="West Bengal"
          />
        </div>

        <div className="input-group">
          <label htmlFor="zipPostalCode">ZIP / Postal code</label>
          <input
            type="text"
            id="zipPostalCode"
            name="zipPostalCode"
            value={formData.zipPostalCode}
            onChange={changeHandler}
            placeholder="713301"
          />
        </div>

        <fieldset className="fieldset-section">
          <legend className="section-title">By Email</legend>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments" className="checkbox-label">Comments</label>
              <p className="checkbox-desc">Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates" className="checkbox-label">Candidates</label>
              <p className="checkbox-desc">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers" className="checkbox-label">Offers</label>
              <p className="checkbox-desc">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset-section">
          <legend className="section-title">Push Notifications</legend>
         
          <p className="section-subtitle">These are delivered via SMS to your mobile phone.</p>

          <div className="radio-group">
            <input
              type="radio"
              id="everything"
              name="pushNotifications"
              value="Everything"
              checked={formData.pushNotifications === "Everything"}
              onChange={changeHandler}
            />
            <label htmlFor="everything">Everything</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              id="sameAsEmail"
              name="pushNotifications"
              value="Same as email"
              checked={formData.pushNotifications === "Same as email"}
              onChange={changeHandler}
            />
            <label htmlFor="sameAsEmail">Same as email</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              id="noNotifications"
              name="pushNotifications"
              value="No push notifications"
              checked={formData.pushNotifications === "No push notifications"}
              onChange={changeHandler}
            />
            <label htmlFor="noNotifications">No push notifications</label>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Save</button>

      </form>
    </div>
  );
}

export default App;