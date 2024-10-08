export const contentData = [
	{
		title: "Work Experience",
		items: [
			{
				title: "Senior Front-End Developer at Apple",
				subTitle: "Remote",
				date: "2020 - Present",
				description: "Design system, UI dev and web animations.",
			},
			{
				title: "Front-End Developer at Freelance",
				subTitle: "Remote",
				date: "2016 - 2020",
				description: "Working for clients around the world.",
			},
		],
	},
	{
		title: "Education",
		items: [
			{
				title: "B.S. in Computational Science and Information Technologies",
				subTitle: "Tecnológico de Monterrey",
				date: "2022 - Present",
				description: "Specialized in web development.",
			},
		],
	},
	// @NOTE: You can add more sections here
	{
		title: "Projects",
		items: [
			{
				title: "Project 1",
				subTitle: "Sub Title",
				date: "2015 - 2016",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
			},
		],
	},
];

export type Content = {
	title: string;
	items: {
		title: string;
		subTitle: string;
		date: string;
		description: string;
	}[];
};

export type ContentData = Content[];
