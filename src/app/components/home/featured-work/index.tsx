import data from "../../../../../data.json";

const FeaturedWork = () => {
    const featuredWork = data?.featuredWork || [];

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
                                <div
                                    key={index}
                                    className="group flex flex-col gap-4 p-5 border-b lg:border-b-0 border-primary/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 last:border-b-0 last:border-r-0"
                                >
                                    <Link href={value.url || "/"} className="overflow-hidden rounded-lg">
                                        <Image
                                            src={value?.image || "/images/hero-sec/banner-bg-img.png"}
                                            alt={value.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-2">
                                        <Link href={value.url || "/"} className="hover:text-violet-600 transition-colors">
                                            <h4 className="text-base font-bold line-clamp-1">{value?.title}</h4>
                                        </Link>
                                        <p className="text-xs text-secondary line-clamp-2 leading-relaxed">{value?.description}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                            {value?.roles?.map((role: string, roleIndex: number) => (
                                                <span key={roleIndex} className="text-[9px] font-semibold px-2 py-0.5 border border-primary/5 rounded bg-primary/5 text-primary/70">
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork