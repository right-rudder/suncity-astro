const pilotTrainingGuide = {
  data: {
    //SEO Header Stuff
    pageTitle: "Pilot Training Guide | Sun City Aviation Academy",
    pageDescription:
      "Grow and scale your aviation business. Right Rudder Marketing specializes in aviation marketing services, helping flight schools and aviation companies increase visibility and grow enrollment. We offer tailored digital marketing solutions, including SEO, web design, and lead generation to help you reach more aspiring pilots. With proven aviation marketing strategies, we can help your flight school stand out in the competitive market and boost student enrollment efficiently.",
    pageKeywords:
      "grow flight school, scale flight school, grow and scale flight school, aviation business, aviation training,Right Rudder Marketing, Aviation marketing, Flight school marketing, Aviation digital marketing, SEO for aviation, Digital marketing for flight schools, Aviation marketing agency, Lead generation for aviation companies, Increase flight school enrollment, Aviation advertising services, Content marketing for aviation businesses, Aviation marketing strategies, Aviation SEO services",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/sun-city-pilot-training-guide.jpg",
      imageAlt:
        "sun city aviation academy airplane flying over the city of miami",
      headerH1: `Pilot Training </br><span class="text-accent-300">Guide</span>`,
      paragraph:
        "Learn more about how to become a pilot with Sun City. We offer a variety of programs to help you achieve your aviation dreams and become a pilot.",
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

    careerBento: {
      upperHeading: "How to Get Started",
      heading: "Pilot Career Path",
      description:
        "If you've thought about becoming a pilot, now is the perfect time to get started. Sun City Aviation Academy is your place to start training and get your pilot certificate and ratings.",
      boxes: [
        {
          upperTitle: "Experience",
          title: "Take a Discovery Flight",
          copy: "The best way to see if flying is right for you is to take a discovery flight. This brief introductory flight, led by one of our seasoned instructors, offers a first hand glimpse into the world of piloting. During this experience, you'll take the controls of the plane, acquaint yourself with maneuvers, and view the south Florida coast from a new perspective.",
          imagePath:
            "/src/assets/sun-city-aviation-academy-flying-over-miami.jpg",
          imageAlt: "sun city aviation academy student flying over miami",
          button: {
            name: "Schedule Today",
            link: "/discovery-flight",
            primary: true,
          },
        },
        {
          upperTitle: "Training",
          title: "Start Flight Training",
          copy: "Our team of experienced instructors will work with you to craft a training regimen that perfectly suits your goals, schedule, and preferred learning style.",
          imagePath:
            "/src/assets/sun-city-aviation-academy-flight-training.jpg",
          imageAlt: "sun city aviation academy student flying over miami",
          button: {
            name: "Private Pilot",
            link: "/private-pilot-training",
            primary: true,
          },
        },
        {
          upperTitle: "Training",
          title: "Advanced Flight Training",
          copy: "From instrument training to multi engine training, commercial training, and beyond, Sun City offers a comprehensive selection of advanced training options.",
          imagePath: "/src/assets/chuttersnap-M2-_GRvWWg0-unsplash.jpg",
          imageAlt: "sun city aviation academy student flying over miami",
          button: {
            name: "Our Courses",
            link: "/flight-training-pilot-programs",
            primary: true,
          },
        },
        {
          upperTitle: "Professional",
          title: "Start Your Pilot Career",
          copy: "Begin your pilot career with Sun City Aviation Academy. We offer training to get your ATP (airline transport pilot) certificate - the highest level of pilot certification and is a prerequisite for those wanting to join the airlines or get into corporate aviation.",
          imagePath: "/src/assets/sun-city-aviation-academy-pilot-career.jpg",
          imageAlt: "sun city aviation academy student flying over miami",
          button: {
            name: "ATP Course",
            link: "/airline-transport-pilot-atp",
            primary: true,
          },
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
export default pilotTrainingGuide;
