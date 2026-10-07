import React, { useState } from "react";
import "./App.css";

const steps = [
  "Business",
  "Services",
  "Goals",
  "Branding",
  "Content",
  "Features",
  "Contact",
  "Review",
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    business: {
      businessName: "",
      businessExperience: "",
      businessDescription: "",
      businessLocation: "",
      serviceAreas: "",
      businessPhone: "",
      businessWhatsApp: "",
      businessEmail: "",
      existingWebsite: "",
      businessAddress: "",
      businessHours: "",
    },

    services: {
      selectedServices: [],
      priorityService: "",
      serviceDescription: "",
    },

    goals: {
      selectedGoals: [],
      visitorAction: "",
      websiteVision: "",
    },

    branding: {
      hasLogo: "",
      style: "",
      colors: "",
      avoidColors: "",
      referenceWebsites: "",
    },

    content: {
      hasPhotos: "",
      hasVideos: "",
      hasWrittenContent: "",
      contentNotes: "",
    },

    features: {
      selectedFeatures: [],
      customFeature: "",
      bookingRequired: "",
    },

    contact: {
      contactName: "",
      contactPhone: "",
      contactWhatsApp: "",
      contactEmail: "",
      domainStatus: "",
      domainName: "",
      instagram: "",
      facebook: "",
      tiktok: "",
      youtube: "",
      additionalInformation: "",
    },
  });

  const updateSection = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const toggleArray = (section, field, value) => {
    setFormData((prev) => {
      const current = prev[section][field];

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value],
        },
      };
    });
  };

  const nextStep = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const submitForm = async () => {
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/mbgjjdqg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            subject: "JAV Events & Services - Website Questionnaire",
            businessName: formData.business.businessName,
            questionnaire: JSON.stringify(formData, null, 2),
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Unable to submit the questionnaire.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBusinessSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.business.businessName ||
      !formData.business.businessDescription ||
      !formData.business.businessLocation ||
      !formData.business.serviceAreas ||
      !formData.business.businessPhone
    ) {
      alert("Please complete all required fields.");
      return;
    }

    nextStep();
  };

  const handleServicesSubmit = (e) => {
    e.preventDefault();

    if (formData.services.selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    nextStep();
  };

  const handleGoalsSubmit = (e) => {
    e.preventDefault();

    if (
      formData.goals.selectedGoals.length === 0 ||
      !formData.goals.visitorAction
    ) {
      alert("Please select your website goals and preferred visitor action.");
      return;
    }

    nextStep();
  };

  const handleBrandingSubmit = (e) => {
    e.preventDefault();

    if (!formData.branding.hasLogo || !formData.branding.style) {
      alert("Please complete the required branding questions.");
      return;
    }

    nextStep();
  };

  if (submitted) {
    return (
      <div className="app">
        <header className="top-header">
          <div className="brand">
            <div className="brand-mark">JAV</div>
            <div>
              <h3>JAV Events & Services</h3>
              <span>PLAN • CREATE • CELEBRATE</span>
            </div>
          </div>
        </header>

        <main className="success-page">
          <div className="success-card">
            <div className="success-icon">✓</div>

            <div className="eyebrow">QUESTIONNAIRE SUBMITTED</div>

            <h1>
              Thank you for
              <span> trusting us.</span>
            </h1>

            <p>
              Your website project questionnaire has been successfully
              submitted. We'll review your requirements and use your
              answers to plan the best website experience for your
              business.
            </p>

            <div className="success-line"></div>

            <strong>JAV Events & Services</strong>
            <small>PLAN • CREATE • CELEBRATE</small>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="top-header">
        <div className="brand">
          <div className="brand-mark">JAV</div>

          <div>
            <h3>JAV Events & Services</h3>
            <span>PLAN • CREATE • CELEBRATE</span>
          </div>
        </div>

        <div className="header-right">
          <span>WEBSITE PROJECT</span>
        </div>
      </header>

      <main className="main-container">

        {/* INTRO */}
        <section className="hero">
          <div className="eyebrow">WEBSITE PROJECT</div>

          <h1>
            Let's build something
            <span> amazing together.</span>
          </h1>

          <p>
            Tell us about your business, your goals and the experience
            you'd like your new website to create for your customers.
          </p>
        </section>

        {/* PROGRESS */}
        <div className="progress-wrapper">
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{
                width: `${((currentStep - 1) / 7) * 100}%`,
              }}
            ></div>
          </div>

          <div className="steps">
            {steps.map((step, index) => {
              const number = index + 1;

              return (
                <div
                  className={`step ${
                    currentStep === number ? "active" : ""
                  } ${
                    currentStep > number ? "completed" : ""
                  }`}
                  key={step}
                >
                  <div className="step-circle">
                    {currentStep > number ? "✓" : number}
                  </div>

                  <span>{step}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 1 */}
        {currentStep === 1 && (
          <section className="form-card">
            <SectionTitle
              number="01"
              title="Business Information"
              description="Let's start with the basics. Tell us a little about your business."
            />

            <form onSubmit={handleBusinessSubmit}>
              <div className="form-grid">

                <Field
                  label="Official Business Name"
                  required
                  value={formData.business.businessName}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessName",
                      e.target.value
                    )
                  }
                  placeholder="e.g. JAV Events & Services"
                />

                <div className="field">
                  <label>
                    How long have you been in business?{" "}
                    <b>*</b>
                  </label>

                  <select
                    value={formData.business.businessExperience}
                    onChange={(e) =>
                      updateSection(
                        "business",
                        "businessExperience",
                        e.target.value
                      )
                    }
                    required
                  >
                    <option value="">Select an option</option>
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>

                <Field
                  label="Business Location"
                  required
                  value={formData.business.businessLocation}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessLocation",
                      e.target.value
                    )
                  }
                  placeholder="e.g. Port Harcourt, Rivers State"
                />

                <Field
                  label="Areas You Serve"
                  required
                  value={formData.business.serviceAreas}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "serviceAreas",
                      e.target.value
                    )
                  }
                  placeholder="Cities, states or locations"
                />

                <Field
                  label="Business Phone Number"
                  required
                  value={formData.business.businessPhone}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessPhone",
                      e.target.value
                    )
                  }
                  placeholder="+234 800 000 0000"
                />

                <Field
                  label="WhatsApp Number"
                  value={formData.business.businessWhatsApp}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessWhatsApp",
                      e.target.value
                    )
                  }
                  placeholder="+234 800 000 0000"
                />

                <Field
                  label="Business Email"
                  type="email"
                  value={formData.business.businessEmail}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessEmail",
                      e.target.value
                    )
                  }
                  placeholder="hello@yourbusiness.com"
                />

                <Field
                  label="Existing Website"
                  value={formData.business.existingWebsite}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "existingWebsite",
                      e.target.value
                    )
                  }
                  placeholder="https://yourwebsite.com"
                />

                <TextArea
                  full
                  label="Tell us about your business"
                  required
                  value={formData.business.businessDescription}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessDescription",
                      e.target.value
                    )
                  }
                  placeholder="What does your business do? What makes it special?"
                />

                <Field
                  full
                  label="Full Business Address"
                  value={formData.business.businessAddress}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessAddress",
                      e.target.value
                    )
                  }
                  placeholder="Enter your business address"
                />

                <TextArea
                  full
                  label="Business Hours"
                  value={formData.business.businessHours}
                  onChange={(e) =>
                    updateSection(
                      "business",
                      "businessHours",
                      e.target.value
                    )
                  }
                  placeholder="e.g. Monday–Saturday, 9:00 AM–6:00 PM"
                />

              </div>

              <FormFooter>
                <button className="primary-btn" type="submit">
                  Continue to Services
                  <span>→</span>
                </button>
              </FormFooter>
            </form>
          </section>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <section className="form-card">
            <SectionTitle
              number="02"
              title="Your Services"
              description="Tell us what services your business provides."
            />

            <h3 className="question-title">
              What services do you offer?
            </h3>

            <p className="question-description">
              Select all the services you currently provide.
            </p>

            <div className="option-grid">
              {[
                "Event Planning",
                "Wedding Planning",
                "Event Coordination",
                "Ushering Services",
                "Event Decoration",
                "Corporate Events",
                "Birthday Parties",
                "Bridal Events",
                "Private Events",
                "Other",
              ].map((service) => (
                <Option
                  key={service}
                  selected={formData.services.selectedServices.includes(
                    service
                  )}
                  onClick={() =>
                    toggleArray(
                      "services",
                      "selectedServices",
                      service
                    )
                  }
                  text={service}
                />
              ))}
            </div>

            <TextArea
              label="Tell us more about your services"
              value={formData.services.serviceDescription}
              onChange={(e) =>
                updateSection(
                  "services",
                  "serviceDescription",
                  e.target.value
                )
              }
              placeholder="Briefly describe your main services and what customers can expect..."
            />

            <div className="field">
              <label>Which service is your highest priority?</label>

              <select
                value={formData.services.priorityService}
                onChange={(e) =>
                  updateSection(
                    "services",
                    "priorityService",
                    e.target.value
                  )
                }
              >
                <option value="">Select your most important service</option>

                {formData.services.selectedServices.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>

            <FormFooter onBack={previousStep}>
              <button
                className="primary-btn"
                onClick={handleServicesSubmit}
              >
                Continue to Website Goals
                <span>→</span>
              </button>
            </FormFooter>
          </section>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <section className="form-card">
            <SectionTitle
              number="03"
              title="Website Goals"
              description="What should your new website help your business achieve?"
            />

            <h3 className="question-title">
              What are your main website goals?
            </h3>

            <p className="question-description">
              Select everything that applies.
            </p>

            <div className="option-grid">
              {[
                "Get more clients",
                "Showcase our services",
                "Showcase previous events",
                "Receive booking / enquiry requests",
                "Build trust and credibility",
                "Make it easier for customers to contact us",
                "Promote our brand",
                "Other",
              ].map((goal) => (
                <Option
                  key={goal}
                  selected={formData.goals.selectedGoals.includes(
                    goal
                  )}
                  onClick={() =>
                    toggleArray(
                      "goals",
                      "selectedGoals",
                      goal
                    )
                  }
                  text={goal}
                />
              ))}
            </div>

            <h3 className="question-title">
              What should visitors do first?
            </h3>

            <div className="radio-grid">
              {[
                "Contact us on WhatsApp",
                "Call us",
                "Request a quote",
                "Book our services",
                "Send an enquiry",
                "View our previous events",
                "Follow our social media",
              ].map((item) => (
                <label
                  className={`radio-card ${
                    formData.goals.visitorAction === item
                      ? "selected"
                      : ""
                  }`}
                  key={item}
                >
                  <input
                    type="radio"
                    name="visitorAction"
                    checked={
                      formData.goals.visitorAction === item
                    }
                    onChange={() =>
                      updateSection(
                        "goals",
                        "visitorAction",
                        item
                      )
                    }
                  />

                  <span className="radio-dot"></span>
                  {item}
                </label>
              ))}
            </div>

            <TextArea
              label="Describe your vision for the website"
              value={formData.goals.websiteVision}
              onChange={(e) =>
                updateSection(
                  "goals",
                  "websiteVision",
                  e.target.value
                )
              }
              placeholder="What would make you say, 'This is exactly the website I wanted'?"
            />

            <FormFooter onBack={previousStep}>
              <button
                className="primary-btn"
                onClick={handleGoalsSubmit}
              >
                Continue to Branding
                <span>→</span>
              </button>
            </FormFooter>
          </section>
        )}

        {/* STEP 4 */}
        {currentStep === 4 && (
          <section className="form-card">
            <SectionTitle
              number="04"
              title="Branding & Visual Style"
              description="Help us understand the visual direction you want for your brand."
            />

            <div className="field">
              <label>
                Do you already have a logo? <b>*</b>
              </label>

              <div className="radio-grid">
                {["Yes", "No"].map((item) => (
                  <label
                    className={`radio-card ${
                      formData.branding.hasLogo === item
                        ? "selected"
                        : ""
                    }`}
                    key={item}
                  >
                    <input
                      type="radio"
                      name="hasLogo"
                      checked={
                        formData.branding.hasLogo === item
                      }
                      onChange={() =>
                        updateSection(
                          "branding",
                          "hasLogo",
                          item
                        )
                      }
                    />

                    <span className="radio-dot"></span>
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <h3 className="question-title">
              What visual style do you prefer?
            </h3>

            <div className="style-grid">
              {[
                "Luxury",
                "Elegant",
                "Modern",
                "Minimal",
                "Colourful",
                "Corporate",
                "Creative",
                "Traditional",
              ].map((style) => (
                <button
                  type="button"
                  key={style}
                  className={`style-card ${
                    formData.branding.style === style
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    updateSection(
                      "branding",
                      "style",
                      style
                    )
                  }
                >
                  <span className="style-symbol">✦</span>
                  {style}
                </button>
              ))}
            </div>

            <div className="form-grid">
              <Field
                label="Preferred Colours"
                value={formData.branding.colors}
                onChange={(e) =>
                  updateSection(
                    "branding",
                    "colors",
                    e.target.value
                  )
                }
                placeholder="e.g. Purple, Gold, White"
              />

              <Field
                label="Colours You Want to Avoid"
                value={formData.branding.avoidColors}
                onChange={(e) =>
                  updateSection(
                    "branding",
                    "avoidColors",
                    e.target.value
                  )
                }
                placeholder="Any colours you dislike?"
              />

              <TextArea
                full
                label="Reference Websites"
                value={formData.branding.referenceWebsites}
                onChange={(e) =>
                  updateSection(
                    "branding",
                    "referenceWebsites",
                    e.target.value
                  )
                }
                placeholder="Paste links to websites whose style you like..."
              />
            </div>

            <FormFooter onBack={previousStep}>
              <button
                className="primary-btn"
                onClick={handleBrandingSubmit}
              >
                Continue to Content
                <span>→</span>
              </button>
            </FormFooter>
          </section>
        )}

        {/* STEP 5 */}
        {currentStep === 5 && (
          <section className="form-card">
            <SectionTitle
              number="05"
              title="Content & Media"
              description="Let us know what content you already have available for the website."
            />

            <div className="content-question">
              <h3>Do you have professional photos?</h3>

              <div className="radio-grid">
                {["Yes", "No", "Some"].map((item) => (
                  <Radio
                    key={item}
                    text={item}
                    selected={
                      formData.content.hasPhotos === item
                    }
                    onClick={() =>
                      updateSection(
                        "content",
                        "hasPhotos",
                        item
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="content-question">
              <h3>Do you have videos?</h3>

              <div className="radio-grid">
                {["Yes", "No", "Some"].map((item) => (
                  <Radio
                    key={item}
                    text={item}
                    selected={
                      formData.content.hasVideos === item
                    }
                    onClick={() =>
                      updateSection(
                        "content",
                        "hasVideos",
                        item
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="content-question">
              <h3>Do you already have written website content?</h3>

              <div className="radio-grid">
                {["Yes", "No", "Some"].map((item) => (
                  <Radio
                    key={item}
                    text={item}
                    selected={
                      formData.content.hasWrittenContent === item
                    }
                    onClick={() =>
                      updateSection(
                        "content",
                        "hasWrittenContent",
                        item
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <TextArea
              label="Content notes"
              value={formData.content.contentNotes}
              onChange={(e) =>
                updateSection(
                  "content",
                  "contentNotes",
                  e.target.value
                )
              }
              placeholder="Tell us about photos, videos, text, testimonials, event images, etc."
            />

            <div className="upload-info">
              <div className="upload-icon">↑</div>
              <div>
                <strong>Content can be provided later</strong>
                <p>
                  You don't need to upload your files now.
                  We can arrange the content collection after
                  the questionnaire.
                </p>
              </div>
            </div>

            <FormFooter onBack={previousStep}>
              <button
                className="primary-btn"
                onClick={nextStep}
              >
                Continue to Features
                <span>→</span>
              </button>
            </FormFooter>
          </section>
        )}

        {/* STEP 6 */}
        {currentStep === 6 && (
          <section className="form-card">
            <SectionTitle
              number="06"
              title="Website Features"
              description="Choose the features you'd like your website to include."
            />

            <div className="option-grid">
              {[
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
              ].map((feature) => (
                <Option
                  key={feature}
                  selected={formData.features.selectedFeatures.includes(
                    feature
                  )}
                  onClick={() =>
                    toggleArray(
                      "features",
                      "selectedFeatures",
                      feature
                    )
                  }
                  text={feature}
                />
              ))}
            </div>

            <Field
              label="Any custom feature?"
              value={formData.features.customFeature}
              onChange={(e) =>
                updateSection(
                  "features",
                  "customFeature",
                  e.target.value
                )
              }
              placeholder="Tell us about anything else you'd like"
            />

            <div className="field">
              <label>Will customers need to book services online?</label>

              <div className="radio-grid">
                {["Yes", "No", "Not sure"].map((item) => (
                  <Radio
                    key={item}
                    text={item}
                    selected={
                      formData.features.bookingRequired === item
                    }
                    onClick={() =>
                      updateSection(
                        "features",
                        "bookingRequired",
                        item
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <FormFooter onBack={previousStep}>
              <button
                className="primary-btn"
                onClick={nextStep}
              >
                Continue to Contact
                <span>→</span>
              </button>
            </FormFooter>
          </section>
        )}

        {/* STEP 7 */}
        {currentStep === 7 && (
          <section className="form-card">
            <SectionTitle
              number="07"
              title="Contact & Project Details"
              description="Finally, let's collect your contact details and website information."
            />

            <h3 className="question-title">
              How can we contact you?
            </h3>

            <div className="form-grid">
              <Field
                label="Contact Person"
                required
                value={formData.contact.contactName}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "contactName",
                    e.target.value
                  )
                }
                placeholder="Full name"
              />

              <Field
                label="Phone Number"
                required
                value={formData.contact.contactPhone}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "contactPhone",
                    e.target.value
                  )
                }
                placeholder="+234 800 000 0000"
              />

              <Field
                label="WhatsApp Number"
                value={formData.contact.contactWhatsApp}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "contactWhatsApp",
                    e.target.value
                  )
                }
                placeholder="+234 800 000 0000"
              />

              <Field
                label="Email Address"
                type="email"
                value={formData.contact.contactEmail}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "contactEmail",
                    e.target.value
                  )
                }
                placeholder="hello@yourbusiness.com"
              />
            </div>

            <h3 className="question-title">
              Website Domain
            </h3>

            <div className="radio-grid">
              {[
                "Yes, we already have a domain",
                "No, we need a domain",
                "We're not sure yet",
              ].map((item) => (
                <Radio
                  key={item}
                  text={item}
                  selected={
                    formData.contact.domainStatus === item
                  }
                  onClick={() =>
                    updateSection(
                      "contact",
                      "domainStatus",
                      item
                    )
                  }
                />
              ))}
            </div>

            <Field
              label="Existing or preferred domain name"
              value={formData.contact.domainName}
              onChange={(e) =>
                updateSection(
                  "contact",
                  "domainName",
                  e.target.value
                )
              }
              placeholder="e.g. javevents.com"
            />

            <h3 className="question-title">
              Social Media Accounts
            </h3>

            <div className="form-grid">
              <Field
                label="Instagram"
                value={formData.contact.instagram}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "instagram",
                    e.target.value
                  )
                }
                placeholder="https://instagram.com/yourbusiness"
              />

              <Field
                label="Facebook"
                value={formData.contact.facebook}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "facebook",
                    e.target.value
                  )
                }
                placeholder="https://facebook.com/yourbusiness"
              />

              <Field
                label="TikTok"
                value={formData.contact.tiktok}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "tiktok",
                    e.target.value
                  )
                }
                placeholder="https://tiktok.com/@yourbusiness"
              />

              <Field
                label="YouTube"
                value={formData.contact.youtube}
                onChange={(e) =>
                  updateSection(
                    "contact",
                    "youtube",
                    e.target.value
                  )
                }
                placeholder="https://youtube.com/@yourbusiness"
              />
            </div>

            <TextArea
              label="Anything else we should know?"
              value={formData.contact.additionalInformation}
              onChange={(e) =>
                updateSection(
                  "contact",
                  "additionalInformation",
                  e.target.value
                )
              }
              placeholder="Share any final ideas, expectations or special requirements..."
            />

            <div className="notice">
              <div className="notice-icon">✓</div>
              <div>
                <strong>Almost there!</strong>
                <p>
                  Once you continue, you'll have a chance to
                  review everything before submitting.
                </p>
              </div>
            </div>

            <FormFooter onBack={previousStep}>
              <button
                className="primary-btn"
                onClick={() => {
                  if (
                    !formData.contact.contactName ||
                    !formData.contact.contactPhone
                  ) {
                    alert("Please enter your name and phone number.");
                    return;
                  }

                  nextStep();
                }}
              >
                Review Project
                <span>→</span>
              </button>
            </FormFooter>
          </section>
        )}

        {/* STEP 8 */}
        {currentStep === 8 && (
          <section className="form-card review-section">
            <div className="review-intro">
              <div className="review-icon">✓</div>

              <div className="eyebrow">
                FINAL REVIEW
              </div>

              <h2>
                Review your
                <span> project details.</span>
              </h2>

              <p>
                Everything you've entered is shown below.
                Please review your answers before submitting.
              </p>
            </div>

            <ReviewCard
              number="01"
              title="Business Information"
              items={[
                ["Business Name", formData.business.businessName],
                ["Experience", formData.business.businessExperience],
                ["Location", formData.business.businessLocation],
                ["Service Areas", formData.business.serviceAreas],
                ["Phone", formData.business.businessPhone],
                ["WhatsApp", formData.business.businessWhatsApp],
                ["Email", formData.business.businessEmail],
                ["Description", formData.business.businessDescription],
              ]}
            />

            <ReviewCard
              number="02"
              title="Services"
              items={[
                [
                  "Selected Services",
                  formData.services.selectedServices.join(", "),
                ],
                [
                  "Priority Service",
                  formData.services.priorityService,
                ],
                [
                  "Description",
                  formData.services.serviceDescription,
                ],
              ]}
            />

            <ReviewCard
              number="03"
              title="Website Goals"
              items={[
                [
                  "Goals",
                  formData.goals.selectedGoals.join(", "),
                ],
                [
                  "Main Visitor Action",
                  formData.goals.visitorAction,
                ],
                [
                  "Vision",
                  formData.goals.websiteVision,
                ],
              ]}
            />

            <ReviewCard
              number="04"
              title="Branding"
              items={[
                ["Has Logo", formData.branding.hasLogo],
                ["Style", formData.branding.style],
                ["Colours", formData.branding.colors],
                [
                  "Avoid Colours",
                  formData.branding.avoidColors,
                ],
                [
                  "Reference Websites",
                  formData.branding.referenceWebsites,
                ],
              ]}
            />

            <ReviewCard
              number="05"
              title="Content"
              items={[
                ["Photos", formData.content.hasPhotos],
                ["Videos", formData.content.hasVideos],
                [
                  "Written Content",
                  formData.content.hasWrittenContent,
                ],
                ["Notes", formData.content.contentNotes],
              ]}
            />

            <ReviewCard
              number="06"
              title="Features"
              items={[
                [
                  "Selected Features",
                  formData.features.selectedFeatures.join(", "),
                ],
                [
                  "Custom Feature",
                  formData.features.customFeature,
                ],
                [
                  "Online Booking",
                  formData.features.bookingRequired,
                ],
              ]}
            />

            <ReviewCard
              number="07"
              title="Contact"
              items={[
                ["Name", formData.contact.contactName],
                ["Phone", formData.contact.contactPhone],
                ["WhatsApp", formData.contact.contactWhatsApp],
                ["Email", formData.contact.contactEmail],
                ["Domain", formData.contact.domainName],
                ["Instagram", formData.contact.instagram],
              ]}
            />

            <div className="submit-notice">
              <div className="notice-icon">✓</div>

              <div>
                <strong>Ready to submit?</strong>

                <p>
                  Your information will be sent securely for
                  review so we can understand your website
                  requirements and prepare the next steps.
                </p>
              </div>
            </div>

            <div className="review-footer">
              <button
                className="secondary-btn"
                onClick={previousStep}
              >
                ← Back
              </button>

              <button
                className="primary-btn"
                onClick={submitForm}
                disabled={submitting}
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Questionnaire"}
                {!submitting && <span>→</span>}
              </button>
            </div>
          </section>
        )}

      </main>

      <footer className="footer">
        <div className="footer-brand">JAV</div>

        <div>
          <strong>JAV Events & Services</strong>
          <span>PLAN • CREATE • CELEBRATE</span>
        </div>

        <p>Website Project Questionnaire</p>
      </footer>
    </div>
  );
}

/* COMPONENT HELPERS */

function SectionTitle({ number, title, description }) {
  return (
    <div className="section-title">
      <div className="section-number">{number}</div>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  full = false,
}) {
  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label>
        {label} {required && <b>*</b>}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function TextArea({
  label,
  required,
  value,
  onChange,
  placeholder,
  full = false,
}) {
  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label>
        {label} {required && <b>*</b>}
      </label>

      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="5"
        required={required}
      />
    </div>
  );
}

function Option({ selected, onClick, text }) {
  return (
    <button
      type="button"
      className={`option-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className="check-box">
        {selected ? "✓" : ""}
      </span>

      <span>{text}</span>
    </button>
  );
}

function Radio({ text, selected, onClick }) {
  return (
    <button
      type="button"
      className={`radio-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className="radio-dot"></span>
      {text}
    </button>
  );
}

function FormFooter({ children, onBack }) {
  return (
    <div className="form-footer">
      {onBack ? (
        <button
          type="button"
          className="secondary-btn"
          onClick={onBack}
        >
          ← Back
        </button>
      ) : (
        <div></div>
      )}

      {children}
    </div>
  );
}

function ReviewCard({ number, title, items }) {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <h3>{title}</h3>
        <div className="review-number">{number}</div>
      </div>

      <div className="review-grid">
        {items.map(([label, value]) => (
          <div className="review-item" key={label}>
            <small>{label}</small>
            <p>{value || "Not provided"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;