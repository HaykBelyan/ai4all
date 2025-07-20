import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This component listens for a change in the URL pathname and scrolls
 * the window to the top (0, 0) whenever the route changes.
 * It does not render any visible JSX.
 */
function ScrollToTop() {
	// Extracts the pathname from the current location object
	const { pathname } = useLocation();

	// useEffect hook that runs every time the pathname changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]); // The effect depends on the pathname

	return null; // This component renders nothing
}

export default ScrollToTop;
