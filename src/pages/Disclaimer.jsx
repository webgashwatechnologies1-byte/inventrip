import { FiInfo, FiShield, FiAlertTriangle } from 'react-icons/fi';

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-24 bg-gray-950 text-white rounded-b-[4rem] text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8">Service Boundaries</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8">General <span className="text-white">Disclaimer.</span></h1>
                    <p className="text-gray-400 font-bold text-lg max-w-2xl mx-auto italic">Clarifying the nature of wilderness and expedition travel.</p>
                </div>
            </section>

            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="prose prose-lg max-w-none text-gray-500 font-bold italic space-y-12">
                    <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100 flex items-start gap-8">
                        <FiAlertTriangle className="text-4xl text-rose-500 shrink-0" />
                        <div>
                            <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-4">Assumption of Risk</h3>
                            <p>Travel to remote Himalayan and coastal regions involves inherent risks including, but not limited to, high altitude, variable weather, and rugged terrains. By booking with us, travelers acknowledge and assume these risks.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">1. Information Accuracy</h4>
                        <p>While we strive for absolute precision, pricing and itinerary details displayed on this platform are subject to change based on real-time availability and government regulations.</p>

                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">2. External Links</h4>
                        <p>Inventrip Elite is not responsible for the content or safety of external websites linked through our platform (e.g., flight booking partners or insurance providers).</p>

                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">3. Visual Representation</h4>
                        <p>Images used on the site are representative of the experience. Actual weather conditions and vehicle models may vary within the elite category specified.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
