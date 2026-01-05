
// Import images
// Import images
import imgSedan from '../assets/images/transport/dezire.jpg';
import imgSuv from '../assets/images/transport/crystanew.jpg';
import imgTempo from '../assets/images/transport/tempo.jpg';
import imgOffroad from '../assets/images/transport/offroad.jpg';
import imgVolvoSemi from '../assets/images/transport/volvo_semi.jpg';
import imgVolvoMulti from '../assets/images/transport/volvo_multi.jpg';
import imgBusDeluxe from '../assets/images/transport/bus_sleeper.jpg';
import imgBusSleeper from '../assets/images/transport/bus_sleeper.jpg';
import imgHeli from '../assets/images/transport/heli.jpg';
import imgCharter from '../assets/images/transport/heli.jpg';
import imgToyTrain from '../assets/images/transport/toytrain.jpg';
import imgVande from '../assets/images/transport/vandebharat.jpg';

export const transport = {
    taxi: [
        { id: 'tx1', name: ' (Dzire/Etios)', type: 'Comfort', pricePerKm: 14, seats: 4, images: [imgSedan], image: imgSedan },
        { id: 'tx2', name: 'SUV (Innova Crysta)', type: 'Luxury', pricePerKm: 22, seats: 6, images: [imgSuv], image: imgSuv },
        { id: 'tx3', name: 'Tempo TravelleSedanr', type: 'Group', pricePerKm: 28, seats: 12, images: [imgTempo], image: imgTempo },
        // { id: 'tx4', name: 'Off-Road 4x4', type: 'Adventure', pricePerKm: 35, seats: 4, images: [imgOffroad], image: imgOffroad }
    ],
    bus: [
        { id: 'b1', name: 'Volvo A/C Semi Sleeper', type: 'Luxury', route: 'Delhi-Manali', price: 1200, images: [imgVolvoSemi], image: imgVolvoSemi },
        { id: 'b2', name: 'Volvo Multi-Axle', type: 'Premium', route: 'Delhi-Shimla', price: 1000, images: [imgVolvoMulti], image: imgVolvoMulti },
        { id: 'b3', name: 'Deluxe Pushback', type: 'Standard', route: 'Chandigarh-Manali', price: 800, images: [imgBusDeluxe], image: imgBusDeluxe },
        { id: 'b4', name: 'Sleeper Coach', type: 'Comfort', route: 'Delhi-Dharamshala', price: 1100, images: [imgBusSleeper], image: imgBusSleeper }
    ],
    flight: [
        { id: 'f1', name: 'Helicopter Joyride', type: 'Adventure', route: 'Manali Local', price: 4500, images: [imgHeli], image: imgHeli },
        { id: 'f2', name: 'Charter Flight', type: 'Luxury', route: 'Delhi-Kullu', price: 15000, images: [imgCharter], image: imgCharter }
    ],
    railway: [
        { id: 'r1', name: 'Toy Train', type: 'Heritage', route: 'Kalka-Shimla', price: 500, images: [imgToyTrain], image: imgToyTrain },
        { id: 'r2', name: 'Vande Bharat', type: 'Express', route: 'Delhi-Chandigarh', price: 1800, images: [imgVande], image: imgVande }
    ]
};
