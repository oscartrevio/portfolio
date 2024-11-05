import React from "react";

export default async function Footer() {
	// Get the last visitor's location from the API
	const res = await fetch("http://localhost:3000/api/locate");
	const data = await res.json();
	const { city, country } = data;

	return (
		<>
			<footer>
				<p>
					Last visit from {country}, {city}
				</p>
			</footer>
		</>
	);
}
