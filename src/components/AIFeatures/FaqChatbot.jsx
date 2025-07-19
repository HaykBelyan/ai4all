import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRobot, FaTimes } from "react-icons/fa";

const FaqChatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const faqs = t("chatbot.faqs", { returnObjects: true });

	return (
		<>
			<div className={`chatbot-widget ${isOpen ? "open" : ""}`}>
				<div className="chatbot-header">
					<h4>{t("chatbot.header")}</h4>
					<button onClick={() => setIsOpen(false)}>
						<FaTimes />
					</button>
				</div>
				<div className="chatbot-body">
					<p className="bot-message">{t("chatbot.greeting")}</p>
					<ul>
						{faqs.map((faq, index) => (
							<li key={index}>
								<strong>{faq.q}</strong> <br /> {faq.a}
							</li>
						))}
					</ul>
				</div>
			</div>

			<button
				className="chatbot-toggle"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Open AI course helper"
			>
				<FaRobot />
			</button>
		</>
	);
};

export default FaqChatbot;
