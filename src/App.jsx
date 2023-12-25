import { useState } from "react";
import uniqid from "uniqid";
import sampleData from "../public/sample-data";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/personal/Personal";
import Resume from "./components/Resume";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import EducationDisplay from "./components/education/EducationDisplay";
import EducationForm from "./components/education/EducationForm";
import ExperienceForm from "./components/experience/ExperienceForm";

function App() {
  const [personal, setPersonal] = useState(sampleData.personal);
  const [education, setEducation] = useState(sampleData.educations);
  const [experience, setExperience] = useState(sampleData.experiences);

  // personal
  const handlePersonalChange = (e) => {
    const { id, value } = e.target;
    setPersonal({ ...personal, [id]: value });
  };

  // education
  const handleEducationChange = (index) => (e) => {
    const nextEducation = education.map((education, i) => {
      if (i === index) {
        return { ...education, [e.target.id]: e.target.value };
      } else {
        return education;
      }
    });
    setEducation(nextEducation);
  };

  // experience
  const handleExperienceChange = (index) => (e) => {
    const nextExperience = experience.map((experience, i) => {
      if (i === index) {
        return { ...experience, [e.target.id]: e.target.value };
      } else {
        return experience;
      }
    });
    setExperience(nextExperience);
  };

  return (
    <div>
      <Header />
      <div className="row">
        <div className="row-form">
          <Personal
            onChange={handlePersonalChange}
            name={personal.name}
            email={personal.email}
            phone={personal.phone}
            address={personal.address}
          />
          <EducationForm
            educations={education}
            onChange={handleEducationChange}
          />
          <ExperienceForm
            experiences={experience}
            onChange={handleExperienceChange}
          />
        </div>
        <div className="row-resume">
          <Resume
            personal={personal}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
