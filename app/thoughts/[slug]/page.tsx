import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/thoughts/utils";
import { baseUrl } from "@/app/sitemap";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export async function generateStaticParams() {
	let posts = getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata;
	let ogImage = image
		? image
		: `${baseUrl}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `${baseUrl}/thoughts/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Blog({ params }: { params: any }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	// Await the CustomMDX rendering
	const content = await CustomMDX({ source: post.content });

	return (
		<main className='max-w-screen-sm mx-auto px-6 py-20 relative min-h-screen scroll-smooth'>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${baseUrl}${post.metadata.image}`
							: `/og?title=${encodeURIComponent(post.metadata.title)}`,
						url: `${baseUrl}/thoughts/${post.slug}`,
						author: {
							"@type": "Person",
							name: "Oscar Treviño",
						},
					}),
				}}
			/>
			<div className='flex items-center gap-1 text-2xl tracking-tight font-rounded text-primary-text justify-between font-extrabold mb-10'>
				<div>
					<h1 className='flex items-center gap-1 text-2xl tracking-tight font-rounded text-primary-text justify-between font-extrabold'>
						{post.metadata.title}
					</h1>
					<p className='text-sm text-secondary-text font-rounded font-medium mt-1'>
						{formatDate(post.metadata.publishedAt)}
					</p>
				</div>
				<Button
					size='icon'
					className='z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#807E85] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75 bg-accent hover:bg-accent'
					type='button'
					asChild
				>
					<Link href={"/thoughts"}>
						<FaAngleLeft className='w-4 h-4 text-primary-text transition-all duration-300 will-change-auto fill-[#949595]' />
					</Link>
				</Button>
			</div>
			<article className='text-primary-text'>{content}</article>
		</main>
	);
}
