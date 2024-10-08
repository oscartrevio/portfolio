import { BlogPosts } from "@/components/posts";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { Projects } from "@/components/projects";

export const metadata = {
	title: "Oscar Treviño | Craft",
	description: "A collection of experiments and projects.",
};

export default function Page() {
	return (
		<main className='max-w-screen-sm mx-auto px-6 py-20 relative min-h-screen font-sans scroll-smooth'>
			<div className='flex justify-between mb-9 animate-blur-fade [animation-delay:calc(120ms*1)] items-center'>
				<span>
					<h1 className='mb-0.5 text-2xl tracking-tight font-rounded font-extrabold text-primary-text'>
						Craft
					</h1>
					<p className='text-sm font-medium text-secondary-text font-rounded'>
						A collection of experiments and projects.
					</p>
				</span>
				<Button
					size='icon'
					className='z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#807E85] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75 bg-accent hover:bg-accent'
					type='button'
					asChild
				>
					<Link href={"/"}>
						<FaAngleLeft className='w-4 h-4 text-primary-text transition-all duration-300 will-change-auto fill-[#949595]' />
					</Link>
				</Button>
			</div>

			<section className='animate-blur-fade [animation-delay:calc(120ms*2)]'>
				<Projects />
			</section>
		</main>
	);
}
