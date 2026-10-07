import React, { useState } from "react";

import Header from "./components/Header";
import BusinessInfo from "./components/BusinessInfo";
import Services from "./components/Services";
import WebsiteGoals from "./components/WebsiteGoals";
import Branding from "./components/Branding";
import Content from "./components/Content";
import Features from "./components/Features";
import Contact from "./components/Contact";
import ReviewSubmit from "./components/ReviewSubmit";

import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    business: {},
    services: {},
    websiteGoals: {},
    branding: {},
    content: {},
    features: {},
    contact: {},
  });

  /* ================================
     UPDATE FORM DATA
  ================================= */

  const updateFormData = (section, data) => {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        ...data,
      },
    }));
  };

  /* ================================
     NEXT STEP
  ================================= */

  const nextStep = () => {
    setCurrentStep((previous) => previous + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================================
     PREVIOUS STEP
  ================================= */

  const previousStep = () => {
    setCurrentStep((previous) => previous - 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      <Header />

      <main className="questionnaire">

        {/* ================================
            INTRO
        ================================= */}

        <section className="intro-section">

          <div className="intro-badge">
            WEBSITE PROJECT
          </div>

          <h1>
            Let's build something
            <span>amazing together.</span>
          </h1>

          <p>
            Tell us about your business, your goals, and what
            you'd like your new website to achieve. Your answers
            will help us understand your vision and create the
            right experience for your customers.
          </p>

        </section>


        {/* ================================
            STEP INDICATOR
        ================================= */}

        <div className="step-indicator">

          {[
            "Business",
            "Services",
            "Goals",
            "Branding",
            "Content",
            "Features",
            "Contact",
            "Review",
          ].map((step, index) => {

            const stepNumber = index + 1;

            return (
              <div
                className={`step-item ${
                  currentStep === stepNumber
                    ? "active"
                    : ""
                }`}
                key={step}
              >

                <div className="step-number">
                  {stepNumber}
                </div>

                <span>
                  {step}
                </span>

              </div>
            );

          })}

        </div>


        {/* ================================
            STEP 1 — BUSINESS
        ================================= */}

        {currentStep === 1 && (
          <BusinessInfo
            onNext={nextStep}
            formData={formData.business}
            updateFormData={(data) =>
              updateFormData("business", data)
            }
          />
        )}


        {/* ================================
            STEP 2 — SERVICES
        ================================= */}

        {currentStep === 2 && (
          <Services
            onNext={nextStep}
            onBack={previousStep}
            formData={formData.services}
            updateFormData={(data) =>
              updateFormData("services", data)
            }
          />
        )}


        {/* ================================
            STEP 3 — WEBSITE GOALS
        ================================= */}

        {currentStep === 3 && (
          <WebsiteGoals
            onNext={nextStep}
            onBack={previousStep}
            formData={formData.websiteGoals}
            updateFormData={(data) =>
              updateFormData(
                "websiteGoals",
                data
              )
            }
          />
        )}


        {/* ================================
            STEP 4 — BRANDING
        ================================= */}

        {currentStep === 4 && (
          <Branding
            onNext={nextStep}
            onBack={previousStep}
            formData={formData.branding}
            updateFormData={(data) =>
              updateFormData(
                "branding",
                data
              )
            }
          />
        )}


        {/* ================================
            STEP 5 — CONTENT
        ================================= */}

        {currentStep === 5 && (
          <Content
            onNext={nextStep}
            onBack={previousStep}
            formData={formData.content}
            updateFormData={(data) =>
              updateFormData(
                "content",
                data
              )
            }
          />
        )}


        {/* ================================
            STEP 6 — FEATURES
        ================================= */}

        {currentStep === 6 && (
          <Features
            onNext={nextStep}
            onBack={previousStep}
            formData={formData.features}
            updateFormData={(data) =>
              updateFormData(
                "features",
                data
              )
            }
          />
        )}


        {/* ================================
            STEP 7 — CONTACT
        ================================= */}

        {currentStep === 7 && (
          <Contact
            onNext={nextStep}
            onBack={previousStep}
            formData={formData.contact}
            updateFormData={(data) =>
              updateFormData(
                "contact",
                data
              )
            }
          />
        )}


        {/* ================================
            STEP 8 — REVIEW & SUBMIT
        ================================= */}

        {currentStep === 8 && (
          <ReviewSubmit
            formData={formData}
            onBack={previousStep}
          />
        )}

      </main>

    </div>
  );
}

export default App;