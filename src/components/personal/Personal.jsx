import Input from "../Input";

function Personal({ onChange, name, email, phone, address, onDrop }) {
  return (
    <div className="container">
      <h2 onClick={onDrop} className="section-header">
        Personal Information
      </h2>
      <form id="form-personal">
        <Input
          id="name"
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={onChange}
        />
        <Input
          id="email"
          label="Email"
          placeholder="Enter you email"
          value={email}
          onChange={onChange}
        />
        <Input
          id="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={onChange}
        />
        <Input
          id="address"
          label="Address"
          placeholder="Enter your address"
          value={address}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default Personal;
