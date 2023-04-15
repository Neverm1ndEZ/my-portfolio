import React from "react";
import "./About.css";
import ME from "../../assets/me/me_3.jpg";
import { TbAward } from "react-icons/tb";
import { MdFolder } from "react-icons/md";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<TbAward className="about__icons" />
							<h5>Experience</h5>
							<small>1+ Year Working</small>
						</article>
						<article className="about__card">
							<MdFolder className="about__icons" />
							<h5>Projects</h5>
							<small>8+ Completed and Counting</small>
						</article>
					</div>

					<p>
						<h3>
							"Nothing is as Permanent as a Temporary Solution that works !"
						</h3>
						Hi, I'm Mihir! Currently a Second Year B.Tech Student, Enthusiastic
						about Web and Android Development, Programming, Coffee and Sleeping
						- that I have currently been losing over some ongoing projects of
						React, Express and Android. Apart from this, I spend my days trying
						to sleep (emphasis on "trying"), Making Coffee, Gaming.
						<br /> <br />
						Let's Talk if you are Interested in Android or Web Development
						Projects or simply, CSGO. Don't be afraid to commit, whether it is
						GitHub or Real Life :)
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
