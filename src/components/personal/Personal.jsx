import Input from "../Input";

function Personal({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onAddressChange,
  name,
  email,
  phone,
  address,
}) {
  return (
    <form className="container">
      <h2>Personal Information</h2>
      <Input
        id="name"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={onNameChange}
      />
      <Input
        id="email"
        label="Email"
        placeholder="Enter you email"
        value={email}
        onChange={onEmailChange}
      />
      <Input
        id="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phone}
        onChange={onPhoneChange}
      />
      <Input
        id="address"
        label="Address"
        placeholder="Enter your address"
        value={address}
        onChange={onAddressChange}
      />
    </form>
  );
}

export default Personal;
