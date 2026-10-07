import React, { useState } from "react";
import "./WebsiteGoals.css";

function WebsiteGoals({ onNext, onBack }) {
  const [goals, setGoals] = useState([]);
  const [visitorAction, setVisitorAction] = useState("");

  const goalOptions = [
    "Get more clients",
    "Showcase our services",
    "Showcase previous events",
    "Receive booking / enquiry requests",
    "Build trust and credibility",
    "Make it easier for customers to contact us",
    "Promote our brand",
    "Other",
  ];

  const actionOptions = [
    "Contact us on WhatsApp",
    "Call us",
    "Request a quote",
    "Book our services",
    "Send an enquiry",
    "View our previous events",
    "Follow our social media",
  ];

  const toggleGoal = (goal) => {
    setGoals((previous) =>
      previous.includes(goal)
        ? previous.filter((item) => item !== goal)
        : [...previous, goal]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (goals.length === 0 || !visitorAction) {
      return;
    }

    onNext();
  };

  return (
    <section className="website-goals-section form-card">

      <div className="section-heading">
        <div className="section-number">03</div>

        <div>
          <h2>Website Goals</h2>
          <p>
            Let's understand what you want the new website to
            accomplish for your business.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* MAIN GOALS */}

        <div className="goals-block">
          <div className="goals-title">
            <h3>What should the website help you achieve?</h3>

            <p>
              Select all the goals that are important to your business.
            </p>
          </div>

          <div className="goals-grid">
            {goalOptions.map((goal) => (
              <button
                type="button"
                key={goal}
                className={`goal-option ${
                  goals.includes(goal) ? "selected" : ""
                }`}
                onClick={() => toggleGoal(goal)}
              >
                <span className="goal-check">
                  {goals.includes(goal) ? "✓" : ""}
                </span>

                <span>{goal}</span>
              </button>
            ))}
          </div>
        </div>


        {/* VISITOR ACTION */}

        <div className="visitor-action-block">

          <div className="goals-title">
            <h3>What should visitors do after visiting your website?</h3>

            <p>
              Choose the main action you want customers to take.
            </p>
          </div>

          <div className="action-options">

            {actionOptions.map((action) => (
              <label
                className={`action-option ${
                  visitorAction === action ? "selected" : ""
                }`}
                key={action}
              >
                <input
                  type="radio"
                  name="visitorAction"
                  value={action}
                  checked={visitorAction === action}
                  onChange={(e) =>
                    setVisitorAction(e.target.value)
                  }
                />

                <span className="custom-radio"></span>

                <span className="action-text">
                  {action}
                </span>
              </label>
            ))}

          </div>
        </div>


        {/* EXTRA INFORMATION */}

        <div className="goals-field">

          <label htmlFor="websiteVision">
            Is there anything else you want the website to achieve?
          </label>

          <textarea
            id="websiteVision"
            name="websiteVision"
            placeholder="Tell us about any specific results, ideas, or expectations you have for the website..."
            rows="5"
          />

          <small>
            Don't worry if you're not sure yet. We can help recommend
            the best approach.
          </small>

        </div>


        {/* FOOTER */}

        <div className="website-goals-footer">

          <button
            type="button"
            className="goals-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>

          <button
            type="submit"
            className="goals-next-btn"
          >
            Continue to Branding
            <span>→</span>
          </button>

        </div>

      </form>
    </section>
  );
}

export default WebsiteGoals;