import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://github.com/Neverm1ndEZ" target="_blank" rel="noreferrer">
				<BsGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/mihir-suman-p-461837233/"
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
			<a href="https://t.me/nevermind_ez" target="_blank" rel="noreferrer">
				<BsTelegram />
			</a>
		</div>
	);
};

export default HeaderSocials;
