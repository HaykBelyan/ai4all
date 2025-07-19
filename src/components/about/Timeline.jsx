import React from "react";
import { useTranslation } from "react-i18next";

const Timeline = () => {
	const { t } = useTranslation();
	// Get the array of milestones from the JSON file
	// The { returnObjects: true } option is crucial for arrays/objects
	const timelineData = t("about.journey.milestones", { returnObjects: true });

	return (
		<div className="timeline">
			{timelineData.map((item, index) => (
				<div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
					<div className="timeline-content">
						<h4>
							{item.title} ({item.year})
						</h4>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Timeline;
