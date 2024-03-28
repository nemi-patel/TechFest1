import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Timeline.css";
import registration from "../Image/registration.png";
import inaugration from "../Image/inaugration.png";
import art from "../Image/art_gallary.png";
import Valedictory from "../Image/valedictory.png";
import rock from "../Image/rock.png";

function Timeline() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://127.0.0.1:8000/api/timelines/").then((res) => {
        console.log(res.data);
        // setPositions(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  },[]);

  return (
    <>
      {/* <div className="timeline" style={{background: "#6c757d7d"}}>
        <div className="container_timeline left-container">
          <img src={registration} alt="" />
          <div className="text-box-timeline"> 
            <h2>{position.Name}</h2>
            <br />  
            <small>{position.Time}</small>
            <br />
            <br />
            <p>{position.Description}</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container_timeline right-container">
          <img src={inaugration} alt="" />
          <div className="text-box-timeline">
            <h2>Inaugration</h2>
            <br />
            <small>9:30 AM TO 11:00 AM</small>
            <br />
            <br />
            <p>Shivgauri hall</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container_timeline left-container">
          <img src={art} alt="" />
          <div className="text-box-timeline">
            <h2>Art Gallary</h2>
            <br />
            <small>11:00 AM TO 3:00 AM</small>
            <br />
            <br />
            <p>Room no.204 (VVWU)</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container_timeline right-container">
          <img src={Valedictory} alt="" />
          <div className="text-box-timeline">
            <h2>Valedictory Session</h2>
            <br />
            <small>3:30 AM TO 4:30 AM</small>
            <br />
            <br />
            <p>All Staff Members-second Floor</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container_timeline left-container">
          <img src={rock} alt="" />
          <div className="text-box-timeline">
            <h2>Rock on Stage</h2>
            <br />
            <small>11:00 AM TO 3:00 AM</small>
            <br />
            <br />
            <p>All Staff Members-second Floor</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div> */}
      
      <div className="timeline" style={{}}>
      <div class="title_timeline">
        <h1>Schedual</h1>
      </div>
      <div className="horizontal-line"></div>

        {positions.map((value, index) => (
          <div
            key={index}
            className={`container_timeline ${
              index % 2 === 0 ? "left-container" : "right-container"
            }`}>
            <img src={value.Image} alt="" />
            <div className="text-box-timeline">
              <h2>{value.Name}</h2>
              <br />
              <small>{value.time}</small>
              <br />
              <br />
              <p>{value.description}</p>
              <span
                className={`${
                  index % 2 === 0
                    ? "left-container-arrow"
                    : "right-container-arrow"
                }`}></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Timeline;
