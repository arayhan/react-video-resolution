import { useState, useEffect } from "react";
import { useVideojs } from "react-videojs-hook";
import videojs from "video.js";
import qualityselector from "videojs-qualityselector";
import "video.js/dist/video-js.css";
import "videojs-qualityselector/dist/videojs-qualityselector.css";

const ReactVideoJSHook = () => {
	// ================================================ CONSTANTS
	const SOURCES = [
		{
			format: "large",
			src: "assets/video-2.mp4",
			type: "video/mp4",
		},
		{
			format: "medium",
			src: "assets/video-1.mp4",
			type: "video/mp4",
		},
		{
			format: "small",
			src: "assets/video-1-low.mp4",
			type: "video/mp4",
		},
	];

	const FORMATS = [
		{ code: "large", name: "large" },
		{ code: "medium", name: "medium" },
		{ code: "small", name: "small" },
	];

	// ================================================ VIDEOJS STATE
	const onFormatSelected = (format, player) => {
		console.log({ format, player });
		player.pause();
		player.loadingSpinner.show();
		player.currentTime(5);
	};

	const onReady = (player) => {
		console.log(player);
		handleQualitySelector(player);
	};

	const onPlay = (currentTime) => {
		console.log("Video played at: ", currentTime);
	};

	const onPause = (currentTime) => {
		console.log("Video paused at: ", currentTime);
	};

	const onEnd = (currentTime) => {
		console.log(`Video ended at ${currentTime}`);
	};

	const onTimeUpdate = (currentTime) => {
		// console.log(`Video current time is ${currentTime}`);
	};

	// ================================================ VIDEOJS STATE HANDLER
	const handleQualitySelector = (player) => {
		// player.qualityselector({
		// 	sources: SOURCES,
		// 	formats: FORMATS,
		// 	onFormatSelected: (format) => onFormatSelected(format, player),
		// });
	};

	// ================================================ EFFECTS
	const { vjsId, vjsRef, vjsClassName } = useVideojs({
		src: SOURCES[SOURCES.length - 1].src,
		controlBar: ["playToggle", "volumePanel", "fullscreenToggle"],
		poster: "assets/poster.jpg",
		controls: true,
		autoplay: false,
		responsive: true,
		bigPlayButtonCentered: true,
		playbackRates: [0.5, 1, 1.5, 2],
		height: 400,
		onReady,
		onPlay,
		onPause,
		onEnd,
		onTimeUpdate,
	});

	useEffect(() => {}, []);

	return (
		<div>
			<h1>react-videojs-hook</h1>
			<div>
				<div data-vjs-player>
					<video
						ref={vjsRef}
						id={vjsId}
						className={`${vjsClassName} w-full`}
					></video>
				</div>
			</div>
		</div>
	);
};

export default ReactVideoJSHook;
