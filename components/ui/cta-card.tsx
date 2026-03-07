import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: React.ReactNode;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
    (
        {
            className,
            imageSrc,
            imageAlt,
            title,
            subtitle,
            description,
            buttonText,
            onButtonClick,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm",
                    "flex flex-col md:flex-row",
                    className
                )}
                {...props}
            >
                {/* Image Section */}
                <div className="md:w-2/5 w-full relative min-h-[240px] md:min-h-[400px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                            {title}
                        </p>
                        <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                            {subtitle}
                        </h2>
                        <p className="mt-5 text-slate-500 leading-relaxed text-[15px] md:text-base">
                            {description}
                        </p>
                        <div className="mt-8">
                            <Button size="lg" onClick={onButtonClick}>
                                {buttonText}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
