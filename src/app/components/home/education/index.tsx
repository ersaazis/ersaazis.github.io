import data from "../../../../../data.json";

const Education = () => {
    const educationData = data?.education || [];
    
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-black mb-8">Education</p>
                        <div className="flex flex-col gap-6">
                            {educationData.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 border-b border-dashed border-primary/5 pb-6 last:border-b-0 last:pb-0 group">
                                    <h4 className="font-bold text-lg group-hover:text-black transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-secondary/70 text-sm font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                        {item.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education