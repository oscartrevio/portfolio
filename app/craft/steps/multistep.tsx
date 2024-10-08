"use client";
import { cn } from "@/lib/utils";
import {
	useState,
	createContext,
	useContext,
	type ReactNode,
	type ReactElement,
	useEffect,
	useMemo,
	use,
} from "react";
import { Icons } from "./Icons";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const StepsContext = createContext({
	index: 0,
	setIndex: (i: number) => {},
	maxSteps: 0,
	setMaxSteps: (i: number) => {},
	direction: 1,
	setDirection: (i: number) => {},
	isFirstStep: true,
	isLastStep: false,
	clickNext: () => {},
	clickBack: () => {},
});

export function Step({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return <div className={cn("grow", className)}>{children}</div>;
}

export function StepsIndicator() {
	const { index, maxSteps } = useContext(StepsContext);

	return (
		<div className='p-2 flex flex-row w-fit gap-4 mx-auto relative'>
			{/* STEPS INDICATOR BACKGROUND */}
			<motion.div
				layout
				className={cn(
					`absolute top-0 left-0 h-full bg-[#34C759] rounded-full z-10 w-6`
				)}
				transition={{ type: "spring", bounce: 0.45, duration: 0.45 }}
				animate={{ width: `${1.5 + index * 1.5}rem` }}
			></motion.div>
			{/* STEPS DOTS */}
			{Array.from({ length: maxSteps }, (_, i) => {
				return (
					<motion.div
						key={i}
						animate={
							i > index
								? { scale: 0.75, backgroundColor: "rgb(229 229 229)" }
								: { scale: 1, backgroundColor: "rgb(255 255 255)" }
						}
						className={cn("w-2 h-2 rounded-full z-20")}
					></motion.div>
				);
			})}
		</div>
	);
}

export function Steps({
	children,
	className,
}: {
	children: ReactElement[];
	className?: string;
}) {
	const { index, setMaxSteps, direction } = useContext(StepsContext);

	useEffect(() => {
		setMaxSteps(children.length);
	}, [children.length, setMaxSteps]);

	return (
		<section className={cn("flex flex-col h-full w-full grow", className)}>
			{/* STEPS CONTENT */}
			<AnimatePresence mode='popLayout' initial={false} custom={direction}>
				<motion.div
					key={index}
					variants={variants}
					initial='initial'
					animate='active'
					exit='exit'
					transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
					custom={direction}
				>
					{children[index]}
				</motion.div>
			</AnimatePresence>
		</section>
	);
}

export function StepSection({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const [index, setIndex] = useState(0);
	const [maxSteps, setMaxSteps] = useState(0);
	const [direction, setDirection] = useState(1);

	const clickNext = () => {
		if (index < maxSteps) {
			setIndex(index + 1);
			setDirection(1);
		}
	};
	const clickBack = () => {
		if (index > 0) {
			setIndex(index - 1);
			setDirection(-1);
		}
	};
	const isFirstStep = index === 0;
	const isLastStep = index === maxSteps - 1;

	return (
		<StepsContext.Provider
			value={{
				index,
				setIndex,
				maxSteps,
				setMaxSteps,
				direction,
				setDirection,
				isFirstStep,
				isLastStep,
				clickNext,
				clickBack,
			}}
		>
			<div className={cn("flex flex-col relative overflow-hidden", className)}>
				{children}
			</div>
		</StepsContext.Provider>
	);
}

export function StepsPagination({ children }: { children: ReactNode }) {
	return (
		<AnimatePresence mode='popLayout'>
			<motion.section className='flex gap-2'>{children}</motion.section>;
		</AnimatePresence>
	);
}

export function StepBackButton({ children }: { children: ReactNode }) {
	const { isFirstStep, clickBack } = useContext(StepsContext);

	if (!isFirstStep) {
		return (
			<motion.button
				key='back'
				layout
				className={cn(
					"px-6 py-3 rounded-full bg-gray-100 font-rounded font-semibold text-black flex-shrink-0 select-none will-change-transform "
				)} // flex-shrink-0
				initial={{
					x: -110,
				}}
				animate={{
					x: 0,
				}}
				exit={{ x: -110 }}
				transition={{ type: "spring", bounce: 0.35, duration: 0.45 }}
				whileTap={{ scale: 0.98 }}
				onClick={clickBack}
			>
				{children}
			</motion.button>
		);
	}
	return null;
}

export function StepNextButton({ children }: { children: ReactNode }) {
	const { isLastStep, clickNext } = useContext(StepsContext);

	return (
		<motion.button
			key='next'
			className={cn(
				"px-6 py-3 rounded-full bg-[#018DFF] font-rounded font-semibold text-white flex justify-center items-center grow will-change-transform select-none"
			)} // flex-grow
			layout
			transition={{
				type: "spring",
				bounce: 0.35,
				duration: 0.45,
			}}
			whileTap={{ scale: 0.98 }}
			onClick={() => {
				if (isLastStep) {
					console.log("Finish");
				} else {
					clickNext();
				}
			}}
		>
			<motion.span
				className='flex items-center'
				layout
				transition={{
					type: "spring",
					bounce: 0.35,
					duration: 0.45,
				}}
			>
				{isLastStep && (
					<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
						<Icons.CircleCheckFilled className='size-6 mr-1' />
					</motion.span>
				)}
				{isLastStep ? "Finish" : children}
			</motion.span>
		</motion.button>
	);
}

const variants = {
	initial: (direction: number) => {
		return { x: `${210 * direction}%`, opacity: 0, filter: "blur(10px)" };
	},
	active: { x: "0%", opacity: 1, filter: "blur(0px)" },
	exit: (direction: number) => {
		return { x: `${-210 * direction}%`, opacity: 0, filter: "blur(10px)" };
	},
};
