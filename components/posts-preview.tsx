import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/thoughts/utils";
import { format } from "date-fns";
import { ExternalLink } from "lucide-react";

export function BlogPostsPreview() {
	let allBlogs = getBlogPosts();

	// Limit to 5 posts for preview
	const previewBlogs = allBlogs
		.sort((a, b) => {
			return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
				? -1
				: 1;
		})
		.slice(0, 5); // Show only the first 5 blog posts

	return (
		<div>
			{previewBlogs.map((post) => (
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

			{/* Show more link */}
			{/* <div className='mt-1 text-left'>
				<Link
					href='/writing'
					className='text-link font-medium hover:underline text-sm'
				>
					Show more...
				</Link>
			</div> */}
		</div>
	);
}
