import PersonalSection from "./personal/PersonalSection";

function Resume({ personal }) {
  console.log(personal);
  return (
    <div className="resume">
      <PersonalSection
        name={personal.name}
        email={personal.email}
        phone={personal.phone}
        address={personal.address}
      />
    </div>
  );
}

export default Resume;
