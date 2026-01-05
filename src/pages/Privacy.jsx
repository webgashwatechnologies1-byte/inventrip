import { FiShield, FiLock, FiEye, FiFileText, FiUserCheck, FiGlobe } from 'react-icons/fi';

const Privacy = () => {
    const sections = [
        {
            title: "Data Sovereignty",
            icon: <FiLock />,
            content: "We collect only essential traveler information necessary for processing expeditions and ensuring safety. Your data is encrypted using military-grade protocols."
        },
        {
            title: "Utilization of Intel",
            icon: <FiEye />,
            content: "Information is primarily used for logistical coordination with verified transport and accommodation partners."
        },
        {
            title: "Secure Transactions",
            icon: <FiShield />,
            content: "All financial interactions are handled through PCI-DSS compliant gateways. We never store credit card details on our local servers."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="py-24 bg-gray-950 text-white rounded-b-[4rem] text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8">Asset Protection</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8">Privacy <span className="text-white">Protocol.</span></h1>
                    <p className="text-gray-300 font-bold text-lg max-w-2xl mx-auto italic">How we safeguard your digital identity during your physical adventures.</p>
                </div>
            </section>

            <section className="py-24 max-w-4xl mx-auto px-4 space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((s, i) => (
                        <div key={i} className="space-y-4">
                            <div className="text-3xl text-primary">{s.icon}</div>
                            <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">{s.title}</h3>
                            <p className="text-gray-700 text-sm font-bold italic leading-relaxed">{s.content}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 font-bold italic space-y-8">
                    <p>Inventrip Travel Services ("We", "Our", "Elite") is committed to protecting the privacy of our global travelers. This Privacy Protocol outlines our methodologies for data collection and utilization.</p>
                    <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">1. Scope of Data Acquisition</h4>
                    <p>During the inquiry or booking phase, we acquire names, contact connectivity (phone/email), and identification documents required by regional checkpoint authorities in the Himalayas and coastal zones.</p>
                    <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">2. Technological Safeguards</h4>
                    <p>Our platform architectural framework utilizes SSL/TLS encryption for all data transmissions. Internal access to traveler sensitive data is restricted to authorized lead consultants only.</p>
                </div>
            </section>

            <section className="bg-gray-50 py-12 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">&copy; 2026 INVENTRIP ELITE &bull; LAST UPDATED: JANUARY 2026</p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
