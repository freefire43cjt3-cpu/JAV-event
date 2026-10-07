import React, { useState } from "react";
import "./Content.css";

function Content({ onNext, onBack }) {
  const [hasPhotos, setHasPhotos] = useState("");
  const [hasVideos, setHasVideos] = useState("");
  const [hasWrittenContent, setHasWrittenContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hasPhotos || !hasWrittenContent) {
      return;
    }

    onNext();
  };

  return (
    <section className="content-section form-card">

      <div className="section-heading">
        <div className="section-number">05</div>

        <div>
          <h2>Content & Media</h2>
          <p>
            Tell us what content and media you already have
            available for the website.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* PHOTOS */}

        <div className="content-block">

          <div className="content-title">
            <h3>Do you have professional event photos?</h3>

            <p>
              High-quality images can make a major difference
              to the look of your website.
            </p>
          </div>

          <div className="content-choice-grid">

            <button
              type="button"
              className={`content-choice ${
                hasPhotos === "Yes" ? "selected" : ""
              }`}
              onClick={() => setHasPhotos("Yes")}
            >
              <span className="content-icon">✓</span>

              <span>
                <strong>Yes, we have photos</strong>
                <small>
                  We can provide event and business photos.
                </small>
              </span>
            </button>

            <button
              type="button"
              className={`content-choice ${
                hasPhotos === "No" ? "selected" : ""
              }`}
              onClick={() => setHasPhotos("No")}
            >
              <span className="content-icon">+</span>

              <span>
                <strong>Not currently</strong>
                <small>
                  We may need suitable images or recommendations.
                </small>
              </span>
            </button>

          </div>
        </div>


        {/* VIDEOS */}

        <div className="content-block">

          <div className="content-title">
            <h3>Do you have videos?</h3>

            <p>
              For example, event highlights, promotional videos,
              reels, or previous event footage.
            </p>
          </div>

          <div className="content-choice-grid">

            <button
              type="button"
              className={`content-choice ${
                hasVideos === "Yes" ? "selected" : ""
              }`}
              onClick={() => setHasVideos("Yes")}
            >
              <span className="content-icon">✓</span>

              <span>
                <strong>Yes, we have videos</strong>
                <small>
                  We can provide videos for the website.
                </small>
              </span>
            </button>

            <button
              type="button"
              className={`content-choice ${
                hasVideos === "No" ? "selected" : ""
              }`}
              onClick={() => setHasVideos("No")}
            >
              <span className="content-icon">+</span>

              <span>
                <strong>No videos</strong>
                <small>
                  Videos are not currently available.
                </small>
              </span>
            </button>

          </div>
        </div>


        {/* WRITTEN CONTENT */}

        <div className="content-block">

          <div className="content-title">
            <h3>Do you already have written website content?</h3>

            <p>
              This could include your About Us, service descriptions,
              company story, or other written information.
            </p>
          </div>

          <div className="content-choice-grid">

            <button
              type="button"
              className={`content-choice ${
                hasWrittenContent === "Yes" ? "selected" : ""
              }`}
              onClick={() => setHasWrittenContent("Yes")}
            >
              <span className="content-icon">✓</span>

              <span>
                <strong>Yes, we have content</strong>
                <small>
                  We'll provide the existing written content.
                </small>
              </span>
            </button>

            <button
              type="button"
              className={`content-choice ${
                hasWrittenContent === "No" ? "selected" : ""
              }`}
              onClick={() => setHasWrittenContent("No")}
            >
              <span className="content-icon">+</span>

              <span>
                <strong>We need help with content</strong>
                <small>
                  We may need help preparing the website copy.
                </small>
              </span>
            </button>

          </div>
        </div>


        {/* UPLOAD INFORMATION */}

        <div className="content-upload-box">

          <div className="upload-icon">↑</div>

          <div>
            <h3>Project Files</h3>

            <p>
              Logo, photos, videos, documents, testimonials,
              or other materials can be provided during the
              project.
            </p>
          </div>

        </div>


        {/* EXTRA CONTENT */}

        <div className="content-field">

          <label htmlFor="contentNotes">
            Is there any other content we should know about?
          </label>

          <textarea
            id="contentNotes"
            name="contentNotes"
            placeholder="Tell us about any documents, testimonials, photos, videos, or other content you would like included..."
            rows="5"
          />

        </div>


        {/* FOOTER */}

        <div className="content-footer">

          <button
            type="button"
            className="content-back-btn"
            onClick={onBack}
          >
            <span>←</span>
            Back
          </button>

          <button
            type="submit"
            className="content-next-btn"
          >
            Continue to Features
            <span>→</span>
          </button>

        </div>

      </form>
    </section>
  );
}

export default Content;