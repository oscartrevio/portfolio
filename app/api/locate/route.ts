import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/db";

interface LocationData {
	status: string;
	country: string;
	countryCode: string;
	region: string;
	regionName: string;
	city: string;
	query: string;
}

export async function POST(request: NextRequest) {
	try {
		// Get the IP from headers
		let ip =
			request.headers.get("x-forwarded-for") ||
			request.headers.get("remote-address");

		// If the IP is localhost (::1), use a placeholder IP for testing
		if (ip === "::1" || ip === "127.0.0.1") {
			ip = "24.48.0.1"; // Placeholder IP for testing
		}

		// Fetch geolocation data from the IP API
		const res = await fetch(
			`http://ip-api.com/json/${ip}?fields=status,country,countryCode,region,regionName,city,query`
		);
		const data: LocationData = await res.json();

		// Check if the API response is valid
		if (data.status !== "success") {
			console.error("Failed to get location data:", data);
			return NextResponse.json(
				{ error: "Failed to fetch location data" },
				{ status: 400 }
			);
		}

		// Save the visitor's location in the database
		const visitor = await prisma.visitor.create({
			data: {
				ip: data.query, // Store the IP address
				city: data.city, // Store the city
				country: data.country, // Store the country
				region: data.region, // Store the region
				regionName: data.regionName, // Store the region name
				countryCode: data.countryCode, // Store the country code
				createdAt: new Date(), // Save the current timestamp
			},
		});

		console.log("Visitor location saved:", visitor);

		return NextResponse.json({
			message: "Location saved successfully",
			visitor,
		});
	} catch (error) {
		console.error("Error saving visitor location:", error);
		return NextResponse.json(
			{
				error: "Failed to save visitor location",
			},
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		// Get the last visitor's location from the database
		const visitor = await prisma.visitor.findFirst({
			orderBy: {
				createdAt: "desc",
			},
		});

		if (!visitor) {
			return NextResponse.json(
				{
					error: "No visitor location found",
				},
				{ status: 404 }
			);
		}

		console.log("Last visitor location:", visitor);

		return NextResponse.json({
			message: "Visitor location found",
			visitor,
		});
	} catch (error) {
		console.error("Error getting visitor location:", error);
		return NextResponse.json(
			{
				error: "Failed to get visitor location",
			},
			{ status: 500 }
		);
	}
}
