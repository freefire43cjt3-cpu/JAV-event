import React from "react";
import "./Services.css";

function Services({
  onNext,
  onBack,
  formData,
  updateFormData,
}) {
  const services = [
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
  ];

  const selectedServices = formData?.selectedServices || [];

  const toggleService = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((item) => item !== service)
      : [...selectedServices, service];

    updateFormData({
      selectedServices: updatedServices,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    onNext();
  };

  return (
    <section className="services-section form-card">

      <div className="section-heading">

        <div className="section-number">
          02
        </div>

        <div>
          <h2>Your Services</h2>

          <p>
            Tell us what services your business provides and
            which ones you want your website to highlight.
          </p>
        </div>

      </div>


      <form onSubmit={handleSubmit}>

        <div className="services-intro">

          <h3>
            What services do you offer?
          </h3>

          <p>
            Select all the services you currently provide.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service) => (

            <button
              type="button"
              key={service}
              className={`service-option ${
                selectedServices.includes(service)
                  ? "selected"
                  : ""
              }`}
              onClick={() => toggleService(service)}
            >

              <span className="service-check">
                {selectedServices.includes(service)
                  ? "✓"
                  : ""}
              </span>

              <span className="service-name">
                {service}
              </span>

            </button>

          ))}

        </div>


        <div className="services-field">

          <label htmlFor="serviceDescription">
            Tell us more about your services
          </label>

          <textarea
            id="serviceDescription"
            name="serviceDescription"
            value={formData?.serviceDescription || ""}
            onChange={handleChange}
            placeholder="Briefly describe your main services and what customers can expect..."
            rows="5"
          />

          <small>
            This information will help us structure your
            Services section clearly.
          </small>

        </div>


        <div className="services-field">

          <label htmlFor="priorityService">
            Which service is your highest priority?
          </label>

          <select
            id="priorityService"
            name="priorityService"
            value={formData?.priorityService || ""}
            onChange={handleChange}
          >

            <option value="" disabled>
              Select your most important service
            </option>

            {services.map((service) => (

              <option
                value={service}
                key={service}
              >
                {service}
              </option>

            ))}

          </select>

        </div>


        <div className="services-form-footer">

          <button
            type="button"
            className="services-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>


          <button
            type="submit"
            className="services-next-btn"
          >
            Continue to Website Goals

            <span>→</span>
          </button>

        </div>

      </form>

    </section>
  );
}

export default Services;