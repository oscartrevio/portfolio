import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getCraftPosts } from "@/app/craft/utils";
import Image from "next/image";
import { format } from "date-fns";

export function ProjectsPreview() {
	const allPosts = getCraftPosts();

	// Limit to 1 post for preview
	const previewPosts = allPosts
		.sort((a, b) => {
			return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
				? -1
				: 1;
		})
		.slice(0, 1); // Show only the first 1 craft post

	return (
		<div>
			{previewPosts.map((post) => (
				<Link
					key={post.slug}
					className='flex items-start mb-1 hover:bg-accent rounded-2xl py-2.5 px-2 -mx-2 transition-all duration-300 will-change-auto flex-col border border-accent'
					href={`/craft/${post.metadata.slug}`}
				>
					{/* <Image
						src={post.metadata.preview}
						width={100}
						height={100}
						className='rounded-xl border object-cover w-full'
						alt='post preview'
					/>
					<span className='flex'>
						<p className='text-primary-text tracking-tight font-sans font-medium text-sm flex flex-col'>
							<span className='font-rounded font-semibold'>
								{post.metadata.title}
							</span>
							<span className='text-secondary-text'>
								{post.metadata.summary}
							</span>
						</p>
						<p className='text-secondary-text font-sans text-sm font-medium'>
							{format(new Date(post.metadata.publishedAt), "P")}
						</p>
					</span> */}
					<div className='h-auto w-full overflow-hidden rounded-xl mb-2 border border-accent'>
						<Image
							src={post.metadata.preview}
							width={100}
							height={100}
							alt={`${post.metadata.title} preview`}
							className='h-auto w-full object-cover aspect-video'
						/>
					</div>
					<div className='flex justify-between items-center w-full p-1 tracking-tight'>
						<p className='text-primary-text font-rounded font-medium text-sm flex flex-col'>
							<span className='font-rounded font-semibold'>
								{post.metadata.title}
							</span>
							<span className='text-secondary-text'>
								{post.metadata.summary}
							</span>
						</p>
						<p className='text-secondary-text font-rounded font-medium text-sm'>
							{format(post.metadata.publishedAt, "MMMM u")}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
