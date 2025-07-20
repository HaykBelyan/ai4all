import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ContactPage from "./pages/ContactPage";
import CourseDetailPage from "./pages/CourseDetailPage";

// FIX: Import the new ScrollToTop component
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
	return (
		<Router>
			{/* FIX: Add the ScrollToTop component here */}
			<ScrollToTop />

			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/courses" element={<CoursesPage />} />
					<Route path="/courses/:courseId" element={<CourseDetailPage />} />
					<Route path="/success-stories" element={<SuccessStoriesPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
