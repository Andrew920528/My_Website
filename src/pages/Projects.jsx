import React, {forwardRef} from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import {ProjectObj} from "../models/ProjectObj";
import iplantitImg from "../images/iplantit.png";
import hygeiaImg from "../images/hygeia.png";
import plantomoImg from "../images/plantomo_img.png";
import ritaImg from "../images/rita.png";
import {Skill} from "../global/constants";
const rita = new ProjectObj({
  projectName: "Rita",
  event: "IBM Call for Code 2024",
  role: "Project Lead",
  description: `The award winning application that transforms how teachers prepare for their classes.`,
  skills: [
    Skill.REACT,
    Skill.TYPESCRIPT,
    Skill.AI,
    Skill.LANGCHAIN,
    Skill.PYTHON,
    Skill.AWS,
    Skill.API_DEVELOPMENT,
  ],
  github: "https://github.com/Andrew920528/rita-cfc-2024",
  youtube: "https://www.youtube.com/watch?v=spGOiM32nGE",
  image: ritaImg,
  pivot: "50% 50%",
  learnMoreLink:
    "https://developer.ibm.com/callforcode/solutions/2024-solutions/",
  specialBanner: "Grand Prize Winner!",
});

const plantomo = new ProjectObj({
  projectName: "Plantomo",
  event: "Google Solution Challenge 2023",
  role: "Project Lead",
  description: `Using Unity and Google Firebase, 
                our team built a PokemonGo - like 
                application that allows users to 
                explore the green spaces of their 
                communities. I designed the collectable 
                avatars “plantomo” and worked on the 
                UI/UX of the game.`,
  skills: [
    Skill.UNITY,
    Skill.CSHARP,
    Skill.FIREBASE,
    Skill.MAPBOXSDK,
    Skill.AUGMENTED_REALITY,
    Skill.IMAGE_CLASSIFICATION,
  ],
  github: "https://github.com/Andrew920528/GDSC2023",
  youtube: "https://www.youtube.com/watch?v=8LHcoZL0cPo",
  image: plantomoImg,
  pivot: "0% 100%",
});

const iplantit = new ProjectObj({
  projectName: "Iplantit - Smart Garden Planner",
  event: "IBM Call for Code 2022",
  role: "Technology Intern",
  description: `Created a garden planner that 
                allows users to design and share 
                their gardens with the community. 
                I built a GUI for user to draw out 
                their garden design, and designed an 
                algorithm that recommend garden layout 
                based on user preferences.`,
  skills: [Skill.REACT, Skill.JAVASCRIPT, Skill.IBM_DB2],
  github: "https://github.com/PhillipDaum/iplantit",
  youtube: "https://www.youtube.com/watch?v=rrDzHoShVhY",
  image: iplantitImg,
});

const hygeia = new ProjectObj({
  projectName: "Hygeia Healthcare Kit",
  event: "Google Solution Challenge 2022",
  role: "Front-end Developer",
  description: `Hygeia is a health monitoring toolkit designed
              to assist elderly’s communication with their doctors.
              I created the elderly-facing side of the project,
              including voice assistant, creating appointment, and 
              collecting data and sending to the doctor-side. `,
  skills: [
    Skill.FLUTTER,
    Skill.FIREBASE,
    Skill.DIALOGFLOW,
    Skill.ANDROID_STUDIO,
    Skill.GIT,
  ],
  github: "https://github.com/Andrew920528/Hygeia_GSC",
  youtube: "https://www.youtube.com/watch?v=9J8sIl3Lmkk",
  image: hygeiaImg,
  pivot: "0% 70%",
});

const Project = forwardRef(({hide}, ref) => {
  const projects = [rita, plantomo, iplantit, hygeia];
  return (
    <div
      className={`project ${hide ? "--pc-display-none" : "--pc-visible"}`}
      ref={ref}
    >
      <Header title={"Project"} />
      <div className="subtitle-block">
        <h3>
          A collection of passion projects where curiosity meets creativity.
        </h3>
        {/* <RectButton
          text={"View Project Archive"}
          onClick={() => {}}
          align={"center"}
        /> */}
      </div>
      <div className="project-cards">
        {projects.map((p) => (
          <InfoCard
            image={p.image}
            sub1={p.event}
            title={p.projectName}
            sub2={p.role}
            description={p.description}
            skills={p.skills}
            youtube={p.youtube}
            github={p.github}
            pivot={p.pivot}
            key={p.projectName}
            learnMoreLink={p.learnMoreLink}
            specialBanner={p.specialBanner}
          />
        ))}
      </div>
    </div>
  );
});

export default Project;
