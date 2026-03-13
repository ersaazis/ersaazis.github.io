"use client";
import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

import profileData from "../../../../../data.json";

const HeroSection = () => {
    const data = profileData.profile;

    const socialIcon = [
        {
            href: profileData?.linkedin || "https://linkedin.com/in/ersaazis",
            icon: "LinkedIn",
            type: "linkedin"
        },
        {
            href: profileData?.github || "https://github.com/ersaazis",
            icon: "GitHub",
            type: "github"
        },
    ];

    if (!data) return <div className="h-96 flex items-center justify-center">Loading...</div>;

    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72 relative">
                        <Image
                            src={data?.cover || "/images/hero-sec/banner-bg-img.png"}
                            alt="banner-img"
                            width={1080}
                            height={267}
                            className="w-full h-full object-cover"
                            unoptimized
                        />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col max-w-3xl mx-auto px-4 sm:px-7 pt-24 pb-8 sm:pb-12 gap-8">
                            <div className="absolute top-0 transform -translate-y-1/2 left-4 sm:left-7">
                                <Image
                                    src={data?.photo || "/images/hero-sec/user-img.png"}
                                    alt="user-img"
                                    width={145}
                                    height={145}
                                    className="border-4 border-white rounded-full aspect-square object-cover shadow-md"
                                    unoptimized
                                />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>

                            {/* Row 1: Name */}
                            <div className="w-full text-center xs:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
                                    {data?.name}
                                </h1>
                            </div>

                            {/* Row 2: Role & Location/Contact (Left) | Buttons (Right) */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full border-t border-primary/5">
                                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                                    <p className="text-primary/90 font-bold text-xl tracking-tight leading-none">{data?.role}</p>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex items-center gap-2 text-secondary/70">
                                            <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={16} height={16} className="opacity-60" />
                                            <p className="font-medium text-xs tracking-wide">{data?.location}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-secondary/70">
                                            <div className="w-4 flex justify-center">
                                                <span className="text-xs text-secondary/50">@</span>
                                            </div>
                                            <p className="font-medium text-xs tracking-wide">{data?.email}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-secondary/70">
                                            <div className="w-4 flex justify-center">
                                                <span className="text-xs text-secondary/50">#</span>
                                            </div>
                                            <p className="font-medium text-xs tracking-wide">{data?.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <div className="flex items-center gap-4 border-r border-primary/10 pr-5 hidden sm:flex">
                                        {socialIcon?.map((value, index) => {
                                            const Icon = value.type === 'linkedin' ? Linkedin : Github;
                                            return (
                                                <Link href={value?.href} key={index} className="text-secondary/60 hover:text-primary transition-all duration-300 hover:scale-110">
                                                    <Icon size={20} />
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    <div className="flex gap-3">
                                        {data?.resume && (
                                            <Button asChild className="h-11 rounded-full p-0.5 shadow-lg group">
                                                <a
                                                    href={data.resume}
                                                    download
                                                    className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#2D2D2D_12.17%,_#F3CA4D_90.71%)] h-full"
                                                >
                                                    <span className="flex items-center gap-3 bg-primary group-hover:bg-transparent h-full py-2 px-6 rounded-full transition-all duration-300">
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="3"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="text-white"
                                                        >
                                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                            <polyline points="7 10 12 15 17 10" />
                                                            <line x1="12" y1="15" x2="12" y2="3" />
                                                        </svg>
                                                        <span className="text-xs font-black text-white uppercase tracking-widest">Download CV</span>
                                                    </span>
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

