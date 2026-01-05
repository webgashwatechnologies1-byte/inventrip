
// Import images
// Import images
import imgShimla1 from '../assets/images/tracking/shimla_jakhu_1.jpg';
import imgShimla2 from '../assets/images/tracking/shimla_jakhu_1.jpg';
// import imgChadwick1 from '../assets/images/tracking/chadwick_1.jpg';
// import imgChadwick2 from '../assets/images/tracking/chadwick_1.jpg';
// import imgHatu1 from '../assets/images/tracking/hatu_1.jpg';
// import imgHatu2 from '../assets/images/tracking/hatu_2.jpg';
// import imgKarol1 from '../assets/images/tracking/karol_1.jpg';
// import imgKarol2 from '../assets/images/tracking/karol_2.jpg';
// import imgShali1 from '../assets/images/tracking/shali_1.jpg';
// import imgShali2 from '../assets/images/tracking/shali_1.jpg';

export const tracking = [
    {
        id: 'trk1',
        title: "Kinnaur Trekking",
        slug: "Kinnaurtrekking",
        price: 12500,
        originalPrice: 15000,
        images: [imgShimla1, imgShimla2], // Updated to array
        image: imgShimla1, // Fallback
        duration: "5 Days / 4 Nights",
        description: "Embark on a captivating journey through the historic trails of the British Summer Capital. This diverse trek takes you from the bustling Mall Road to the serene forests of Jakhu, offering a perfect blend of history, culture, and nature.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Shimla & Acclimatization",
                subtitle: "The Queen of Hills",
                description: "Your journey begins as you arrive in Shimla. After checking into your heritage hotel, spend the afternoon exploring the iconic Ridge and Mall Road. Immerse yourself in the colonial charm of Christ Church and the Gaiety Theatre. A gentle evening walk helps you acclimatize to the altitude while enjoying the sunset over the Himalayas.",
                meals: "Dinner"
            },
            {
                day: 2,
                title: "Jakhu Temple & Forest Trek",
                subtitle: "Hanuman's Abode",
                description: "Wake up to fresh mountain air and embark on a trek to the highest point in Shimla, the Jakhu Temple. The trail winds through dense deodar forests, home to playful monkeys. At 2,455m, the 108-foot Hanuman statue stands tall. Enjoy breathtaking 360-degree views of the Shivalik ranges before descending back.",
                meals: "Breakfast & Dinner"
            },
            {
                day: 3,
                title: "Glen Forests, Annandale & Army Museum",
                subtitle: "Nature & History",
                description: "Today's trek takes you down into the deep, shaded Glen forests. Listen to the rustling pines and chirping birds as you hike towards the Annandale meadows. Visit the captivating Army Heritage Museum to learn about India's military history. Enjoy a packed picnic lunch amidst the green expanse.",
                meals: "Breakfast & Dinner"
            },
            {
                day: 4,
                title: "Chadwick Falls Expedition",
                subtitle: "The Cascading Beauty",
                description: "Gear up for a moderate trek to the serene Chadwick Falls. The path takes you through thick canopy cover, ensuring a cool walk even on sunny days. Witness the crystal clear water cascading down from a height of 86 meters. It's a perfect spot for meditation and photography.",
                meals: "Breakfast & Dinner"
            },
            {
                day: 5,
                title: "Summer Hill Walk & Departure",
                subtitle: "Until Next Time",
                description: "On your final morning, enjoy a leisurely walk around the quiet Summer Hill, where Mahatma Gandhi often stayed. Soak in the last views of the pine-clad valleys before you proceed to your onward journey with a bag full of memories.",
                meals: "Breakfast"
            }
        ],
        inclusions: ["4 Nights Hotel Stay", "Certified Trekking Guide", "Forest Entry Permits", "Breakfast & Dinner (Buffet/Set Menu)", "First Aid Support"],
        exclusions: ["Lunch", "Personal Expenses", "Porter charges", "Travel Insurance"],
        rating: 4.8,
        reviews: 42
    },
    // {
    //     id: 'trk2',
    //     title: "Chadwick Falls Nature Walk",
    //     slug: "chadwick-falls-nature-walk",
    //     price: 15000,
    //     originalPrice: 18000,
    //     images: [imgChadwick1, imgChadwick2],
    //     image: imgChadwick1,
    //     duration: "6 Days / 5 Nights",
    //     description: "Dive deep into the silence of nature. This package is designed for those who seek solitude and a deep connection with the forest ecosystem surrounding Shimla.",
    //     itinerary: [
    //         {
    //             day: 1,
    //             title: "Base Camp Arrival at Summer Hill",
    //             subtitle: "Setting Up",
    //             description: "Arrive at the picturesque Summer Hill. We set up our eco-friendly base camp here. An extensive orientation session follows, briefing you on eco-trekking practices and safety protocols.",
    //             meals: "Dinner"
    //         },
    //         {
    //             day: 2,
    //             title: "The Great Fall Descent",
    //             subtitle: "Into the Abyss",
    //             description: "We begin our descent towards Chadwick Falls through a lesser-known trail. The canopy here is so thick that sunlight dances on the forest floor. Spend hours by the waterfall, listening to the roar of nature.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 3,
    //             title: "Potter's Hill Camping",
    //             subtitle: "Starry Night",
    //             description: "We hike up to Potter's Hill, a vantage point offering stunning views. Tonight, we camp under the stars. Verified local astronomers will guide you through the constellations (weather permitting). A warm bonfire accompanies dinner.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 4,
    //             title: "Catchment Sanctuary Safari",
    //             subtitle: "Wildlife Encounter",
    //             description: "Today we explore the Shimla Water Catchment Sanctuary. It is one of the densest forests in Asia. Keep your cameras ready to spot barking deer, flying squirrels, and a variety of Himalayan birds.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 5,
    //             title: "Rural Village Interlude",
    //             subtitle: "Local Life",
    //             description: "We walk to a nearby traditional Himachali village. Engage with the locals, understand their agrarian lifestyle, and enjoy a traditional meal cooked on a wood-fired stove.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 6,
    //             title: "Trek Back & Farewell",
    //             subtitle: "Circle of Life",
    //             description: "A final uphill trek brings us back to the road head. We bid adieu to the mountains, refreshed and rejuvenated.",
    //             meals: "Breakfast"
    //         }
    //     ],
    //     inclusions: ["Premium Camping Gear", "All Meals (Vegetarian)", "Pro Trek Leader", "Bonfire & Music"],
    //     exclusions: ["Alcoholic Beverages", "Personal Porters", "Travel Insurance"],
    //     rating: 4.7,
    //     reviews: 28
    // },
    // {
    //     id: 'trk3',
    //     title: "Hatu Peak Wilderness Trek",
    //     slug: "hatu-peak-wilderness-trek",
    //     price: 18500,
    //     originalPrice: 22000,
    //     images: [imgHatu1, imgHatu2],
    //     image: imgHatu1,
    //     duration: "7 Days / 6 Nights",
    //     description: "Conquer the second highest peak in the Shimla district. This trek to Hatu Peak (3400m) offers unparalleled views of the Pir Panjal ranges and an immersive cultural experience.",
    //     itinerary: [
    //         {
    //             day: 1,
    //             title: "Drive to Narkanda",
    //             subtitle: "Gateway to Apple Country",
    //             description: "A scenic drive brings you to Narkanda. This town is famous for its ski slopes and apple orchards. Acclimatize with a short walk around the market.",
    //             meals: "Dinner"
    //         },
    //         {
    //             day: 2,
    //             title: "Summit Day: Hatu Peak",
    //             subtitle: "Top of the World",
    //             description: "Use the ancient trails to hike up to the Hatu Mata Temple. The air gets thinner and crisper. From the top, witness the majesty of the snowy Himalayan chain. We offer prayers and have lunch with a view.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 3,
    //             title: "Camping at Jau Bagh",
    //             subtitle: "Alpine Meadows",
    //             description: "A short walk from the peak brings us to the expansive meadows of Jau Bagh. It's a carpet of green surrounded by deep forests. We pitch tents here for a surreal night in the wild.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 4,
    //             title: "Descent to Tani Jubbar Lake",
    //             subtitle: "Serenity",
    //             description: "We descend through spruce and fir forests to reach the oval-shaped Tani Jubbar Lake. The reflection of the Nag Devta temple in the water is a sight to behold.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 5,
    //             title: "Orchard Homestay Experience",
    //             subtitle: "Farm Life",
    //             description: "Move to a local homestay nestled within active apple orchards. Participate in farm activities, learn about grafting and harvesting from the hosts.",
    //             meals: "All Meals"
    //         },
    //         {
    //             day: 6,
    //             title: "Cultural Immersion Gala",
    //             subtitle: "Dance & Dine",
    //             description: "The evening is dedicated to Himachali culture. Dressed in traditional attire, enjoy the 'Nati' dance performance and a grand feast called 'Dham'.",
    //             meals: "Dinner"
    //         },
    //         {
    //             day: 7,
    //             title: "Journey Home",
    //             subtitle: "Departure",
    //             description: "After a hearty breakfast, we drive you back to Shimla/Delhi, concluding the wilderness saga.",
    //             meals: "Breakfast"
    //         }
    //     ],
    //     inclusions: ["Homestay & Dome Tents", "All Meals", "Qualified Guide", "Local Transfers"],
    //     exclusions: ["Shopping", "Tips for staff"],
    //     rating: 4.9,
    //     reviews: 56
    // },
    // {
    //     id: 'trk4',
    //     title: "Karol Tibba Caves Trek",
    //     slug: "karol-tibba-caves-trek",
    //     price: 14000,
    //     originalPrice: 16500,
    //     images: [imgKarol1, imgKarol2],
    //     image: imgKarol1,
    //     duration: "6 Days / 5 Nights",
    //     description: "An adventure for the curious. Explore the mythological Pandava caves at Karol Tibba, the highest peak of Solan, combined with history and spirituality.",
    //     itinerary: [
    //         { day: 1, title: "Arrival in Solan", subtitle: "Mushroom City", description: "Reach Solan, known as the Mushroom City of India. Check into our base camp. Briefing on caving safety and equipment use.", meals: "Dinner" },
    //         { day: 2, title: "The Ascent", subtitle: "Steep & Steady", description: "The trek begins! It’s a steep climb through pine forests. As we gain altitude, the view of the sprawling city below is mesmerizing.", meals: "Breakfast & Dinner" },
    //         { day: 3, title: "Into the Caves", subtitle: "Spelunking", description: "We reach the ancient Karol Caves. Legend says the Pandavas built these during their exile. We explore the deep, cool interiors with headlamps.", meals: "Breakfast & Dinner" },
    //         { day: 4, title: "Summit Sunset", subtitle: "Golden Hour", description: "We hike further up to the Karol Tibba peak. The sunset here paints the sky in hues of purple and orange. A photographer's paradise.", meals: "Breakfast & Dinner" },
    //         { day: 5, title: "Bon Monastery Visit", subtitle: "Tibetan Heritage", description: "Descending via a different route, we visit the Yung Drung Ling (Bon) Monastery. It is one of the oldest in the world. Experience the evening chants.", meals: "Breakfast & Dinner" },
    //         { day: 6, title: "Departure", subtitle: "Adios", description: "Short trek back to the highway and departure to your respective destinations.", meals: "Breakfast" }
    //     ],
    //     inclusions: ["Camping/Hotel", "Nutritious Meals", "Caving Equipment", "Permits"],
    //     exclusions: ["Personal Hiking Gear", "Travel to Solan"],
    //     rating: 4.6,
    //     reviews: 35
    // },
    // {
    //     id: 'trk5',
    //     title: "Shali Tibba 360 View Trek",
    //     slug: "shali-tibba-360-view-trek",
    //     price: 13000,
    //     originalPrice: 15000,
    //     images: [imgShali1, imgShali2],
    //     image: imgShali1,
    //     duration: "5 Days / 4 Nights",
    //     description: "Stand atop the Shali peak for a detached, 360-degree view of Shimla, Mashobra, Fagu, and the great Himalayas. A pilgrimage and a trek combined.",
    //     itinerary: [
    //         { day: 1, title: "Mashobra Arrival", subtitle: "Quiet Beginnings", description: "Arrive at Mashobra. It is quieter and greener than Shimla. Relax and prepare for the days ahead.", meals: "Dinner" },
    //         { day: 2, title: "Base Village Transfer", subtitle: "Khatnool", description: "A picturesque drive takes us to Khatnool village. We start a warm-up walk to get our muscles ready.", meals: "Breakfast & Dinner" },
    //         { day: 3, title: "The Zig-Zag Climb", subtitle: "To the Temple", description: "The trail is well defined and winds up the mountain. Steps lead us to the Shali Mata temple at the summit. The view is simply unmatched.", meals: "Breakfast & Dinner" },
    //         { day: 4, title: "Blue Pine Descent", subtitle: "Forest Bathing", description: "We take a longer, more scenic route down through dense blue pine forests. The air is filled with the scent of resin.", meals: "Breakfast & Dinner" },
    //         { day: 5, title: "Departure", subtitle: "Return", description: "Drive back to Shimla with blessings from the Goddess and great memories.", meals: "Breakfast" }
    //     ],
    //     inclusions: ["Cottage/Homestay", "Local Organic Meals", "Guide", "Local Transport"],
    //     exclusions: ["Personal Expenses", "Insurance"],
    //     rating: 4.5,
    //     reviews: 22
    // }
];
