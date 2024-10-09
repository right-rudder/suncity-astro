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

    whySuncity: {
      upperHeading: "Why SunCity",
      heading: "Our Commitment",
      descriptions: [
        "We offer a diverse range of programs designed to elevate you to new heights in the world of aviation. Our experienced instructors and state-of-the-art fleet ensure you receive the best training possible.",
        "Luke Poulos, our founder, boasts over 20 years of aviation industry experience. His mission is to make Sun City Aviation Academy the top rated flight school in the country.",
      ],
      bullets: [
        {
          title: "Experience in Aviation",
          descriptions: [
            "Our instructors are seasoned professionals with years of experience in the aviation industry.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Individualized Attention",
          descriptions: [
            "We provide personalized training to ensure you receive the attention you need to succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Excellent Customer Service",
          descriptions: [
            "Our team is dedicated to providing you with the best customer service experience possible.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Structured Lessons",
          descriptions: [
            "Our programs are designed to provide you with a structured learning experience that will help you succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "/src/assets/sun-city-luke.webp",
      imageAlt:
        "sun city aviation founder luke poulos in front of a sun city airplane",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Can You Become a Pilot?",
      descriptions: [
        "Many people believe that becoming a pilot is out of reach due to concerns about expenses, time commitments, and safety. These concerns often arise from online research and general uncertainty. We understand these valid concerns and encourage you to speak with a Sun City team member to address any questions that may have arisen during your research.",
        "At Sun City Aviation Academy, you don't need to make a substantial financial commitment upfront. It all begins with an affordable discovery flight, costing only a few hundred dollars. Pursuing your pilot's license is indeed a significant time investment, but it's a life changing achievement with long lasting rewards. Safety is our utmost priority at Sun City, ensuring your journey to becoming a pilot is both fulfilling and safe.",
        `Wondering if a pilot's life is right for you? Discover if the world of aviation is right for you by taking our "Is Flying Right for Me?" quiz. This quiz is designed to help you explore your interests and determine if the skies are where you belong. Get started on your aviation journey by clicking below to take the quiz.`,
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "/src/assets/sun-city-private-pilot-pass-checkride.webp",
      imageAlt:
        "sun city aviation student and flight instructor celebrating after passing a checkride",
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

    testimonials: {
      upperHeading: "The SunCity Family",
      heading: "Our Students Love Us",
      headingText: [
        "While our main goal is to train future pilots safely and effectively, it’s important to us at SunCity Aviation Academy our students have a fun and comfortable environment to practice in.",
        "Check out what our students and guests have to say about their experiences at SunCity.",
      ],
      buttonText: "Leave Us a Review",
      buttonLink:
        "https://www.google.com/search?client=firefox-b-d&q=sun+city+aviation+academy#",
      reviews: [
        {
          body: "This flight school provides premium service, wonderful atmosphere and excellent safety. I am very pleased with Sun City Aviation. I am working on getting my instrument rating and the Sun City team has been wonderful. My Flight Instructor Jean is great. I feel like I’m becoming a better pilot after each lesson. The planes are in great shape and I feel safe flying them (especially flying XC). Overall 5 Stars!",
          author: "Hector R.",
        },
        {
          body: "Sun City Aviation is hands down one of the best flight schools out there! The instructors are not only super knowledgeable but also genuinely care about helping you succeed. They take the time to explain everything clearly, so you never feel lost. The planes are in great shape, and you always feel safe and comfortable when you’re up in the air. What I love most is the friendly and supportive vibe—everyone there is rooting for you. Whether you're just starting out or looking to level up your skills, Sun City Aviation is the place to be. Highly recommend!",
          author: "Zaccur C.",
        },
        {
          body: "I finished and passed my private pilot license at Sun City and now I'm doing the Instrument rating. The school and staff are great, my instructor Marko is excellent!!!",
          author: "Ivan L.",
        },
        {
          body: "I recently had the pleasure of training with Sun City for my Initial Multi Engine Commercial Rating. It was amazing. I was referred to Sun City from a DPE (FAA Designated Pilot Examiner) after I had a bad experience with a flight school in Melbourne FL. If one of the most well-known DPEs in the South Florida area recommended it (out of many), it carried a lot of weight given this is what they do day in and day out. They know where the best instructors are, the most well-maintained airplanes, and best pass rates for checkrides. The recommendation did not disappoint.",
          author: "Jeff B.",
        },
        {
          body: "I spent almost a full year with this Sun City family and I couldn’t be more grateful. Getting to the finish line for my PPL would not have happened without Georgette and Luke, the owners. They are like a second set of parents to me after this rating. They are by far the most family oriented flight school I have been apart of and if you give them the chance, they will treat you like their family.",
          author: "Joelle D.",
        },
        {
          body: "Anyone who care about having a positive  experience, prompt communication, and quality learning, you will not regret going to Sun City. Georgette and the staff are fantastic. The environment itself is built to enrich your personal understanding of flying. My son had a blast and can’t wait to continue. Thank you so much Georgette.",
          author: "Olgyu C.",
        },
      ],
    },
  },
};
export default homePage;
