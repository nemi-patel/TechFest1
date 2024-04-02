import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Timeline_new.css";

function Timeline_new() {
//   useEffect(() => {
//     try {
//       axios.get("http://127.0.0.1:8000/api/timelines/").then((res) => {
//         console.log(res.data);
//         // setPositions(res.data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
// useEffect(()=>{
//     try {
//         axios
//           .post("http://127.0.0.1:8000/api/timelines/")
//           .then((data) => {})
//           .catch((error) => {
//             console.log(error);
//           });
//       } catch (error) {
//         console.error(error);
//       }
// })

  return (
    <>
      <div className="timeline" style={{}}>
        <div class="title_timeline">
          <h1>Schedual</h1>
        </div>
        <div className="horizontal-line"></div>
      </div>
      <section className="timeline-section">
      
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2015</div>
            <div className="timeline-content">
              <h3>timeline item title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2016</div>
            <div className="timeline-content">
              <h3>timeline item title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Timeline_new;
