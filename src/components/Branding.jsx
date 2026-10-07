import React, { useState } from "react";
import "./Branding.css";

function Branding({ onNext, onBack }) {
  const [hasLogo, setHasLogo] = useState("");
  const [style, setStyle] = useState("");
  const [colors, setColors] = useState("");

  const styleOptions = [
    "Luxury",
    "Elegant",
    "Modern",
    "Minimal",
    "Colourful",
    "Corporate",
    "Creative",
    "Traditional",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hasLogo || !style) {
      return;
    }

    onNext();
  };

  return (
    <section className="branding-section form-card">

      <div className="section-heading">
        <div className="section-number">04</div>

        <div>
          <h2>Branding & Design</h2>
          <p>
            Help us understand your visual identity and the style
            you want your new website to have.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* LOGO */}

        <div className="branding-block">
          <div className="branding-title">
            <h3>Do you already have a business logo?</h3>

            <p>
              If you have one, you'll be able to provide it with
              your other project files.
            </p>
          </div>

          <div className="branding-choice-grid">

            <button
              type="button"
              className={`branding-choice ${
                hasLogo === "Yes" ? "selected" : ""
              }`}
              onClick={() => setHasLogo("Yes")}
            >
              <span className="branding-choice-icon">✓</span>

              <span>
                <strong>Yes, we have a logo</strong>
                <small>
                  We'll provide the logo for the website.
                </small>
              </span>
            </button>

            <button
              type="button"
              className={`branding-choice ${
                hasLogo === "No" ? "selected" : ""
              }`}
              onClick={() => setHasLogo("No")}
            >
              <span className="branding-choice-icon">+</span>

              <span>
                <strong>No logo yet</strong>
                <small>
                  We may need help creating one.
                </small>
              </span>
            </button>

          </div>
        </div>


        {/* COLORS */}

        <div className="branding-field">

          <label htmlFor="brandColors">
            What are your preferred brand colours?
          </label>

          <input
            type="text"
            id="brandColors"
            name="brandColors"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            placeholder="e.g. Purple, Gold, Black and White"
          />

          <small>
            If you already have official brand colours, tell us
            what they are.
          </small>

        </div>


        {/* COLORS TO AVOID */}

        <div className="branding-field">

          <label htmlFor="avoidColors">
            Are there any colours you want us to avoid?
          </label>

          <input
            type="text"
            id="avoidColors"
            name="avoidColors"
            placeholder="e.g. Bright orange"
          />

        </div>


        {/* STYLE */}

        <div className="branding-block style-block">

          <div className="branding-title">
            <h3>What style should the website have?</h3>

            <p>
              Choose the style that best represents your business.
            </p>
          </div>

          <div className="style-grid">

            {styleOptions.map((option) => (
              <button
                type="button"
                key={option}
                className={`style-option ${
                  style === option ? "selected" : ""
                }`}
                onClick={() => setStyle(option)}
              >
                <span className="style-radio">
                  {style === option ? "✓" : ""}
                </span>

                {option}
              </button>
            ))}

          </div>

        </div>


        {/* WEBSITE REFERENCES */}

        <div className="branding-field">

          <label htmlFor="referenceWebsites">
            Are there any websites you like?
          </label>

          <textarea
            id="referenceWebsites"
            name="referenceWebsites"
            placeholder="Paste website links or describe what you like about them..."
            rows="4"
          />

          <small>
            These references help us understand your preferred
            design direction.
          </small>

        </div>


        {/* FOOTER */}

        <div className="branding-footer">

          <button
            type="button"
            className="branding-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>

          <button
            type="submit"
            className="branding-next-btn"
          >
            Continue to Content
            <span>→</span>
          </button>

        </div>

      </form>
    </section>
  );
}

export default Branding;