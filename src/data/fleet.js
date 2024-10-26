const ourFleet = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Fleet | Sun City Aviation Academy",
    pageDescription:
      "We have a fleet of modern aircraft for your training needs. Our fleet includes Cessna 172s, Beechcraft Duchess and Redbird Simulator.",
    pageKeywords:
      "aircraft, fleet, training, Cessna 172, Beechcraft Duchess, Redbird Simulator, Sun City Aviation Academy fleet, flight training, pilot training, aviation training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-aviation-academy-grounded-aircraft.jpg",
      imageAlt:
        "sun city aviation academy trains professional pilots in south florida",
      headerH1: `Our</br><span class="text-accent-300">Fleet</span>`,
      paragraph:
        "We have a fleet of modern aircraft for your training needs. Our fleet includes Cessna 172s, Beechcraft Duchess and Redbird Simulator.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Fly With Confidence`,
      paragraphs: [
        "At Sun City Aviation Academy, we take pride in our exceptional fleet of aircraft and our simulator, designed to provide you with the highest quality flight training experience. Whether you're just beginning your aviation journey or advancing your skills, our versatile aircraft and training tools are here to support your goals.",
        "We offer a variety of aircraft for training, including the Cessna 172 and Beechcraft Duchess, as well as a Redbird Simulator. Our fleet is maintained to the highest standards, ensuring that you can train with confidence and peace of mind.",
      ],
    },

    fleetGrid: {
      upperHeading: "Explore",
      heading: "Our Aircraft",
      description: `Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training. Explore our fleet below to learn more about each aircraft and its capabilities.`,
      aircraft: [
        {
          title: "Cessna 172",
          imagePath: "/src/assets/sun-city-aviation-academy-AeroCamp174.jpg",
          imageAlt:
            "Sun City Aviation Academy Cessna 172 parked at the airport",
          description:
            "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. These reliable and versatile planes are perfectly suited for those taking their first steps into the world of flight. Our Cessna 172s provide an ideal learning environment for aspiring pilots.",
          link: "/our-fleet/cessna-172",
          linkText: "Details",
        },
        {
          title: "Beechcraft Duchess",
          imagePath:
            "/src/assets/sun-city-aviation-academy-multi-engine-aircraft.jpg",
          imageAlt:
            "Sun City Aviation Academy Beechcraft Duchess parked at the airport",
          description:
            "As you step into the cockpit of our Beechcraft Duchess, you'll discover a world of possibilities that extends beyond single engine flight. The Duchess is a testament to our commitment to providing you with the highest quality training resources.",
          link: "/our-fleet/beechcraft-duchess",
          linkText: "Details",
        },
        {
          title: "Redbird Flight Simulator",
          imagePath: "/src/assets/sun-city-wingman.jpg",
          imageAlt: "Sun City Aviation Academy Redbird Simulator",
          description:
            "Using a simulator allows you to practice maneuvers, refine techniques, and master emergency procedures. You can pause mid flight and replay different scenarios and conditions which help solidify your training and make you a better and safer pilot.",
          link: "/our-fleet/redbird-simulator",
          linkText: "Details",
        },
      ],
    },

    bookCTA: {
      upperHeading: "Still looking for more information on pilot training?",
      headerH1: `Get Your <span class="text-accent-300">FREE</span><br> Pilot Training Guide!`,
      paragraph:
        "We have a free booklet which explains everything you need to know for your pilot certificate.",
      buttons: [
        {
          name: "Download Now",
          link: "/book-download",
          primary: true,
        },
      ],
      imagePath: "/src/assets/sun-city-book-mock-up.webp",
      imageAlt: "Right Rudder Marketing team on the runway",
    },

    quizCTA: {
      reverse: true,
      upperHeading: "Take Our Quiz",
      heading: "Do You Have What It Takes To Be A Pilot?",
      descriptions: [
        "Are you fascinated by the world of aviation? Have you dreamed of flying and exploring the skies? Do you often look upward at passing aircraft, wondering if you yourself could be in the cockpit?",
        "Begin your journey in aviation with our brief quiz. Our quiz is designed to look at your aviation related knowledge and aptitude, alongside your unique personality traits and interests, to provide insights into whether a future in aviation aligns with your aspirations.",
      ],
      imagePath: "/src/assets/sun-city-aviation-academy-be-pilot-square.jpg",
      imageAlt:
        "sun city aviation academy student flying a plane over the city of miami",
      buttons: [
        {
          name: "Take the Quiz",
          link: "/quiz",
          primary: true,
        },
      ],
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Doing a discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, doing a discovery flight will allow you to see the Ft. Lauderdale and Hollywood from a new perspective.",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  },
};
export default ourFleet;
