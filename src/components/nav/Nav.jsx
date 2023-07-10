import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SiKnowledgebase } from "react-icons/si";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");

	return (
		<nav>
			<a
				href="#header"
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experiences")}
				className={activeNav === "#experiences" ? "active" : ""}
			>
				<SiKnowledgebase />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActiveNav("#portfolio")}
				className={activeNav === "#portfolio" ? "active" : ""}
			>
				<BsPersonWorkspace />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageRoundedDetail />
			</a>
		</nav>
	);
};

export default Nav;
