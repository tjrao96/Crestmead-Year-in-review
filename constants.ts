
import { PropertyHighlight, MarketStat, RecentSale } from './types';

export const AGENT_NAME = "Rob Ford";
export const AGENCY_NAME = "Zevesto Property Group";
export const AGENT_PHONE = "+61 408 886 547";
export const AGENT_EMAIL = "rob@zevesto.com";
export const AGENT_IMAGE = "https://phimg.reapit.website/c3c9fd0f0cb51a9e9a86008637ccea14776725ac";
export const LOGO_URL = "https://www.zevesto.com/wp-content/uploads/2025/01/long-logo-blue-1-edited-768x132.png";
export const RMA_LOGO = "https://d33v4339jhl8k0.cloudfront.net/docs/assets/5600de649033603707857f12/images/5d230a6d04286369ad8d6830/file-7mkJym7K6d.png";
export const BOOKING_FORM_URL = "https://api.leadconnectorhq.com/widget/form/ub7Ny1fzcseLZxqDcMjh";
export const ZEVESTO_VIDEO_ID = "MDiibmeqcQM";

export const ROB_STATS = {
  medianPrice: "$710k",
  medianDays: "8",
  source: "realestate.com.au (Last 12 Months)"
};

export const RMA_BADGES = [
  "https://static.ratemyagent.com.au/assets/images/recognition/recognition-top20.svg",
  "https://static.ratemyagent.com.au/assets/images/recognition/recognition-trusted.svg",
  "https://static.ratemyagent.com.au/assets/images/recognition/recognition-priceExpert.svg"
];

export const MARKET_STATS: MarketStat[] = [
  { label: "Median Sale Price", value: "$745k", subtext: "+12.9% Annual Growth" },
  { label: "Properties Sold", value: "177", subtext: "Last 12 Months (Oct '24 - Sep '25)" },
  { label: "Median Rent", value: "$570pw", subtext: "+4.0% Rental Yield" },
  { label: "Days on Market", value: "14", subtext: "Average for Top Properties" },
];

export const FAQ_ITEMS = [
  {
    question: "Has the Crestmead market peaked?",
    answer: "While we saw exceptional growth of 12.9% in 2025, demand remains high due to Crestmead's affordability relative to neighboring suburbs. We are still seeing multiple offers on correctly priced homes, suggesting further potential for 2026, though likely at a more stabilized rate."
  },
  {
    question: "What is your marketing strategy for selling?",
    answer: "We use a 'Competitive Tension' strategy. This involves a mix of pre-market database alerts (accessing buyers before public listing), high-quality digital presentation, and strategic open homes to create urgency among buyers."
  },
  {
    question: "How much is my home worth in the current market?",
    answer: "Every home is unique. While the median is $745k, factors like land size, renovation status, and street appeal significantly impact value. We offer a no-obligation appraisal to give you an accurate figure based on real-time data."
  },
  {
    question: "Do I need to pay for marketing upfront?",
    answer: "At Zevesto, we have flexible options. We believe in partnering with our clients, and we can discuss a structure that suits your financial situation while ensuring your property gets the exposure it deserves."
  }
];

// Rob Ford's Specific Sales Highlights
export const PROPERTY_HIGHLIGHTS: PropertyHighlight[] = [
  {
    id: "513-browns-plains",
    title: "Off Market Success",
    category: "Great Result",
    price: "$745,000",
    address: "513 Browns Plains Road",
    beds: 3,
    baths: 1,
    cars: 2,
    imageUrl: "https://i2.au.reastatic.net/800x600-format=webp/c0c13cdd615e62f10a426085642779549fb448e6d8e0cbfa42801eded50704f4/image.jpg",
    description: "Sold off-market without advertising costs. This result demonstrates the power of the Zevesto database and matching the right buyer to the right home instantly.",
    soldDate: "Sep 2025",
    location: { lat: -27.678831, lng: 153.083 }
  },
  {
    id: "6-hakea",
    title: "Premium Street Sale",
    category: "High Performance",
    price: "$750,000",
    address: "6 Hakea Street",
    beds: 3,
    baths: 2,
    cars: 3,
    imageUrl: "https://i2.au.reastatic.net/1904x912-resize,extend,r=33,g=40,b=46/11c3233156b2da282d4047005ef782e5062c218d2d66e54288bcabf69e34727d/image.jpg",
    description: "A fantastic result for a 3-bedroom home on a large 750m² block. We achieved a premium price through effective negotiation and presentation.",
    soldDate: "Aug 2025",
    location: { lat: -27.682772, lng: 153.09122 }
  },
  {
    id: "9-pitt",
    title: "Cul-de-sac Living",
    category: "Sold by Rob",
    price: "$725,000",
    address: "9 Pitt Court",
    beds: 3,
    baths: 1,
    cars: 1,
    imageUrl: "https://i2.au.reastatic.net/1904x912-resize,extend,r=33,g=40,b=46/323a74dfa556bb9db56e1dba633b13c38b06635b1b52845c9e01c2805d126cd2/image.jpg",
    description: "Achieving a 5-star seller review, this sale highlights our commitment to making the sales process stress-free while securing top market value.",
    soldDate: "2025",
    location: { lat: -27.6951, lng: 153.0910 } // Approximate for Pitt Ct
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    title: "Excellent agent",
    review: "Very professional, bought a house from Rob ,definitely will find Rob if we sell. Thanks Rob",
    author: "Craig",
    type: "Buyer",
    property: "6 Hakea Street, Crestmead",
    price: "$750,000",
    date: "11 days ago",
    rating: 5,
    image: "https://i2.au.reastatic.net/1904x912-resize,extend,r=33,g=40,b=46/11c3233156b2da282d4047005ef782e5062c218d2d66e54288bcabf69e34727d/image.jpg"
  },
  {
    id: 2,
    title: "Absolutely perfect 👌",
    review: "From start to finish, Rob was extremely professional. He replied to every phone call and text message with every question answered promptly. Always kept us in the loop... This whole process was completely stress free.",
    author: "Seller",
    type: "Seller",
    property: "9 Pitt Court, Crestmead",
    price: "$725,000",
    date: "6 months ago",
    rating: 5,
    image: "https://i2.au.reastatic.net/1904x912-resize,extend,r=33,g=40,b=46/323a74dfa556bb9db56e1dba633b13c38b06635b1b52845c9e01c2805d126cd2/image.jpg"
  },
  {
    id: 3,
    title: "Off-Market Magic",
    review: "Rob found a buyer for our investment property without us even having to list it online. Saved marketing fees and got a great price. Highly efficient.",
    author: "Investor",
    type: "Seller",
    property: "513 Browns Plains Rd",
    price: "$745,000",
    date: "Sep 2025",
    rating: 5,
    image: "https://i2.au.reastatic.net/800x600-format=webp/c0c13cdd615e62f10a426085642779549fb448e6d8e0cbfa42801eded50704f4/image.jpg"
  }
];

