import React, { useState } from "react";
import { useForm } from "@formspree/react";
import "./ReviewSubmit.css";

function ReviewSubmit({ formData, onBack }) {
  const [state, handleSubmit] = useForm("mbgjjdqg");
  const [submitted, setSubmitted] = useState(false);

  const getValue = (section, key) => {
    return formData?.[section]?.[key] || "Not provided";
  };

  const getServices = () => {
    const services = formData?.services?.selectedServices;

    if (!services || services.length === 0) {
      return "Not provided";
    }

    return services.join(", ");
  };

  const getGoals = () => {
    const goals = formData?.websiteGoals?.selectedGoals;

    if (!goals || goals.length === 0) {
      return "Not provided";
    }

    return goals.join(", ");
  };

  const getFeatures = () => {
    const features = formData?.features?.selectedFeatures;

    if (!features || features.length === 0) {
      return "Not provided";
    }

    return features.join(", ");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await handleSubmit(e);

    if (!state.errors) {
      setSubmitted(true);
    }
  };

  if (submitted || state.succeeded) {
    return (
      <section className="review-section form-card">
        <div className="success-screen">
          <div className="success-icon">✓</div>

          <h2>
            Thank you for <span>your submission.</span>
          </h2>

          <p>
            Your website project questionnaire has been successfully
            submitted. We'll review your requirements and use the
            information provided to plan the best website experience
            for your business.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="review-section form-card">
      <div className="review-intro">
        <div className="review-icon">✓</div>

        <h2>Review Your Project</h2>

        <p>
          Please review the information below before submitting your
          website project questionnaire.
        </p>
      </div>

      {/* BUSINESS */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Business Information</h3>
          <div className="review-number">01</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Business Name"
            value={getValue("business", "businessName")}
          />

          <ReviewItem
            label="Experience"
            value={getValue("business", "businessExperience")}
          />

          <ReviewItem
            label="Location"
            value={getValue("business", "businessLocation")}
          />

          <ReviewItem
            label="Service Areas"
            value={getValue("business", "serviceAreas")}
          />

          <ReviewItem
            label="Phone"
            value={getValue("business", "businessPhone")}
          />

          <ReviewItem
            label="WhatsApp"
            value={getValue("business", "businessWhatsApp")}
          />

          <ReviewItem
            label="Email"
            value={getValue("business", "businessEmail")}
          />

          <ReviewItem
            label="Website"
            value={getValue("business", "existingWebsite")}
          />

          <ReviewItem
            label="Description"
            value={getValue("business", "businessDescription")}
          />

          <ReviewItem
            label="Address"
            value={getValue("business", "businessAddress")}
          />

          <ReviewItem
            label="Business Hours"
            value={getValue("business", "businessHours")}
          />
        </div>
      </div>

      {/* SERVICES */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Services</h3>
          <div className="review-number">02</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Services Offered"
            value={getServices()}
          />

          <ReviewItem
            label="Priority Service"
            value={getValue("services", "priorityService")}
          />

          <ReviewItem
            label="Service Description"
            value={getValue("services", "serviceDescription")}
          />
        </div>
      </div>

      {/* WEBSITE GOALS */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Website Goals</h3>
          <div className="review-number">03</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Main Goals"
            value={getGoals()}
          />

          <ReviewItem
            label="Visitor Action"
            value={getValue(
              "websiteGoals",
              "visitorAction"
            )}
          />

          <ReviewItem
            label="Website Vision"
            value={getValue(
              "websiteGoals",
              "websiteVision"
            )}
          />
        </div>
      </div>

      {/* BRANDING */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Branding</h3>
          <div className="review-number">04</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Has Logo"
            value={getValue("branding", "hasLogo")}
          />

          <ReviewItem
            label="Preferred Style"
            value={getValue("branding", "style")}
          />

          <ReviewItem
            label="Preferred Colours"
            value={getValue("branding", "colors")}
          />

          <ReviewItem
            label="Colours to Avoid"
            value={getValue("branding", "avoidColors")}
          />

          <ReviewItem
            label="Reference Websites"
            value={getValue(
              "branding",
              "referenceWebsites"
            )}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Website Content</h3>
          <div className="review-number">05</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Photos Available"
            value={getValue("content", "hasPhotos")}
          />

          <ReviewItem
            label="Videos Available"
            value={getValue("content", "hasVideos")}
          />

          <ReviewItem
            label="Written Content"
            value={getValue(
              "content",
              "hasWrittenContent"
            )}
          />

          <ReviewItem
            label="Content Notes"
            value={getValue(
              "content",
              "contentNotes"
            )}
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Website Features</h3>
          <div className="review-number">06</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Selected Features"
            value={getFeatures()}
          />

          <ReviewItem
            label="Custom Feature"
            value={getValue(
              "features",
              "customFeature"
            )}
          />

          <ReviewItem
            label="Booking Required"
            value={getValue(
              "features",
              "bookingRequired"
            )}
          />
        </div>
      </div>

      {/* CONTACT */}
      <div className="review-card">
        <div className="review-card-header">
          <h3>Contact & Project Details</h3>
          <div className="review-number">07</div>
        </div>

        <div className="review-info-grid">
          <ReviewItem
            label="Contact Person"
            value={getValue("contact", "contactName")}
          />

          <ReviewItem
            label="Phone"
            value={getValue("contact", "contactPhone")}
          />

          <ReviewItem
            label="WhatsApp"
            value={getValue(
              "contact",
              "contactWhatsApp"
            )}
          />

          <ReviewItem
            label="Email"
            value={getValue("contact", "contactEmail")}
          />

          <ReviewItem
            label="Domain Status"
            value={getValue(
              "contact",
              "domainStatus"
            )}
          />

          <ReviewItem
            label="Domain Name"
            value={getValue(
              "contact",
              "domainName"
            )}
          />

          <ReviewItem
            label="Instagram"
            value={getValue("contact", "instagram")}
          />

          <ReviewItem
            label="Facebook"
            value={getValue("contact", "facebook")}
          />

          <ReviewItem
            label="TikTok"
            value={getValue("contact", "tiktok")}
          />

          <ReviewItem
            label="YouTube"
            value={getValue("contact", "youtube")}
          />

          <ReviewItem
            label="Additional Information"
            value={getValue(
              "contact",
              "additionalInformation"
            )}
          />
        </div>
      </div>

      <div className="submit-notice">
        <div className="submit-notice-icon">✓</div>

        <div>
          <h4>Ready to submit?</h4>

          <p>
            Your responses will be securely sent to the project
            email through Formspree. Please make sure the
            information above is correct before submitting.
          </p>
        </div>
      </div>

      {state.errors && (
        <div className="form-error">
          Something went wrong while submitting the form.
          Please check your internet connection and try again.
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        {/* Hidden fields sent to Formspree */}
        <input
          type="hidden"
          name="Business Name"
          value={getValue("business", "businessName")}
          readOnly
        />

        <input
          type="hidden"
          name="Services"
          value={getServices()}
          readOnly
        />

        <input
          type="hidden"
          name="Website Goals"
          value={getGoals()}
          readOnly
        />

        <input
          type="hidden"
          name="Priority Service"
          value={getValue("services", "priorityService")}
          readOnly
        />

        <input
          type="hidden"
          name="Branding Style"
          value={getValue("branding", "style")}
          readOnly
        />

        <input
          type="hidden"
          name="Preferred Colours"
          value={getValue("branding", "colors")}
          readOnly
        />

        <input
          type="hidden"
          name="Website Features"
          value={getFeatures()}
          readOnly
        />

        <input
          type="hidden"
          name="Contact Person"
          value={getValue("contact", "contactName")}
          readOnly
        />

        <input
          type="hidden"
          name="Contact Phone"
          value={getValue("contact", "contactPhone")}
          readOnly
        />

        <input
          type="hidden"
          name="Contact Email"
          value={getValue("contact", "contactEmail")}
          readOnly
        />

        <input
          type="hidden"
          name="WhatsApp"
          value={getValue("contact", "contactWhatsApp")}
          readOnly
        />

        <input
          type="hidden"
          name="Domain"
          value={getValue("contact", "domainName")}
          readOnly
        />

        <input
          type="hidden"
          name="Additional Information"
          value={getValue(
            "contact",
            "additionalInformation"
          )}
          readOnly
        />

        <textarea
          name="Complete Questionnaire"
          value={JSON.stringify(formData, null, 2)}
          readOnly
          hidden
        />

        <div className="review-footer">
          <button
            type="button"
            className="review-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>

          <button
            type="submit"
            className="review-submit-btn"
            disabled={state.submitting}
          >
            {state.submitting
              ? "Submitting..."
              : "Submit Questionnaire"}

            <span>→</span>
          </button>
        </div>
      </form>
    </section>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="review-info">
      <span className="review-info-label">
        {label}
      </span>

      <span className="review-info-value">
        {value}
      </span>
    </div>
  );
}

export default ReviewSubmit;