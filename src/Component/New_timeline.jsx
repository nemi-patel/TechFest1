import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Timeline_new.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

function Timeline_new() {
  const [positions, setPositions] = useState([]);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
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

  useEffect(() => {
    try {
      axios.get("http://127.0.0.1:8000/api/timelines/").then((res) => {
        console.log(res.data);
        setPositions(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="timeline" style={{}}>
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
        <div class="title_timeline">
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            SCHEDULE
          </h2>

          <section className="timeline-section">
            <div className="timeline-items">
              {positions.map((value, index) => (
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{value.Name}</div>
                  <div className="timeline-content">
                    <h3>9:30 AM TO 11:00 AM</h3>
                    <p>At Shivgauri hall</p>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Timeline_new;
