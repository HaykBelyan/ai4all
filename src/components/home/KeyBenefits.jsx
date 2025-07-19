import React from "react";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaChalkboardTeacher, FaCogs } from "react-icons/fa";

const KeyBenefits = () => {
	const { t } = useTranslation();

	return (
		<section className="key-benefits-section">
			<div className="container">
				<div className="benefits-grid">
					<div className="benefit-card">
						<FaGraduationCap className="icon" />
						<h3>{t("benefits.students.title")}</h3>
						<p>{t("benefits.students.text")}</p>
					</div>
					<div className="benefit-card">
						<FaChalkboardTeacher className="icon" />
						<h3>{t("benefits.educators.title")}</h3>
						<p>{t("benefits.educators.text")}</p>
					</div>
					<div className="benefit-card">
						<FaCogs className="icon" />
						<h3>{t("benefits.businesses.title")}</h3>
						<p>{t("benefits.businesses.text")}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KeyBenefits;
