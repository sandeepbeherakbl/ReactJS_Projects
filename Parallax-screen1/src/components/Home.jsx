import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import { gsap, Power4 } from 'gsap';
import Parallax from 'parallax-js';
import './Home.css';
import Background from "./images/background.png"
import Rock from "./images/rock.png";
import Earth from "./images/earth.png";
import Mid from "./images/mid.png";
import forground from "./images/foreground.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import Instagram from "./images/instagram-logo.png";
import Logo from "./images/my-logo.png";
import Saturn from "./images/saturn.png";



const Planets = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);

    const keys = [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune'
    ];

    const slider = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 150,
      centeredSlides: true,
      mousewheel: true,
      pagination: {
        el: '.planet-links',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '">' + keys[index] + '</div>';
        }
      }
    });

    slider.on('slideChange', () => {
      console.log('SLIDE CHANGED');
      gsap.to('.slide-text span', 0.2, {
        x: '-100px'
      });
      gsap.to('.slide-number span', 0.2, {
        x: '-100px'
      });
      gsap.to('.slide-detail span', 0.5, {
        x: '-1000px'
      });
      gsap.to('.slide-detail-facts div', 0.5, {
        x: '-1000px'
      });
      gsap.to('.swiper-slide-active', 0.5, {
        scale: 0.85
      });
      gsap.to('.swiper-slide .slide-img', 1, {
        rotation: 20
      });
    });

    slider.on('slideChangeTransitionEnd', () => {
      gsap.to('.swiper-slide .slide-img', 1, {
        rotation: 10
      });
      gsap.to('.slide-text span', 0.2, {
        x: 0,
        delay: 0.1
      });
      gsap.to('.slide-text span', 0, {
        x: '100px'
      });

      gsap.to('.slide-number span', 0.2, {
        x: 0
      });
      gsap.to('.slide-number span', 0, {
        x: '100px'
      });

      gsap.to('.slide-detail span', 0.2, {
        x: 0
      });

      gsap.to('.slide-detail-facts div', 0.5, {
        x: 0
      });

      gsap.to('.swiper-slide-active', 0.5, {
        scale: 1,
        ease: Power4.easeOut
      });

      gsap.to('.swiper-slide-active .slide-text', 0, {
        autoAlpha: 1
      });
      gsap.to('.swiper-slide-active .slide-number', 0, {
        autoAlpha: 1
      });

      gsap.to('.swiper-slide-next .slide-text', 0, {
        autoAlpha: 0
      });
      gsap.to('.swiper-slide-prev .slide-text', 0, {
        autoAlpha: 0
      });

      gsap.to('.swiper-slide-next .slide-number', 0, {
        autoAlpha: 0
      });
      gsap.to('.swiper-slide-prev .slide-number', 0, {
        autoAlpha: 0
      });
    });

    gsap.to('.rockbg1', 2, {
      y: 12,
      repeat: -1,
      yoyo: true,
      delay: 0
    });

    gsap.to('.swiper-slide-next .slide-text', 0, {
      autoAlpha: 0
    });
    gsap.to('.swiper-slide-prev .slide-text', 0, {
      autoAlpha: 0
    });

    gsap.to('.swiper-slide-next .slide-number', 0, {
      autoAlpha: 0
    });
    gsap.to('.swiper-slide-prev .slide-number', 0, {
      autoAlpha: 0
    });

    gsap.to('.swiper-slide', 0, {
      scale: 0.85
    });

    gsap.to('.swiper-slide-active', 0, {
      scale: 1
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="logo"><img src={Logo} alt="LinkedIn" /></div>
        <div className="nav-links">
          <ul>
            <li><img src={linkedin} alt="LinkedIn" /></li>
            <li><img src={facebook} alt="Facebook" /></li>
            <li><img src={Instagram} alt="Instagram" /></li>
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
          </div>
          <div data-depth="0.4" className="mid">
            <img src={Mid} alt="Mid" />
          </div>
          <div data-depth="0.1" className="fore">
            <img src={forground} alt="Foreground" />
          </div>
        </div>
      </section>

      <div style={{height: "100vh"}}>

      </div>
    </div>
  );
};

export default Planets;
