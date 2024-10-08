import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { IoLink } from "react-icons/io5";
import { BlogPostsPreview } from "@/components/posts-preview";
import { ProjectsPreview } from "@/components/projects-preview";
import { ConfettiButton } from "@/components/confetti";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
	return (
		<section className='my-14'>
			<h3 className='mb-1 font-rounded font-bold tracking-tight text-lg'>
				{title}
			</h3>
			<div className='flex flex-col gap-6 text-sm'>
				{items.map((item, index) => {
					return (
						<div className='flex font-sans' key={index}>
							<div className='mr-8 w-full max-w-[150px] text-secondary-text font-mono text-sm'>
								{item.date}
							</div>
							<div className='flex flex-col flex-1 text-primary-text'>
								<h4 className='font-rounded font-bold text-sm'>{item.title}</h4>
								<p className=''>{item.subTitle}</p>
								{item.description ? (
									<p className='mt-2'>{item.description}</p>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default function Home() {
	return (
		<>
			<main className='max-w-screen-sm mx-auto px-6 py-20 relative min-h-screen font-sans'>
				{/* NAME SECTION */}
				<section className='flex items-center overflow-visible animate-blur-fade justify-between'>
					<div className='flex'>
						<ConfettiButton
							asChild
							options={{
								particleCount: 15,
								startVelocity: 20,
								spread: 35,
								scalar: 0.8,
							}}
						>
							<Image
								alt='Author'
								src={generalData.avatar}
								width={50}
								height={50}
								className='object-cover mr-2 hover:scale-110 transition-transform duration-200 ease-in-out rounded-full cursor-help'
							/>
						</ConfettiButton>
						<div className='overflow-visible'>
							{/* <h1
							className='mb-0.5 text-2xl tracking-tight font-rounded font-extrabold text-primary-text'
							data-marker='true'
							style={{
								display: "inline",
								margin: "-0.120147em -0.235145em -0.179853em -0.264855em",
								padding: "0.120147em 0.235145em 0.179853em 0.264855em",
								borderRadius: "0.5em 0.3em",
								backgroundImage:
									"linear-gradient(85.16184485450792deg, color-mix(in srgb, rgb(0,170,255), transparent 50%), color-mix(in srgb, rgb(0,170,255), transparent 90%) 4%, color-mix(in srgb, rgb(0,170,255), transparent 70%) 96%, color-mix(in srgb, rgb(0,170,255), transparent 30%))",
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
							Oscar Treviño
						</h1> */}
							<h1 className='mb-0.5 text-2xl tracking-tight font-rounded font-extrabold text-primary-text'>
								Oscar Treviño
							</h1>
							<p className='text-sm font-medium text-secondary-text font-rounded'>
								{generalData.jobTitle}
							</p>
							{/* {generalData.website ? (
							<span className='text-sm text-slate-400 dark:text-slate-400'>
								<a
									href={generalData.website}
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline'
								>
									{generalData.website
										.replace(/(^\w+:|^)\/\//, "")
										.replace("www.", "")}
								</a>
							</span>
						) : null} */}
						</div>
					</div>
					<ThemeSwitch />
				</section>

				<section className='my-9 animate-blur-fade [animation-delay:calc(120ms*1)]'>
					<h3 className='mb-1 font-rounded font-bold text-lg text-primary-text tracking-tight'>
						About me
					</h3>
					<div className='font-rounded font-medium text-sm text-secondary-text tracking-tight text-balance'>
						{generalData.about}
					</div>
				</section>

				{/* <section className='animate-blur-fade [animation-delay:calc(90ms*2)]'>
					{contentData.map((content, index) => {
						return <Content {...content} key={index} />;
					})}
				</section> */}

				<section className='my-9 animate-blur-fade [animation-delay:calc(120ms*2)]'>
					<Link
						href={"/thoughts"}
						className='text-lg font-bold mb-1 font-rounded flex gap-1 items-center tracking-tight'
					>
						Thoughts
						<IoLink className='h-4 w-auto text-secondary-text cursor-alias' />
					</Link>
					<BlogPostsPreview />
				</section>

				<section className='my-9 animate-blur-fade [animation-delay:calc(120ms*3)]'>
					<Link
						href={"/craft"}
						className='text-lg font-bold mb-1 font-rounded flex gap-1 items-center tracking-tight'
					>
						Craft
						<IoLink className='h-4 w-auto text-secondary-text cursor-alias' />
					</Link>
					<ProjectsPreview />
				</section>

				<section className='my-9 text-sm animate-blur-fade [animation-delay:calc(120ms*4)]'>
					<h3 className='mb-1 text-primary-text font-rounded font-bold tracking-tight text-lg'>
						Contact
					</h3>
					<div className='flex flex-col gap-4'>
						{generalData.contacts.map((contact, index) => {
							return (
								<div className='flex' key={index}>
									<p className='mr-2 max-w-[100px] w-full text-secondary-text font-rounded font-medium'>
										{contact.label}
									</p>

									<div className='flex flex-col text-primary-text font-rounded font-medium'>
										<Link
											href={contact.href}
											target='_blank'
											rel='noopener noreferrer'
											className='text-[#018DFF] flex items-center gap-0.5 hover:opacity-70 transition-all duration-200 ease-in-out'
										>
											{contact.value}
											<svg
												width='16'
												height='16'
												viewBox='0 0 16 16'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='text-secondary-text'
											>
												<path
													d='M8 5H5C3.89543 5 3 5.89543 3 7V12C3 13.1046 3.89543 14 5 14H10C11.1046 14 12 13.1046 12 12V8.5'
													stroke='currentColor'
													strokeWidth='1.25'
													strokeLinecap='round'
													strokeLinejoin='round'
												></path>
												<path
													d='M7.5 9.5L14 3M14 3V7M14 3H10'
													stroke='currentColor'
													strokeWidth='1.25'
													strokeLinecap='round'
													strokeLinejoin='round'
												></path>
											</svg>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
}
