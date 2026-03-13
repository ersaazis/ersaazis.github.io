import data from "../../../../../data.json";

const Certifications = () => {
    const certData = data.certifications || [];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-black mb-8">Certifications</p>
                        <div className="flex flex-col gap-6">
                            {certData.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 border-b border-dashed border-primary/5 pb-6 last:border-b-0 last:pb-0 group">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-lg group-hover:text-black transition-colors uppercase tracking-tight">{item.name}</h4>
                                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="text-secondary/70 text-sm font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                        {item.issuer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
