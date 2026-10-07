import React, { useState } from "react";
import "./Contact.css";

function Contact({ onBack }) {
  const [enquiries, setEnquiries] = useState("");
  const [domainStatus, setDomainStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary submit action.
    // We'll connect this to the complete form data later.
    console.log("Questionnaire ready for review.");
  };

  return (
    <section className="contact-section form-card">

      <div className="section-heading">
        <div className="section-number">07</div>

        <div>
          <h2>Contact & Project Details</h2>
          <p>
            Finally, let's collect the best contact details and
            a few technical details about your website.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* CONTACT INFORMATION */}

        <div className="contact-block">

          <div className="contact-title">
            <h3>How can we contact you?</h3>

            <p>
              We'll use these details to discuss your project,
              recommendations, and next steps.
            </p>
          </div>

          <div className="contact-grid">

            <div className="contact-field">
              <label htmlFor="contactName">
                Contact Person <span>*</span>
              </label>

              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Full name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contactPhone">
                Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                placeholder="+234 800 000 0000"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contactWhatsApp">
                WhatsApp Number
              </label>

              <input
                type="tel"
                id="contactWhatsApp"
                name="contactWhatsApp"
                placeholder="+234 800 000 0000"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contactEmail">
                Email Address
              </label>

              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder="hello@yourbusiness.com"
              />
            </div>

          </div>
        </div>


        {/* DOMAIN */}

        <div className="contact-block">

          <div className="contact-title">
            <h3>Website Domain</h3>

            <p>
              Do you already have a domain name for your business?
            </p>
          </div>

          <div className="domain-options">

            {[
              "Yes, we already have a domain",
              "No, we need a domain",
              "We're not sure yet",
            ].map((option) => (
              <label
                className={`domain-option ${
                  domainStatus === option ? "selected" : ""
                }`}
                key={option}
              >
                <input
                  type="radio"
                  name="domainStatus"
                  value={option}
                  checked={domainStatus === option}
                  onChange={(e) =>
                    setDomainStatus(e.target.value)
                  }
                />

                <span className="domain-radio"></span>

                <span>{option}</span>
              </label>
            ))}

          </div>

          <div className="contact-field domain-field">
            <label htmlFor="domainName">
              Existing or preferred domain name
            </label>

            <input
              type="text"
              id="domainName"
              name="domainName"
              placeholder="e.g. javevents.com"
            />

            <small>
              Leave this blank if you don't have a domain yet.
            </small>
          </div>

        </div>


        {/* SOCIAL MEDIA */}

        <div className="contact-block">

          <div className="contact-title">
            <h3>Social Media Accounts</h3>

            <p>
              Add your social media links so they can be connected
              to the website.
            </p>
          </div>

          <div className="social-grid">

            <div className="contact-field">
              <label htmlFor="instagram">
                Instagram
              </label>

              <input
                type="url"
                id="instagram"
                name="instagram"
                placeholder="https://instagram.com/yourbusiness"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="facebook">
                Facebook
              </label>

              <input
                type="url"
                id="facebook"
                name="facebook"
                placeholder="https://facebook.com/yourbusiness"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="tiktok">
                TikTok
              </label>

              <input
                type="url"
                id="tiktok"
                name="tiktok"
                placeholder="https://tiktok.com/@yourbusiness"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="youtube">
                YouTube
              </label>

              <input
                type="url"
                id="youtube"
                name="youtube"
                placeholder="https://youtube.com/@yourbusiness"
              />
            </div>

          </div>

        </div>


        {/* ADDITIONAL INFORMATION */}

        <div className="contact-block">

          <div className="contact-title">
            <h3>Anything else we should know?</h3>

            <p>
              Share any final ideas, expectations, concerns, or
              special requirements for the project.
            </p>
          </div>

          <div className="contact-field">

            <textarea
              id="additionalInformation"
              name="additionalInformation"
              placeholder="Tell us anything else you'd like us to know..."
              rows="6"
            />

          </div>

        </div>


        {/* FINAL NOTICE */}

        <div className="contact-notice">

          <div className="notice-icon">✓</div>

          <div>
            <h3>Almost there!</h3>

            <p>
              Once you submit this questionnaire, we'll review
              your requirements and prepare the recommended
              website structure and next steps.
            </p>
          </div>

        </div>


        {/* FOOTER */}

        <div className="contact-footer">

          <button
            type="button"
            className="contact-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>

          <button
            type="submit"
            className="contact-submit-btn"
          >
            Review Project
            <span>→</span>
          </button>

        </div>

      </form>
    </section>
  );
}

export default Contact;