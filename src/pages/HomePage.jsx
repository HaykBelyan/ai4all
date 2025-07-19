import React from "react";
import HeroSection from "../components/home/HeroSection";
import KeyBenefits from "../components/home/KeyBenefits";
// NOTE: We will fix the layout inside the FeaturedCourses component itself.
import FeaturedCourses from "../components/home/FeaturedCourses";
import SuccessSpotlight from "../components/home/SuccessSpotlight";
import { courses } from "../data/courses";
import { successStories } from "../data/successStories";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const HomePage = () => {
	// Show top 3 courses for a 3-card layout example
	const featuredCourses = courses.slice(0, 3);
	const featuredStory = successStories[0];

	const [benefitsRef, benefitsIsVisible] = useIntersectionObserver({ threshold: 0.1 });
	const [coursesRef, coursesIsVisible] = useIntersectionObserver({ threshold: 0.1 });
	const [spotlightRef, spotlightIsVisible] = useIntersectionObserver({ threshold: 0.1 });

	return (
		<div className="homepage">
			<HeroSection />

			<div ref={benefitsRef} className={`fade-in-up ${benefitsIsVisible ? "visible" : ""}`}>
				<KeyBenefits />
			</div>

			<div ref={coursesRef} className={`fade-in-up ${coursesIsVisible ? "visible" : ""}`}>
				{/* Passing the courses to the component that contains the grid */}
				<FeaturedCourses courses={featuredCourses} />
			</div>

			<div ref={spotlightRef} className={`fade-in-up ${spotlightIsVisible ? "visible" : ""}`}>
				<SuccessSpotlight story={featuredStory} />
			</div>
		</div>
	);
};

export default HomePage;
