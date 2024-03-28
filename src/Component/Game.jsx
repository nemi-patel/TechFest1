import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/game_detail.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Game() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/api/rules/")
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
      <Navbar />
      {positions.map((value, index) => (
        <section key={index} id="delivery" className="code_troika">
          <div className="quiz-section">
            <div className="col-5 delivery-img">
              <img
                src={value.image}
                alt="Productivity Delivering Experience"
                title="Delivering Experience Since 2009"
              />
            </div>
            <div className="col-7">
              <h1 className="sec-heading">{value.game_name}</h1>
              <h2>
                Accelerating your business growth with Digital Experiences
              </h2>
              <ul>
                {value.description.split("\n").map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{ listStyle: "none", textAlign: "left" }}>
                    <span style={{ marginRight: "5px" }}>★</span>
                    {item}
                  </li>
                ))}
              </ul>
              <br />
              <div className="btn-footer">
                <Link to="/form" className="brand-btn">
                  Register now
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ------------------------------------------------------------------------------------------------------------------- */}
      {/* <section id="delivery">
        <div className="buzzer-section">
          <div className="col-7">
            <h1 className="sec-heading">Quizzard</h1>
            <h2>Accelerating your business growth with Digital Experiences</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            <br /> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
            <div className="btn-footer">
              <a href="" className="brand-btn">
                Register now
              </a>
            </div>
          </div>
          <div className="col-5 delivery-img">
            <img
              src={quiz}
              alt="Productivity Delivering Experience"
              title="Delivering Experience Since 2009"
            />
          </div>
        </div>  
        </section> */}
    </>
  );
}
export default Game;
