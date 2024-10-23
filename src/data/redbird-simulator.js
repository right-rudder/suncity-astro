const redbirdInfo = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Redbird Flight Simulator | Our Fleet | Sun City Aviation Academy",
    pageDescription:
      "Sun City Aviation Academy offers a Redbird Simulator for pilot training. Our Redbird Simulator is a state-of-the-art training tool that provides a realistic flight experience for pilots of all levels.",
    pageKeywords:
      "aircraft, fleet, training, Redbird Simulator, Sun City Aviation Academy fleet, flight training, pilot training, aviation training, Redbird Simulator training, Redbird Simulator aircraft",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-wingman.jpg",
      imageAlt:
        "sun city aviation academy trains professional pilots in south florida",
      headerH1: `Redbird</br><span class="text-accent-300">Flight Simulator</span>`,
      paragraph:
        "Our Redbird Simulator is a state-of-the-art training tool that provides a realistic flight experience for pilots of all levels. Redbird Simulator is designed to help you hone your skills and build confidence in the cockpit.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/marketing-system",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/schedule-call",
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

    aircraftInfo: {
      title: `Redbird<br><span class="text-accent-400">Simulator</span>`,
      images: [
        {
          imagePath:
            "/src/assets/sun-citi-aviation-academy-redbird-simulator.jpg",
          imageAlt: "Sun City Aviation Academy Redbird Flight Simulator",
        },
        {
          imagePath:
            "/src/assets/sun-citi-aviation-academy-redbird-simulator-aerocamp.jpg",
          imageAlt: "Sun City Aviation Academy Redbird Flight Simulator",
        },
        {
          imagePath: "/src/assets/sun-city-wingman.jpg",
          imageAlt: "Sun City Aviation Academy Redbird Flight Simulator",
        },
      ],
      features: {
        title: "How it Works:",
        firstParagraph:
          "Our scenario based training approach, combined with FAA approval as an Advanced Aviation Training Device (AATD), ensures that your simulator hours contribute significantly toward your pilot certification. Simulator training empowers you to confidently navigate real-world challenges, shaping you into a pilot equipped with precision, safety, and astute aeronautical decision-making skills.",
        secondParagraph:
          "Step into the future of flight training with the Redbird Flight Simulator at Sun City Aviation Academy – where every simulation propels you closer to mastery of the skies.",
      },
      descriptions: [
        "Immerse yourself in cutting edge training with the Redbird Flight Simulator. At Sun City Aviation Academy, we understand the transformative power of simulator training, and we've harnessed its capabilities to enhance your learning journey.",
        "The Redbird Flight Simulator stands as an indispensable tool, offering a host of benefits that amplify the student pilot experience.",
        "Unlock a realm of possibilities as you practice maneuvers, refine techniques, and master emergency procedures in a dynamic and controlled environment. With the ability to pause mid-flight and replay scenarios under different conditions, the simulator becomes a pivotal tool, solidifying your training and refining your skills for real-world scenarios.",
      ],
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: true,
        },
        {
          name: "Contact Us",
          link: "/contact",
          primary: true,
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
export default redbirdInfo;
