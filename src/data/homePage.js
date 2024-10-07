const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Sun City Aviation Academy | Miami South Florida Flight Training",
    pageDescription:
      "Grow and scale your aviation business. Right Rudder Marketing specializes in aviation marketing services, helping flight schools and aviation companies increase visibility and grow enrollment. We offer tailored digital marketing solutions, including SEO, web design, and lead generation to help you reach more aspiring pilots. With proven aviation marketing strategies, we can help your flight school stand out in the competitive market and boost student enrollment efficiently.",
    pageKeywords:
      "grow flight school, scale flight school, grow and scale flight school, aviation business, aviation training,Right Rudder Marketing, Aviation marketing, Flight school marketing, Aviation digital marketing, SEO for aviation, Digital marketing for flight schools, Aviation marketing agency, Lead generation for aviation companies, Increase flight school enrollment, Aviation advertising services, Content marketing for aviation businesses, Aviation marketing strategies, Aviation SEO services",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-team-in-front-of-seaplane.webp",
      imageAlt:
        "fly over Right Rudder Marketing - Digital Marketing Agency for Flight Schools",
      headerH1: `Become a </br><span class="text-accent-300">Professional Pilot</span>`,
      paragraph:
        "Your path to becoming a professional pilot starts here. Our experienced instructors will help you achieve your aviation goals. Join the family at Sun City.",
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

    programs: {
      upperHeading: "Explore",
      heading: "Our Programs",
      description:
        "Your aviation dreams take center stage here. Whether pursuing a professional career, building flight hours, or seeking leisurely adventure, we have the perfect path for you.",
      cards: [
        {
          title: "Professional Pilot Course",
          imagePath: "/src/assets/sun-city-airline-pilot-ppc.webp",
          imageAlt:
            "sun city aviation professional pilots giving thumbs up in an airplane cockpit",
          description:
            "Comprehensive program covering private, instrument, commercial, and multi-engine flight training.",
          link: "/professional-pilot-course",
        },
        {
          title: "Private Pilot",
          imagePath: "/src/assets/sun-city-private-pilot.webp",
          imageAlt:
            "sun city aviation private pilot training students in front of a plane",
          description:
            "Your passport to the skies! Learn to pilot your dreams with our Private Pilot Course.",
          link: "/private-pilot-training",
        },
        {
          title: "Group Ground School",
          imagePath: "/src/assets/sun-city-group-ground-school-bg.webp",
          imageAlt:
            "sun city aviation group ground school students studying in a classroom",
          description:
            "Learn the fundamentals of aviation in a group setting and pass your pilot written exam.",
          link: "/group-ground-school",
        },
        {
          title: "Instrument Rating",
          imagePath: "/src/assets/sun-city-instrument.webp",
          imageAlt:
            "sun city aviation certified flight instructor and student in a cockpit",
          description:
            "Navigate through clouds and the skies with precision through our Instrument Rating course.",
          link: "/instrument-rating",
        },
        {
          title: "Commercial Pilot",
          imagePath: "/src/assets/sun-city-commercial.webp",
          imageAlt:
            "sun city aviation student and family displaying commercial pilot certificate",
          description:
            "Start your pilot career with our Commercial Pilot Course. Your path to the captain's seat is here.",
          link: "/commercial-pilot-training",
        },
        {
          title: "Airline Transport Pilot",
          imagePath: "/src/assets/sun-city-atp.webp",
          imageAlt:
            "sun city aviation instruments panel of a commercial airline airplane cockpit",
          description:
            "For many this is their goal. The ATP certificate is a minimum requirement to join the airlines.",
          link: "/airline-transport-pilot-atp",
        },
        {
          title: "Multi-Engine Rating",
          imagePath: "/src/assets/sun-city-multi-engine.webp",
          imageAlt:
            "sun city aviation student and flight instructor in front of a multi-engine airplane",
          description:
            "Master the art of multi engine flying and unlock new horizons in your aviation career.",
          link: "/multi-engine-rating",
        },
        {
          title: "Certified Flight Instructor",
          imagePath: "/src/assets/sun-city-cfi-bg3.webp",
          imageAlt:
            "sun city aviation student and flight instructor shaking hands",
          description:
            "Become a trusted guide in the world of aviation. Become a CFI and teach others to fly.",
          link: "/certified-flight-instructor-cfi",
        },
        {
          title: "Flight Review",
          imagePath: "/src/assets/sun-city-bfr.webp",
          imageAlt: "sun city aviation cessna airplane on a runway",
          description:
            "Recurrent training requirement for pilots to ensure they maintain proficiency and safety standards.",
          link: "/flight-review-bfr",
        },
        {
          title: "Instrument Proficiency Check",
          imagePath: "/src/assets/sun-city-ipc.webp",
          imageAlt: "sun city aviation clouds and sky",
          description:
            "Stay current with our Instrument Proficiency Check (IPC) to ensure your instrument flying skills are up to date.",
          link: "/instrument-proficiency-check-ipc",
        },
        {
          title: "Wingman Course",
          imagePath: "/src/assets/sun-city-wingman.webp",
          imageAlt: "sun city aviation pilot's family in the flight simulator",
          description:
            "Equip your loved ones with essential aviation safety skills through our Wingman Course.",
          link: "/wingman-family-member-training",
        },
        {
          title: "Sea Plane Safari",
          imagePath: "/src/assets/sun-city-seaplane-bg2.webp",
          imageAlt: "sun city aviation seaplane floating on the water",
          description:
            "Seaplane flying opens up an extraordinary new world for pilots. Start SES training here.",
          link: "/seaplane-pilot-training",
        },
      ],
    },
  },
};
export default homePage;
