import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			// We only want to trigger this once. If it's visible, set it and stop observing.
			if (entry.isIntersecting) {
				setIsIntersecting(true);
				observer.unobserve(entry.target);
			}
		}, options);

		const currentElement = elementRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		// Cleanup observer on component unmount
		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [options]);

	return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
