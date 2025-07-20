import React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../components/about/Timeline";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AboutPage = () => {
	const { t } = useTranslation();
	const [eifRef, eifIsVisible] = useIntersectionObserver({ threshold: 0.2 });
	const [goalsRef, goalsIsVisible] = useIntersectionObserver({ threshold: 0.2 });
	const [journeyRef, journeyIsVisible] = useIntersectionObserver({ threshold: 0.1 });

	return (
		<div className="about-page">
			<section
				ref={eifRef}
				className={`fade-in-up ${eifIsVisible ? "visible" : ""}`}
				style={{ backgroundColor: "#f9f9f9" }}
			>
				<div className="container">
					<h1 className="section-title">{t("about.title")}</h1>
					<div className="eif-section">
						<img
							src="/images/logos/EIF_logo_big.png"
							alt="Enterprise Incubator Foundation Logo"
							className="eif-logo"
						/>
						<div>
							<h2>{t("about.eif.title")}</h2>
							<p>{t("about.eif.text")}</p>
						</div>
					</div>
				</div>
			</section>

			<section ref={goalsRef} className={`fade-in-up ${goalsIsVisible ? "visible" : ""}`}>
				<div className="container">
					<h2 className="section-title">{t("about.goals.title")}</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
							gap: "30px",
							textAlign: "center",
						}}
					>
						<div>
							<h3>{t("about.goals.literacy.title")}</h3>
							<p>{t("about.goals.literacy.text")}</p>
						</div>
						<div>
							<h3>{t("about.goals.workforce.title")}</h3>
							<p>{t("about.goals.workforce.text")}</p>
						</div>
						<div>
							<h3>{t("about.goals.impact.title")}</h3>
							<p>{t("about.goals.impact.text")}</p>
						</div>
					</div>
				</div>
			</section>

			<section
				ref={journeyRef}
				className={`fade-in-up ${journeyIsVisible ? "visible" : ""}`}
				style={{ backgroundColor: "#f9f9f9" }}
			>
				<div className="container">
					<img className="abstract" src="/images/shapes/aaabstract.jpg" alt="Abstract" />

					<h2 className="section-title">{t("about.journey.title")}</h2>
					<Timeline />
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
