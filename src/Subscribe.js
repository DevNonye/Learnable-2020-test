import React from "react";
import '';
import TopArrow from "../../images/Go back to Top.svg"

function Subscribe() {
  return (
    <section id="subscribe-container">
      <a href=""><img src={TopArrow} alt="Go up" /></a>
      <div className="subscribe-section" id="subscribe-section-landing">
        <h2>
          Stay up to date on what we are doing and new learning opportunities
        </h2>
        <form id="subscribe-form">
          <div id="email-privacy">
            <input type="email" placeholder="Your email"></input>
            <a href="/privacy-policy"> View Privacy Policy </a>
          </div>
          <button type="submit"> SUBSCRIBE </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
