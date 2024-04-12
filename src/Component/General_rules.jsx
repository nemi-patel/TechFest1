import React, { useEffect } from "react";
import "../CSS/General_rules.css";
import background from "../Image/General_rules_back.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function General_rules() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div
        className="General_rules">
        <div className="overlay" />
        <div className="content">
          <h1
            className="General_rules_title"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{ color: "#fff" }}>
            GENERAL RULES FOR PARTICIPANT
          </h1>
          <br />
          <div
            className="General_rules_subtitle"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            100 ₹ Fees For Registration
          </div>
          <div
            className="General_rules_subtitle"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            Only girl's can participats
          </div>
          <div
            className="General_rules_subtitle"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            Can participate in only two events
          </div>
        </div>
      </div>
    </>
  );
}

export default General_rules;
