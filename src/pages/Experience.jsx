import React from "react";
import Header from "../components/Header";
import RectButton from "../components/RectButton";
import InfoCard from "../components/InfoCard";
import placeholder from "../images/placeholder.jpg";
import {ExperienceObj} from "../models/ExperienceObj";
import {format} from "date-fns";
import coc_logo from "../images/coc.png";
import gpc_logo from "../images/gpc.png";
import nex_logo from "../images/nexuni.png";

const nexuni = new ExperienceObj({
  company: "Nexuni Co. Ltd.",
  start: new Date(2023, 4),
  end: new Date(2023, 7),
  role: "Full Stack Software Developer",
  description: `During the summer internship at Nexuni, 
                I worked on managing and visualizing data of 
                one of the company’s biggest IOT solution.
                My work spanned from designing and implementing 
                interactive GUI to organizing data collected from 
                sensor and API development. `,
  skills: [
    "React",
    "HTML",
    "JavaScript",
    "SASS",
    "PostgreSQL",
    "Postman",
    "Python",
    "API Development",
  ],
  site: "https://www.nexuni.com/MainPage",
  image: nex_logo,
});

const gpc = new ExperienceObj({
  company: "Genuine Parts Company",
  start: new Date(2022, 4),
  end: new Date(2022, 7),
  role: "Technology Intern",
  description: `Working on an agile dev team, we built an image classification app
        that identify car parts and improved its accuracy to about 75%. I
        gained hands-on experience with using Google Cloud APIs and
        various software for image classification such as OpenCV and
        tensorflow.`,
  skills: [
    "Java",
    "Spingboot",
    "JavaScript",
    "Google Cloud Platform",
    "OpenCV",
    "Python",
    "Tensorflow",
    "Android Studio",
    "Git",
  ],
  site: "https://www.genpt.com/",
  image: gpc_logo,
});

const gtcoc = new ExperienceObj({
  company: "GT College of Computing",
  start: new Date(2022, 0),
  role: "Teaching Assitant",
  description: `Teaches Computer Organization Concepts, Assemble, C, and Python
                Holds office hours and teaches lab for a total of 6 hours a week.`,
  skills: ["C", "Assembly", "Docker", "Python", "Teaching"],
  site: "https://www.genpt.com/",
  image: coc_logo,
});

const Experience = () => {
  const experiences = [nexuni, gpc, gtcoc];
  return (
    <div className="experience">
      <Header title={"Experience"} />
      <div className="subtitle-block">
        <h3>
          They taught me to never stop learning, and to always have a passion
          for what I do.
        </h3>
        <RectButton text={"View Resume"} onClick={() => {}} align={"center"} />
      </div>
      <div className="experience-cards">
        {experiences.map((exp) => (
          <InfoCard
            image={exp.image}
            sub1={
              format(exp.start, "yyyy MMM") +
              " - " +
              (exp.end ? format(exp.end, "yyyy MMM") : "Now")
            }
            title={exp.company}
            sub2={exp.role}
            description={exp.description}
            skills={exp.skills}
            site={exp.site}
            key={exp.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
