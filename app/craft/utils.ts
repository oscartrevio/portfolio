import fs from "fs";
import path from "path";

type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
	preview: string;
	slug: string;
};

function parseFrontmatter(fileContent: string) {
	let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	let match = frontmatterRegex.exec(fileContent);
	let frontMatterBlock = match![1];
	let frontMatterLines = frontMatterBlock.trim().split("\n");
	let metadata: Partial<Metadata> = {};

	frontMatterLines.forEach((line) => {
		let [key, ...valueArr] = line.split(": ");
		let value = valueArr.join(": ").trim();
		value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
		metadata[key.trim() as keyof Metadata] = value;
	});

	return { metadata: metadata as Metadata };
}

function getMDXFiles(dir: fs.PathLike) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
	let rawContent = fs.readFileSync(filePath, "utf-8");
	return parseFrontmatter(rawContent);
}

function getMDXData(dir: fs.PathLike) {
	let mdxFiles = getMDXFiles(dir);
	return mdxFiles.map((file) => {
		let { metadata } = readMDXFile(path.join(dir.toString(), file));
		let slug = path.basename(file, path.extname(file));

		return {
			metadata,
			slug,
		};
	});
}

export function getCraftPosts() {
	return getMDXData(path.join(process.cwd(), "app", "craft", "posts"));
}
