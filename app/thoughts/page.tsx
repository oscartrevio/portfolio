import { BlogPosts } from "@/components/posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export const metadata = {
	title: "Oscar Treviño | Thoughts",
	description: "A collection of thoughts and ideas.",
};

export default function Page() {
	return (
		<main className='max-w-screen-sm mx-auto px-6 py-20 relative min-h-screen font-sans scroll-smooth'>
			<div className='flex justify-between items-center mb-9 animate-blur-fade [animation-delay:calc(120ms*1)]'>
				<span>
					<h1 className='mb-0.5 text-2xl tracking-tight font-rounded font-extrabold text-primary-text'>
						Thoughts
					</h1>
					<p className='text-sm font-medium text-secondary-text font-rounded'>
						A collection of thoughts and ideas.
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
				<BlogPosts />
			</section>
		</main>
	);
}