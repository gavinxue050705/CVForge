import uniqid from "uniqid";

const sampleData = {
  personal: {
    name: "Tony Stark",
    email: "tony.stark@starkindustries.com",
    phone: "555-123-4567",
    address: "10880 Malibu Point, Malibu, CA",
  },
  educations: [
    {
      degree: "Master of Science in Electrical Engineering",
      school: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      startDate: "Sept 1993",
      endDate: "May 1995",
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      school: "Massachusetts Institute of Technology",
      location: "Cambrdige, MA",
      startDate: "Sept 1988",
      endDate: "May 1992",
    },
  ],

  experiences: [
    {
      company: "Stark Industries",
      position: "CEO and Founder",
      location: "Malibu, CA",
      description:
        "Founded and currently lead Stark Industries, a global technology company specializing in advanced weaponry, artificial intelligence, and clean energy solutions\nPioneered the development of the Iron Man suit, revolutionizing personal protection and superhero capabilities\nSuccessfully managed the company through various challenges, ensuring continuous growth and profitability",
      startDate: "June 1995",
      endDate: "present",
    },
    {
      company: "Stark Industries",
      position: "Lead Engineer",
      location: "Malibu, CA",
      description:
        "Spearheaded research and development projects, including the creation of innovative energy sources and propulsion systems\nOversaw the implementation of state-of-the-art robotics and AI technologies in manufacturing processes\nReceived multiple awards for technological advancements and contributions to the defense industry",
      startDate: "July 1992",
      endDate: "June 1995",
    },
  ],
  projects: [
    {
      name: "Jarvis",
      technologies: "ai",
      description: "test\nefafe\nfeawfe",
    },
  ],
};

export default sampleData;
