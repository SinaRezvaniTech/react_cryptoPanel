import { useEffect, useState } from "react";

const useViewportWidth = (props) => {
	const [viewportWidth, setViewportWidth] = useState(1024);

	useEffect(() => {
		setViewportWidth(window.innerWidth);
		const setNewViewportWidth = (e) => {
			setViewportWidth(e.target.innerWidth);
		};

		window.addEventListener("resize", setNewViewportWidth);

		return () => {
			window.removeEventListener("resize", setNewViewportWidth);
		};
	}, []);

	return { viewportWidth, setViewportWidth };
};

export default useViewportWidth;
