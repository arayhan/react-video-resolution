import { useEffect, useState, useRef } from "react";
import videojs from "video.js";
import VideoPlayer from "react-video-js-player";

const VideoJSTwo = () => {
	const videoRef = useRef(null);
	const [player, setPlayer] = useState({});

	const video = {
		src: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
		poster: "assets/poster.jpg",
	};

	const onPlayerReady = (player) => {
		console.log("Player is ready: ", player);
		console.log(videoRef);

		setPlayer(player);
	};

	const onVideoPlay = (duration) => {
		console.log("Video played at: ", duration);
	};

	const onVideoPause = (duration) => {
		console.log("Video paused at: ", duration);
	};

	const onVideoTimeUpdate = (duration) => {
		console.log("Time updated: ", duration);
	};

	const onVideoSeeking = (duration) => {
		console.log("Video seeking: ", duration);
	};

	const onVideoSeeked = (from, to) => {
		console.log(`Video seeked from ${from} to ${to}`);
	};

	const onVideoEnd = () => {
		console.log("Video ended");
	};

	useEffect(() => {}, []);

	return (
		<div>
			<h1>VideoJS Two</h1>
			<p>using react-video-js-player package</p>
			<div>
				<VideoPlayer
					ref={videoRef}
					controls={true}
					src={video.src}
					poster={video.poster}
					width="720"
					height="420"
					onReady={onPlayerReady}
					onPlay={onVideoPlay}
					onPause={onVideoPause}
					onTimeUpdate={onVideoTimeUpdate}
					onSeeking={onVideoSeeking}
					onSeeked={onVideoSeeked}
					onEnd={onVideoEnd}
				/>
			</div>
		</div>
	);
};

export default VideoJSTwo;
