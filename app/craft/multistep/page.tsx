import DotGrid from "@/components/dotgird";
import Image from "next/image";
import svgPhone from "app/assets/iphone-black.svg";
import status from "app/assets/iphone-status-black.svg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import {
	Step,
	StepBackButton,
	StepNextButton,
	Steps,
	StepSection,
	StepsIndicator,
	StepsPagination,
} from "../steps/multistep";
import { Cursor } from "@/components/cursor";
import { motion } from "framer-motion";

export const metadata = {
	title: "Oscar Treviño | Muiltistep",
	description:
		"Multistep component that morphs the buttons and indicator seamlessly into the next step.",
};

export default function Home() {
	return (
		<main className='max-w-screen-sm mx-auto px-6 py-20 relative min-h-screen font-rounded scroll-smooth'>
			<Button
				className='z-10 w-max flex items-center justify-center rounded-full bg-[#F7F8F9] text-[#949595] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 bg-accent hover:bg-accent gap-1 animate-blur-fade [animation-delay:calc(120ms*1)] mb-4'
				type='button'
				asChild
			>
				<Link href={"/craft"}>
					<FaAngleLeft className='w-3 h-3 text-primary-text transition-all duration-300 will-change-auto fill-[#949595]' />
					Back to Craft
				</Link>
			</Button>

			<div className='flex justify-between animate-blur-fade [animation-delay:calc(120ms*2)] mb-4'>
				<span>
					<h1 className='mb-0.5 text-2xl tracking-tight font-rounded font-extrabold text-primary-text'>
						Muiltistep
					</h1>
					<p className='text-sm font-medium text-secondary-text font-rounded'>
						I created this multistep component that morphs the buttons and
						indicator seamlessly into the next step. This component is inspired
						by this{" "}
						<span className='inline'>
							<a
								href='https://x.com/zzerou_/status/1812509007648846300'
								target='_blank'
								rel='noopener noreferrer'
								className='text-link items-center gap-0.5 hover:opacity-70 transition-all duration-200 ease-in-out inline'
							>
								tweet <ExternalLink className='inline w-3 h-3' />
							</a>{" "}
						</span>{" "}
						created with Figma.
					</p>
				</span>
			</div>

			<div className='z-0 flex h-full min-h-[100px] items-center justify-center rounded-lg border border-accent px-0 py-12 animate-blur-fade [animation-delay:calc(120ms*3)]'>
				<DotGrid />
				{/* <Image
					src={svgPhone}
					alt='iphone mock'
					className='pointer-events-none relative z-50 drop-shadow-xl'
				/> */}
				<section
					className='relative z-50 overflow-hidden flex items-center justify-center bg-white shadow-2xl'
					style={{
						height: "704px",
						outline: "rgb(0, 0, 0) solid 12px",
						borderRadius: "44px",
						width: "344px",
					}}
				>
					<StepSection className='w-full p-6 pb-8 pt-16 flex flex-col gap-4 justify-stretch h-full'>
						<Steps className='items-center justify-center'>
							<Step className='w-[100px] h-[100px] rounded-full bg-[#369eff] flex items-center justify-center text-4xl font-bold text-white font-rounded'>
								1
							</Step>
							<Step className='w-[100px] h-[100px] rounded-full bg-[#ff9447] flex items-center justify-center text-4xl font-bold text-white font-rounded'>
								2
							</Step>
							<Step className='w-[100px] h-[100px] rounded-full bg-[#25d0ab] flex items-center justify-center text-4xl font-bold text-white font-rounded'>
								3
							</Step>
						</Steps>
						<StepsIndicator />
						<StepsPagination>
							<StepBackButton>Back</StepBackButton>
							<StepNextButton>Continue</StepNextButton>
						</StepsPagination>
					</StepSection>
					<div className='absolute top-2 z-50 h-[34px] w-[114px] bg-black rounded-full' />
					<div className='absolute bottom-1 z-50 h-[5px] w-[134px] rounded-3xl bg-black' />
				</section>
			</div>
		</main>
	);
}
