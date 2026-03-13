"use client";
import { useEffect, useState } from "react";

const Achievements = () => {
    const [achievements, setAchievements] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setAchievements(data?.achievements || [])
            } catch (error) {
                console.error('Error fetching achievements:', error)
            }
        }

        fetchData()
    }, [])

    if (achievements.length === 0) return null;

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-black mb-8">Achievements</p>
                        <div className="flex flex-col gap-6">
                            {achievements.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 border-b border-dashed border-primary/10 pb-6 last:border-b-0 last:pb-0">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
                                            {item.result}
                                        </span>
                                    </div>
                                    <p className="text-secondary/80 leading-relaxed text-sm font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