export const MARKET_CHART_DATA = [
  { name: '2016', price: 320 },
  { name: '2017', price: 336 },
  { name: '2018', price: 335 },
  { name: '2019', price: 324 },
  { name: '2020', price: 340 },
  { name: '2021', price: 415 },
  { name: '2022', price: 525 },
  { name: '2023', price: 573 },
  { name: '2024', price: 690 },
  { name: '2025', price: 745 },
];

// A subset of the provided sales data for the "Recent Sales" list component with coords
export const RECENT_SALES_DATA: RecentSale[] = [
  { address: "14 Julie St", price: "$830,000", beds: 4, baths: 1, cars: 2, date: "Nov 2025", type: "House", land: "600m²", location: { lat: -27.6906, lng: 153.0828 } },
  { address: "10 John Davison Pl", price: "$298,839", beds: 3, baths: 2, cars: 2, date: "Nov 2025", type: "House", land: "555m²", location: { lat: -27.6920, lng: 153.0850 } },
  { address: "11 Moonah Crt", price: "$770,000", beds: 4, baths: 1, cars: 0, date: "Nov 2025", type: "House", land: "743m²", location: { lat: -27.688797, lng: 153.0957 } },
  { address: "16 Jobson Pl", price: "$780,000", beds: 3, baths: 1, cars: 1, date: "Oct 2025", type: "House", land: "620m²", location: { lat: -27.6890, lng: 153.0920 } },
  { address: "18 Houston Dr", price: "$825,000", beds: 4, baths: 1, cars: 6, date: "Oct 2025", type: "House", land: "608m²", location: { lat: -27.694775, lng: 153.07947 } },
  { address: "27 Royena Crt", price: "$710,000", beds: 3, baths: 1, cars: 1, date: "Oct 2025", type: "House", land: "713m²", location: { lat: -27.689981, lng: 153.0915 } },
  { address: "38 Hakari St", price: "$770,000", beds: 3, baths: 0, cars: 0, date: "Oct 2025", type: "House", land: "720m²", location: { lat: -27.6810, lng: 153.0850 } },
  { address: "13 Barcrest Ct", price: "$910,000", beds: 4, baths: 2, cars: 2, date: "Oct 2025", type: "House", land: "621m²", location: { lat: -27.690899, lng: 153.10112 } },
  { address: "7 Venture St", price: "$768,500", beds: 3, baths: 1, cars: 2, date: "Sep 2025", type: "House", land: "450m²", location: { lat: -27.696037, lng: 153.07803 } },
  { address: "96 Waratah Dr", price: "$810,000", beds: 3, baths: 1, cars: 0, date: "Oct 2025", type: "House", land: "600m²", location: { lat: -27.68749, lng: 153.09956 } },
  { address: "80 Julie St", price: "$850,000", beds: 4, baths: 2, cars: 4, date: "Oct 2025", type: "House", land: "689m²", location: { lat: -27.690674, lng: 153.08282 } },
  { address: "1 Tombay Ct", price: "$1,015,000", beds: 5, baths: 3, cars: 2, date: "Sep 2025", type: "Duplex", land: "601m²", location: { lat: -27.696455, lng: 153.09346 } },
  { address: "6 Hakea St", price: "$750,000", beds: 3, baths: 2, cars: 3, date: "Aug 2025", type: "House", land: "750m²", location: { lat: -27.682772, lng: 153.09122 } },
];