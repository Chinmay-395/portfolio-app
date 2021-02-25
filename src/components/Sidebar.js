import React from "react";
import stackoverflow from "../assets/icons/stackoverflow.svg";
import codesandbox from "../assets/icons/codesandbox.svg";
import upwork from "../assets/icons/upwork-icon.svg";
import replit from "../assets/icons/replit-icon.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import portfolio from "../assets/portfolio-image.png";
import resume from "../assets/portfolio_resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:chinmaydali395@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      {/* mightycoder */}
      <img src={portfolio} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Chinmay <span>Dali</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href={"https://www.linkedin.com/in/chinmay-395/"}>
          {/* https://www.linkedin.com/in/chinmay-395/ */}
          <img src={linkedin} alt="LinkedIn" className="sidebar__icon mr-3" />
        </a>
        <a href={"https://stackoverflow.com/users/9984976/chinmay-dali"}>
          <img
            src={stackoverflow}
            alt="stackoverflow"
            className="sidebar__icon mr-3"
          />
        </a>
        <a href={"https://www.upwork.com/freelancers/~0143861af59c56c0b0"}>
          <img src={upwork} alt="UpWork" className="sidebar__icon" />
        </a>
      </figure>
      <figure className="sidebar__social-icons my-2">
        <a href={"https://repl.it/@ChinmayDali"}>
          <img
            src={replit}
            alt="stackoverflow"
            className="sidebar__icon mr-3"
          />
        </a>
        <a href={"https://codesandbox.io/u/Chinmay-395"}>
          <img src={codesandbox} alt="codeSandbox" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href={"https://github.com/Chinmay-395"}>
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Mumbai, India
        </div>
        <div className="sidebar__item">chinmaydali395@gmail.com</div>
        <div className="sidebar__item">+919820808300</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
