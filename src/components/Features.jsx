import React, { useState } from "react";
import "./Features.css";

function Features({ onNext, onBack }) {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const features = [
    "WhatsApp Button",
    "Booking / Enquiry Form",
    "Photo Gallery",
    "Testimonials",
    "Google Maps",
    "Social Media Integration",
    "FAQ Section",
    "Newsletter",
    "Blog",
    "Event Calendar",
    "Online Payments",
    "Other",
  ];

  const toggleFeature = (feature) => {
    setSelectedFeatures((previous) =>
      previous.includes(feature)
        ? previous.filter((item) => item !== feature)
        : [...previous, feature]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <section className="features-section form-card">

      <div className="section-heading">
        <div className="section-number">06</div>

        <div>
          <h2>Features & Functionality</h2>
          <p>
            Choose the features you'd like your website to have.
            Don't worry if you're unsure — we can recommend what
            makes sense for your business.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* FEATURES */}

        <div className="features-intro">
          <h3>Which features would you like?</h3>

          <p>
            Select everything that may be useful for your customers.
          </p>
        </div>

        <div className="features-grid">

          {features.map((feature) => (
            <button
              type="button"
              key={feature}
              className={`feature-option ${
                selectedFeatures.includes(feature)
                  ? "selected"
                  : ""
              }`}
              onClick={() => toggleFeature(feature)}
            >
              <span className="feature-check">
                {selectedFeatures.includes(feature) ? "✓" : ""}
              </span>

              <span className="feature-name">
                {feature}
              </span>
            </button>
          ))}

        </div>


        {/* CUSTOM FUNCTIONALITY */}

        <div className="features-field">

          <label htmlFor="customFeature">
            Is there any other functionality you need?
          </label>

          <textarea
            id="customFeature"
            name="customFeature"
            placeholder="Describe any special feature, system, or functionality you would like on the website..."
            rows="5"
          />

          <small>
            If you're not sure what something is called, simply
            describe what you want the website to do.
          </small>

        </div>


        {/* BOOKING */}

        <div className="features-question">

          <div>
            <h3>Will customers need to book or make enquiries?</h3>

            <p>
              This helps us determine whether the website needs
              a dedicated booking or enquiry system.
            </p>
          </div>

          <div className="features-radio-group">

            <label className="feature-radio-option">
              <input
                type="radio"
                name="bookingRequired"
                value="Yes"
              />

              <span className="radio-circle"></span>

              Yes
            </label>

            <label className="feature-radio-option">
              <input
                type="radio"
                name="bookingRequired"
                value="No"
              />

              <span className="radio-circle"></span>

              No
            </label>

            <label className="feature-radio-option">
              <input
                type="radio"
                name="bookingRequired"
                value="Not sure"
              />

              <span className="radio-circle"></span>

              Not sure
            </label>

          </div>

        </div>


        {/* FOOTER */}

        <div className="features-footer">

          <button
            type="button"
            className="features-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>

          <button
            type="submit"
            className="features-next-btn"
          >
            Continue to Contact
            <span>→</span>
          </button>

        </div>

      </form>
    </section>
  );
}

export default Features;