import { FiMapPin, FiStar, FiZap, FiActivity } from 'react-icons/fi';

const DestinationHeader = ({ name, image, packageCount }) => {
    return (
        <section className="relative h-[50vh] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={name}
                    onError={(e) => e.target.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920"}
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[1px]"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 w-full">
                <p className="text-tertiary font-black uppercase tracking-[0.5em] text-[10px] mb-6 flex items-center gap-4">
                    <span className="w-12 h-px bg-tertiary" /> Global Registry
                </p>
                <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none italic mb-4">
                    {name}
                </h1>
                <div className="flex items-center gap-8 text-white/70">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                        <FiZap className="text-tertiary" /> {packageCount} Curated Expeditions
                    </div>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                        <FiActivity className="text-tertiary" /> Elite Verified
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationHeader;
