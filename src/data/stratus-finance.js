const stratusInfo = {
  data: {
    //SEO Header Stuff
    pageTitle: "Stratus Financial | Financing | Sun City Aviation Academy",
    pageDescription:
      "Stratus Financial is a financing option for students looking to become a pilot. Sun City Aviation Academy has partnered with Stratus Financial to provide students with the financial assistance they need to complete their pilot training.",
    pageKeywords:
      "stratus finance, financing, pilot financing, pilot training financing, pilot training loans, pilot loans, pilot training loans, pilot training financing options, pilot training financial assistance, pilot training financial aid, pilot training scholarships, pilot training grants, pilot training payment plans, pilot training financing companies, pilot training financing programs, pilot training financing bad credit, pilot training financing no credit check, pilot training financing for international students, pilot training financing for veterans, pilot training financing for disabled, pilot training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/chuttersnap-M2-_GRvWWg0-unsplash.jpg",
      imageAlt:
        "sun city aviation academy trains professional pilots in south florida",
      headerH1: `Financing</br><span class="text-accent-300">Stratus Financial</span>`,
      paragraph:
        "Sun City Aviation Academy has partnered with Stratus Financial to provide students with the financial assistance they need to complete their pilot training.",
      buttons: [
        {
          name: "Apply Now",
          link: "https://stratus.finance/apply/suncityaviation1161828/",
          primary: false,
        },
        {
          name: "Download Booklet",
          link: "https://drive.google.com/file/d/13wszvROm6r1hL2HEH-8CGQvgsqguPRp6/view?usp=share_link",
          primary: false,
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
export default stratusInfo;
