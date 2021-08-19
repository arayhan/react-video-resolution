import { useEffect } from "react";
import { useVideojs } from "react-videojs-hook";
import videojs from "video.js";

import "video.js/dist/video-js.css";

const Hook2 = () => {
	const onReady = (player) => {
		var track = new videojs.AudioTrack({
			id: "my-spanish-audio-track",
			kind: "translation",
			label: "Spanish",
			language: "es",
		});

		player.audioTracks().addTrack(track);

		console.log("Video Player : ", player);
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
		console.log(`Video current time is ${currentTime}`);
	};

	const { vjsId, vjsRef, vjsClassName } = useVideojs({
		src: "assets/video-1.mp4",
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
			<h1 className="font-bold">Hook 2</h1>
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

export default Hook2;
