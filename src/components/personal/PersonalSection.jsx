function PersonalSection({ name, email, phone, address }) {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default PersonalSection;
