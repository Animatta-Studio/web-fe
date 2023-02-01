import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, university, students, visa, years  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: 'home',
    dist: 'translate-x-0',
    icon: 'home-outline',
  },
  {
    id: "stuy-abroad",
    title: "Abroad",
    path: 'abroad',
    dist: 'translate-x-[100px]',
    icon: 'person-outline',
  },
  {
    id: "about",
    title: "About",
    path: 'about',
    dist: 'translate-x-[200px]',
    icon: 'chatbubble-outline',
  },
  {
    id: "language-course",
    title: "Courses",
    path: 'courses',
    dist: 'translate-x-[300px]',
    icon: 'camera-outline',
  },
  {
    id: "contact",
    title: "Contact",
    path: 'contact',
    dist: 'translate-x-[400px]',
    icon: 'settings-outline',
  },
];

export const SERVICE_ID = 'service_hvkusoh';
export const TEMPLATE_ID = 'template_5p52p65';
export const PUBLIC_KEY = '4uzTAnOmC_UWWaYB0';

export const courses = {
  'NAT': {
    id: 'co-1',
    title: 'NAT',
    content: `
      The Japanese Language NAT-TEST is an examination that measures the Japanese language ability of students who are not native Japanese speakers. The tests are separated by difficulty (five levels) and general ability is measured in three categories: Grammar/Vocabulary, Listening and Reading Comprehension. The format of the exam and the types of questions are equivalent to those that appear on the Japanese Language Ability Test (JLPT).<br/>

      The Japanese Language NAT-TEST has five levels. The easiest level is 5 and the most difficult level is 1. Each level corresponds to its respective level on the Japanese Language Proficiency Test (N5 to N1).

      Levels 1 and 2 of the exam contain the following sections: Language Knowledge (reading/vocabulary/grammar) and Listening. Levels 3, 4 and 5 of the exam contain the following sections: Language Knowledge (reading/vocabulary), a second Language Knowledge (grammar, reading comprehension) and Listening.
    `,
  },
  'JLPT': {
    id: 'co-2',
    title: 'JLPT',
    content: `
      The Japanese-Language Proficiency Test (JLPT) under joint organization of the Japan Foundation and Japan Educational Exchanges and Services (previously Association of International Education, Japan) started in 1984 as a test to measure and certify the Japanese-language proficiency of those whose native language is not Japanese. In the first year the JLPT was conducted in 15 countries, and approximately 7,000 examinees took the test. Since then, the JLPT has become the largest Japanese-language test in the world, with approximately 610,000 examinees in 62 countries and areas worldwide in 2011. This success is entirely due to the support and cooperation of all involved.

      JLPT certificates offer various advantages, ranging from recognition as academic credit and graduation certification at schools to preferential treatment at companies and acknowledgement of qualification in society.
    `,
  },
  'TOP-J': {
    id: 'co-3',
    title: 'TOP-J',
    content: `
      TOP-J Practical Japanese Proficiency Test is a test developed by experts and professors who are active in the Japanese language education field in Japan and abroad. For learners who are studying Japanese as a foreign language, it is better to measure the basic abilities such as vocabulary, grammar, sentence patterns, etc. from the exam, communication from foreigners living in Japan, such as living and work etc. We also aim at measuring the ability to understand Japanese society and Japanese companies' customs and culture through doubts.

      Therefore, it is thought that learners can grasp the foundation of the language and deepen the adaptability to the whole Japanese society.
      TOPJ The practical Japanese proficiency test is divided into elementary, intermediate, advanced. When applying for study abroad in Japan, the results of this exam will be the proof of the language ability as well as the Japanese Language Proficiency Test.
      
      For example, if you acquire Elementary A, you will be deemed to have sufficient ability to study abroad at Japanese language institution in Japan, and if you acquire Advanced A you will be accepted in Japanese society or Japanese company You can admit that you have a certain adaptive capacity, and you can be in charge of interpreter etc for Japanese companies.
    `,
  },
  'Japanese': {
    id: 'co-4',
    title: 'Japanese',
    content: `
      Japanese language course designed for the entry level learners who have no  knowledge of Japanese language and aim of this course is  to develop their ability to communicate in simple Japanese language and understand the Japanese culture. 

      Benefits & Scope of Japanese Language.
      
      Language is only a way of communication in any circumstances. It is quite difficult to survive in a new environment until and unless you know the language, culture, manners and tradition of them. They say, “When in Rom do as Romans do.” If you are thinking of going to Japan for work or study, obviously you need Japanese to make yourself comfortable and get rid of unwanted problems. If you are not capable of understanding Japanese and its culture you will probably find yourself in trouble.
    `,
  }
};

export const contacts = [
  {
    id: 'c-1',
    title: 'Location',
    img: '',
    data: 'Dehradun, Uttarakhand, India',
  },
  {
    id: 'c-2',
    title: 'Contact',
    img: '',
    data: '+91-9999999999',
  },
  {
    id: 'c-3',
    title: 'Email',
    img: '',
    data: 'miraieducational@gmail.com',
  },
  {
    id: 'c-4',
    title: 'Website',
    img: '',
    data: 'www.miraiedu.in',
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Years of Experience",
    img: years,
    value: 7,
  },
  {
    id: "stats-2",
    title: "Reputed Institutions",
    img: university,
    value: 15,
  },
  {
    id: "stats-3",
    title: "Satisfied Students",
    img: students,
    value: 803,
  },
  {
    id: "stats-4",
    title: "Visa Granted",
    img: visa,
    value: 673,
  }
];

export const offerGrid = [
  {
    id: 'offer-1',
    title: 'Free Consultation',
    text: 'Absolutely Transparency and Fair Information with Best Guidance for Career',
    img: '',
  },
  {
    id: 'offer-2',
    title: 'Language Classes',
    text: 'We provide Japanese Language Classes and Nepali Classes for Japanese as well',
    img: '',
  },
  {
    id: 'offer-3',
    title: 'Free Processing',
    text: 'We provide Free Visa Processing for Studing in Japan',
    img: '',
  },
  {
    id: 'offer-4',
    title: 'Free JLPT, NAT-TEST Class',
    text: 'We provide the Free JLPT, Nat-Test Preparation Classes for the applicant',
    img: '',
  },
  {
    id: 'offer-5',
    title: 'Documentation',
    text: 'Provides the Best Services of Documentation Translation into Japanese Format',
    img: '',
  },
  {
    id: 'offer-6',
    title: 'Exchange Program',
    text: 'Organizing the social and cultural exchange programs between Japan and Nepal',
    img: '',
  },
]

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];