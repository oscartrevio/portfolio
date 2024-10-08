import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import { cn } from "@/lib/utils";
import { MDXComponents } from "mdx/types";
import remarkGfm from "remark-gfm";

const FORMAT_H1 = "mt-2 scroll-m-20 text-2xl font-bold tracking-tight";
const FORMAT_H2 =
	"flex whitespace-nowrap items-center justify-center mt-10 gap-2 scroll-m-20 font-rounded font-bold tracking-tight";
const FORMAT_H3 = "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight";
const FORMAT_H4 = "mt-8 scroll-m-20 text-xl font-semibold tracking-tight";
const FORMAT_H5 = "mt-8 scroll-m-20 text-lg font-semibold tracking-tight";
const FORMAT_H6 = "mt-8 scroll-m-20 text-base font-semibold tracking-tight";
const FORMAT_P =
	"[&:not(:first-child)]:mt-4 leading-5 font-rounded font-medium scroll-m-20";
const FORMAT_UL = "my-6 ml-6 list-disc font-rounded font-medium scroll-m-20";
const FORMAT_OL = "my-6 ml-6 list-decimal font-rounded font-medium scroll-m-20";
const FORMAT_LI = "mt-2";

let components = {
	h1: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<h1 className={cn(FORMAT_H1, className)} {...props}>
			{props.children}
		</h1>
	),
	h2: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<h2 className={cn(FORMAT_H2, className)} {...props}>
			{props.children}
			<div className='border w-full h-px rounded-full border-text-secondary-text bg-text-secondary-text'></div>
		</h2>
	),
	h3: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<h3 className={cn(FORMAT_H3, className)} {...props}>
			{props.children}
		</h3>
	),
	h4: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<h4 className={cn(FORMAT_H4, className)} {...props}>
			{props.children}
		</h4>
	),
	h5: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<h5 className={cn(FORMAT_H5, className)} {...props}>
			{props.children}
		</h5>
	),
	h6: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<h6 className={cn(FORMAT_H6, className)} {...props}>
			{props.children}
		</h6>
	),
	p: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<p className={cn(FORMAT_P, className)} {...props}>
			{props.children}
		</p>
	),
	ul: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<ul className={cn(FORMAT_UL, className)} {...props}>
			{props.children}
		</ul>
	),
	ol: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<ol className={cn(FORMAT_OL, className)} {...props}>
			{props.children}
		</ol>
	),
	li: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<li className={cn(FORMAT_LI, className)} {...props}>
			{props.children}
		</li>
	),
	img: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<>
			<img className='rounded-xl border border-accent' {...props} />
			{/* <span className=''>{props.alt}</span> */}
		</>
	),
	code: ({
		className,
		...props
	}: {
		className: string;
		[key: string]: any;
	}) => (
		<code className='rounded-md border px-1 py-[3px] font-mono text-sm text-primary-text'>
			{props.children}
		</code>
	),
	em: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<em className='italic'>{props.children}</em>
	),
	sup: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<sup className='underline-transparent decoration-transparent decoration-0 text-secondary-text hover:underline no-underline text-[0.625rem] scroll-m-20'>
			{props.children}
		</sup>
	),
	a: ({ className, ...props }: { className: string; [key: string]: any }) => (
		<a
			{...props}
			className='no-underline hover:underline scroll-m-20
		data-[footnote-backref]:text-secondary-text data-[footnote-ref="true"]:text-secondary-text font-rounded'
		>
			{props.children}
		</a>
	),
	HighL({ className, ...props }: { className: string; [key: string]: any }) {
		return (
			<span
				className={cn(FORMAT_P, className)}
				data-marker='true'
				style={{
					display: "inline",
					margin: "-0.12em -0.23em -0.179em -0.26em",
					padding: "0.12em 0.23em 0.179em 0.26em",
					borderRadius: "0.3em 0.2em",
					backgroundImage:
						"linear-gradient(85deg, color-mix(in srgb, rgb(0,170,255), transparent 50%), color-mix(in srgb, rgb(0,170,255), transparent 90%) 4%, color-mix(in srgb, rgb(0,170,255), transparent 70%) 96%, color-mix(in srgb, rgb(0,170,255), transparent 30%))",
					backgroundPosition: "initial",
					backgroundSize: "initial",
					backgroundRepeat: "initial",
					backgroundAttachment: "initial",
					backgroundOrigin: "initial",
					backgroundClip: "initial",
					backgroundColor: "transparent",
					WebkitBoxDecorationBreak: "clone",
				}}
			>
				{props.children}
			</span>
		);
	},
};

export async function CustomMDX(props: MDXRemoteProps) {
	// Await the MDXRemote promise
	return (
		<>
			{await MDXRemote({
				...props,
				options: {
					mdxOptions: {
						remarkPlugins: [remarkGfm],
						rehypePlugins: [],
					},
				},
				components: components as MDXComponents,
			})}
		</>
	);
}
