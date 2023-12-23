import Input from "../Input";

function Personal({ onChange, name, email, phone, address }) {
  return (
    <form className="container">
      <h2>Personal Information</h2>
      <Input
        type="text"
        id="name"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={onChange}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder={email}
        value={email}
        onChange={onChange}
      />
      <Input
        type="tel"
        id="phone"
        label="Phone Number"
        placeholder={phone}
        value={phone}
        onChange={onChange}
      />
      <Input
        type="text"
        id="address"
        label="Address"
        placeholder={address}
        value={address}
        onChange={onChange}
      />
    </form>
  );
}

export default Personal;
