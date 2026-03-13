"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import data from "../../../../../data.json";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const FeaturedWork = () => {
    const featuredWork = data?.featuredWork || [];
    const [selectedProject, setSelectedProject] = useState<any>(null);

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
                        {featuredWork.map((value: any, index: number) => {
                            return (
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <div
                                            className="group flex flex-col gap-4 p-5 border-b lg:border-b-0 border-primary/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 last:border-b-0 last:border-r-0 cursor-pointer"
                                            onClick={() => setSelectedProject(value)}
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
                                                <h4 className="text-base font-bold line-clamp-1 group-hover:text-violet-600 transition-colors">{value?.title}</h4>
                                                <p className="text-xs text-secondary line-clamp-2 leading-relaxed">{value?.description}</p>
                                                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                                    {value?.roles?.slice(0, 2).map((role: string, roleIndex: number) => (
                                                        <span key={roleIndex} className="text-[9px] font-semibold px-2 py-0.5 border border-primary/5 rounded bg-primary/5 text-primary/70">
                                                            {role}
                                                        </span>
                                                    ))}
                                                    {value?.roles?.length > 2 && (
                                                        <span className="text-[9px] font-semibold px-2 py-0.5 border border-primary/5 rounded bg-primary/5 text-primary/70">
                                                            +{value.roles.length - 2}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] gap-6 max-h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-bold">{value?.title}</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex flex-col gap-6">
                                            <div className="overflow-hidden rounded-xl border border-primary/10">
                                                <Image
                                                    src={value?.image || "/images/hero-sec/banner-bg-img.png"}
                                                    alt={value.title}
                                                    width={800}
                                                    height={450}
                                                    className="w-full max-h-[320px] object-cover"
                                                />
                                            </div>
                                            
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <h5 className="text-sm font-bold uppercase tracking-wider text-primary/50">Description</h5>
                                                    <p className="text-sm text-secondary leading-relaxed">
                                                        {value?.description}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <h5 className="text-sm font-bold uppercase tracking-wider text-primary/50">Roles & Contributions</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {value?.roles?.map((role: string, roleIndex: number) => (
                                                            <Badge key={roleIndex} variant="secondary" className="px-3 py-1 text-xs font-medium">
                                                                {role}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-end pt-4 border-t border-primary/10">
                                                <Button asChild className="gap-2">
                                                    <Link href={value.url || "/"} target="_blank" rel="noopener noreferrer">
                                                        Visit Project <ExternalLink size={16} />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork