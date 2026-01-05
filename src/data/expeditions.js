
// Import images
// Import images
import imgBikeSpiti1 from '../assets/images/expeditions/suv_spiti_1.jpg';
import imgBikeSpiti2 from '../assets/images/expeditions/suv_spiti_1.jpg';
import imgBikeLadakh1 from '../assets/images/expeditions/bike_ladakh_1.jpg';
import imgBikeLadakh2 from '../assets/images/expeditions/bike_ladakh_1.jpg';
import imgBikeSolo1 from '../assets/images/expeditions/bike_solo_1.jpg';
import imgSuvSpiti1 from '../assets/images/expeditions/suv_spiti_1.jpg';
import imgSuvLadakh1 from '../assets/images/expeditions/bike_ladakh_1.jpg';

export const expeditions = {
    bike: [
        {
            id: 'bx1',
            title: 'Leh',
            slug: 'Leh',
            duration: '9 Days',
            vehicle: 'Royal Enfield Himalayan',
            price: 25000,
            originalPrice: 30000,
            images: [imgBikeSpiti1, imgBikeSpiti2],
            image: imgBikeSpiti1,
            itinerary: [
                { day: 1, title: 'Manali Arrival & Bike Allocation', subtitle: 'The Beginning', description: 'Arrive in Manali. Meet the road captain and support crew. Bike allocation and a short test ride to Solang Valley to get comfortable with the machine.', meals: 'Dinner' },
                { day: 2, title: 'Manali to Jibhi', subtitle: 'Into the Wild', description: 'Ride through the lush green Banjar Valley. The roads are curvy and scenic. We stay at the riverside hamlet of Jibhi.', meals: 'Breakfast & Dinner' },
                { day: 3, title: 'Jibhi to Chitkul', subtitle: 'Hindustan Ka Aakhri Dhaba', description: 'A long ride through Kinnaur. The roads are cut into the rocks (Taranda Dhank). Reach Chitkul, the last village on the Indo-Tibet border.', meals: 'Breakfast & Dinner' },
                { day: 4, title: 'Chitkul to Kalpa', subtitle: 'Mountain Views', description: 'A shorter ride to Kalpa. Enjoy the majestic view of the Kinner Kailash peak turning golden at sunset.', meals: 'Breakfast & Dinner' },
                { day: 5, title: 'Kalpa to Kaza', subtitle: 'Transformation', description: 'Watch the landscape change from green to brown as we enter the cold desert of Spiti Valley. Cross the Sumdo checkpost.', meals: 'Breakfast & Dinner' },
                { day: 6, title: 'Kaza Local Exploration', subtitle: 'High Voltage', description: 'Ride to the world’s highest post office (Hikkim) and highest village (Komic). Visit the Langza Buddha statue.', meals: 'Breakfast & Dinner' },
                { day: 7, title: 'Kaza to Chandratal', subtitle: 'Offroad Madness', description: 'Cross the Kunzum Pass and take the off-road trail to Chandratal. The crescent-shaped lake is a jewel in the mountains.', meals: 'Camping' },
                { day: 8, title: 'Chandratal to Manali', subtitle: 'The Loop', description: 'A challenging ride back to Manali crossing the Atal Tunnel or Rohtang Pass. Celebrate the completion of the circuit.', meals: 'Dinner' },
                { day: 9, title: 'Departure', subtitle: 'Ride On', description: 'Hand over the bikes. Share photos and memories. Departure.', meals: 'Breakfast' }
            ],
            rating: 4.9,
            reviews: 120
        },
        {
            id: 'bx2',
            title: 'Spiti',
            slug: 'Spiti',
            duration: '11 Days',
            vehicle: 'Royal Enfield 350cc',
            price: 35000,
            originalPrice: 42000,
            images: [imgBikeLadakh1, imgBikeLadakh2],
            image: imgBikeLadakh1,
            itinerary: [
                { day: 1, title: 'Leh Arrival', subtitle: 'Acclimatization', description: 'Fly into Leh. Mandatory rest day to acclimatize to the high altitude (3500m).', meals: 'Dinner' },
                { day: 2, title: 'Leh Local Ride', subtitle: 'Monastery Run', description: 'Short ride to visit Thiksey Monastery, Hemis Monastery, and Shanti Stupa. Get used to the bike and terrain.', meals: 'Breakfast & Dinner' },
                { day: 3, title: 'Leh to Nubra Valley', subtitle: 'Khardung La Challenge', description: 'Ride to the top of the world! Cross Khardung La (17,582 ft) to reach the white sands of Hunder in Nubra Valley.', meals: 'Breakfast & Dinner' },
                { day: 4, title: 'Nubra to Pangong Tso', subtitle: 'Shyok River Route', description: 'Take the scenic and adventurous Agham-Shyok route. Arrive at the mesmerizing color-changing Pangong Lake.', meals: 'Camping' },
                { day: 5, title: 'Pangong to Leh', subtitle: 'Chang La Pass', description: 'Ride back to Leh crossing the mighty Chang La pass. Visit the Rancho School en route.', meals: 'Dinner' }
            ],
            rating: 4.8,
            reviews: 95
        },
        
    ],
    
    suv: [
        {
            id: 'sx1',
            title: 'Spiti Winter White Spiti',
            slug: 'spiti-winter-white-spiti',
            duration: '8 Days',
            vehicle: '4x4 Thar/Gyrpsy',
            price: 32000,
            originalPrice: 38000,
            images: [imgSuvSpiti1],
            image: imgSuvSpiti1,
            itinerary: [
                { day: 1, title: 'Shimla Arrival', subtitle: 'Start', description: 'Arrive in Shimla. Meet the drivers. Briefing on winter conditions.', meals: 'Dinner' },
                { day: 2, title: 'Shimla to Kalpa', subtitle: 'Snow Drive', description: 'Drive through snow covered roads via Narkanda. Reach Kalpa.', meals: 'Breakfast & Dinner' },
                { day: 3, title: 'Kalpa to Kaza', subtitle: 'Frozen World', description: 'Enter the frozen Spiti valley. The landscape is entirely white. A test of 4x4 capabilities.', meals: 'Breakfast & Dinner' },
                { day: 4, title: 'Kaza Exploration', subtitle: 'Snow Leopard', description: 'Look for wildlife like Ibex and Blue Sheep. Chance to spot the Ghost of the Mountains (Snow Leopard).', meals: 'Breakfast & Dinner' }
            ],
            rating: 4.9,
            reviews: 150
        },
        {
            id: 'sx2',
            title: 'Ladakh Overland SUV Tour',
            slug: 'ladakh-overland-suv-tour',
            duration: '10 Days',
            vehicle: 'Toyota Fortuner',
            price: 42000,
            originalPrice: 48000,
            images: [imgSuvLadakh1],
            image: imgSuvLadakh1,
            itinerary: [
                { day: 1, title: 'Srinagar Arrival', subtitle: 'Kashmir', description: 'Start trip from Srinagar. Shikara ride in Dal Lake.', meals: 'Dinner' },
                { day: 2, title: 'Srinagar to Kargil', subtitle: 'War Memorial', description: 'Drive via Sonamarg and Zojila Pass. Pay homage at Kargil War Memorial.', meals: 'Breakfast & Dinner' },
                { day: 3, title: 'Kargil to Leh', subtitle: 'Monasteries', description: 'Visit Lamayuru (Moonland) and Magnetic Hill en route to Leh.', meals: 'Breakfast & Dinner' }
            ],
            rating: 4.8,
            reviews: 110
        }
    ]
};
