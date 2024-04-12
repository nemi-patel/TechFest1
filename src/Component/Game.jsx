import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/game_detail.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import quiz from "../Image/quiz_big.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from "react";


function Game() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
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
      <Navbar style={{positions:"absolute"}} />
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      {positions.map((value, index) => (
        <section key={index} id="delivery" className="code_troika">
          <div className="quiz-section">
            <div className="col-5 delivery-img">
              <img
                src={quiz}
                alt="Productivity Delivering Experience"
                title="Delivering Experience Since 2009"
                data-aos="fade-right"
              />
              {/* <img
                src={value.image}
                alt="Productivity Delivering Experience"
                title="Delivering Experience Since 2009"
              /> */}
            </div>
            <div className="col-7">
              <h1 className="sec-heading" data-aos="fade-down" style={{color:"#fff"}}>{value.game_name}</h1>
              <h2 data-aos="fade-left">
                Accelerating your business growth with Digital Experiences
              </h2>
              <ul>
                {value.description.split("\n").map((item, itemIndex) => (
                  <li
                    key={itemIndex} data-aos="fade-left"
                    style={{ listStyle: "none", textAlign: "left",color:"#fff" }}>
                    <span style={{ marginRight: "5px" }}>★</span>
                    {item}
                  </li>
                ))}
              </ul>
              <br />
              <div className="btn-footer" data-aos="fade-left">
                <Link to="/form" className="brand-btn" >
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
