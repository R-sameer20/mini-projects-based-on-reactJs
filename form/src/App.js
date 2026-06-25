import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing the form Data", formData);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <form 
        onSubmit={submitHandler} 
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md flex flex-col gap-y-4"
      >
        
        <div className="flex flex-col gap-y-1">
          <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Sameer"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Ramteke"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@xyz.com"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="country" className="text-sm font-semibold text-gray-700">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option>India</option>
            <option>USA</option>
            <option>Finland</option>
            <option>Russia</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="streetAddress" className="text-sm font-semibold text-gray-700">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="B-98"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="city" className="text-sm font-semibold text-gray-700">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Nagpur"
            value={formData.city}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="state" className="text-sm font-semibold text-gray-700">State / Province</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Maharashtra"
            value={formData.state}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="postalCode" className="text-sm font-semibold text-gray-700">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="41910"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <fieldset className="border-t border-gray-200 pt-4 mt-2">
          <legend className="text-base font-bold text-gray-900 mb-4">By Email</legend>
          
          <div className="flex items-start gap-x-3 mb-4">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="h-4 w-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <div>
              <label htmlFor="comments" className="text-sm font-semibold text-gray-700 cursor-pointer">Comments</label>
              <p className="text-xs text-gray-500">Get notified when someone posts a comment on a post</p>
            </div>
          </div>

          <div className="flex items-start gap-x-3 mb-4">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="h-4 w-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <div>
              <label htmlFor="candidates" className="text-sm font-semibold text-gray-700 cursor-pointer">Candidates</label>
              <p className="text-xs text-gray-500">Get notified when candidate apply for a job</p>
            </div>
          </div>

          <div className="flex items-start gap-x-3">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="h-4 w-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <div>
              <label htmlFor="offers" className="text-sm font-semibold text-gray-700 cursor-pointer">Offers</label>
              <p className="text-xs text-gray-500">Get notified when candidate accept or reject</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="border-t border-gray-200 pt-4 mt-2">
          <legend className="text-base font-bold text-gray-900 mb-1">Push Notifications</legend>
          <p className="text-xs text-gray-500 mb-4">These are delivered via SMS to your mobile phone</p>
          
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                checked={formData.pushNotifications === "Everything"}
                onChange={changeHandler}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="pushEverything" className="text-sm font-medium text-gray-700 cursor-pointer">Everything</label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as Email"
                checked={formData.pushNotifications === "Same as Email"}
                onChange={changeHandler}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="pushEmail" className="text-sm font-medium text-gray-700 cursor-pointer">Same as Email</label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                checked={formData.pushNotifications === "No Push Notifications"}
                onChange={changeHandler}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="pushNothing" className="text-sm font-medium text-gray-700 cursor-pointer">No Push Notifications</label>
            </div>
          </div>
        </fieldset>

        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-md px-4 py-2 mt-4 self-start shadow-sm transition cursor-pointer"
        >
          Save
        </button>

      </form>
    </div>
  );
}

export default App; 