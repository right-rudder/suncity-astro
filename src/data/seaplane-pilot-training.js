const seaplanePilot = {
  data: {
    // SEO Header Stuff
    pageTitle: "Seaplane Safari Course | Sun City Aviation Academy",
    pageDescription:
      "From land to lakes, start training here. Become a seaplane pilot and open up an extraordinary new world of aviation. Start SES training today.",
    pageKeywords:
      "seaplane pilot training, SES training, seaplane rating, seaplane flying, SES course, seaplane pilot license, seaplane training, seaplane pilot certification, seaplane pilot course, seaplane pilot school, seaplane pilot training cost, seaplane pilot training near me, seaplane pilot training florida, seaplane pilot training usa, seaplane pilot training requirements, seaplane pilot training programs, seaplane pilot training schools, seaplane pilot training online, seaplane pilot training florida, seaplane pilot training miami, seaplane pilot training fort lauderdale, seaplane pilot training hollywood",

    // Top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-seaplane.jpeg",
      imageAlt:
        "sun city aviation academy student flying a plane over the sunset",
      headerH1: `Seaplane</br><span class="text-accent-300">Safari Course</span>`,
      paragraph:
        "From land to lakes, start training here. Become a seaplane pilot and open up an extraordinary new world of aviation.",
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
      title: "What is the Seaplane Safari?",
      paragraphs: [
        "Picture yourself gliding across serene lakes or touching down on remote waters, a skill set that marks you as a truly versatile aviator. Seaplane training brings with it the thrill of amphibious flight, adding an exciting and rewarding dimension to your aviation journey.",
        "Seaplane flying opens up an extraordinary new world for pilots. Our Seaplane Safari Course offers the unique experience of mastering takeoffs and landings on freshwater lakes while gaining real-world amphibious flying experience.",
        "The Seaplane Safari Course at Sun City Aviation Academy is designed to provide you with the skills and knowledge needed to safely and confidently operate seaplanes in a variety of environments.",
      ],
    },

    howtoSeaplane: {
      imagePath: "/src/assets/sun-city-aviation-academy-seaplane.jpg",
      imageAlt:
        "Sun City Aviation Academy student flying a plane over the city of Miami",
      heading: "Seaplane Safari",

      paragraphs: [
        "At <strong>Sun City Aviation Academy</strong>, we train pilots to confidently and safely operate some of aviation’s most dynamic aircraft. Designed for pilots looking to expand their skill set, as well as those pursuing careers that demand versatility and precision, our Seaplane Safari Course provides the knowledge and hands-on experience needed to operate seaplanes efficiently in real-world environments.",
        "Throughout the course, you’ll receive comprehensive ground and flight instruction covering essential seaplane operations, including water takeoffs and landings, freshwater lake operations, seaplane-specific navigation techniques, and applicable FAA regulations. From glassy-water landings to departures from remote waterways, our structured training prepares you for both the challenges and rewards of amphibious flying.",
        "This program is ideal for both experienced aviators and pilots new to seaplane operations. Training includes a minimum of <strong>8 hours of dual flight instruction</strong> in a seaplane and <strong>5 hours of dedicated ground instruction</strong>, ensuring you are thoroughly prepared for safe and successful operations.",
      ],

      list: {
        heading: "Course Requirements",
        items: [
          {
            title: "Eligibility",
            descriptions: [
              "Private or Commercial Pilot Certificate",
              "Current Third-Class Medical Certificate (or higher)",
            ],
          },
        ],
      },

      afterListParagraphs: [
        "<strong>Training Location & Schedule:</strong> All seaplane training is conducted exclusively from our seaplane base at Melbourne International Airport (MLB) at our satellite office. Training dates are pre-scheduled and limited to two applicants per weekend to ensure individualized instruction.",
      ],

      availableWeekends: {
        heading: "Available Training Weekends",
        note: "Spots are limited and fill quickly. Early reservation is strongly recommended to secure your preferred training dates. Training dates are secured with a deposit. Due to limited availability, deposits are required to confirm enrollment.",
        weekends: [
          {
            date: "January 8–12",
            spotsRemaining: 1,
            status: "limited",
          },
          {
            date: "January 22–26",
            spotsRemaining: 2,
            status: "open",
          },
          {
            date: "February 5–9",
            spotsRemaining: 2,
            status: "open",
          },
          {
            date: "February 19–23",
            spotsRemaining: 2,
            status: "open",
          },
          {
            date: "March 5–9",
            spotsRemaining: 2,
            status: "open",
          },
        ],
      },

      finalParagraphs: [
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
      headerH1:
        'Get Your <span class="text-accent-300">FREE</span><br> Pilot Training Guide!',
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

    flyWithUsCTA: {
      imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1:
        '<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight',
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
