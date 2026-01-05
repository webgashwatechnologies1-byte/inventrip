import { FiRotateCcw, FiClock, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-24 bg-gray-950 text-white rounded-b-[4rem] text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8">Financial Safeguard</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8">Refund <span className="text-white">Matrix.</span></h1>
                    <p className="text-gray-300 font-bold text-lg max-w-2xl mx-auto italic">Transparent cancellation protocols for your peace of mind.</p>
                </div>
            </section>

            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                        { days: "30+ Days", percent: "90%", label: "Refundable", desc: "Minimal administrative fees apply." },
                        { days: "15-30 Days", percent: "50%", label: "Refundable", desc: "Logistics booking charges deducted." },
                        { days: "0-15 Days", percent: "0%", label: "Refundable", desc: "Non-refundable due to vendor commitments." },
                        { days: "Weather Forced", percent: "100%", label: "Credit", desc: "Applicable for future expeditions." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all">
                            <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">{item.days}</div>
                            <div className="text-4xl font-black text-gray-900 tracking-tighter italic mb-2">{item.percent}</div>
                            <p className="text-primary text-xs font-black uppercase tracking-widest mb-4">{item.label}</p>
                            <p className="text-gray-700 text-sm font-bold italic">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 font-bold italic space-y-8">
                    <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">Initiating a Claim</h4>
                    <p>To initiate a refund request, please contact our financial department at billing@inventrip.com with your booking ID. Processing time is typically 5-7 business days.</p>
                    <h4 className="text-gray-900 font-black uppercase tracking-widest text-sm">Force Majeure</h4>
                    <p>In cases of extraordinary circumstances (extreme weather, natural disasters, or government restrictions), we prioritize travel credits over direct refunds to ensure vendor sustainability while protecting traveler value.</p>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;
