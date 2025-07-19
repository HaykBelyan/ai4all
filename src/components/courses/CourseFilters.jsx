import React from "react";
import { useTranslation } from "react-i18next";

const CourseFilters = ({ onFilterChange }) => {
	const { t } = useTranslation();

	const handleFilter = (e) => {
		const { name, value } = e.target;
		onFilterChange(name, value);
	};

	return (
		<div
			className="course-filters"
			style={{ display: "flex", gap: "20px", marginBottom: "40px", flexWrap: "wrap" }}
		>
			<select name="audience" onChange={handleFilter} style={{ padding: "10px" }}>
				<option value="all">{t("courses.filters.allAudiences")}</option>
				<option value="student">{t("courses.filters.student")}</option>
				{/* FIX: Changed value from "professional" to "business" to match data */}
				<option value="business">{t("courses.filters.business")}</option>
				<option value="educator">{t("courses.filters.teacher")}</option>
			</select>
			<select name="format" onChange={handleFilter} style={{ padding: "10px" }}>
				<option value="all">{t("courses.filters.allFormats")}</option>
				<option value="Online">{t("courses.filters.online")}</option>
				<option value="In-Person">{t("courses.filters.inPerson")}</option>
				<option value="Self-Paced">{t("courses.filters.selfPaced")}</option>
			</select>
		</div>
	);
};

export default CourseFilters;
