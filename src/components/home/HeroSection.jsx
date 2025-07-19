import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../common/Button";

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<section className="hero-section">
			<div className="video-background">
				{/* 
                  NOTE: You need to place a video file at `public/video/hero-background.mp4`
                  Using a placeholder color for now.
                */}
				<video autoPlay loop muted playsInline>
					<source src="/video/hero-background.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="hero-content">
				<div className="container">
					<h1>{t("home.headline")}</h1>
					<p className="sub-headline">{t("home.subHeadline")}</p>
					<p className="mission-statement">{t("home.mission")}</p>
					<Button text={t("home.cta")} link="/courses" primary />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
