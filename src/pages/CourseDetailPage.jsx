import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { courses } from "../data/courses";
import Button from "../components/common/Button";
import { FaArrowLeft } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const CourseDetailPage = () => {
	const { t } = useTranslation();
	const { courseId } = useParams();

	// Find the base course info (like tags, audience) from the JS data file
	const course = courses.find((c) => c.id.toString() === courseId);

	// Fetch the entire translated detail object for the specific course
	const courseDetails = t(`courseDetail.data.${courseId}`, { returnObjects: true });

	const [mainRef, mainIsVisible] = useIntersectionObserver({ threshold: 0.1 });
	const [asideRef, asideIsVisible] = useIntersectionObserver({ threshold: 0.2 });

	// A more robust check: if the base course isn't found OR if the translated detail
	// is not an object (i18next returns a string for missing keys), show "Not Found".
	if (!course || typeof courseDetails !== "object") {
		return (
			<section>
				<div className="container" style={{ textAlign: "center", padding: "50px 0" }}>
					<h2 className="fade-in-up visible">{t("courseDetail.notFound.title")}</h2>
					<p className="fade-in-up visible" style={{ transitionDelay: "0.1s" }}>
						{t("courseDetail.notFound.text")}
					</p>
					<div className="fade-in-up visible" style={{ transitionDelay: "0.2s" }}>
						<Button text={t("courseDetail.notFound.button")} link="/courses" primary />
					</div>
				</div>
			</section>
		);
	}

	// Now that we know courseDetails is a valid object, we can safely access its properties
	const syllabusItems = courseDetails.syllabus || [];

	return (
		<div className="course-detail-page">
			<section
				style={{ paddingTop: "40px", paddingBottom: "20px", backgroundColor: "#f9f9f9" }}
			>
				<div className="container fade-in-up visible">
					<Link
						to="/courses"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							marginBottom: "20px",
						}}
					>
						<FaArrowLeft /> {t("courses.title")}
					</Link>
					<h1>{t(course.titleKey)}</h1>
					<div className="card-tags" style={{ marginTop: "-10px", marginBottom: "20px" }}>
						{course.tags.map((tag) => (
							<span key={tag} className="tag">
								{tag}&nbsp;&nbsp;
							</span>
						))}
					</div>
				</div>
			</section>

			<section>
				<div
					className="container"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "40px",
					}}
				>
					{/* Main Content */}
					<div ref={mainRef} className={`fade-in-up ${mainIsVisible ? "visible" : ""}`}>
						<h2>{courseDetails.fullDescription}</h2>
						<p>{t(course.descriptionKey)}</p>
						<p>{courseDetails.descriptionText}</p>

						<h2 style={{ marginTop: "30px" }}>{courseDetails.syllabusTitle}</h2>
						<ul style={{ listStyle: "none", paddingLeft: 0 }}>
							{Array.isArray(syllabusItems) &&
								syllabusItems.map((item, index) => (
									<li
										key={index}
										style={{
											borderBottom: "1px solid #eee",
											padding: "10px 0",
										}}
									>
										{item}
									</li>
								))}
						</ul>
					</div>

					{/* Sidebar */}
					<aside
						ref={asideRef}
						className={`fade-in-up ${asideIsVisible ? "visible" : ""}`}
						style={{
							border: "1px solid #eee",
							padding: "20px",
							borderRadius: "8px",
							height: "fit-content",
						}}
					>
						<h3>{courseDetails.sidebar.instructor}</h3>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "15px",
								marginBottom: "20px",
							}}
						>
							<img
								src={`/images/instructors/instructor-${courseId}.jpg`}
								alt="Instructor"
								style={{
									width: "60px",
									height: "60px",
									borderRadius: "50%",
									objectFit: "cover",
								}}
							/>
							<div>
								<strong>{courseDetails.sidebar.instructorName}</strong>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>
									{courseDetails.sidebar.instructorTitle}
								</p>
							</div>
						</div>

						<h4 style={{ marginBottom: "12px" }}>
							{courseDetails.sidebar.prerequisites}
						</h4>
						<p style={{ marginBottom: "16px" }}>
							{courseDetails.sidebar.prerequisitesText}
						</p>

						<h4 style={{ marginBottom: "12px" }}>{courseDetails.sidebar.language}</h4>
						<p style={{ marginBottom: "16px" }}>{t(course.languageKey)}</p>

						<Button
							text={t("courses.card.register")}
							link="#"
							primary
							style={{ width: "100%" }}
						/>
					</aside>
				</div>
			</section>
		</div>
	);
};

export default CourseDetailPage;
