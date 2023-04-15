import React from "react";
import "./Footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<a href="/#" className="footer__logo">
				Mihir
			</a>

			<ul className="permalinks">
				<li>
					<a href="/#">Home</a>
				</li>
				<li>
					<a href="/#about">About</a>
				</li>
				<li>
					<a href="/#experience">Experience</a>
				</li>
				<li>
					<a href="/#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a
					href="https://www.linkedin.com/in/mihir-suman-461837233/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://discordapp.com/users/617684874140319755"
					target="_blank"
					rel="noreferrer"
				>
					<FaDiscord />
				</a>
				<a
					href="https://twitter.com/nevermind_ez"
					target="_blank"
					rel="noreferrer"
				>
					<BsTwitter />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Mihir. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
