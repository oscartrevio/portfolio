"use client";

import React, { useEffect, useState } from "react";

export default function PixelatedImage() {
	const [pixels, setPixels] = useState([]);
	const baseGridSize = 24; // Adjust this for the pixel size, e.g., 24x24 px cells
	const [gridWidth, setGridWidth] = useState(baseGridSize);
	const [gridHeight, setGridHeight] = useState(baseGridSize);

	useEffect(() => {
		const image = new Image();
		image.src = "/vincent.jpg"; // Replace with your image path
		image.crossOrigin = "anonymous";
		image.onload = () => {
			// Calculate grid dimensions based on aspect ratio
			const aspectRatio = image.width / image.height;
			setGridWidth(baseGridSize);
			setGridHeight(Math.round(baseGridSize / aspectRatio));

			// Pixelate the image
			pixelateImage(
				image,
				Math.round(baseGridSize / aspectRatio),
				baseGridSize
			);
		};
	}, []);

	const pixelateImage = (image, rows, columns) => {
		const canvas = document.createElement("canvas");
		canvas.width = columns;
		canvas.height = rows;

		const ctx = canvas.getContext("2d");
		ctx.drawImage(image, 0, 0, columns, rows);

		const pixelData = [];
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < columns; x++) {
				const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
				pixelData.push(`rgb(${r}, ${g}, ${b})`);
			}
		}
		setPixels(pixelData);
	};

	return (
		<div className="flex items-center justify-center h-screen cursor-help">
			<div
				className="grid gap-0"
				style={{
					gridTemplateColumns: `repeat(${gridWidth}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${gridHeight}, minmax(0, 1fr))`,
				}}
			>
				{pixels.map((color, index) => (
					<span key={index} className="w-4 h-4 cursor-text">
						　
						<style jsx>{`
							span:nth-child(${index + 1})::selection {
								background-color: ${color};
							}
						`}</style>
					</span>
				))}
			</div>
		</div>
	);
}
