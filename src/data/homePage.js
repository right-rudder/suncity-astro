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

    memberOf: {
      heading: "We Are Proud Members of",
      organizations: [
        {
          name: "FSANA",
          imagePath: "/src/assets/FSANA-logo.webp",
          imageAlt: "FSANA logo",
          link: "https://www.fsana.com/partners.php",
        },
        {
          name: "NBAA",
          imagePath: "/src/assets/NBAA-logo.webp",
          imageAlt: "NBAA logo",
          link: "https://nbaa.org/",
        },
        {
          name: "AMA",
          imagePath: "/src/assets/AMA-logo.webp",
          imageAlt: "AMA logo",
          link: "https://www.ama.org/",
        },
        {
          name: "Us Chamber of Commerce",
          imagePath: "/src/assets/uschamber-logo.webp",
          imageAlt: "Us Chamber of Commerce logo",
          link: "https://www.uschamber.com/",
        },
        {
          name: "NAFI",
          imagePath: "/src/assets/NAFI-corporate-logo.webp",
          imageAlt: "NAFI logo",
          link: "https://www.nafinet.org/sponsors",
        },
      ],
    },

    caseStudies: {
      upperHeading: "Case Studies",
      heading: `Our Flight Schools <strong class="text-white">Get Results</strong>`,
      cases: [
        {
          client: "Blue Skies Above",
          imagePath: "/src/assets/ideal-logo.webp",
          imageAlt: "Ideal Aviation logo",
          youtubeId: "SD8TsqJSX00",
          quote: "I think the growth speaks for itself",
          result:
            "Blue Skies Above is a flight school in Lanett, AL just a few miles away from Auburn, AL.  Over the past year, they have seen their flight school explode in growth.  They expanded their fleet and bought a like-new Cessna 172 to handle the TAA and commercial load and they are on their way to acquiring another plane to add to their fleet just to keep up with the demand.",
          link: "/our-flight-schools/blue-skies-above",
          metric1: {
            label: "Growth under a year",
            value: "2X",
          },
          metric2: {
            label: "Students on waitlist",
            value: "10+",
          },
        },
        {
          client: "SimpliFly",
          imagePath: "/src/assets/simplifly-logo.webp",
          imageAlt: "SimpliFly Flight School logo",
          youtubeId: "qzT8Q49ExUw",
          quote:
            "They understand aviation and pilots <br> which is a huge help.",
          result:
            "SimpliFly gets flooded with inquiries and phone calls asking about their flight school. They're ranking on the first page of Google Search and Google Maps.  They are seeing 10 times the amount of leads coming in since first working with us and managed to increase the average LTV (life time value) of each student customer by narrowing their focus to offer programs solely for career track pilots.",
          link: "/our-flight-schools/simplifly",
          metric1: {
            label: "Total Leads",
            value: "10X",
          },
          metric2: {
            label: "ARR",
            value: "$8M+",
          },
        },
        {
          client: "Ideal",
          imagePath: "/src/assets/ideal-logo.webp",
          imageAlt: "Ideal Aviation logo",
          youtubeId: "c1Pe9XJdsbo",
          quote:
            "Right Rudder Marketing <br class='lg:hidden'> has been a game changer.",
          result:
            "Ideal Aviation ranks number one on the first page of Google Search and Google Maps. With their partnership at a local college, they welcomed 9 new students in the Fall 2023 semester to their fixed wing pilot training program generating more than an estimated $90,000 in future revenue for just getting their private done.  They now have a waiting list of upcoming student pilots and are always expanding their fleet.",
          link: "/our-flight-schools/ideal-aviation",
          metric1: {
            label: "Monthly Leads",
            value: "100+",
          },
          metric2: {
            label: "Sales",
            value: "150%",
          },
        },
      ],
    },

    ourClients: {
      heading: "Our Clients Love Us",
      description:
        "And you're going to love us too.  Our flight schools are the best in the business. They are the top flight schools in the country and they trust us to help them grow and scale their businesses. We are proud to be a part of their success.",
      clients: [
        {
          name: "NextGen Flight Academy",
          imagePath: "/src/assets/NG Logo White Background 2.webp",
          link: "https://flyhere.aero/",
          invert: true,
        },
        {
          name: "Summit Flight Academy",
          imagePath: "/src/assets/SFA-logo.webp",
          link: "https://www.summitflightacademy.com/",
          invert: false,
        },
        {
          name: "High Tide Aviation",
          imagePath:
            "/src/assets/high-tide-aviation-logo-gradation.CFCXi2nO.png",
          link: "https://hightideaviation.com/",
          invert: false,
        },
        {
          name: "Sun City Aviation",
          imagePath: "/src/assets/sun-city-white-text-logo.webp",
          link: "https://suncityaviation.com/",
          invert: false,
        },
        {
          name: "Pitcairn Flight Academy",
          imagePath: "/src/assets/pitcairn-logo-400-white.webp",
          link: "https://pitcairnflightacademy.com/",
          invert: false,
        },
        {
          name: "SimpliFly",
          imagePath: "/src/assets/simplifly_2.webp",
          link: "https://simpliflyco.com/",
          invert: false,
        },
      ],
    },

    testimonials: {
      upperHeading: "Testimonials",
      heading: `What Our <strong class="text-primary-800">Clients Are Saying</strong>`,
      quotes: [
        {
          quote:
            "The company I work for has been working with Right Rudder Marketing for a while now and I can tell you they have helped us a lot! Our website improved and we started getting more and more inquiries. If you have a flight school you definitely have to work with them!",
          extract: "You definitely have to work with Right Rudder Marketing!",
          client: "Sun City Aviation Academy",
          author: "Maria C. and Chris F.",
        },

        {
          quote:
            "We have been using Right Rudder for the past 6 months and could not be happier! They revamped our website to make it more user friendly, makes consistent updates, and are very responsive to our needs. We have seen a steady increase in web traffic as well as website driven phone calls since starting with Right Rudder. I can not say enough good things about them!",
          extract:
            "I can not say enough good things about Right Rudder Marketing!",
          client: "Ideal Aviation",
          author: "Kim N.",
        },

        {
          quote:
            "Our flight school has been working with Right Rudder for almost a year now. They are an incredible group of people. We are so happy with them. Absolutely 100% if you have a flight school and need to work with them!",
          extract: "We are so happy with them",
          client: "Pitcairn Flight Academy",
          author: "Marisa D.",
        },
      ],
    },

    bookCTA: {
      imagePath: "/src/assets/book-tim.jpg",
      imageAlt: "The Flight School Handbook of Marketing Knowledge",
      imagePath2: "/src/assets/tim-jedrek-book.webp",
      imageAlt2: "The Flight School Handbook of Marketing Knowledge",
      headerH1: `The Only Book You'll Ever Need for Learning How to Market Your Flight School Online`,
      paragraphs: [
        "If your flight school isn’t getting the calls and leads you need from your website and marketing efforts, then this book is a must read.  The <strong>Flight School Handbook of Marketing Knowledge</strong> is the ultimate guide written for flight school business owners that are looking to double, triple, even 10X their sales in the coming year.",
        "This book is written based on battle tested strategies and the real results of Right Rudder Marketing and flight schools all across the United States.  Discover how to implement the <strong>Flight School Marketing System</strong> in your business.",
      ],
      amazon: {
        imageAmazon:
          "/src/assets/03_available_at_amazon_logo_stacked_RGB_SQUID._TTW_.png",
        imageAltAmazon: "Amazon logo",
        url: "https://a.co/d/a2fH0RD",
      },
      buttons: [
        /*         {
          name: "Buy Now on Amazon",
          link: "https://a.co/d/08aqmyv",
          accent: true,
        }, */
        {
          name: "Instant Access",
          link: "/resources/flight-school-handbook",
          accent: true,
        },
      ],
    },

    whyUs: {
      upperHeading: "Why Us",
      heading: `RRM is your <strong class="text-accent">Digital Marketing Agency</strong>`,
      description: [
        `Are you tired of other schools taking your students? Does your "marketing company" seem out of touch with the general aviation industry? Are you missing out on capturing the new crop of interested student pilots?`,
        `Right Rudder Marketing is the leader in helping ONLY flight schools leverage the internet and use well executed marketing strategies to take their business out of the clouds and into VFR.`,
      ],
      team: {
        heading: "More a Family than a Team",
        paragraph:
          "Right Rudder Marketing is a pilot owned digital marketing agency focused on helping flight schools and aviation businesses accomplish their goals: Grow, scale, and make a significant impact to the pilot training industry. Flight schools that partner with Right Rudder Marketing become the #1 flight schools in their community and dominate the local area. There's no doubt about it. Right Rudder Marketing has the secret sauce.",
        imagePath: "/src/assets/right-rudder-marketing-team.jpeg",
        imageAlt: "Right Rudder Marketing team on the runway",
      },
      marketingSystem: {
        heading: "Our Marketing System",
        paragraph:
          "Right Rudder Marketing has a proven system that has been tested and refined over the years. We have worked with flight schools of all sizes and have helped them grow their business and increase their revenue. Our system is designed to help flight schools get more students and increase their revenue.",
        imagePath: "/src/assets/fsms.webp",
        imageAlt: "Right Rudder Marketing system",
        steps: [
          {
            title: "Attract",
            icon: "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z",
            description:
              "Get People Interested in Pilot Training to Visit Your Website and Look You Up Online",
          },
          {
            title: "Nurture",
            icon: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59",
            description:
              "Guide Your Interested Website Visitors Into Booking a Discovery Flight at Your School",
          },
          {
            title: "Convert",
            icon: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
            description:
              "Keep Your CFIs' Schedules Busy, Hire More CFIs, and Grow Your Flight School!",
          },
        ],
      },
      btn: {
        header: "Learn More About Our...",
        link: "/marketing-system",
        text: "Flight School Marketing System",
      },
    },

    services: {
      upperHeading: "Services",
      heading: `Our Digital Marketing <strong class="text-primary-dark-600">Expertise</strong>`,
      servs: [
        {
          name: "Web Design & Development",
          link: "/flight-school-website-design",
          icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
          description:
            "We design and develop websites that are user-friendly, mobile responsive, and optimized for search engines.",
        },
        {
          name: `SEO<p class="font-normal text-accent-200 text-sm">(Search Engine Optimization)</p>`,
          link: "/flight-school-seo",
          icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
          description:
            "We optimize your website to rank higher on search engines like Google, Bing, and Yahoo.",
        },
        {
          name: `CRM<p class="font-normal text-accent-200 text-sm">(Customer Relationship Management)</p>`,
          link: "https://flightschoolcrm.com/",
          icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
          description:
            "We help you manage your customer relationships and keep track of your leads.",
        },
        {
          name: `Google Ads<p class="font-normal text-accent-200 text-sm">(Pay Per Click)</p>`,
          link: "/how-to-enroll-more-students-with-google-ads-in-2024",
          icon: "M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z",
          description:
            "We create and manage Google Ads campaigns to help you reach more potential students.",
        },
        {
          name: `Facebook Ads<p class="font-normal text-accent-200 text-sm">(Pay Per Click)</p>`,
          link: "/how-to-run-effective-facebook-ads-in-2024",
          icon: "M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z",
          description:
            "Boosting post and creating ads on Facebook to reach more potential students.",
        },
        {
          name: `GMB Optimization<p class="font-normal text-accent-200 text-sm">(Google My Business)</p>`,
          link: "/how-to-optimize-google-my-business-2024",
          icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
          description:
            "Optimize your Google My Business profile to increase visibility and attract more students.",
        },
        /* {
          name: `Media Production<p class="font-normal text-accent-200 text-sm">(Photography & Videography)</p>`,
          link: "/services/media-production",
          icon: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
          description:
            "We create high-quality photos and videos to showcase your flight school.",
        }, */
      ],
    },

    gmbCTA: {
      imagePath: "/src/assets/Screenshot 2024-09-24 at 15.45.15.png",
      imageAlt: "Google My Business CTA",
      heading: `Perfect your Google Business Profile`,
      description:
        "Get your flight school on the map and in front of potential students with Google My Business optimization. Our guide will help you discover gaps in your Google profile and highlight key areas to focus on for raising your business profile to the top of organic search rankings.",
      buttons: [
        {
          name: "Download Guide",
          link: "/resources/gmb",
          accent: true,
        },
        {
          name: "Learn More",
          link: "/resources/gmb",
          accent: false,
        },
      ],
    },

    blogfeed: {
      upperHeading: "PIREPs",
      heading: "Right Rudder Marketing Blog",
      description: "Latest news, updates, and content",
    },
    blogfeedtop: {
      heading: "Popular Blog Articles",
      description:
        "Top aviation marketing content that people keep coming back to",
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary">Fly with digital marketing</br> experts</span> that know the flight training industry.`,
      paragraph:
        "We are a team of pilots that know the flight training industry. Because if your marketing team doesn't know what the pilot training experience is like, then how can they be successful for you? See what we're talking about by booking a call now!",
      buttons: [
        {
          name: "Get Our Free Book",
          link: "/resources/flight-school-handbook",
          primary: false,
        },
        {
          name: "Book a Strategy Call",
          link: "/schedule-call",
          primary: false,
        },
      ],
    },
  },
};
export default homePage;
