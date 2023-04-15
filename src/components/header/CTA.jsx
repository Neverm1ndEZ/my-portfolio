import React from "react";
import CV from "../../assets/CV.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} download className="btn">
				Here's my CV
			</a>
			<a href="#contact" className="btn btn-primary">
				Reach Out to Me
			</a>
		</div>
	);
};

export default CTA;
