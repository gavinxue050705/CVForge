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
        "Spearheaded research and development projects, including the creation of energy sources and propulsion systems\nOversaw the implementation of state-of-the-art robotics and AI technologies in manufacturing processes\nReceived multiple awards for technological advancements and contributions to the defense industry",
      startDate: "July 1992",
      endDate: "June 1995",
    },
  ],
  projects: [
    {
      name: "J.A.R.V.I.S",
      technologies: "Python, Tensorflow, Natural Language Processing (NLP)",
      description:
        "Developed an advanced AI personal assistant using natural language processing and machine learning\nIntegrated voice recognition and synthesized speech for hands-free interaction\nImplemented functionalities for task automation, information retrieval, and home automation",
    },
    {
      name: "Iron Man Suit Mark XLVII",
      technologies:
        "Arc Reactor, Heads-Up Display (HUD), Repulsor Technology, Flight Control Systems",
      description:
        "Led the design and development of the Mark XLVII Iron Man suit, incorporating cutting-edge materials and technology\nIntegrated heads-up display (HUD), repulsor technology, and enhanced flight capabilities\nSuccessfully tested and refined the suit's functionality in combat simulations",
    },
    {
      name: "Project Insight",
      technologies:
        "Data Analytics, Artificial Intelligence, Real-time Monitoring, Global Data Integration",
      description:
        "Collaborated with S.H.I.E.L.D. to develop Project Insight, a global threat detection system\nDesigned algorithms for analyzing worldwide data to identify potential threats to global security\nImplemented a real-time monitoring interface for strategic decision-making",
    },
  ],
};

export default sampleData;
