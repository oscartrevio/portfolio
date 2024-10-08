"use client";

import { useRef } from "react";
import {
	AnimatePresence,
	motion,
	useInView,
	UseInViewOptions,
	Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
	children: React.ReactNode;
	className?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	duration?: number;
	delay?: number;
	yOffset?: number;
	inView?: boolean;
	inViewMargin?: MarginType;
	blur?: string;
}

export default function BlurFade({
	children,
	className,
	variant,
	duration = 0.4,
	delay = 0,
	yOffset = 6,
	inView = false,
	inViewMargin = "-50px",
	blur = "4px",
}: BlurFadeProps) {
	const ref = useRef(null);
	const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
	const isInView = !inView || inViewResult;
	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0.1, filter: `blur(${blur})`, scale: 1 },
		visible: { y: -yOffset, opacity: 1, filter: `blur(0px)`, scale: 1 },
	};
	const combinedVariants = variant || defaultVariants;
	return (
		<AnimatePresence mode='popLayout' initial>
			<motion.div
				ref={ref}
				initial='hidden'
				animate={isInView ? "visible" : "hidden"}
				variants={combinedVariants}
				transition={{
					delay: 0.04 + delay,
					duration,
					ease: "easeOut",
				}}
				className={className}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
