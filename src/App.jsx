import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ContactPage from "./pages/ContactPage";
// FIX: Import the new CourseDetailPage component
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/courses" element={<CoursesPage />} />
					{/* FIX: Add the new dynamic route for individual courses */}
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
