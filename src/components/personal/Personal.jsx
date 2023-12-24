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
        type="text"
        id="name"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={onNameChange}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder={email}
        value={email}
        onChange={onEmailChange}
      />
      <Input
        type="tel"
        id="phone"
        label="Phone Number"
        placeholder={phone}
        value={phone}
        onChange={onPhoneChange}
      />
      <Input
        type="text"
        id="address"
        label="Address"
        placeholder={address}
        value={address}
        onChange={onAddressChange}
      />
    </form>
  );
}

export default Personal;
