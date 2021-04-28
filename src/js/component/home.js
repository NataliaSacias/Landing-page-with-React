import React from "react";
import { NavBarNico } from "./NavBarNico";
import { Navbar } from "./navbarRosario";
import { Jumbotron } from "./Jumbotron";
import Card from "./DivCard";
import { Footer } from "./footer";

let personas = [
	{
		title: "Valentina",
		imageUrl:
			"https://ca.slack-edge.com/T0BFXMWMV-U01TDPG48GG-3b9c47a0516b-512",
		description: "Integrante del Primer mejor grupo.",
		buttonUrl: "https://en.wikipedia.org/wiki/Valentina",
		buttonLabel: "Go to wikipedia"
	},
	{
		title: "Sebastian",
		imageUrl:
			"https://ca.slack-edge.com/T0BFXMWMV-U01SJ35CC69-b83b00c6864d-512",
		description: "Integrante del Primer mejor grupo.",
		buttonUrl: "https://en.wikipedia.org/wiki/Valentina",
		buttonLabel: "Go to wikipedia"
	},
	{
		title: "Rosario",
		imageUrl:
			"https://ca.slack-edge.com/T0BFXMWMV-U01SR8W0EKF-ae0dac9a5c53-512",
		description: "Integrante del Primer mejor grupo.",
		buttonUrl: "https://en.wikipedia.org/wiki/Valentina",
		buttonLabel: "Go to wikipedia"
	},
	{
		title: "Nicolás",
		imageUrl:
			"https://ca.slack-edge.com/T0BFXMWMV-U01TDPGLVCG-6cf96be2ac3e-512",
		description: "Integrante del Primer mejor grupo.",
		buttonUrl: "https://en.wikipedia.org/wiki/Valentina",
		buttonLabel: "Go to wikipedia"
	},
	{
		title: "Natalia",
		imageUrl:
			"https://ca.slack-edge.com/T0BFXMWMV-U01SW4R3N9J-c7bc26648406-512",
		description: "Integrante del Primer mejor grupo.",
		buttonUrl: "https://en.wikipedia.org/wiki/Valentina",
		buttonLabel: "Go to wikipedia"
	}
];
//create your first component
export function Home() {
	return (
		<div className="container-fluid p-0">
			<div className="bg-dark">
				<div id="NavBar">
					<NavBarNico />
				</div>
			</div>
			<div className="bg-dark">
				<div id="NavBar">
					<Navbar />
				</div>
			</div>
			<div id="Jumbotron">
				<Jumbotron />
			</div>
			<div className="container">
				<div id="DivCard" className="row">
					{personas.map((e, i) => {
						return (
							<Card
								key={i}
								title={e.title}
								imageUrl={e.imageUrl}
								description={e.description}
								buttonUrl={e.buttonUrl}
								buttonLabel={e.buttonLabel}
							/>
						);
					})}
				</div>
			</div>
			<div id="Footer">
				<Footer />
			</div>
		</div>
	);
}
