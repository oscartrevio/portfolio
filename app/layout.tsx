import "./globals.css";
import {
	EB_Garamond,
	Instrument_Serif,
	Inter,
	JetBrains_Mono,
	Newsreader,
	Space_Mono,
} from "next/font/google";
import localFont from "next/font/local";
import { ServerThemeProvider } from "next-themes";
import Providers from "./providers";
import { generalData } from "@/data/general";
import type { Metadata } from "next";
import { cn } from "./lib/utils";
import {
	Activity,
	Component,
	HomeIcon,
	Pickaxe,
	Bookmark,
	BookOpen,
} from "lucide-react";

const data = [
	{
		title: "Home",
		icon: <HomeIcon className='h-full w-full text-primary-text' />,
		href: "/",
	},
	{
		title: "Thoughts",
		icon: <BookOpen className='h-full w-full text-primary-text' />,
		href: "/thoughts",
	},
	{
		title: "Craft",
		icon: <Pickaxe className='h-full w-full text-primary-text' />,
		href: "/craft",
	},
	{
		title: "Bookmarks",
		icon: <Bookmark className='h-full w-full text-primary-text' />,
		href: "/bookmarks",
	},
	// {
	// 	title: "Email",
	// 	icon: (
	// 		<Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
	// 	),
	// 	href: "#",
	// },
	// {
	// 	title: "Theme",
	// 	icon: (
	// 		<SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
	// 	),
	// 	href: "#",
	// },
];

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains-mono",
});

const spaceMono = Space_Mono({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
	variable: "--font-space-mono",
});

const newsreader = Newsreader({
	subsets: ["latin"],
	display: "swap",
	style: "italic",
	variable: "--font-newsreader",
});

const openRunde = localFont({
	src: [
		{
			path: "./fonts/OpenRunde-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/OpenRunde-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/OpenRunde-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/OpenRunde-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-open-runde",
});

export const metadata: Metadata = {
	title: `${generalData.name}`,
	description: generalData.about,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "",
		siteName: `${generalData.name} - ${generalData.jobTitle}`,
		title: `${generalData.name} - ${generalData.jobTitle}`,
		description: generalData.about,
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
				alt: `${generalData.name} - ${generalData.jobTitle}`,
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ServerThemeProvider attribute='class'>
			<html lang='en'>
				<body
					className={cn(
						"mx-auto min-h-screen antialiased w-screen bg-[#FDFDFC] dark:bg-[#1A1A1A] text-[#111111] dark:text-[#eeeeec] will-change-auto transition-all ease-in-out font-sans scroll-smooth",
						inter.variable,
						openRunde.variable,
						jetBrainsMono.variable,
						spaceMono.variable,
						newsreader.variable
					)}
				>
					<div className='pointer-events-none fixed left-0 top-0 z-50 h-32 w-full'>
						{/* Light theme gradient */}
						<div
							className='block dark:hidden h-full pointer-events-none user-select-none'
							style={{
								backgroundImage:
									"linear-gradient(180deg, #fff 0%, hsla(0, 0%, 100%, 0.738) 19%, hsla(0, 0%, 100%, 0.541) 34%, hsla(0, 0%, 100%, 0.382) 47%, hsla(0, 0%, 100%, 0.278) 56.5%, hsla(0, 0%, 100%, 0.194) 65%, hsla(0, 0%, 100%, 0.126) 73%, hsla(0, 0%, 100%, 0.075) 80.2%, hsla(0, 0%, 100%, 0.042) 86.1%, hsla(0, 0%, 100%, 0.021) 91%, hsla(0, 0%, 100%, 0.008) 95.2%, hsla(0, 0%, 100%, 0.002) 98.2%, hsla(0, 0%, 100%, 0) 100%)",
							}}
						></div>
						{/* Dark theme gradient */}
						<div
							className='hidden dark:block h-full'
							style={{
								backgroundImage:
									"linear-gradient(180deg, #1a1a1a 0, hsla(0, 0%, 10%, 0.738) 19%, hsla(0, 0%, 10%, 0.541) 34%, hsla(0, 0%, 10%, 0.382) 47%, hsla(0, 0%, 10%, 0.278) 56.5%, hsla(0, 0%, 10%, 0.194) 65%, hsla(0, 0%, 10%, 0.126) 73%, hsla(0, 0%, 10%, 0.075) 80.2%, hsla(0, 0%, 10%, 0.042) 86.1%, hsla(0, 0%, 10%, 0.021) 91%, hsla(0, 0%, 10%, 0.008) 95.2%, hsla(0, 0%, 10%, 0.002) 98.2%, hsla(0, 0%, 10%, 0))",
							}}
						></div>
					</div>
					<Providers>
						{children}
						{/* <div className='pointer-events-none fixed inset-x-0 bottom-4 z-[100] mx-auto flex'>
							<div className='pointer-events-auto relative mx-auto flex h-full items-center overflow-y-scroll rounded-xl bg-accent p-2 shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]'>
								{data.map((item, index) => (
									<Link
										key={index}
										href={item.href}
										className='inline-flex cursor-pointer items-center justify-center p-2.5 rounded-xl transition-all duration-300'
									>
										{item.icon}
									</Link>
								))}
							</div>
						</div> */}
					</Providers>
					<div className='pointer-events-none fixed left-0 bottom-0 z-50 h-32 w-full rotate-180'>
						{/* Light theme gradient */}
						<div
							className='block dark:hidden h-full'
							style={{
								backgroundImage:
									"linear-gradient(180deg, #fff 0%, hsla(0, 0%, 100%, 0.738) 19%, hsla(0, 0%, 100%, 0.541) 34%, hsla(0, 0%, 100%, 0.382) 47%, hsla(0, 0%, 100%, 0.278) 56.5%, hsla(0, 0%, 100%, 0.194) 65%, hsla(0, 0%, 100%, 0.126) 73%, hsla(0, 0%, 100%, 0.075) 80.2%, hsla(0, 0%, 100%, 0.042) 86.1%, hsla(0, 0%, 100%, 0.021) 91%, hsla(0, 0%, 100%, 0.008) 95.2%, hsla(0, 0%, 100%, 0.002) 98.2%, hsla(0, 0%, 100%, 0) 100%)",
							}}
						></div>
						{/* Dark theme gradient */}
						<div
							className='hidden dark:block h-full'
							style={{
								backgroundImage:
									"linear-gradient(180deg, #1a1a1a 0, hsla(0, 0%, 10%, 0.738) 19%, hsla(0, 0%, 10%, 0.541) 34%, hsla(0, 0%, 10%, 0.382) 47%, hsla(0, 0%, 10%, 0.278) 56.5%, hsla(0, 0%, 10%, 0.194) 65%, hsla(0, 0%, 10%, 0.126) 73%, hsla(0, 0%, 10%, 0.075) 80.2%, hsla(0, 0%, 10%, 0.042) 86.1%, hsla(0, 0%, 10%, 0.021) 91%, hsla(0, 0%, 10%, 0.008) 95.2%, hsla(0, 0%, 10%, 0.002) 98.2%, hsla(0, 0%, 10%, 0))",
							}}
						></div>
					</div>
				</body>
			</html>
		</ServerThemeProvider>
	);
}
