import React from "react";
import "./landingPage.css";

function mainSubsection({ className, header, text, src, alt, href, buttonTitle}) {
  return (
    <section className={className}>
      <div className="section-image"><img src={src} alt={alt} /></div>
      <div className="main-subsection cadet">
        <h3>{header}</h3>
        <p>{text}</p>
        <button id="main-subsection-button"><a href={href}>{buttonTitle}</a></button>
      </div>
    </section>
  );
}

export default mainSubsection;
