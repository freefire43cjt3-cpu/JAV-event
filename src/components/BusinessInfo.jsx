import React from "react";
import "./BusinessInfo.css";

function BusinessInfo({
  onNext,
  formData,
  updateFormData,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <section className="business-info form-card">

      <div className="section-heading">

        <div className="section-number">
          01
        </div>

        <div>
          <h2>Business Information</h2>

          <p>
            Let's start with the basics. Tell us a little about
            your business so we can understand your brand.
          </p>
        </div>

      </div>


      <form onSubmit={handleSubmit}>

        <div className="business-form-grid">

          <div className="business-field">

            <label htmlFor="businessName">
              Official Business Name <span>*</span>
            </label>

            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData?.businessName || ""}
              onChange={handleChange}
              placeholder="e.g. JAV Events & Services"
              required
            />

          </div>


          <div className="business-field">

            <label htmlFor="businessExperience">
              How long have you been in business? <span>*</span>
            </label>

            <select
              id="businessExperience"
              name="businessExperience"
              value={formData?.businessExperience || ""}
              onChange={handleChange}
              required
            >

              <option value="" disabled>
                Select an option
              </option>

              <option value="Less than 1 year">
                Less than 1 year
              </option>

              <option value="1–3 years">
                1–3 years
              </option>

              <option value="3–5 years">
                3–5 years
              </option>

              <option value="5+ years">
                5+ years
              </option>

            </select>

          </div>


          <div className="business-field business-field-full">

            <label htmlFor="businessDescription">
              Tell us about your business <span>*</span>
            </label>

            <textarea
              id="businessDescription"
              name="businessDescription"
              value={formData?.businessDescription || ""}
              onChange={handleChange}
              placeholder="What does your business do? What makes it special?"
              rows="5"
              required
            />

            <small>
              Briefly describe your business, your experience,
              and what customers should know about you.
            </small>

          </div>


          <div className="business-field">

            <label htmlFor="businessLocation">
              Business Location <span>*</span>
            </label>

            <input
              type="text"
              id="businessLocation"
              name="businessLocation"
              value={formData?.businessLocation || ""}
              onChange={handleChange}
              placeholder="e.g. Port Harcourt, Rivers State"
              required
            />

          </div>


          <div className="business-field">

            <label htmlFor="serviceAreas">
              Areas You Serve <span>*</span>
            </label>

            <input
              type="text"
              id="serviceAreas"
              name="serviceAreas"
              value={formData?.serviceAreas || ""}
              onChange={handleChange}
              placeholder="Cities, states, or locations"
              required
            />

          </div>


          <div className="business-field">

            <label htmlFor="businessPhone">
              Business Phone Number <span>*</span>
            </label>

            <input
              type="tel"
              id="businessPhone"
              name="businessPhone"
              value={formData?.businessPhone || ""}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
              required
            />

          </div>


          <div className="business-field">

            <label htmlFor="businessWhatsApp">
              WhatsApp Number
            </label>

            <input
              type="tel"
              id="businessWhatsApp"
              name="businessWhatsApp"
              value={formData?.businessWhatsApp || ""}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
            />

          </div>


          <div className="business-field">

            <label htmlFor="businessEmail">
              Business Email Address
            </label>

            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData?.businessEmail || ""}
              onChange={handleChange}
              placeholder="hello@yourbusiness.com"
            />

          </div>


          <div className="business-field">

            <label htmlFor="existingWebsite">
              Existing Website
            </label>

            <input
              type="url"
              id="existingWebsite"
              name="existingWebsite"
              value={formData?.existingWebsite || ""}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />

            <small>
              Leave blank if you don't have a website yet.
            </small>

          </div>


          <div className="business-field business-field-full">

            <label htmlFor="businessAddress">
              Full Business Address
            </label>

            <input
              type="text"
              id="businessAddress"
              name="businessAddress"
              value={formData?.businessAddress || ""}
              onChange={handleChange}
              placeholder="Enter your business address"
            />

          </div>


          <div className="business-field business-field-full">

            <label htmlFor="businessHours">
              Business Hours
            </label>

            <textarea
              id="businessHours"
              name="businessHours"
              value={formData?.businessHours || ""}
              onChange={handleChange}
              placeholder="e.g. Monday–Saturday, 9:00 AM–6:00 PM"
              rows="3"
            />

          </div>

        </div>


        <div className="business-form-footer">

          <div className="business-required-note">
            <span>*</span> Required fields
          </div>

          <button
            type="submit"
            className="business-next-btn"
          >
            Continue to Services

            <span>→</span>
          </button>

        </div>

      </form>

    </section>
  );
}

export default BusinessInfo;