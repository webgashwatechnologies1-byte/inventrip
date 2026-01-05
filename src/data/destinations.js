import imgHimachal1 from '../assets/images/destinations/Himachalpardesh.jpg';
import imgHimachal2 from '../assets/images/destinations/himachal_2.jpg';
import imgShimla1 from '../assets/images/destinations/himachal_2.jpg';
import imgShimla2 from '../assets/images/destinations/himachal_1.jpg';
import imgSpiti1 from '../assets/images/destinations/spitii.jpg';
import imgSpiti2 from '../assets/images/destinations/spiti_2.jpg';
import imgLeh1 from '../assets/images/destinations/lehladakhh.jpg';
import imgLeh2 from '../assets/images/destinations/ladakh.jpg';
import imgRaj1 from '../assets/images/destinations/rajsthann.jpg';
import imgjaisalmer from '../assets/images/destinations/Jaisalmer.jpg';

import imggrandrajsthan from '../assets/images/destinations/rajasthan-heritage.jpg';
import imgRaj2 from '../assets/images/destinations/rajasthan_1.jpg';
import imgUdaipur1 from '../assets/images/destinations/udaipur_1.jpg';
import imgDharamshala from '../assets/images/destinations/dharamshala.jpg';
import imgkasol from '../assets/images/destinations/kasol.jpg';
import imgjibhi from '../assets/images/destinations/jibhi.jpg';
import imgbirbilling from '../assets/images/destinations/birbilling.jpg';
import imgkinnur from '../assets/images/destinations/kalpaa.jpg';
import imgspitivalley from '../assets/images/destinations/spitivalley.jpg';
import imgnarkanda from '../assets/images/destinations/narkanda.jpg';
import imghimachal from '../assets/images/destinations/Himachalpardesh.jpg';
import imgkaza from '../assets/images/destinations/spitivalley.jpg';
import imgnubra from '../assets/images/destinations/nubra.jpg';
import imglehbike from '../assets/images/destinations/lehbike.jpg';
import imghsrinagar from '../assets/images/destinations/srinagar.jpg';
import imgkashmir from '../assets/images/destinations/kashmirlatest.jpg';
import imgkashmirgetaway from '../assets/images/destinations/kashmirnew.jpg';
import imgsonmarg from '../assets/images/destinations/Sonamarg.jpg';
import imgPanorama from '../assets/images/destinations/panorama.jpg';
import imgchardham from '../assets/images/destinations/chardham.jpg';
import imgkedarnath from '../assets/images/destinations/kedarnath.jpg';
import imgkedarnathhelicopter from '../assets/images/destinations/kdhelicopter.jpg';
import imgbadrinath from '../assets/images/destinations/bdnth.jpg';
import imgSerenity from '../assets/images/destinations/serenity.jpg';
import imgsouthgoa from '../assets/images/destinations/southgoa.jpg';
import imggoahoneymoon from '../assets/images/destinations/goahoneymoon.jpg';
import imgdhudhsagarfalls from '../assets/images/destinations/hudhsagarfalls.jpg';
import imgnightlife from '../assets/images/destinations/nightlife.jpg';
import imgmunnar from '../assets/images/destinations/munnar.jpg';
import imgwayanadnNature from '../assets/images/destinations/wayanadnNature.jpg';
import imgthekkadadywildlife from '../assets/images/destinations/thekkadadywildlife.jpg';
import imgluxuryretreat from '../assets/images/destinations/luxuryretreat.jpg';
import imgkochi from '../assets/images/destinations/kochi.jpg';


