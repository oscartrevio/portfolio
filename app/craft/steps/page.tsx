import DotGrid from "@/components/dotgird";
import Image from "next/image";
import svgPhone from "app/assets/iphone-black.svg";
import status from "app/assets/iphone-status-black.svg";

import {
	StepSection,
	Step,
	Steps,
	StepsPagination,
	StepBackButton,
	StepNextButton,
	StepsIndicator,
} from "./multistep";
import { cn } from "@/lib/utils";

export const metadata = {
	title: "Oscar Treviño | Steps",
	description:
		"Step component that allows you to navigate through a series of steps.",
};

export default function Home() {
	return (
		<main className='w-full h-full flex flex-col'>
			<DotGrid />
			<div className='relative flex w-screen h-screen items-center justify-center'>
				{/* PHONE CONTAINER */}
				<div className='absolute left-1/2 top-1/2 z-10 h-[815px] w-[375px] rounded-[44px] -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
					{/* PHONE SCREEN */}
					<section
						className={cn(
							"relative z-50 rounded-[44px] overflow-visible h-full w-full flex items-center justify-center bg-white"
						)}
					>
						<StepSection className='w-full p-6 py-10 pt-20 flex flex-col gap-4 justify-stretch h-full'>
							<Steps>
								<Step className='w-full rounded-xl bg-[#00ca48] flex items-center justify-center text-4xl font-semibold text-white h-96 font-rounded'>
									Step 1
								</Step>
								<Step className='w-full rounded-xl bg-[#FFBE4C] flex items-center justify-center text-4xl font-semibold text-white h-96 font-rounded'>
									Step 2
								</Step>
								<Step className='w-full rounded-xl bg-[#FF5310] flex items-center justify-center text-4xl font-semibold text-white h-96 font-rounded'>
									Step 3
								</Step>
							</Steps>
							<StepsIndicator />
							<StepsPagination>
								<StepBackButton>Back</StepBackButton>
								<StepNextButton>Continue</StepNextButton>
							</StepsPagination>
						</StepSection>

						{/* PHONE SCREEN OVERLAY */}
						<div className='absolute top-6 z-50 text-sm flex justify-between w-full px-8 select-none'>
							<div className='font-sans font-medium ml-6 text-black'>9:41</div>
							<Image
								src={status}
								alt={"iphone status"}
								className='fill-black w-16 h-4'
							/>
						</div>
						<div className='absolute bottom-2 left-0 z-50 w-full px-28 flex justify-center'>
							<div className='h-1.5 w-[360px] rounded-3xl bg-black' />
						</div>
					</section>
				</div>
				<Image
					src={svgPhone}
					alt='iphone mock'
					className='pointer-events-none relative z-50 drop-shadow-xl'
				/>
			</div>
		</main>
	);
}
