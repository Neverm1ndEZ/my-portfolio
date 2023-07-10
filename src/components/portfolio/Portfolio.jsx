import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/images/Image1.png";
import IMG2 from "../../assets/images/Image2.png";
import IMG3 from "../../assets/images/Image3.png";
import IMG4 from "../../assets/images/Image4.png";
import IMG5 from "../../assets/images/Image5.png";
import IMG6 from "../../assets/images/Image6.jpg";

const Portfolio = () => {
	const Data = [
		{
			id: 1,
			image: IMG1,
			title: "Versatile Web",
			github: "https://github.com/Neverm1ndEZ/versatile-project",
		},
		{
			id: 2,
			image: IMG2,
			title: "LocalVille Onliner Panel",
			github: "https://github.com/Neverm1ndEZ/localville-seller-panel",
		},
		{
			id: 3,
			image: IMG6,
			title: "Weather Forecast App",
			github: "https://github.com/Neverm1ndEZ/Weather-App",
		},
		{
			id: 4,
			image: IMG4,
			title: "Mihir Suman - Portfolio Website",
			github: "https://github.com/Neverm1ndEZ/localville-seller-panel",
		},
		{
			id: 5,
			image: IMG5,
			title: "Remine India Landing Page",
			github: "https://github.com/Neverm1ndEZ/remine-india-landing-page",
		},
		{
			id: 6,
			image: IMG3,
			title: "Child Nutrition Tracking Application (CNTA)",
			github:
				"https://drive.google.com/file/d/1q7w88FyC1jcaFKvP5HreLlm66fCus38a/view?usp=sharing",
		},
	];

	return (
		<section id="portfolio">
			<h5>My Recent Works</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{Data.map(({ id, image, title, github }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt="Showcase" />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
