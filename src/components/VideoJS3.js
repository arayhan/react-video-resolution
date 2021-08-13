import { useRef, useEffect } from "react";
import videojs from "video.js";
import videoJsResolutionSwitcher from "@xiaoyexiang/videojs-resolution-switcher-v7";
import "video.js/dist/video-js.css";

export const VideoJS3 = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		let player;

		if (videoElement) {
			player = videojs(
				videoElement,
				{
					autoplay: true,
					controls: true,
					responsive: true,
					fluid: true,
				},
				() => {
					console.log("player is ready");
					videojs.getComponent("MenuItem");
				}
			);

			videojs.registerPlugin(
				"videoJsResolutionSwitcher",
				videoJsResolutionSwitcher
			);

			console.log({
				player,
				videoRef,
				videoElement,
				videojs,
			});
		}

		return () => {
			if (player) player.dispose();
		};
	}, []);

	return (
		<div>
			<h1>VideoJS 3</h1>
			<div data-vjs-player>
				<video ref={videoRef} className="video-js vjs-big-play-centered" />
			</div>
		</div>
	);
};
export default VideoJS3;
