import { Badge } from "@/components/ui/badge";
import pageData from "../../../../../data.json";

const AboutMe = () => {

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-16 md:py-24">
                        {/* Bio Section */}
                        <div className="flex flex-col gap-6">
                            <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-black">About Me</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                {pageData?.profile?.intro}
                            </h2>
                            <p className="text-lg text-secondary leading-relaxed max-w-2xl font-light">
                                {pageData?.profile?.summary}
                            </p>
                        </div>

                        {/* Consolidated Sections (Stacked) */}
                        <div className="flex flex-col gap-10 sm:gap-14">
                            {/* 1. Skills & Services */}
                            <div className="flex flex-col gap-5">
                                <p className="text-xs tracking-widest text-primary/50 uppercase font-bold">Skills & Services</p>
                                <div className="flex flex-wrap gap-2">
                                    {pageData?.skills?.map((skill: string, index: number) => (
                                        <Badge key={index} variant="outline" className="border-slate-200 text-slate-600 bg-white hover:bg-slate-50 px-4 py-1.5 rounded-lg font-medium transition-all shadow-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Stack */}
                            <div className="flex flex-col gap-4">
                                <h5 className="text-secondary uppercase text-xs tracking-widest font-bold">Tools & Stack</h5>
                                <div className="flex flex-wrap gap-2">
                                    {pageData?.tools?.map((tool: string, index: number) => (
                                        <Badge key={index} variant="outline" className="border-slate-200 text-slate-600 bg-white hover:bg-slate-50 px-4 py-1.5 rounded-lg font-medium transition-all shadow-sm">
                                            {tool}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="flex flex-col gap-4">
                                <h5 className="text-secondary uppercase text-xs tracking-widest font-bold">Languages</h5>
                                <div className="flex flex-wrap gap-2">
                                    {pageData?.languages?.map((lang: string, index: number) => (
                                        <Badge key={index} variant="outline" className="border-slate-200 text-slate-600 bg-white hover:bg-slate-50 px-4 py-1.5 rounded-lg font-medium transition-all shadow-sm">
                                            {lang}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe