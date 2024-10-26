const groupGroundSchool = {
  data: {
    //SEO Header Stuff
    pageTitle: "Group Ground School | Sun City Aviation Academy",
    pageDescription:
      "Learn the fundamentals of aviation in a group setting and pass your pilot written exam. Our group ground school is the perfect way to get started on your pilot training.",
    pageKeywords:
      "private pilot course, private pilot training, learn to fly, sun city aviation academy, pilot training, flight school, become a pilot, private pilot license, private pilot certificate",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-vfr-chart-bg.webp",
      imageAlt:
        "sun city aviation academy vfr chart with a pilot's headset and sunglasses",
      headerH1: `Group</br><span class="text-accent-300">Ground School</span>`,
      paragraph:
        "Learn the fundamentals of aviation in a group setting and pass your private pilot written exam. Our group ground school is the perfect way to get started on your pilot training.",
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
      title: "Learn the Fundamentals of Aviation",
      paragraphs: [
        "We understand that becoming a pilot is an exciting yet challenging endeavor, and we're here to provide the training you need to be successful. In the heart of Hollywood, Florida in North Perry KHWO airport, we offer a comprehensive curriculum that covers essential aviation topics. From aerodynamics to navigation, weather to regulations, and aircraft systems, our experienced instructors ensure you acquire a strong knowledge base. This knowledge is not only vital for passing the written exam but is also the cornerstone of your future as a pilot.",
      ],
    },

    groupGroundContent: {
      imagePath: "/src/assets/sun-city-aviation-academy-AeroCamp174.jpg",
      imageAlt:
        "Sun City Aviation Academy student student pilot and instructor shaking hands",
      heading: "Group Ground School",
      upperHeading: "How it Works",
      description: `Group Ground School at <strong>Sun City Aviation Academy</strong> offers an inclusive and structured curriculum designed to accommodate various learning styles.`,
      paragraphs: [
        "We're not just focused on helping you pass the written exam, our goal is to equip you with practical knowledge and skills that will serve you throughout your aviation career.",
        "We understand that becoming a pilot is an exciting yet challenging endeavor, and we're here to provide the training you need to be successful. In the heart of <strong>Hollywood, Florida</strong> in <strong>North Perry KHWO</strong> airport.",
        "We offer a comprehensive curriculum that covers essential aviation topics. From aerodynamics to navigation, weather to regulations, and aircraft systems, our experienced instructors ensure you acquire a strong knowledge base.",
        "This knowledge is not only vital for passing the written exam but is also the cornerstone of your future as a pilot.",
      ],
      afterListParagraphs: [
        "What sets our Group Ground School apart is the spirit of collaboration and family. You'll join a welcoming and supportive aviation community, a diverse group of individuals who share your passion for flight. Engage in discussions, ask questions, and exchange insights. In this environment, learning becomes a shared journey, and fellow students become more than just peers, they become lifelong friends.",
        "Our aim is not just to help you succeed in the written exam, but also to introduce you to the welcoming aviation community. From Hollywood to Miramar and far beyond, we extend a warm invitation to become a part of our close knit aviation family. Join our group ground school by filling out a form on our website or giving us a call.",
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
export default groupGroundSchool;
