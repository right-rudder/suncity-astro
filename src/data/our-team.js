const ourTeam = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Team | Sun City Aviation Academy",
    pageDescription:
      "Our team of experienced pilots and instructors are dedicated to providing the highest quality flight training in South Florida. Learn more about our team and how they can help you achieve your aviation goals.",
    pageKeywords:
      "certified flight instructors Miami, Sun City Aviation instructors, CFII South Florida, experienced flight school team, award-winning flight instructors, ATP pilots Florida, aviation academy staff, flight instructor credentials, flight school leadership, Pembroke Pines pilot instructors, KHWO flight teachers, best flight instructors Miami, pilot teaching experience Florida",

    //top header
    header: {
      imagePath: "/src/assets/SunCIty-team-pic.jpg",
      imageAlt:
        "sun city aviation academy team of pilots and instructors at the airport",
      headerH1: `Come See</br><span class="text-accent-300">What Everyone's Talking About</span>`,
      paragraph:
        "Our team of experienced pilots and instructors are dedicated to providing the highest quality flight training in South Florida. Learn more about our team and how they can help you achieve your aviation goals.",
      buttons: [
        {
          name: "Say Hello",
          link: "/contact",
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
      title: `How It All Started?`,
      paragraphs: [
        "Founded in December 2022 by Luke Poulos, Sun City Aviation Academy embodies a lifelong passion for aviation and teaching. Inspired by his grandfather's legacy and fueled by his father's teaching experience in the medical field, Luke is driven to nurture aspiring aviators.",
        "With a solid background in aviation, including Part 135 charter operations and Part 121 airline experience, he understands the importance of a strong foundation in flight training. He also knows firsthand how the guidance of a knowledgeable instructor can give students a competitive edge in the aviation industry.",
      ],
    },

    gMaps: [
      {
        location: "Pembroke Pines, FL",
        inverted: false,
        body: "Come visit us at our Pembroke Pines location. We are located at North Perry Airport KHWO.",
        gMapUrl:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3586.1442401064114!2d-80.232982!3d25.996092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a96c916c96bb%3A0x7fe41940c41420e8!2sSun%20City%20Aviation%20Academy!5e0!3m2!1sen!2sus!4v1729617103276!5m2!1sen!2sus",
      },
    ],

    partners: {
      heading:
        "Sun City Aviation Academy is a partner affiliate with the following organizations:",
      organizations: [
        {
          name: "Stratus Financial",
          imagePath: "/src/assets/stratus_logo.webp",
          imageAlt: "Stratus Financial logo",
          link: "https://stratus.finance/",
        },
        {
          name: "FSANA",
          imagePath: "/src/assets/FSANA-logo.webp",
          imageAlt: "FSANA logo",
          link: "https://fsana.com/",
        },
        {
          name: "Women In Action",
          imagePath: "/src/assets/wai-full-color-logo.png",
          imageAlt: "Women in action logo",
          link: "https://www.wai.org/",
        },
        {
          name: "Miramar - Pembroke Pines - Chamber of Commerce",
          imagePath: "/src/assets/mirarmar-coc.webp",
          imageAlt: "Miramar - Pembroke Pines - Chamber of Commerce logo",
          link: "https://www.miramarpembrokepines.org/",
        },
        {
          name: "Right Rudder Marketing",
          imagePath: "/src/assets/RRM-hor-textBlack-bgTrans-150.webp",
          imageAlt: "Right Rudder Marketing logo",
          link: "https://rightruddermarketing.com/",
        },
      ],
    },

    staffGrid: {
      upperHeading: "Meet Our Team",
      heading: "Our Leadership Team",
      description:
        "The leadership team at Sun City Aviation Academy is dedicated to providing the highest quality flight training in South Florida. With years of experience and a passion for aviation, our team is here to help you achieve your aviation goals.",
      members: [
        {
          name: "Luke Poulos",
          imagePath:
            "/src/assets/sun-citi-aviation-academy-founder-luke-poulos.jpg",
          imageAlt:
            "Sun City Aviation Academy Certified Founder & CEO Luke Poulos",
          bio: "Luke discovered his passion for teaching early in his aviation career. With over 20 years of experience and more than 4,000 flight hours, Luke is dedicated to sharing his knowledge. He holds several certifications including ATP, CFI, CFI-I, and MEI. Luke's journey in aviation was inspired by his grandfather and by his father's medical teaching background. He's not only a pilot but also a proud father who taught his own children to fly of whom now have successful careers in aviation. This passion for teaching and Luke's diverse aviation experience drives our academy's mission.",
          rank: "Founder & CEO",
        },
        {
          name: "Joe Cannizzaro",
          imagePath:
            "/src/assets/sun-citi-aviation-academy-director-operations-joe.jpg",
          imageAlt:
            "Sun City Aviation Academy Director of Operations Joe Cannizzaro",
          bio: "Joe spent the last 30 Years working in flight school operations, and flying professionally for both a Part 121 and Part 135 Operator. Joe has been an essential part of multiple flight schools throughout his 30 years, serving as a Chief pilot and Director of Operations. Joe has over 4,000 total flight hours and currently holds a ATP, CFI, CFI-I, and MEI certificates.",
          rank: "Director of Operations",
        },
        {
          name: "Paul Janecki",
          imagePath:
            "/src/assets/sun-citi-aviation-academy-chief-pilot-paul.jpg",
          imageAlt: "Sun City Aviation Academy Chief Pilot Paul Janecki",
          bio: " Paul, with 40+ years in aviation, brings vast expertise. He has 15,000+ flight instruction hours and Airframe and Powerplant and Inspection Authorization credentials. He holds a Bachelor's degree in aviation management. After college, he joined an internship at a flight school, gaining skills as an Airframe and Powerplant Technician while receiving professional flight training. This led to him earning ATP, CFI, CFI-I, and MEI certificates.",
          rank: "Chief Pilot",
        },
        {
          name: "Georgette Poulos",
          imagePath: "/src/assets/sun-city-team-georgette.webp",
          imageAlt:
            "Sun City Aviation Academy Executive Business Manager Georgette Poulos",
          bio: " Georgette holds a bachelor's degree in Alternative Medicine and is a graduate of culinary school, but she is no stranger to aviation. Being married to a pilot for 28 years and having two pilots for children, she is well versed in the aviation field. Georgette is Sun City's executive business manager and is presently pursuing a bachelor's degree in aerospace management.",
          rank: "Executive Business Manager",
        },
        // {
        //   name: "Christopher Boldrin",
        //   imagePath:
        //     "/src/assets/Sun-City-Aviation-Academy-Chris-Boldrin-Office-Manager.webp",
        //   imageAlt:
        //     "Sun City Aviation Academy Office Manager Christopher Boldrin",
        //   bio: "Christopher Boldrin serves as the Office Manager at Sun City Aviation Academy, where he plays a pivotal role in ensuring the smooth operation of the academy's administrative functions. With a keen eye for detail and a commitment to excellence, Christopher oversees daily office activities, coordinates scheduling, and supports both staff and students to foster an efficient and welcoming environment.",
        //   rank: "Office Manager",
        // },
      ],
    },

    teamGrid: {
      upperHeading: "Meet Our Team",
      heading: "The Backbone of Sun City Aviation Academy",
      description:
        "Our team of staff and instructors are dedicated to providing the highest quality flight training in South Florida. With years of experience and a passion for aviation, our team is here to help you achieve your aviation goals.",
      members: [
        {
          name: "Gleb Sokolov",
          imagePath: "/src/assets/sun-city-team-123abc6.webp",
          imageAlt:
            "Sun City Aviation Academy Certified Flight Instructor Gleb Sokolov",
          rank: "Flight Instructor",
        },
        {
          name: "Jean Dorcelien",
          imagePath: "/src/assets/sun-city-team-123abc2.webp",
          imageAlt:
            "Sun City Aviation Academy Certified Flight Instructor Jean Dorcelien",
          rank: "Flight Instructor",
        },
        {
          name: "Cara Ming",
          imagePath: "/src/assets/Sun-City-Team-Cara.jpeg",
          imageAlt: "Sun City Aviation Certified Flight Instructor Cara Ming",
          rank: "Flight Instructor",
          awards: true,
        },
        {
          name: "Marko Pavlichenko",
          imagePath: "/src/assets/sun-city-team-marko.webp",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Marko Pavlichenko",
          rank: "Flight Instructor",
        },
        {
          name: "Alexis Vassel",
          imagePath: "/src/assets/sun-city-team-alexis.webp",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Alexis Vassel",
          rank: "Flight Instructor",
        },
        {
          name: "Charles Mesina",
          imagePath: "/src/assets/sun-city-team-charles.webp",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Charles Mesina",
          rank: "Flight Instructor",
        },
        {
          name: "Andrew Graeler",
          imagePath: "/src/assets/Sun-City-Andrew.jpeg",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Andrew Graeler",
          rank: "Flight Instructor",
        },
        {
          name: "Jacqueline Wicker-McAllister",
          imagePath: "/src/assets/Sun-City-JAckie.jpg",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Jacqueline Wicker-McAllister",
          rank: "Flight Instructor",
        },
        {
          name: "Chase Olson",
          imagePath:
            "/src/assets/Sun-City-Aviation-Academy-Chase-Olson-CFI.webp",
          imageAlt: "Sun City Aviation Certified Flight Instructor Chase Olson",
          rank: "Flight Instructor",
        },
        {
          name: "Chase Bramblett",
          imagePath:
            "/src/assets/Sun-City-Aviation-Academy-team-Chase-Bramblett.jpg",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Chase Bramblett",
          rank: "Flight Instructor",
        },
        {
          name: "Tyler Franco-Pinto",
          imagePath:
            "/src/assets/Sun-City-Aviation-Academy-team-Tyler-Franco-Pinto.jpg",
          imageAlt:
            "Sun City Aviation Certified Flight Instructor Tyler Franco-Pinto",
          rank: "Flight Instructor",
        },
        {
          name: "Nicolas McCaulsky",
          imagePath: "/src/assets/sun-city-team-123abc5.webp",
          imageAlt:
            "Sun City Aviation Academy Certified Flight Instructor Nicolas McCaulsky",
          rank: "Flight Instructor",
        },
        {
          name: "Mafer Caceres",
          imagePath: "/src/assets/sun-city-team-mafer.webp",
          imageAlt:
            "Sun City Aviation Academy Dispatch Administrator Mafer Caceres",
          rank: "Office Manager Assistant",
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
      quizModal: true,
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
export default ourTeam;
