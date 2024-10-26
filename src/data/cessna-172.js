const cessnaInfo = {
  data: {
    //SEO Header Stuff
    pageTitle: "Cessna 172 | Our Fleet | Sun City Aviation Academy",
    pageDescription:
      "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. These reliable and versatile planes are perfectly suited for those taking their first steps into the world of flight. Our Cessna 172s provide an ideal learning environment for aspiring pilots.",
    pageKeywords:
      "aircraft, fleet, training, Cessna 172, Sun City Aviation Academy fleet, flight training, pilot training, aviation training, Cessna 172 training, Cessna 172 aircraft",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-aviation-academy-fly-over-miami.jpg",
      imageAlt:
        "sun city aviation academy trains professional pilots in south florida",
      headerH1: `Cessna</br><span class="text-accent-300">172</span>`,
      paragraph:
        "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. Our Cessna 172s provide an ideal learning environment for aspiring pilots.",
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

    aircraftInfo: {
      title: `Cessna<span class="text-accent-400">172</span>`,
      images: [
        {
          imagePath:
            "/src/assets/sun-city-aviation-academy-grounded-aircraft.jpg",
          imageAlt: "side-of-cessna-172-at-redlands-airport-REI",
        },
        {
          imagePath: "/src/assets/sun-city-aviation-academy-AeroCamp174.jpg",
          imageAlt: "N7561G-nextgen-flight-academy-riverside-ca",
        },
        {
          imagePath: "/src/assets/sun-city-aviation-academy-why-pilot.jpg",
          imageAlt: "instrument-panel-of-cessna-172l-at-redlands-airport-REI",
        },
      ],
      features: {
        title: "Avionics and Features:",
        firstParagraph:
          "Immerse yourself in a learning environment where technology meets training. Our Cessna 172s are equipped with:",
        list: [
          "Advanced Garmin 430 navigation systems",
          "Aspen, dual G5 PFDs",
          "Garmin MFDs",
        ],
        secondParagraph:
          "These tools ensure that you’re not just a pilot, but an expert navigator too, ready to traverse the skies with confidence.",
        finalParagraph: `Beyond the basics, our instrument capable Cessna 172s allow you to continue your journey beyond the private certificate and into an Instrument Rating certification. Discover the joy of flight with our Cessna 172s and reserve your spot now.`,
      },
      descriptions: [
        "Embark on an aviation journey starting with our Cessna 172 aircraft – a reliable companion for those stepping into the world of flight. Experience the open skies in a spacious cockpit designed as an environment where you can truly feel comfortable as you get started in the world of flight.",
        "The Cessna 172 offers simplicity in control, allowing you to navigate the skies effortlessly as you take your initial flights. With top notch stability, this aircraft is perfect for any level, from student to certified pilot.",
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
export default cessnaInfo;
