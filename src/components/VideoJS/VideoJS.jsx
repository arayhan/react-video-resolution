import { useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "video.js/dist/video-js.css";

const VideoJS = ({ options, onReady }) => {
	const videoRef = useRef(null);
	const playerRef = useRef(null);

	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = videoRef.current;
			if (!videoElement) return;

			const player = (playerRef.current = videojs(videoElement, options, () => {
				console.log("player is ready");
				onReady && onReady(player);
				player.hlsQualitySelector();
			}));
		} else {
			// you can update player here [update player through props]
			// const player = playerRef.current;
			// player.autoplay(options.autoplay);
			// player.src(options.sources);
		}
	}, [options, onReady]);

	useEffect(() => {
		return () => {
			if (playerRef.current) {
				playerRef.current.dispose();
				playerRef.current = null;
			}
		};
	}, []);

	return (
		<div data-vjs-player>
			<video ref={videoRef} className="video-js vjs-big-play-centered" />
		</div>
	);
};

export default VideoJS;
