import uniqid from "uniqid";

const sampleData = {
  personal: {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 7890",
    address: "Toronto, ON",
  },
  education: [
    {
      degree: "Bachelor in Computer Science",
      school: "University of Waterloo",
      location: "Waterloo, CA",
      startDate: "09/2023",
      endDate: "present",
      isCollapsed: true,
      isHidden: false,
      id: uniqid(),
    },
    {
      degree: "Master of Business Administration",
      school: "MIT",
      location: "Cambridge, US",
      startDate: "09/2028",
      endDate: "present",
      isCollapsed: true,
      isHidden: true,
      id: uniqid(),
    },
  ],
};

export default sampleData;
