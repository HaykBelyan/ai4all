import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../common/Button";

const CourseCard = ({ course }) => {
	const { t } = useTranslation();
	const { titleKey, tags, languageKey, descriptionKey } = course;

	return (
		<div className="course-card">
			<div className="card-image-placeholder">
				<img
					src={`${import.meta.env.BASE_URL}/images/cards/card-image-${course.id}.jpg`}
					alt={`card-image-${course.id}.jpg`}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</div>
			<div className="card-content">
				<div className="card-tags">
					{tags.map((tag) => (
						<span key={tag} className="tag">
							{tag}
						</span>
					))}
				</div>
				<h3>{t(titleKey)}</h3>
				<p className="card-lang">{t(languageKey)}</p>
				<p className="card-desc">{t(descriptionKey)}</p>
				<div className="card-actions">
					<Button
						text={t("courses.card.details")}
						link={`/courses/${course.id}`}
						secondary
					/>
					<Button text={t("courses.card.register")} link="#" primary />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
