import React from "react";

import Bar from "./Bar";
import { motion } from "framer-motion";
import {
  // tools,
  languages,
} from "./data/resume_data";

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="overflow_check"
    >
      <div className="row">
        <div className="col-lg-12 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">BE in Information Technology</h5>
            <p className="resume-card__name">Mumbai University(2017-2021)</p>
            {/* <p className="resume-card__details">
              I am currently persuing B.E in Information Technology Engineering
              Thakur College of Engineering and Technology
            </p> */}
          </div>
        </div>
        <div className="col-lg-12 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Software Engineer</h5>
            <p className="resume-card__name">
              ONETURE TECHNOLOGIES Aug 2021 - Present
            </p>
            <p className="resume-card__details">
              • Worked closely with customer support to respond quickly to user
              issues, permanently solve them, and reduce the turnaround time to
              fixes. <br />
              • Implemented new C# class library for SQL server database access
              layer and updated previous web page frameworks <br />• Tech Stack:
              C#, ASP.NET, XML, SOAP, HTTP, SQL, MS SQL Server, Reactjs Angular,
              Typescript, Jquery, Azure
            </p>
          </div>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Software Engineer</h5>
            <p className="resume-card__name">
              NUZPAPR TECHNOLOGIES May 2021 - Aug 2021
            </p>
            <p className="resume-card__details">
              • Developed a web app that gives authenticated employees access to
              an anonymous forum and community where they may talk about
              problems. The platform’s features include OAuth implementation,
              checking whether a debate is open or closed, a likes counter, and
              user points. Middleware authorization, e-mail and in-app push
              notification <br />• Tech Stack: Mongodb, Expressjs, Nodejs,
              Nextjs, Reactjs, redux, websockets, AWS, cypressio
            </p>
          </div>
          <div className="resume-card__body">
            <h5 className="resume-card__title">RPA Developer intern</h5>
            <p className="resume-card__name">XLNC Technologies (2019)</p>
            <p className="resume-card__details">
              I built a automated bot that would scrape all the articles related
              to the client using Automation Anywhere software
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        {/* <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Resume;
