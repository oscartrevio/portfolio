import Link from "next/link";
import { format } from "date-fns";
import { getBlogPosts } from "@/app/thoughts/utils";

export function BlogPosts() {
	let allBlogs = getBlogPosts();

	// Sort by published date
	const sortedBlogs = allBlogs.sort((a, b) => {
		return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
			? -1
			: 1;
	});

	return (
		<div>
			{sortedBlogs.map((post) => (
				<Link
					key={post.slug}
					className='flex items-center mb-1 hover:bg-accent rounded-xl py-2.5 px-2 -mx-2 transition-all duration-300 will-change-auto justify-between'
					href={`/thoughts/${post.slug}`}
				>
					<p className='text-primary-text tracking-tight font-rounded font-medium text-sm flex flex-col'>
						<span className='font-rounded font-semibold'>
							{post.metadata.title}
						</span>
						<span className='text-secondary-text'>{post.metadata.summary}</span>
					</p>
					<p className='text-secondary-text font-rounded text-sm font-medium'>
						{format(new Date(post.metadata.publishedAt), "P")}
					</p>
				</Link>
			))}
		</div>
	);
}