export const destinations = {
    himachal: {
        name: "Himachal Pradesh",
        slug: "himachal",
        image: imgHimachal1,
        packages: [
            {
                id: 1,
                title: "Manali Volvo Tour Packages",
                slug: "manali-volvo-tour",
                price: 12000,
                originalPrice: 15000,
                duration: "7 Days & 6 Nights",
                images: [imgHimachal1, imgHimachal2],
                image: imgHimachal1,
                rating: 4.5,
                reviews: 120,
                itinerary: [
                    { day: 1, title: "Delhi to Manali", subtitle: "Overnight Journey", description: "Board the luxury Volvo bus from Delhi Majnu Ka Tila. Overnight comfortable journey to the mountains.", meals: "None" },
                    { day: 2, title: "Manali Arrival & Local sightseeing", subtitle: "Leisure", description: "Arrive in Manali. Check into your hotel. Visit the Hadimba Devi Temple, Vashisht Hot Springs, and the Mall Road.", meals: "Dinner" },
                    { day: 3, title: "Solang Valley Adventure", subtitle: "Snow & Fun", description: "Full day excursion to Solang Valley. Indulge in paragliding, zorbing, and ATV rides. Enjoy the snow (seasonal).", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Kullu & Naggar Castle", subtitle: "Heritage", description: "Visit the historic Naggar Castle and the Roerich Art Gallery. Stop at Kullu for river rafting and shawl shopping.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Departure", subtitle: "Return", description: "After breakfast, check out. Free time for shopping. Board the return Volvo to Delhi in the evening.", meals: "Breakfast" }
                ]
            },
            {
                id: 2,
                title: "Shimla Weekend Getaway",
                slug: "shimla-weekend-getaway",
                price: 10000,
                originalPrice: 13000,
                duration: "3 Days & 2 Nights",
                images: [imgShimla1, imgShimla2],
                image: imgShimla1,
                rating: 4.3,
                reviews: 98,
                itinerary: [
                    { day: 1, title: "Arrival in Shimla", subtitle: "Ridge View", description: "Arrive in Shimla. Transfer to hotel. Evening walk on the Ridge to witness the sunset over the Christ Church.", meals: "Dinner" },
                    { day: 2, title: "Kufri Excursion", subtitle: "Snow Point", description: "Drive to Kufri. Visit the Himalayan Nature Park. Enjoy horse riding to Mahasu Peak. Fun world activities.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Departure", subtitle: "Goodbye", description: "Morning shopping at Lakkar Bazaar for wooden artifacts. Departure.", meals: "Breakfast" }
                ]
            },
            {
                id: 3,
                title: "Dharamshala & Dalhousie Heritage",
                slug: "dharamshala-dalhousie-heritage",
                price: 18500,
                originalPrice: 22000,
                duration: "6 Days & 5 Nights",
                image: imgDharamshala,
                rating: 4.7,
                reviews: 145,
                itinerary: [
                    { day: 1, title: "Arrival in Dharamshala", subtitle: "Little Lhasa", description: "Transfer to Mcleodganj. Visit the Dalai Lama Temple and the local Tibetan market.", meals: "Dinner" },
                    { day: 2, title: "Dharamshala Sightseeing", subtitle: "Mountains & Monasteries", description: "Visit Bhagsu Waterfall, Bhagsunath Temple, and the HPCA Stadium.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Dharamshala to Dalhousie", subtitle: "Scenic Drive", description: "Drive to the beautiful hill station of Dalhousie. Rest and leisure time.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Khajjiar Excursion", subtitle: "Mini Switzerland", description: "Full day trip to Khajjiar. Enjoy the lush meadows and cedar forests.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Dalhousie Local", subtitle: "Churches & Panjpula", description: "Visit St. John's Church and Panjpula waterfalls.", meals: "Breakfast & Dinner" },
                    { day: 6, title: "Departure", subtitle: "End of Tour", description: "Transfer to Pathankot for onward journey.", meals: "Breakfast" }
                ]
            },
            {
                id: 4,
                title: "Kasol & Kheerganga Adventure",
                slug: "kasol-kheerganga-adventure",
                price: 7500,
                originalPrice: 9500,
                duration: "4 Days & 3 Nights",
                image: imgkasol,
                rating: 4.8,
                reviews: 210,
                itinerary: [
                    { day: 1, title: "Arrival in Kasol", subtitle: "Mini Israel", description: "Explore the cafes of Kasol and take a stroll along the Parvati River.", meals: "Dinner" },
                    { day: 2, title: "Kasol to Barshaini & Trek to Kheerganga", subtitle: "The Climb", description: "Short drive to Barshaini and then an adventurous 12km trek to Kheerganga.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Kheerganga to Kasol", subtitle: "Descent", description: "Enjoy the hot springs at Kheerganga. Trek back to Barshaini and return to Kasol.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Manikaran Visit & Departure", subtitle: "Spiritual End", description: "Visit the Manikaran Gurudwara and hot springs before departure.", meals: "Breakfast" }
                ]
            },
            {
                id: 5,
                title: "Jibhi & Jalori Pass Escape",
                slug: "jibhi-jalori-pass-escape",
                price: 8500,
                originalPrice: 11000,
                duration: "4 Days & 3 Nights",
                image: imgjibhi,
                rating: 4.6,
                reviews: 87,
                itinerary: [
                    { day: 1, title: "Arrive in Jibhi", subtitle: "Hidden Gem", description: "Check into your cozy riverside cottage. Explore Jibhi Waterfall.", meals: "Dinner" },
                    { day: 2, title: "Jalori Pass & Serolsar Lake", subtitle: "High Altitude", description: "Drive to Jalori Pass. Trek to the beautiful Serolsar Lake.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Chehni Kothi Trek", subtitle: "Heritage Architecture", description: "Trek to the ancient skyscraper of the Himalayas - Chehni Kothi.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Departure", subtitle: "Goodbye Jibhi", description: "Leisure morning and departure for return journey.", meals: "Breakfast" }
                ]
            },
            {
                id: 6,
                title: "Bir Billing Paragliding Special",
                slug: "bir-billing-paragliding-special",
                price: 6500,
                originalPrice: 8000,
                duration: "3 Days & 2 Nights",
                image: imgbirbilling,
                rating: 4.9,
                reviews: 132,
                itinerary: [
                    { day: 1, title: "Arrive in Bir", subtitle: "Monasteries & Cafes", description: "Visit the Chokling Monastery and explore the Tibetan Colony.", meals: "Dinner" },
                    { day: 2, title: "Tandem Paragliding", subtitle: "Take Flight", description: "Drive to Billing (take-off point). Fly back to Bir landing site.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Departure", subtitle: "High Spirit", description: "Morning walk to Sherab Ling Monastery. Departure.", meals: "Breakfast" }
                ]
            },
            {
                id: 7,
                title: "Kinnaur Kalpa & Sangla Discovery",
                slug: "kinnaur-kalpa-sangla-discovery",
                price: 22500,
                originalPrice: 26000,
                duration: "7 Days & 6 Nights",
                image: imgkinnur,
                rating: 4.8,
                reviews: 64,
                itinerary: [
                    { day: 1, title: "Shimla to Sarahan", subtitle: "Gateway to Kinnaur", description: "Visit the Bhimakali Temple at Sarahan.", meals: "Dinner" },
                    { day: 2, title: "Sarahan to Sangla", subtitle: "Baspa Valley", description: "Drive along the Sutlej river to reaching Sangla.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Chitkul Excursion", subtitle: "Last Village", description: "Visit Chitkul, the last inhabited village on the Indo-Tibetan border.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Sangla to Kalpa", subtitle: "Kinner Kailash Views", description: "Drive to Kalpa. Witness the majestic Kinner Kailash peak.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Kalpa Local Sightseeing", subtitle: "Roghi Village", description: "Visit the suicide point and Roghi village.", meals: "Breakfast & Dinner" },
                    { day: 6, title: "Kalpa to Shimla", subtitle: "Long Drive", description: "Return drive to Shimla.", meals: "Breakfast & Dinner" },
                    { day: 7, title: "Departure", subtitle: "End", description: "Morning checkout after breakfast.", meals: "Breakfast" }
                ]
            },
            {
                id: 8,
                title: "Spiti Valley Road Trip",
                slug: "spiti-valley-road-trip-himachal",
                price: 28000,
                originalPrice: 32000,
                duration: "8 Days & 7 Nights",
                image: imgspitivalley,
                rating: 5.0,
                reviews: 178,
                itinerary: [
                    { day: 1, title: "Manali Arrival", subtitle: "Gatekeeper", description: "Preparation and briefing about the high altitude terrain.", meals: "Dinner" },
                    { day: 2, title: "Manali to Kaza", subtitle: "Over Kunzum Pass", description: "A high-octane drive crossing the mighty Kunzum Pass.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Key Monastery & Kibber", subtitle: "Tibetan Heritage", description: "Visit the highest post office at Hikkim and Key monastery.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Langza & Komic", subtitle: "Fossil Village", description: "Explore the fossil village of Langza and the highest village Komic.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Kaza to Chandratal", subtitle: "Moon Lake", description: "Camping at the majestic Chandratal Lake.", meals: "All Meals" },
                    { day: 6, title: "Chandratal to Manali", subtitle: "Crossing Batal", description: "Rugged drive back to civilization at Manali.", meals: "Breakfast & Dinner" },
                    { day: 7, title: "Manali Rest & Explore", subtitle: "Leisure", description: "Local cafe hopping in Old Manali.", meals: "Breakfast" },
                    { day: 8, title: "Departure", subtitle: "Goodbye", description: "Return to Delhi/Chandigarh.", meals: "Breakfast" }
                ]
            },
            {
                id: 9,
                title: "Narkanda Skiing Experience",
                slug: "narkanda-skiing-experience",
                price: 11500,
                originalPrice: 14000,
                duration: "3 Days & 2 Nights",
                image: imgnarkanda,
                rating: 4.5,
                reviews: 55,
                itinerary: [
                    { day: 1, title: "Shimla to Narkanda", subtitle: "Apple Orchards", description: "Drive to the winter capital Narkanda.", meals: "Dinner" },
                    { day: 2, title: "Skiing at Hatu Peak", subtitle: "Slopes", description: "Skiing sessions with instructors. Visit Hatu Mata Temple.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Departure", subtitle: "Return", description: "Drive back to Shimla.", meals: "Breakfast" }
                ]
            },
            {
                id: 10,
                title: "Complete Himachal Circuit",
                slug: "complete-himachal-circuit",
                price: 45000,
                originalPrice: 55000,
                duration: "12 Days & 11 Nights",
                image: imghimachal,
                rating: 4.9,
                reviews: 42,
                itinerary: [
                    { day: 1, title: "Arrival", subtitle: "Chandigarh", description: "Pick up and drive to Shimla.", meals: "Dinner" },
                    { day: 2, title: "Shimla", subtitle: "City Tour", description: "Mall road and Jakhoo temple.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Shimla to Manali", subtitle: "River Side", description: "Drive through Beas river banks.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Manali", subtitle: "Rohtang", description: "Snow point excursion.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Manali to Dharamshala", subtitle: "Tibetan Cultural", description: "Drive to Mcleodganj.", meals: "Breakfast & Dinner" },
                    { day: 6, title: "Dharamshala", subtitle: "Monastery", description: "Local sightseeing.", meals: "Breakfast & Dinner" },
                    { day: 7, title: "Dharamshala to Dalhousie", subtitle: "Hill Station", description: "Drive to Dalhousie.", meals: "Breakfast & Dinner" },
                    { day: 8, title: "Dalhousie", subtitle: "Khajjiar", description: "Mini Switzerland tour.", meals: "Breakfast & Dinner" },
                    { day: 9, title: "Dalhousie to Amritsar", subtitle: "Wagah Border", description: "Drive to Amritsar and Wagah border ceremony.", meals: "Breakfast & Dinner" },
                    { day: 10, title: "Amritsar", subtitle: "Golden Temple", description: "Vsit Golden Temple and Jallianwala Bagh.", meals: "Breakfast & Dinner" },
                    { day: 11, title: "Amritsar to Chandigarh", subtitle: "Return", description: "Drive back to Chandigarh.", meals: "Breakfast & Dinner" },
                    { day: 12, title: "Departure", subtitle: "Farewell", description: "Drop at airport/railway station.", meals: "Breakfast" }
                ]
            }
        ]
    },
    spiti: {
        name: "Spiti Valley",
        slug: "spiti",
        image: imgSpiti1,
        packages: [
            {
                id: 11,
                title: "Spiti Circuit Full",
                slug: "spiti-circuit-full",
                price: 35000,
                originalPrice: 40000,
                duration: "9 Days & 8 Nights ",
                images: [imgSpiti1, imgSpiti2],
                image: imgSpiti1,
                rating: 4.8,
                reviews: 210,
                itinerary: [
                    { day: 1, title: "Delhi to Manali", subtitle: "Start", description: "Overnight drive in a comfortable tempo traveller/Volvo.", meals: "None" },
                    { day: 2, title: "Manali Stay", subtitle: "Acclimatize", description: "Rest day in Manali to prep for high altitude. Gear check.", meals: "Dinner" },
                    { day: 3, title: "Manali to Kaza", subtitle: "Cross Rohtang", description: "A long and adventurous drive crossing Rohtang Pass (or Atal Tunnel) and Kunzum Pass.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Kaza Local Sightseeing", subtitle: "Key Monastery", description: "Visit the iconic Key Monastery. Drive to Kibber and Chicham Bridge (highest in Asia).", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Pin Valley Excursion", subtitle: "Mud Village", description: "Drive to the beautiful Pin Valley National Park. Visit Mud village, the last village in the valley.", meals: "Breakfast & Dinner" },
                    { day: 6, title: "Tabo & Dhankar", subtitle: "Ancient Monasteries", description: "Visit the 1000 year old Tabo monastery (Ajanta of the Himalayas) and the cliff-hanging Dhankar monastery.", meals: "Breakfast & Dinner" },
                    { day: 7, title: "Chandratal Lake", subtitle: "Camping", description: "Drive to the majestic Chandratal Lake. Overnight camping under the starlit sky.", meals: "Camping" },
                    { day: 8, title: "Chandratal to Manali", subtitle: "Return", description: "Drive back to Manali reminiscing the memories.", meals: "Dinner" },
                    { day: 9, title: "Departure", subtitle: "End", description: "Board bus to Delhi.", meals: "Breakfast" }
                ]
            },
            {
                id: 12,
                title: "Winter Spiti Expedition",
                slug: "winter-spiti-expedition",
                price: 32000,
                originalPrice: 38000,
                duration: "7D/6N",
                images: [imgSpiti2, imgSpiti1],
                image: imgSpiti2,
                rating: 4.9,
                reviews: 85,
                itinerary: [
                    { day: 1, title: "Shimla to Kalpa", subtitle: "Snow Drive", description: "Drive through snow covered roads via Narkanda. Reach Kalpa and enjoy views of Kinner Kailash.", meals: "Dinner" },
                    { day: 2, title: "Kalpa to Kaza", subtitle: "Frozen Spiti", description: "Enter the white wonderland. Visit Nako Lake enroute (frozen in winter).", meals: "Dinner" },
                    { day: 3, title: "Kaza Homestay", subtitle: "Warmth", description: "Stay in the warmth of a traditional Spitian homestay while it is -20 degrees outside.", meals: "All Meals" }
                ]
            },
            {
                id: 13,
                title: "Spiti Valley Summer Circuit",
                slug: "spiti-summer-circuit",
                price: 24500,
                originalPrice: 30000,
                duration: "7 Days & 6 Nights",
                image: imgspitivalley,
                rating: 4.8,
                reviews: 156,
                itinerary: [
                    { day: 1, title: "Manali Arrival", subtitle: "Briefing", description: "Gather in Manali for a detailed briefing and group introduction.", meals: "Dinner" },
                    { day: 2, title: "Manali to Kaza", subtitle: "The Adventure Begins", description: "Cross the Atal Tunnel and Kunzum Pass to enter the Spiti landscape.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Kaza Local Tour", subtitle: "Monasteries", description: "Visit Key Monastery and the village of Kibber.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "The Fossil Villages", subtitle: "Langza & Komic", description: "Visit Langza for fossils and Komic, the highest village with a motorable road.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 14,
                title: "Kaza & Pin Valley Discovery",
                slug: "kaza-pin-valley-discovery",
                price: 21000,
                originalPrice: 26000,
                duration: "6 Days & 5 Nights",
                image: imgkaza,
                rating: 4.7,
                reviews: 92,
                itinerary: [
                    { day: 1, title: "Arrival in Kaza", subtitle: "Heart of Spiti", description: "Explore the local market and cafes of Kaza town.", meals: "Dinner" },
                    { day: 2, title: "Pin Valley Excursion", subtitle: "Wildlife & Views", description: "Drive to Mudh village in Pin Valley. Look out for the elusive Snow Leopard.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Dhankar Monastery", subtitle: "Clifftop Wonder", description: "Visit the ancient Dhankar monastery overlooking the Spiti river confluence.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 15,
                title: "Chandratal Moon Lake Camping",
                slug: "chandratal-moon-lake-camping",
                price: 15500,
                originalPrice: 19500,
                duration: "4 Days & 3 Nights",
                image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
                rating: 5.0,
                reviews: 124,
                itinerary: [
                    { day: 1, title: "Manali to Batal", subtitle: "Rugged Drive", description: "Drive through the Rohtang Pass to reach the base camp at Batal.", meals: "Dinner" },
                    { day: 2, title: "Batal to Chandratal", subtitle: "The Moon Lake", description: "Short drive/trek to the majestic Chandratal Lake. Overnight camping.", meals: "All Meals" },
                    { day: 3, title: "Chandratal to Manali", subtitle: "Return Journey", description: "Drive back to Manali via the scenic Atal Tunnel.", meals: "Breakfast" }
                ]
            }
        ]
    },
    leh: {
        name: "Leh Ladakh",
        slug: "leh",
        image: imgLeh1,
        packages: [
            {
                id: 16,
                title: "Leh Quick Escape",
                slug: "leh-quick-escape",
                price: 25000,
                originalPrice: 28000,
                duration: "5D/4N",
                images: [imgLeh1, imgLeh2],
                image: imgLeh1,
                rating: 4.6,
                reviews: 156,
                itinerary: [
                    { day: 1, title: "Fly to Leh", subtitle: "Rest", description: "Land in Leh Kushok Bakula Rimpochee Airport. Transfer to hotel. Strict rest for acclimatization.", meals: "Dinner" },
                    { day: 2, title: "Sham Valley Tour", subtitle: "Sightseeing", description: "Visit Hall of Fame, Gurudwara Pathar Sahib, and Magnetic Hill. Witness the Sangam of Indus and Zanskar rivers.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Pangong Lake Trip", subtitle: "Day Trip", description: "Early morning drive to Pangong Tso via Chang La. Marvel at the blue waters and return to Leh by evening.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Khardung La Drive", subtitle: "High Pass", description: "Drive to the top of Khardung La pass. Shopping in Leh market in the evening.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Departure", subtitle: "Fly Out", description: "Early morning transfer to airport.", meals: "Breakfast" }
                ]
            },
            {
                id: 17,
                title: "Ladakh Complete Tour",
                slug: "ladakh-complete-tour",
                price: 45000,
                originalPrice: 52000,
                duration: "10D/9N",
                images: [imgLeh2, imgLeh1],
                image: imgLeh2,
                rating: 5.0,
                reviews: 200,
                itinerary: [
                    { day: 1, title: "Arrival", subtitle: "Leh", description: "Arrival and acclimatization.", meals: "Dinner" },
                    { day: 2, title: "Local Sightseeing", subtitle: "Monasteries", description: "Visit Shey, Thiksey and Hemis monasteries.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Nubra Valley", subtitle: "Dunes", description: "Drive to Hunder Sand Dunes via Khardung La. Double humped camel ride.", meals: "Dinner" },
                    { day: 4, title: "Turtuk Excursion", subtitle: "Balti Culture", description: "Visit Turtuk, the last village of India near the LOC. Experience Balti culture.", meals: "Dinner" },
                    { day: 5, title: "Pangong Lake", subtitle: "Blue Water", description: "Drive to Pangong Tso via Shyok. Overnight camping.", meals: "Camping" }
                ]
            },
            {
                id: 18,
                title: "Nubra & Pangong Special",
                slug: "nubra-pangong-special",
                price: 32000,
                originalPrice: 38000,
                duration: "6 Days & 5 Nights",
                image: imgnubra,
                rating: 4.9,
                reviews: 142,
                itinerary: [
                    { day: 1, title: "Arrival in Leh", subtitle: "Welcome", description: "Transfer to hotel and rest for acclimatization.", meals: "Dinner" },
                    { day: 2, title: "Leh to Nubra Valley", subtitle: "Khardung La", description: "Travel to Nubra over the world's highest motorable pass.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Nubra to Pangong", subtitle: "The Direct Route", description: "Scenic drive along the Shyok river to reach Pangong Tso.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 19,
                title: "Zanskar Valley Expedition",
                slug: "zanskar-valley-expedition",
                price: 55000,
                originalPrice: 65000,
                duration: "12 Days & 11 Nights",
                image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800",
                rating: 5.0,
                reviews: 58,
                itinerary: [
                    { day: 1, title: "Leh Arrival", subtitle: "Acclimatize", description: "Deep rest for high altitude trek/drive preparation.", meals: "Dinner" },
                    { day: 2, title: "Leh to Kargil", subtitle: "War Memorial", description: "Visit the Kargil War Memorial and pay respects.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Kargil to Padum", subtitle: "Heart of Zanskar", description: "Dramatic landscape shift as you enter Zanskar.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 20,
                title: "Ladakh Bike Adventure",
                slug: "ladakh-bike-adventure",
                price: 35000,
                originalPrice: 42000,
                duration: "8 Days & 7 Nights",
                image: imglehbike,
                rating: 4.8,
                reviews: 215,
                itinerary: [
                    { day: 1, title: "Leh Arrival", subtitle: "Machine Check", description: "Pick up your Royal Enfield and check all parts.", meals: "Dinner" },
                    { day: 2, title: "Magnetic Hill & Sangam", subtitle: "Test Ride", description: "Ride to the confluence of Indus and Zanskar rivers.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Ride to Pangong", subtitle: "The Blue Lake", description: "An exhilarating ride over Chang La pass.", meals: "Breakfast & Dinner" }
                ]
            }
        ]
    },
    rajasthan: {
        name: "Rajasthan",
        slug: "rajasthan",
        image: imgRaj1,
        packages: [
            {
                id: 21,
                title: "Royal Rajasthan",
                slug: "royal-rajasthan",
                price: 30000,
                originalPrice: 35000,
                duration: "7D/6N",
                images: [imgRaj1, imgRaj2],
                image: imgRaj1,
                rating: 4.7,
                reviews: 310,
                itinerary: [
                    { day: 1, title: "Jaipur Arrival", subtitle: "Pink City", description: "Arrival in Jaipur. Visit Hawa Mahal and Jantar Mantar.", meals: "Dinner" },
                    { day: 2, title: "Amber Fort & Nahargarh", subtitle: "History", description: "Visit the majestic Amber Fort with an elephant ride (optional). Sunset at Nahargarh.", meals: "Breakfast" },
                    { day: 3, title: "Pushkar", subtitle: "Holy Lake", description: "Drive to Pushkar. Visit the Brahma Temple and Pushkar Lake.", meals: "Breakfast" },
                    { day: 4, title: "Udaipur", subtitle: "Lakes", description: "Drive to Udaipur. Evening boat ride at Lake Pichola.", meals: "Dinner" }
                ]
            },
            {
                id: 22,
                title: "Udaipur Lake City",
                slug: "udaipur-lake-city",
                price: 15000,
                originalPrice: 18000,
                duration: "4D/3N",
                images: [imgUdaipur1, imgRaj2],
                image: imgUdaipur1,
                rating: 4.6,
                reviews: 150,
                itinerary: [
                    { day: 1, title: "Arrival", subtitle: "Relax", description: "Arrive in Udaipur. Transfer to lakeside hotel.", meals: "Dinner" },
                    { day: 2, title: "City Palace", subtitle: "Royalty", description: "Explore the massive City Palace museum and intricate architecture.", meals: "Breakfast" }
                ]
            },
            {
                id: 23,
                title: "Jaisalmer Desert Safari",
                slug: "jaisalmer-desert-safari",
                price: 12500,
                originalPrice: 16000,
                duration: "3 Days & 2 Nights",
                image: imgjaisalmer,
                rating: 4.8,
                reviews: 210,
                itinerary: [
                    { day: 1, title: "Arrival in Jaisalmer", subtitle: "Golden City", description: "Transfer to desert camp. Evening camel safari and folk dance.", meals: "Dinner" },
                    { day: 2, title: "Jaisalmer Fort", subtitle: "Living Fort", description: "Explore the fort, Patwon ki Haveli, and Gadisar Lake.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 24,
                title: "Jodhpur Blue City Tour",
                slug: "jodhpur-blue-city",
                price: 11000,
                originalPrice: 14000,
                duration: "3 Days & 2 Nights",
                image: imgRaj2,
                rating: 4.7,
                reviews: 125,
                itinerary: [
                    { day: 1, title: "Arrival in Jodhpur", subtitle: "Sun City", description: "Visit Mehrangarh Fort and Jaswant Thada.", meals: "Dinner" },
                    { day: 2, title: "Umaid Bhawan", subtitle: "Royal Palace", description: "Visit the palace museum and local clock tower market.", meals: "Breakfast" }
                ]
            },
            {
                id: 25,
                title: "Grand Rajasthan Heritage",
                slug: "grand-rajasthan-heritage",
                price: 48000,
                originalPrice: 55000,
                duration: "10 Days & 9 Nights",
                image: imggrandrajsthan,
                rating: 4.9,
                reviews: 86,
                itinerary: [
                    { day: 1, title: "Jaipur", subtitle: "Arrival", description: "Start your royal journey in the Pink City.", meals: "Dinner" },
                    { day: 2, title: "Jaipur to Bikaner", subtitle: "Desert Bound", description: "Visit the Junagarh Fort.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Bikaner to Jaisalmer", subtitle: "Golden Sands", description: "Deep desert exploration.", meals: "Breakfast & Dinner" }
                ]
            }
        ]
    },
    kashmir: {
        name: "Kashmir",
        slug: "kashmir",
        image: imghsrinagar,
        packages: [
            {
                id: 31,
                title: "Paradise on Earth: Srinagar & Gulmarg",
                slug: "srinagar-gulmarg-paradise",
                price: 28000,
                originalPrice: 32000,
                duration: "6D/5N",
                images: [imghsrinagar, "https://images.unsplash.com/photo-1615814546594-ef8cc3b02891?w=800"],
                image: imghsrinagar,
                rating: 4.9,
                reviews: 245,
                itinerary: [
                    { day: 1, title: "Srinagar Arrival", subtitle: "Dal Lake", description: "Arrive at Srinagar airport. Check into your houseboat. Evening Shikara ride on Dal Lake.", meals: "Dinner" },
                    { day: 2, title: "Gulmarg Excursion", subtitle: "Meadow of Flowers", description: "Drive to Gulmarg. Enjoy the Gondola ride (highest cable car) and explore the snow-covered slopes.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Sonamarg Bliss", subtitle: "Meadow of Gold", description: "Full day trip to Sonamarg. Visit the Thajiwas Glacier and enjoy the pristine beauty of the Sindh River.", meals: "Breakfast & Dinner" },
                    { day: 4, title: "Pahalgam Valley", subtitle: "Valley of Shepherds", description: "Drive to Pahalgam. Visit Betab Valley, Aru Valley, and Chandanwari. Explore the lush pine forests.", meals: "Breakfast & Dinner" },
                    { day: 5, title: "Srinagar Mugal Gardens", subtitle: "Heritage Walk", description: "Visit Shalimar Bagh, Nishat Bagh, and the Tulip Garden (seasonal). Shopping in old city markets.", meals: "Breakfast & Dinner" },
                    { day: 6, title: "Departure", subtitle: "Farewell", description: "Transfer to Srinagar airport for departure.", meals: "Breakfast" }
                ]
            },
            {
                id: 32,
                title: "Kashmir Winter Wonderland",
                slug: "kashmir-winter-wonderland",
                price: 35000,
                originalPrice: 42000,
                duration: "5 Days & 4 Nights",
                image: imgkashmir,
                rating: 5.0,
                reviews: 112,
                itinerary: [
                    { day: 1, title: "Srinagar", subtitle: "Arrival", description: "Stay in a heated houseboat on Nigeen Lake.", meals: "Dinner" },
                    { day: 2, title: "Gulmarg Skiing", subtitle: "Powder Snow", description: "Full day of skiing and snowboarding in Gulmarg.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 33,
                title: "Leisurely Kashmir Getaway",
                slug: "leisurely-kashmir",
                price: 18500,
                originalPrice: 22000,
                duration: "4 Days & 3 Nights",
                image: imgkashmirgetaway,
                rating: 4.6,
                reviews: 85,
                itinerary: [
                    { day: 1, title: "Srinagar", subtitle: "Local", description: "Shikara ride and Mughal gardens.", meals: "Dinner" },
                    { day: 2, title: "Pahalgam Day Trip", subtitle: "Nature", description: "Visit Betaab Valley.", meals: "Breakfast" }
                ]
            },
            {
                id: 34,
                title: "Sonamarg Adventure Special",
                slug: "sonamarg-adventure",
                price: 21000,
                originalPrice: 25000,
                duration: "4 Days & 3 Nights",
                image: imgsonmarg,
                rating: 4.7,
                reviews: 64,
                itinerary: [
                    { day: 1, title: "Srinagar to Sonamarg", subtitle: "Drive", description: "Check into a luxury river-facing camp.", meals: "Dinner" },
                    { day: 2, title: "Thajiwas Glacier Trek", subtitle: "Ice & Snow", description: "Trek or pony ride to the glacier base.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 35,
                title: "Ultimate Kashmir Panorama",
                slug: "ultimate-kashmir-panorama",
                price: 45000,
                originalPrice: 52000,
                duration: "9 Days & 8 Nights",
                image: imgPanorama,
                rating: 4.9,
                reviews: 42,
                itinerary: [
                    { day: 1, title: "Srinagar", subtitle: "Arrival", description: "The beginning of your comprehensive Kashmir tour.", meals: "Dinner" },
                    { day: 2, title: "Yusmarg Excursion", subtitle: "Hidden Valley", description: "Visit the meadows of Yusmarg.", meals: "Breakfast & Dinner" }
                ]
            }
        ]
    },
    uttarakhand: {
        name: "Uttarakhand",
        slug: "uttarakhand",
        image: "https://images.unsplash.com/photo-1596489392276-88d92fd60731?w=800",
        packages: [
            {
                id: 41,
                title: "Complete Char Dham Yatra",
                slug: "char-dham-yatra-full",
                price: 35000,
                originalPrice: 42000,
                duration: "12 Days & 11 Nights",
                image: imgchardham,
                rating: 5.0,
                reviews: 245,
                itinerary: [
                    { day: 1, title: "Haridwar Arrival", subtitle: "Holy Start", description: "Evening Ganga Aarti and briefing for the Yatra.", meals: "Dinner" },
                    { day: 2, title: "Drive to Barkot", subtitle: "Yamunotri Base", description: "Scenic drive alongside the Yamuna river.", meals: "Breakfast & Dinner" },
                    { day: 3, title: "Yamunotri Dham", subtitle: "First Temple", description: "Trek to the holy temple and return to Barkot.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 42,
                title: "Do Dham Yatra: Kedarnath & Badrinath",
                slug: "do-dham-yatra",
                price: 25000,
                originalPrice: 30000,
                duration: "7 Days & 6 Nights",
                image: imgkedarnath,
                rating: 4.9,
                reviews: 180,
                itinerary: [
                    { day: 1, title: "Haridwar to Guptkashi", subtitle: "Drive", description: "Travel towards the Mandakini valley.", meals: "Dinner" },
                    { day: 2, title: "Kedarnath Trek", subtitle: "Divine Reach", description: "Trek 16km to reach the majestic Kedarnath temple.", meals: "All Meals" }
                ]
            },
            {
                id: 43,
                title: "Kedarnath Helicopter Special",
                slug: "kedarnath-helicopter-tour",
                price: 28000,
                originalPrice: 32000,
                duration: "4 Days & 3 Nights",
                image: imgkedarnathhelicopter,
                rating: 4.8,
                reviews: 156,
                itinerary: [
                    { day: 1, title: "Arrival in Dehradun", subtitle: "Base", description: "Transfer to Phata for the heli trip.", meals: "Dinner" },
                    { day: 2, title: "Heli to Kedarnath", subtitle: "The Aerial Route", description: "Fly to the temple and return after Darshan.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 44,
                title: "Badrinath & Mana Village Tour",
                slug: "badrinath-mana-tour",
                price: 15500,
                originalPrice: 19000,
                duration: "5 Days & 4 Nights",
                image: imgbadrinath,
                rating: 4.7,
                reviews: 89,
                itinerary: [
                    { day: 1, title: "Haridwar to Joshimath", subtitle: "Gateway", description: "Long scenic drive crossing multiple Prayags.", meals: "Dinner" },
                    { day: 2, title: "Badrinath Darshan", subtitle: "The Abode", description: "Visit the temple and the last Indian village, Mana.", meals: "Breakfast & Dinner" }
                ]
            },
            {
                id: 45,
                title: "Luxury Char Dham by Helicopter",
                slug: "luxury-char-dham-heli",
                price: 185000,
                originalPrice: 210000,
                duration: "6 Days & 5 Nights",
                image: "https://images.unsplash.com/photo-1596489392276-88d92fd60731?w=800",
                rating: 5.0,
                reviews: 32,
                itinerary: [
                    { day: 1, title: "Dehradun Arrival", subtitle: "Elite Start", description: "Briefing at Sahastradhara helipad.", meals: "Dinner" },
                    { day: 2, title: "Yamunotri & Gangotri", subtitle: "Two Dhams", description: "Fly to Harsil and Kharsali for swift Darshan.", meals: "All Meals" }
                ]
            }
        ]
    },
    goa: {
        name: "Goa",
        slug: "goa",
        image: imgSerenity,
        packages: [
            {
                id: 51,
                title: "Sun, Sand & Serenity",
                slug: "goa-sun-sand",
                price: 15500,
                originalPrice: 19000,
                duration: "4D/3N",
                images: imgSerenity,
                image: imgSerenity,
                rating: 4.6,
                reviews: 320,
                itinerary: [
                    { day: 1, title: "North Goa Arrival", subtitle: "Beach Life", description: "Arrive in Goa. Check into your resort. Relax on Baga or Calangute beach.", meals: "Dinner" },
                    { day: 2, title: "Watersports", subtitle: "Adventure", description: "Indulge in parasailing and jet skiing.", meals: "Breakfast" }
                ]
            },
            {
                id: 52,
                title: "South Goa Retreat",
                slug: "south-goa-retreat",
                price: 18000,
                originalPrice: 22000,
                duration: "5 Days & 4 Nights",
                image: imgsouthgoa,
                rating: 4.8,
                reviews: 145,
                itinerary: [
                    { day: 1, title: "Arrival", subtitle: "Peaceful South", description: "Check into a luxury resort near Colva.", meals: "Dinner" },
                    { day: 2, title: "Heritage Walk", subtitle: "Old Goa", description: "Visit the Basilica of Bom Jesus.", meals: "Breakfast" }
                ]
            },
            {
                id: 53,
                title: "Goa Honeymoon Special",
                slug: "goa-honeymoon",
                price: 25000,
                originalPrice: 30000,
                duration: "4 Days & 3 Nights",
                image: imggoahoneymoon,
                rating: 5.0,
                reviews: 98,
                itinerary: [
                    { day: 1, title: "Candlelight Dinner", subtitle: "Romantic", description: "Private dinner by the beach.", meals: "Dinner" },
                    { day: 2, title: "Full Day Tour", subtitle: "Lesser known beaches", description: "Visit Ozran and Vagator.", meals: "Breakfast" }
                ]
            },
            {
                id: 54,
                title: "Adventure & Dudhsagar Falls",
                slug: "goa-adventure-dudhsagar",
                price: 12500,
                originalPrice: 16000,
                duration: "3 Days & 2 Nights",
                image: imgdhudhsagarfalls,
                rating: 4.5,
                reviews: 67,
                itinerary: [
                    { day: 1, title: "Jeep Safari", subtitle: "Jungle Drive", description: "Drive to the base of Dudhsagar falls.", meals: "Lunch & Packaged Meals" }
                ]
            },
            {
                id: 55,
                title: "Goa Casino & Nightlife",
                slug: "goa-nightlife",
                price: 14500,
                originalPrice: 18000,
                duration: "3 Days & 2 Nights",
                image: imgnightlife,
                rating: 4.7,
                reviews: 132,
                itinerary: [
                    { day: 1, title: "Casino Night", subtitle: "Mandovi River", description: "Evening entry to a premium offshore casino.", meals: "Dinner & Snacks" }
                ]
            }
        ]
    },
    kerala: {
        name: "Kerala",
        slug: "kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
        packages: [
            {
                id: 61,
                title: "God's Own Country: Munnar & Alleppey",
                slug: "kerala-munnar-alleppey",
                price: 22000,
                originalPrice: 27000,
                duration: "5D/4N",
                images: imgmunnar,
                image: imgmunnar,
                rating: 4.8,
                reviews: 190,
                itinerary: [
                    { day: 1, title: "Munnar", subtitle: "Tea Capital", description: "Check into a luxury resort amidst tea plantations.", meals: "Dinner" },
                    { day: 2, title: "Alleppey", subtitle: "Houseboat", description: "Day/night stay in a premium houseboat.", meals: "All Meals" }
                ]
            },
            {
                id: 62,
                title: "Wayanad Nature Escape",
                slug: "wayanad-nature-escape",
                price: 18500,
                originalPrice: 23000,
                duration: "4 Days & 3 Nights",
                image: imgwayanadnNature,
                rating: 4.7,
                reviews: 84,
                itinerary: [
                    { day: 1, title: "Arrival", subtitle: "Lush Greenery", description: "Visit the Edakkal Caves and Banasura Sagar Dam.", meals: "Dinner" }
                ]
            },
            {
                id: 63,
                title: "Thekkady Wildlife Special",
                slug: "thekkady-wildlife",
                price: 15000,
                originalPrice: 19500,
                duration: "3 Days & 2 Nights",
                image: imgthekkadadywildlife,
                rating: 4.6,
                reviews: 112,
                itinerary: [
                    { day: 1, title: "Periyar Lake", subtitle: "Boating", description: "View wildlife from a boat on Lake Periyar.", meals: "Breakfast" }
                ]
            },
            {
                id: 64,
                title: "Luxury Kerala Ayurvedic Retreat",
                slug: "kerala-ayurveda",
                price: 45000,
                originalPrice: 55000,
                duration: "7 Days & 6 Nights",
                image: imgluxuryretreat,
                rating: 5.0,
                reviews: 56,
                itinerary: [
                    { day: 1, title: "Arrival", subtitle: "Wellness", description: "Initial consultation and personalized meal plans.", meals: "Sattvic Meals" }
                ]
            },
            {
                id: 65,
                title: "Kochi & Backwaters Express",
                slug: "kochi-backwaters",
                price: 12500,
                originalPrice: 16000,
                duration: "3 Days & 2 Nights",
                image: imgkochi,
                rating: 4.4,
                reviews: 178,
                itinerary: [
                    { day: 1, title: "Fort Kochi", subtitle: "Colonial History", description: "Visit the Chinese fishing nets and Jewish Synagogue.", meals: "Breakfast" }
                ]
            }
        ]
    },
};
