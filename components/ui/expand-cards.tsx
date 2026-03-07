"use client";

import { useState } from "react";
import Image from "next/image";

interface ExpandCard {
    image: string;
    title: string;
    subtitle: string;
}

interface ExpandCardsProps {
    cards: ExpandCard[];
    defaultExpanded?: number;
}

const ExpandCards = ({ cards, defaultExpanded = 1 }: ExpandCardsProps) => {
    const [expandedIndex, setExpandedIndex] = useState(defaultExpanded);

    const getCardWidth = (index: number) =>
        index === expandedIndex ? "28rem" : "5rem";

    return (
        <div className="flex w-full items-center justify-center gap-2">
            {cards.map((card, idx) => (
                <div
                    key={idx}
                    className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
                    style={{
                        width: getCardWidth(idx),
                        height: "26rem",
                    }}
                    onMouseEnter={() => setExpandedIndex(idx)}
                >
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content - only visible when expanded */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${idx === expandedIndex
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                    >
                        <p className="text-white/70 text-sm font-semibold mb-1 uppercase tracking-widest">
                            {card.subtitle}
                        </p>
                        <h3 className="text-white text-2xl lg:text-3xl font-bold">
                            {card.title}
                        </h3>
                    </div>

                    {/* Collapsed Label (rotated) */}
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${idx === expandedIndex
                                ? "opacity-0 scale-90"
                                : "opacity-100 scale-100"
                            }`}
                    >
                        <p
                            className="text-white font-bold text-sm whitespace-nowrap"
                            style={{
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                            }}
                        >
                            {card.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpandCards;
