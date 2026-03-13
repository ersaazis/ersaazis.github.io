import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import data from "../../../../../data.json";

const Gallery = () => {
    const galleryData = data.gallery || [];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-11 px-4 sm:px-7 gap-8">
                        <p className="text-sm tracking-[0.3em] text-primary/70 uppercase font-black">Gallery</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryData.map((item, index) => (
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                                <p className="text-white text-xs font-semibold tracking-wider uppercase">{item.title}</p>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] xl:max-w-screen-xl h-[85vh] p-4 sm:p-8 bg-white border border-primary/10 shadow-2xl flex items-center justify-center overflow-hidden rounded-3xl">
                                        <DialogTitle className="sr-only">{item.title}</DialogTitle>
                                        <DialogDescription className="sr-only">Fullscreen view of {item.title}</DialogDescription>

                                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-contain"
                                                    priority
                                                    unoptimized
                                                />
                                            </div>
                                            
                                            {/* Header/Description Overlay inside white box */}
                                            <div className="mt-6 text-center">
                                                <h4 className="text-primary text-xl font-bold tracking-tight">{item.title}</h4>
                                                <p className="text-secondary/60 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Project Visual Showcase</p>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
