import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SuccessSpotlight = ({ story }) => {
	const { t } = useTranslation();

	if (!story) {
		console.warn("No story data provided to SuccessSpotlight");
		return null;
	}

	return (
		<section className="success-spotlight-section">
			<div className="container">
				<h2 className="section-title" style={{ color: "white" }}>
					{t("home.successSpotlight.title")}
				</h2>
				<div className="spotlight-content">
					<img
						src={`${import.meta.env.BASE_URL}/${story.image}`}
						alt={story.name || "Success story"}
						className="spotlight-image"
					/>
					<div className="spotlight-text">
						<blockquote>
							“{t(story.quoteKey) || t("home.successSpotlight.defaultQuote")}”
						</blockquote>
						<p className="author">
							– {t(story.nameKey) || t("home.successSpotlight.defaultAuthor")}
						</p>
						<Link
							to="/success-stories"
							style={{ color: "#88d3ce", marginTop: "10px", display: "inline-block" }}
						>
							{t("home.successSpotlight.readMore")}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessSpotlight;
