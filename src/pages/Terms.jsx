import { FiFileText, FiAlertCircle, FiClock, FiCheckSquare } from 'react-icons/fi';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-24 bg-gray-950 text-white rounded-b-[4rem] text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8">Engagement Framework</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8">Terms of <span className="text-white">Service.</span></h1>
                    <p className="text-gray-300 font-bold text-lg max-w-2xl mx-auto italic">The legal foundation of your expedition with Inventrip Elite.</p>
                </div>
            </section>

            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="prose prose-lg max-w-none text-gray-700 font-bold italic space-y-12">
                    <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-start gap-8">
                        <FiAlertCircle className="text-4xl text-primary shrink-0" />
                        <div>
                            <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-4">Core Agreement</h3>
                            <p>By using this platform or engaging our services, you agree to comply with the operational and legal guidelines specified herein. Unauthorized commercial use of our hand-crafted itineraries is strictly prohibited.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">1. Booking Eligibility</h4>
                        <p>All travelers must be of legal age or accompanied by a legal guardian. Identity verification is mandatory for all high-altitude Himalayan expeditions.</p>

                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">2. Service Modifications</h4>
                        <p>Due to the unpredictable nature of terrain and weather (especially in Spiti/Ladakh), Inventrip reserves the right to modify itineraries in the interest of traveler safety. Elite alternatives will always be provided.</p>

                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">3. Intellectual Property</h4>
                        <p>All content, imagery, and structural code on inventrip.com are exclusive properties of Inventrip Elite Travel Solutions.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
