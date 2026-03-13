"use client";

import Image from "next/image"
import { useState } from "react"
import data from "../../../../../data.json";

type FeaturedWorkItem = {
    title: string;
    description: string;
    roles: string[];
    image: string;
    url?: string;
    details?: string;
};

const RoleBadge = ({ role }: { role: string }) => (
    <span className="text-[9px] font-semibold px-2 py-0.5 border border-primary/5 rounded bg-primary/5 text-primary/70">
        {role}
    </span>
);

const FeaturedWork = () => {
    const featuredWork: FeaturedWorkItem[] = data?.featuredWork || [];
    const [selected, setSelected] = useState<FeaturedWorkItem | null>(null);

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-black">Featured work</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-primary/10">
                        {featuredWork.map((value, index) => (
                            <button
                                key={index}
                                onClick={() => setSelected(value)}
                                className="group text-left flex flex-col gap-4 p-5 border-b lg:border-b-0 border-primary/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 last:border-b-0 last:border-r-0 hover:bg-primary/[0.02] transition-colors"
                            >
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src={value?.image || "/images/hero-sec/banner-bg-img.png"}
                                        alt={value.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-base font-bold line-clamp-1">{value?.title}</h4>
                                    <p className="text-xs text-secondary line-clamp-2 leading-relaxed">{value?.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                        {value?.roles?.map((role, roleIndex) => (
                                            <RoleBadge key={roleIndex} role={role} />
                                        ))}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/10 transition-colors text-primary/60 hover:text-primary"
                            aria-label="Close"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="overflow-hidden rounded-t-2xl">
                            <Image
                                src={selected.image || "/images/hero-sec/banner-bg-img.png"}
                                alt={selected.title}
                                width={800}
                                height={450}
                                className="w-full object-cover max-h-72"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 flex flex-col gap-5">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl sm:text-2xl font-bold leading-snug">{selected.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{selected.description}</p>
                            </div>

                            {selected.roles?.length > 0 && (
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs tracking-widest text-primary/50 uppercase font-bold">Roles</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selected.roles.map((role, i) => (
                                            <RoleBadge key={i} role={role} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selected.details && (
                                <p className="text-sm text-secondary leading-relaxed">{selected.details}</p>
                            )}

                            {selected.url && (
                                <a
                                    href={selected.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="self-end inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    View Project
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default FeaturedWork