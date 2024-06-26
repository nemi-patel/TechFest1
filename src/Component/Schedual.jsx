import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/Schedual.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Schedual() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/api/games/")
        .then((res) => {
          console.log(res);
          setPositions(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <>
      <div className="schedule" id="schedule">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          GAME DETAILS
        </h2>
        <div className="scheduale_card">
          {positions.map((value, index) => (
            <div
              className="card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <img src={value.game_image} alt="" />
              {/* <img src={error} alt="" /> */}
              <div className="schedule_info">
                <div className="schedule_time_name">
                  <h3>{value.game_name}</h3>
                  <span>{value.time}</span>
                  <br />
                  <span>Student Year :{value.Student_year}</span>
                </div>
                <p>{value.game_details}</p>
                <Link to="/game" className="schedule_btn">
                  More detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="schedule" id="schedule">
          <h2>GAME DETAILS</h2>
          <div className="scheduale_card">
            <div className="card">
              <img src={error} alt="" />
              <div className="schedule_info">
                <div className="schedule_time_name">
                  <h3>Code Troika War</h3>
                  <span>11:00 AM TO 12:30 PM</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium, qui.
                </p>
                <Link to="/game" className="schedule_btn">
                  More detail
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={error} alt="" />
              <div className="schedule_info">
                <div className="schedule_time_name">
                  <h3>Code Troika War</h3>
                  <span>11:00 AM TO 12:30 PM</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium, qui.
                </p>
                <Link to="/game" className="schedule_btn">
                  More detail
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={error} alt="" />
              <div className="schedule_info">
                <div className="schedule_time_name">
                  <h3>Code Troika War</h3>
                  <span>11:00 AM TO 12:30 PM</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium, qui.
                </p>
                <Link to="/game" className="schedule_btn">
                  More detail
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={error} alt="" />
              <div className="schedule_info">
                <div className="schedule_time_name">
                  <h3>Code Troika War</h3>
                  <span>11:00 AM TO 12:30 PM</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium, qui.
                </p>
                <Link to="/game" className="schedule_btn">
                  More detail
                </Link>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}
export default Schedual;
