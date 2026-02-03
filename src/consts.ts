// CHANGE Default title
export const SITE_TITLE =
  "Sun City Aviation Academy | Miami South Florida Flight Training";

// CHANGE default meta description -> should only be used in homepage technically, but is there for a fallback in case a page is missed
export const SITE_DESCRIPTION =
  "Our mission is to train professional, safe, and proficient pilots, who will one day excel in the aviation industry. When you fly with the team at Sun City Aviation Academy, you're family. Individualized instruction means you're more than just a number. You're a future Sun City aviator. We offer a variety of flight training programs, from private pilot to commercial pilot, and everything in between. Our flight school is located in Pembroke Pines, Florida, and we serve the greater Miami area. Contact us today to learn more about our flight training programs.";

//SEO tip -> keyword + city 1
//Should have between 5-10 different localities to mix and match keywords
//typical keywords = how to become a pilot, flight school near, private pilot, discovery flight, introductory flight, instrument rating, commercial certificate, certified flight instructor, airline programs, how to become an airline pilot

// Enhanced keywords categorized by intent and location
export const PRIMARY_KEYWORDS = [
  "flight school Miami",
  "pilot training South Florida",
  "aviation academy Pembroke Pines",
  "flight lessons KHWO",
  "learn to fly Florida",
  "discovery flight near me",
  "private pilot license training",
  "commercial pilot courses",
  "instrument rating Florida",
  "certified flight instructors",
  "North Perry Airport flight school",
  "professional pilot program Miami",
];

export const SECONDARY_KEYWORDS = [
  "aviation training academy",
  "flight simulator training",
  "seaplane training Florida",
  "multi-engine rating",
  "flight instructor certification",
  "airline pilot career",
  "ATP license training",
  "flight review BFR",
  "instrument proficiency check",
  "aviation financing options",
];

export const LOCAL_KEYWORDS = [
  "flight school Fort Lauderdale",
  "pilot training Hollywood FL",
  "aviation academy Davie",
  "flight lessons Coral Springs",
  "pilot school Plantation",
  "aviation training Weston",
  "flight academy Sunrise",
  "pilot certification Miramar",
  "aviation education Boca Raton",
  "flight training West Palm Beach",
];

export const LONG_TAIL_KEYWORDS = [
  "how to become a pilot in Florida",
  "best flight school South Florida",
  "private pilot license requirements",
  "commercial pilot training cost",
  "instrument rating checkride prep",
  "multi-engine pilot certification",
  "flight instructor career path",
  "aviation college alternative",
  "professional pilot program near me",
  "accelerated flight training Florida",
];

// CHANGE default keywords -> should only be used in homepage technically, but is there for a fallback in case a page is missed
export const KEYWORDS = [
  ...PRIMARY_KEYWORDS.slice(0, 8),
  ...SECONDARY_KEYWORDS.slice(0, 4),
  ...LOCAL_KEYWORDS.slice(0, 3),
].join(", ");

export const OG_IMAGE = "/SunCity-OG-image.png";

export const LOCATIONS = [
  {
    title: `North Perry Airport<br><small class="text-xs -mt-3">KHWO</small>`,
    address: "7201 S Airport Rd #504A",
    city: "Pembroke Pines",
    state: "FL",
    zip: "33023",
    gMaps: "https://maps.app.goo.gl/yugDmTfMfqUNYQ7G7",
    //phone: "1-(754)423-2159",
    phone: "1-(754)314-5076",
  },
];

// CHANGE client business info
export const PHONE_NUMBER = "1-(754)314-5076";
export const ADDRESS_LINE_1 = "7201 S Airport Rd #504A";
export const ADDRESS_LINE_2 = "Pembroke Pines, FL 33023";
export const FACEBOOK_URL = "https://www.facebook.com/SunCityAviationAcademy";
export const INSTAGRAM_URL = "https://www.instagram.com/suncity_aviation/";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/sun-city-aviation-academy/";
export const YOUTUBE_URL = "https://www.youtube.com/@suncityaviation/";
export const TWITTER_URL = "";
export const EMAIL_ADDRESS = "info@suncityaviation.com";
