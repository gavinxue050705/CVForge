import { useState } from "react";
import uniqid from "uniqid";
import sampleData from "../public/sample-data";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/personal/Personal";
import Resume from "./components/Resume";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";

function App() {
  const [personal, setPersonal] = useState(sampleData.personal);

  function handlePersonalChange(e) {
    const { key } = e.target.dataset;
    setPersonal({ ...personal, [key]: e.target.value });
  }

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
          <Education />
          <Experience
            onChange={handlePersonalChange}
            company={sampleData.experiences.company}
            position={sampleData.experiences.position}
            location={sampleData.experiences.location}
            description={sampleData.experiences.description}
            startDate={sampleData.experiences.startDate}
            endDate={sampleData.experiences.endDate}
          />
        </div>
        <div className="row-resume">
          <Resume personal={personal} />
        </div>
      </div>
    </div>
  );
}

export default App;
