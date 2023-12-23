import { useState } from "react";
import uniqid from "uniqid";
import sampleData from "../public/sample-data";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [personal, setPersonal] = useState(sampleData.personal);

  function handlePersonalChange(e) {
    const key = e.target.value;
    setPersonal({ ...personal, key });
  }

  return (
    <div>
      <Header />
      <div className="row">
        <div className="row-form">
          <Personal
            onChange={handlePersonalChange}
            name={sampleData.name}
            email={sampleData.email}
            phone={sampleData.phone}
            address={sampleData.address}
          />
          <Education />
          <Experience />
        </div>
        <div className="row-resume">
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
