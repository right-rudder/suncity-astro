const seaplanePilot = {
  data: {
    //SEO Header Stuff
    pageTitle: "Sea Plane Safari Course | Sun City Aviation Academy",
    pageDescription:
      "From land to lakes, start training here. Become a seaplane pilot and open up an extraordinary new world of aviation. Start SES training today.",
    pageKeywords:
      "seaplane pilot training, SES training, seaplane rating, seaplane flying, SES course, seaplane pilot license, seaplane training, seaplane pilot certification, seaplane pilot course, seaplane pilot school, seaplane pilot training cost, seaplane pilot training near me, seaplane pilot training florida, seaplane pilot training usa, seaplane pilot training requirements, seaplane pilot training programs, seaplane pilot training schools, seaplane pilot training online, seaplane pilot training florida, seaplane pilot training miami, seaplane pilot training fort lauderdale, seaplane pilot training hollywood",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-seaplane.jpeg",
      imageAlt:
        "sun city aviation academy student flying a plane over the sunset",
      headerH1: `Sea Plane</br><span class="text-accent-300">Safari Course</span>`,
      paragraph:
        "From land to lakes, start training here. Become a seaplane pilot and open up an extraordinary new world of aviation.",
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
      title: `What is the Seaplane Safari?`,
      paragraphs: [
        "Picture yourself gliding across serene lakes or touching down on remote waters, a skill set that marks you as a truly versatile aviator. Seaplane training brings with it the thrill of amphibious flight, adding an exciting and rewarding dimension to your aviation journey.",
        "Seaplane flying opens up an extraordinary new world for pilots. Our newly introduced Sea Plane Safari Course offers you the unique experience of mastering takeoffs and landings on freshwater lakes, safeguarding your aircraft from the corrosive effects of saltwater while providing all the adventure of seaplane flying.",
        "The Sea Plane Safari Course at Sun City Aviation Academy is designed to provide you with the skills and knowledge to safely operate seaplanes, preparing you for the challenges and rewards of seaplane flying.",
      ],
    },

    howtoSeaplane: {
      imagePath: "/src/assets/sun-city-aviation-academy-seaplane.jpg",
      imageAlt:
        "Sun City Aviation Academy student flying a plane over the city of Miami",
      heading: "Sea Plane Safari",
      upperHeading: "How To Start",
      description: `With a focus on freshwater operations, this course ensures that your training maintains the longevity and durability of your aircraft while enhancing your capabilities as a pilot. It's more than just a skill—it's a transformation that makes you a well-rounded and resourceful aviator.`,
      paragraphs: [
        "At <strong>Sun City Aviation Academy</strong>, we train pilots to confidently navigate these dynamic aircraft. For pilots eager to expand their skill set, or for those pursuing a career that demands flexibility and precision, our Sea Plane Safari Course equips you with the expertise needed to operate seaplanes safely and efficiently.",
        "Throughout your training, you’ll cover essential topics such as aquatic takeoffs, landings on freshwater lakes, and mastering seaplane-specific navigation and regulations. Our structured program caters to both seasoned pilots and those just beginning their adventure in seaplane flying. With comprehensive ground and flight instruction, you will experience firsthand the joy and challenge of amphibious aircraft operations.",
        "To enroll in our Sea Plane Safari Course, you'll need a private pilot certificate and a valid medical certificate. At <strong>Sun City Aviation Academy</strong>, we understand the steps involved in reaching this milestone, and we are here to guide you every step of the way. Our team is dedicated to ensuring you’re prepared for this thrilling chapter of your piloting career.",
      ],
      list: {
        heading: "Prepare for Your Seaplane Rating",
        items: [
          {
            icon: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z",
            title: "Requirements",
            descriptions: [
              "To earn your seaplane rating, the requirements remain straightforward: a private pilot certificate, a valid medical certificate, and around 10-15 hours of flight time in a seaplane. You'll also need to pass a specialized written knowledge exam and complete a practical flight test. These requirements ensure you’re thoroughly trained for safe and successful seaplane operations, whether landing on a glassy lake or taking off from a remote waterway.",
            ],
          },
        ],
      },
      afterListParagraphs: [
        "At <strong>Sun City Aviation Academy</strong>, we understand the steps involved in reaching this milestone, and we are here to guide you every step of the way. Our team is dedicated to ensuring you’re prepared for this thrilling chapter of your piloting career.",
        "Earning your seaplane rating with <strong>Sun City Aviation Academy</strong> means exploring new aviation horizons while honing your adaptability, precision, and skill as a pilot. Ready to take the next step?",
      ],
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
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
          imagePath: "/src/assets/john-mcarthur-PrdNTrIrG8w-unsplash.jpg",
          imageAlt:
            "sun city aviation instruments panel of a commercial airline airplane cockpit",
          description:
            "For many this is their goal. The ATP certificate is a minimum requirement to join the airlines.",
          link: "/airline-transport-pilot-atp",
        },
        {
          title: "Multi-Engine Rating",
          imagePath:
            "/src/assets/sun-city-aviation-academy-multi-engine-aircraft.jpg",
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
          imagePath: "/src/assets/chuttersnap-M2-_GRvWWg0-unsplash.jpg",
          imageAlt: "sun city aviation clouds and sky",
          description:
            "Stay current with our Instrument Proficiency Check (IPC) to ensure your instrument flying skills are up to date.",
          link: "/instrument-proficiency-check-ipc",
        },
        {
          title: "Wingman Course",
          imagePath: "/src/assets/sun-city-wingman.jpg",
          imageAlt: "sun city aviation pilot's family in the flight simulator",
          description:
            "Equip your loved ones with essential aviation safety skills through our Wingman Course.",
          link: "/wingman-family-member-training",
        },
        {
          title: "Sea Plane Safari",
          imagePath: "/src/assets/sun-city-seaplane.jpeg",
          imageAlt: "sun city aviation seaplane floating on the water",
          description:
            "Seaplane flying opens up an extraordinary new world for pilots. Start SES training here.",
          link: "/seaplane-pilot-training",
        },
      ],
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
export default seaplanePilot;
