import React from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_4axwa0d",
				"template_1hb7la9",
				form.current,
				"1-F-xofoF1RQGiGtk",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMailOutline className="contact__option-icon" />
						<h4>Email</h4>
						<h5>mihirsuman1@gmail.com</h5>
						<a
							href="mailto:mihirsuman1@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send A Message
						</a>
					</article>
					<article className="contact__option">
						<BsTelegram className="contact__option-icon" />
						<h4>Telegram</h4>
						<h5>nevermind_ez</h5>
						<a
							href="https://t.me/nevermind_ez"
							target="_blank"
							rel="noreferrer"
						>
							Send A Message
						</a>
					</article>
					<article className="contact__option">
						<FaDiscord className="contact__option-icon" />
						<h4>Discord</h4>
						<h5>Nevermind_EZ#0199</h5>
						<a
							href="https://discordapp.com/users/617684874140319755"
							target="_blank"
							rel="noreferrer"
						>
							Send A Message
						</a>
					</article>
				</div>
				{/* end of contact options */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
