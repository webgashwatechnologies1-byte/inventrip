// Helper function to generate default 8-day itinerary for packages
export const generateDefaultItinerary = (packageTitle, destination) => {
  const baseItinerary = [
    {
      day: 1,
      location: "New Delhi",
      subtitle: `Delhi - ${destination}`,
      description: `Your journey begins from Delhi. Board the Volvo from the designated pick-up point. Please report at the scheduled time. The overnight journey will be by Volvo. Get ready to experience the beautiful landscapes of ${destination}.`,
      meals: "Overnight journey by Volvo"
    },
    {
      day: 2,
      location: destination,
      subtitle: "Arrival + Local Sightseeing",
      description: `Arrive in ${destination} and transfer to the hotel. After check-in (subject to availability), proceed for local sightseeing. Explore the main attractions and enjoy the local culture. Return to hotel for dinner and overnight stay.`,
      meals: "Accommodation & Dinner Only"
    },
    {
      day: 3,
      location: destination,
      subtitle: "Full Day Sightseeing",
      description: `After breakfast, proceed for full day sightseeing. Visit the major attractions and landmarks. Enjoy the scenic beauty and local experiences. Return to hotel for dinner and overnight stay.`,
      meals: "Accommodation, Breakfast & Dinner"
    },
    {
      day: 4,
      location: destination,
      subtitle: "Adventure Activities / Excursion",
      description: `After breakfast, enjoy adventure activities or proceed for an excursion to nearby attractions. Experience the thrill and natural beauty of the region. Return to hotel for dinner and overnight stay.`,
      meals: "Accommodation, Breakfast & Dinner"
    },
    {
      day: 5,
      location: destination,
      subtitle: "Explore Local Culture",
      description: `After breakfast, explore the local culture, visit markets, try local cuisine, and interact with locals. Enjoy shopping and cultural experiences. Return to hotel for dinner and overnight stay.`,
      meals: "Accommodation, Breakfast & Dinner"
    },
    {
      day: 6,
      location: destination,
      subtitle: "Optional Activities / Free Day",
      description: `After breakfast, enjoy a free day to explore at your own pace. You can opt for additional activities or simply relax and enjoy the surroundings. Return to hotel for dinner and overnight stay.`,
      meals: "Accommodation, Breakfast & Dinner"
    },
    {
      day: 7,
      location: destination,
      subtitle: "Last Day Exploration",
      description: `After breakfast, enjoy your last day of exploration. Visit any missed attractions, do last-minute shopping, or simply relax. Return to hotel for dinner and overnight stay.`,
      meals: "Accommodation, Breakfast & Dinner"
    },
    {
      day: 8,
      location: destination,
      subtitle: "Departure back home",
      description: `After breakfast at the hotel, check-out and depart for Delhi. Free time to explore local markets before reporting at the designated point for the return journey to Delhi.`,
      meals: "Breakfast Only"
    }
  ];

  return baseItinerary;
};

export const defaultPolicies = {
  cancellation: "Cancellation charges apply as per policy. 30+ days: Full refund minus 5% processing fee. 15-30 days: 50% refund. 7-14 days: 25% refund. Less than 7 days: No refund.",
  inclusions: [
    "Accommodation in hotel",
    "Meals as per itinerary",
    "Transportation by Volvo (Delhi-Destination-Delhi)",
    "Local sightseeing as per itinerary",
    "All applicable taxes"
  ],
  exclusions: [
    "Any personal expenses",
    "Adventure activities charges",
    "Any meals not mentioned in itinerary",
    "Travel insurance",
    "Any other expenses not mentioned in inclusions"
  ],
  importantNotes: [
    "Hotel check-in time is 12:00 PM (subject to availability)",
    "Adventure activities are subject to weather conditions",
    "Prices may vary during peak season",
    "Itinerary is subject to change based on weather and local conditions"
  ]
};

export const defaultFAQ = [
  {
    question: "What is included in the package?",
    answer: "The package includes accommodation, meals as per itinerary, transportation, guide services, and sightseeing as mentioned in the package details."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation charges apply as per policy. 30+ days: Full refund minus 5% processing fee. 15-30 days: 50% refund. 7-14 days: 25% refund. Less than 7 days: No refund."
  },
  {
    question: "How do I book this package?",
    answer: "You can book by calling us at +91 7832911551 or by requesting a callback using the button on the package page."
  }
];

