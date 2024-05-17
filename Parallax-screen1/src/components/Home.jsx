import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import { gsap, Power4 } from "gsap";
import Parallax from "parallax-js";
import "./Home.css";
import Background from "./images/background.png";
import Rock from "./images/rock.png";
import Earth from "./images/earth.png";
import Mid from "./images/mid.png";
import forground from "./images/foreground.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import Instagram from "./images/instagram-logo.png";
import Logo from "./images/my-logo.png";
import ScrollDown from "./images/Animation.gif";
import React from "./images/React.png";

const Planets = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    const parallaxInstance = new Parallax(scene);

    const keys = [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ];

    const slider = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 150,
      centeredSlides: true,
      mousewheel: true,
      pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '">' + keys[index] + "</div>";
        },
      },
    });

    slider.on("slideChange", () => {
      console.log("SLIDE CHANGED");
      gsap.to(".slide-text span", 0.2, {
        x: "-100px",
      });
      gsap.to(".slide-number span", 0.2, {
        x: "-100px",
      });
      gsap.to(".slide-detail span", 0.5, {
        x: "-1000px",
      });
      gsap.to(".slide-detail-facts div", 0.5, {
        x: "-1000px",
      });
      gsap.to(".swiper-slide-active", 0.5, {
        scale: 0.85,
      });
      gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 20,
      });
    });

    slider.on("slideChangeTransitionEnd", () => {
      gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 10,
      });
      gsap.to(".slide-text span", 0.2, {
        x: 0,
        delay: 0.1,
      });
      gsap.to(".slide-text span", 0, {
        x: "100px",
      });

      gsap.to(".slide-number span", 0.2, {
        x: 0,
      });
      gsap.to(".slide-number span", 0, {
        x: "100px",
      });

      gsap.to(".slide-detail span", 0.2, {
        x: 0,
      });

      gsap.to(".slide-detail-facts div", 0.5, {
        x: 0,
      });

      gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut,
      });

      gsap.to(".swiper-slide-active .slide-text", 0, {
        autoAlpha: 1,
      });
      gsap.to(".swiper-slide-active .slide-number", 0, {
        autoAlpha: 1,
      });

      gsap.to(".swiper-slide-next .slide-text", 0, {
        autoAlpha: 0,
      });
      gsap.to(".swiper-slide-prev .slide-text", 0, {
        autoAlpha: 0,
      });

      gsap.to(".swiper-slide-next .slide-number", 0, {
        autoAlpha: 0,
      });
      gsap.to(".swiper-slide-prev .slide-number", 0, {
        autoAlpha: 0,
      });
    });

    gsap.to(".rockbg1", 2, {
      y: 12,
      repeat: -1,
      yoyo: true,
      delay: 0,
    });

    gsap.to(".swiper-slide-next .slide-text", 0, {
      autoAlpha: 0,
    });
    gsap.to(".swiper-slide-prev .slide-text", 0, {
      autoAlpha: 0,
    });

    gsap.to(".swiper-slide-next .slide-number", 0, {
      autoAlpha: 0,
    });
    gsap.to(".swiper-slide-prev .slide-number", 0, {
      autoAlpha: 0,
    });

    gsap.to(".swiper-slide", 0, {
      scale: 0.85,
    });

    gsap.to(".swiper-slide-active", 0, {
      scale: 1,
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Logo} alt="LinkedIn" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <img src={linkedin} alt="LinkedIn" />
            </li>
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
            <li>
              <img src={Instagram} alt="Instagram" />
            </li>
          </ul>
        </div>
      </nav>

      <section id="sectionone" className="screen">
        <div id="scene">
          <div data-depth="0.1" className="bg">
            <img src={Background} alt="Background" />
          </div>
          <div data-depth="0.2" className="rock1">
            <img src={Rock} alt="Rock" />
          </div>
          <div data-depth="1.2" className="earth">
            <img src={Earth} alt="Earth" />
          </div>
          <div data-depth="0.1" className="text">
            <h1>SANDEEP BEHERA</h1>
            <h3>Full Stack Web Developer</h3>
            <p>
              With proficiency in JavaScript libraries such as React and
              Next.js, along with a flair for high-impact creative design, I
              excel in crafting dynamic and visually captivating digital
              experiences.
            </p>
          </div>
          <div data-depth="0.4" className="mid">
            <img src={Mid} alt="Mid" />
          </div>
          <div data-depth="0.1" className="fore">
            <img src={forground} alt="Foreground" />
          </div>
        </div>
        <div className="scrollDown">
          <img src={ScrollDown} alt="" />
        </div>
      </section>

      {/* about section */}
      <div style={{ height: "100vh" }}>
        <div className="about-container container-background">
          <div className="container-text">
            <h1>About</h1>

            <div className="About-text-desc">
              <h3>Hello,</h3>
              <p>
                I'm Sandeep Kumar Behera, a BTech graduate from Bhubaneswar,
                Odisha, deeply passionate about web development. My journey into
                this dynamic field commenced during my college days, igniting a
                spark within me that has since evolved into a blazing passion.
                With every line of code I write, I strive to infuse creativity
                and innovation, crafting websites that transcend mere
                functionality to become immersive digital experiences.
              </p>
              <br />
              <p>
                Driven by my love for design, I specialize in creating
                high-impact, pixel-perfect UIs that captivate users from the
                moment they land on a page. Beyond technical proficiency, my
                greatest strength lies in my ability to seamlessly blend
                cutting-edge technologies with aesthetically pleasing designs,
                resulting in visually stunning websites that leave a lasting
                impression.
              </p>
              <br />
              <p>
                When I'm not immersed in the world of web development, you'll
                often find me embarking on new adventures, exploring the world
                one destination at a time. Let's collaborate to turn your
                digital vision into a reality that resonates with audiences and
                stands the test of time.
              </p>
            </div>
          </div>
          <div className="container-image-div"></div>
        </div>
      </div>

      {/* skills section */}
      <div style={{ height: "100vh" }}>
        <div className="skills-container container-background">
          <div className="container-text">
            <h1>Skills</h1>
          </div>
          <div className="container-image-div">
            <div className="skills-div">
              <img src={React} alt="" />
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
