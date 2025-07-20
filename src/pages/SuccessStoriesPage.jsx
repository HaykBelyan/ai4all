import React from "react";
import { useTranslation } from "react-i18next";
import { successStories } from "../data/successStories";
import Button from "../components/common/Button";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SuccessStoryCard = ({ story }) => {
	// ... (This component is fine, no changes needed)
	const { t } = useTranslation();
	return (
		<div
			className="story-card"
			style={{
				backgroundColor: "#f9f9f9",
				padding: "20px",
				borderRadius: "8px",
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<img
				src={`${import.meta.env.BASE_URL}${story.image}`}
				alt={t(story.nameKey)}
				style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
			/>
			<h3 style={{ marginTop: "15px" }}>{t(story.nameKey)}</h3>
			<span
				style={{
					background: "#e0e0e0",
					padding: "3px 8px",
					borderRadius: "10px",
					fontSize: "0.8rem",
					textTransform: "capitalize",
					alignSelf: "flex-start",
				}}
			>
				{story.type}
			</span>
			<blockquote
				style={{
					margin: "15px 0",
					fontStyle: "italic",
					borderLeft: "3px solid #007bff",
					paddingLeft: "15px",
				}}
			>
				“{t(story.quoteKey)}”
			</blockquote>
			<div style={{ flexGrow: 1 }}>
				<h4>{t("success.card.outcomeLabel")}</h4>
				<p>{t(story.outcomeKey)}</p>
			</div>
		</div>
	);
};

const SuccessStoriesPage = () => {
	const { t } = useTranslation();
	const [gridRef, gridIsVisible] = useIntersectionObserver({ threshold: 0.05 });
	const [ctaRef, ctaIsVisible] = useIntersectionObserver({ threshold: 0.8 });

	return (
		<div className="success-stories-page">
			<section>
				<div className="container">
					<h1 className="section-title fade-in-up visible">{t("success.title")}</h1>
					<p
						className="fade-in-up visible"
						style={{
							textAlign: "center",
							maxWidth: "700px",
							margin: "-20px auto 40px auto",
							transitionDelay: "0.1s",
						}}
					>
						{t("success.description")}
					</p>
					{/* FIX: Switched from CSS Grid to Flexbox for proper centering */}
					<div
						ref={gridRef}
						className={`stories-grid stagger-children ${
							gridIsVisible ? "visible" : ""
						}`}
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center", // This centers the items on each line
							gap: "30px",
						}}
					>
						{successStories.map((story) => (
							// We give each card a flex basis to control its size
							<div key={story.id} style={{ flex: "1 1 320px", maxWidth: "380px" }}>
								<SuccessStoryCard story={story} />
							</div>
						))}
					</div>
					<div
						ref={ctaRef}
						className={`fade-in-up ${ctaIsVisible ? "visible" : ""}`}
						style={{ textAlign: "center", marginTop: "50px" }}
					>
						<h2>{t("success.cta.title")}</h2>
						<Button text={t("success.cta.button")} link="/courses" primary />
					</div>
				</div>
			</section>
		</div>
	);
};

export default SuccessStoriesPage;
