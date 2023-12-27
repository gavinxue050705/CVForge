function PersonalSection({ name, email, phone, address }) {
  return (
    <div className="section-personal">
      <h1 className="name">{name}</h1>
      <div className="row-personal">
        <p className="row-personal-item">{email}</p>
        <p className="row-personal-item">{phone}</p>
        <p className="row-personal-item">{address}</p>
      </div>
    </div>
  );
}

export default PersonalSection;
