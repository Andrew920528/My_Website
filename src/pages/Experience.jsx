import React from "react";
import Header from "../components/Header";
import RectButton from "../components/RectButton";
import InfoCard from "../components/InfoCard";
import placeholder from "../images/placeholder.jpg";
import {ExperienceObj} from "../models/ExperienceObj";
import {format} from "date-fns";
const Experience = () => {
  const nexuni = new ExperienceObj({
    company: "Nexuni Co. Ltd.",
    start: new Date(2023, 4),
    end: new Date(2023, 7),
    role: "Full Stack Software Developer",
    description: `Working on an agile dev team, we built an image classification app
          that identify car parts and improved its accuracy to about 75%. I
          gained hands-on experience with using Google Cloud APIs and
          various software for image classification such as OpenCV and
          tensorflow.`,
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
    image: placeholder,
  });

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
        <InfoCard
          image={nexuni.image}
          sub1={
            format(nexuni.start, "yyyy MMM") +
            " - " +
            format(nexuni.end, "yyyy MMM")
          }
          title={nexuni.company}
          sub2={nexuni.role}
          description={nexuni.description}
          skills={nexuni.skills}
          site={nexuni.site}
        />
      </div>
    </div>
  );
};

export default Experience;
