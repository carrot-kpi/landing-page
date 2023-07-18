import { useParallax, useParallaxController } from "react-scroll-parallax";
import {
    MAIN_CONTENT,
    ContentBlock as ContentBlockType,
} from "../../constants";
import { cva } from "class-variance-authority";
import { Typography } from "@carrot-kpi/ui";
import { useCallback, useRef } from "react";
import AnimatedText from "../AnimatedText";

const sectionStyles = cva(
    [
        "flex",
        "flex-col",
        "lg:flex-row",
        "lg:justify-center",
        "gap-8",
        "md:gap-12",
        "lg:gap-16",
        "px-4",
        "md:px-8",
        "lg:px-12",
    ],
    {
        variants: {
            reverseRow: {
                true: ["lg:flex-row-reverse"],
            },
        },
    },
);

const Breakdown = () => {
    const parallaxTarget = useRef(null);
    const parallaxController = useParallaxController();

    const { ref: sphereRef } = useParallax<HTMLDivElement>({
        speed: -10,
    });

    const handleParallaxImageLoading = useCallback(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController]);

    return (
        <div
            id="about"
            className="relative flex flex-col gap-20 md:gap-40 pt-10 md:pt-40"
            ref={parallaxTarget}
        >
            <div
                className="absolute right-12 lg:right-32 hidden md:block z-10 md:w-16 md:h-16 lg:w-24 lg:h-24 md:top-30"
                ref={sphereRef}
            >
                <picture>
                    <img
                        alt="Sphere"
                        src="/parallax/sphere.png"
                        onLoad={handleParallaxImageLoading}
                        className="object-cover"
                    />
                </picture>
            </div>
            {MAIN_CONTENT.map((contentBlock, index: number) => {
                return (
                    <ContentBlock
                        key={index}
                        {...contentBlock}
                        reverseRow={index % 2 !== 0}
                    />
                );
            })}
        </div>
    );
};

interface ContentBlockProps extends ContentBlockType {
    reverseRow: boolean;
}

const ContentBlock = ({
    reverseRow,
    image,
    heading,
    content,
}: ContentBlockProps) => {
    return (
        <div className={sectionStyles({ reverseRow })} data-aos="fade-up">
            <picture>
                <img
                    src={image}
                    alt="img"
                    className="border border-black rounded-2xl w-full h-[19.2rem] md:w-[33.125rem] md:h-[24rem] lg:w-[44rem] lg:h-[24rem] object-cover"
                />
            </picture>
            <div className="flex flex-col max-w-3xl justify-center">
                <Typography
                    variant="h2"
                    className={{
                        root: "text-[3rem] md:text-[4.3rem] mb-8",
                    }}
                >
                    <AnimatedText speed={20} text={heading} />
                </Typography>
                <Typography variant="lg">
                    <AnimatedText speed={5} text={content} />
                </Typography>
            </div>
        </div>
    );
};

export default Breakdown;
