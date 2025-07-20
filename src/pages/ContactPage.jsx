import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ContactPage = () => {
	const { t } = useTranslation();
	const [involvementRef, involvementIsVisible] = useIntersectionObserver({ threshold: 0.1 });
	const [contactInfoRef, contactInfoIsVisible] = useIntersectionObserver({ threshold: 0.5 });

	return (
		<div className="contact-page">
			<section>
				<img className="abstract" src={`${import.meta.env.BASE_URL}/images/shapes/aaabstract.jpg`} alt="Abstract" />
				<div className="container">
					<h1 className="section-title fade-in-up visible">{t("contact.title")}</h1>
					<p className="fade-in-up visible contact-description">
						{t("contact.description")}
					</p>

					<div
						ref={involvementRef}
						className={`involvement-sections stagger-children ${
							involvementIsVisible ? "visible" : ""
						}`}
					>
						{/* Section 1: Learners */}
						<div className="involvement-card">
							<h2>{t("contact.learners.title")}</h2>
							<p className="card-text">{t("contact.learners.text")}</p>
							<Button text={t("contact.learners.button")} link="/courses" primary />
						</div>
						{/* Section 2: Partners */}
						<div className="involvement-card">
							<h2>{t("contact.partners.title")}</h2>
							<p className="card-text">{t("contact.partners.text")}</p>
							<Button text={t("contact.partners.button")} link="#" secondary />
						</div>
						{/* Section 3: Volunteers */}
						<div className="involvement-card">
							<h2>{t("contact.volunteers.title")}</h2>
							<p className="card-text">{t("contact.volunteers.text")}</p>
							<Button text={t("contact.volunteers.button")} link="#" secondary />
						</div>
					</div>

					<div
						ref={contactInfoRef}
						className={`contact-info fade-in-up ${
							contactInfoIsVisible ? "visible" : ""
						}`}
					>
						<div className="contact-info-item">
							<FaEnvelope className="contact-icon" />
							<h4>{t("contact.info.inquiries")}</h4>
							<a href="mailto:info@eif.am">info@eif.am</a>
						</div>
						<div className="contact-info-item">
							<FaMapMarkerAlt className="contact-icon" />
							<h4>{t("contact.info.location")}</h4>
							<p>{t("contact.info.address_line1")}</p>
							<p>{t("contact.info.address_line2")}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
