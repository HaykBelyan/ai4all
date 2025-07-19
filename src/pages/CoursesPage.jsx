import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CourseCard from "../components/courses/CourseCard";
import CourseFilters from "../components/courses/CourseFilters";
import FaqChatbot from "../components/AIFeatures/FaqChatbot";
import { courses as allCourses } from "../data/courses";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const CoursesPage = () => {
	const { t } = useTranslation();
	const [courses, setCourses] = useState(allCourses);
	const [filters, setFilters] = useState({
		audience: "all",
		format: "all",
	});

	// Observer for the grid container
	const [gridRef, gridIsVisible] = useIntersectionObserver({ threshold: 0.05 });

	const handleFilterChange = (name, value) => {
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		let filteredCourses = allCourses;

		if (filters.audience !== "all") {
			filteredCourses = filteredCourses.filter(
				(course) => course.audience === filters.audience
			);
		}

		if (filters.format !== "all") {
			filteredCourses = filteredCourses.filter((course) =>
				course.tags.some((tag) => tag.toLowerCase().includes(filters.format.toLowerCase()))
			);
		}

		setCourses(filteredCourses);
	}, [filters]);

	return (
		<div className="courses-page">
			<section>
				<div className="container">
					<h1 className="section-title fade-in-up visible">{t("courses.title")}</h1>
					<p
						className="fade-in-up visible"
						style={{
							textAlign: "center",
							maxWidth: "700px",
							margin: "-20px auto 40px auto",
							transitionDelay: "0.1s",
						}}
					>
						{t("courses.description")}
					</p>
					<div className="fade-in-up visible" style={{ transitionDelay: "0.2s" }}>
						<CourseFilters onFilterChange={handleFilterChange} />
					</div>

					<div
						ref={gridRef}
						className={`courses-grid stagger-children ${
							gridIsVisible ? "visible" : ""
						}`}
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: "30px",
						}}
					>
						{courses.length > 0 ? (
							courses.map((course) => <CourseCard key={course.id} course={course} />)
						) : (
							<p>{t("courses.noMatch")}</p>
						)}
					</div>
				</div>
			</section>
			<FaqChatbot />
		</div>
	);
};

export default CoursesPage;
