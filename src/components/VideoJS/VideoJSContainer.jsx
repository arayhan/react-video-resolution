import { useRef } from "react";
import VideoJS from "./VideoJS";

const VideoJSContainer = () => {
	const playerRef = useRef(null);

	const videoJsOptions = {
		controls: true,
		playbackRates: [0.5, 1, 1.5, 2],
		responsive: true,
		fluid: true,
		sources: [
			{
				src: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
				type: "video/mp4",
			},
		],
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		player.on("waiting", () => {
			console.log("player is waiting");
		});

		player.on("dispose", () => {
			console.log("player will dispose");
		});
	};

	return (
		<div>
			<div>Rest of app here</div>
			<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
			<div>Rest of app here</div>
		</div>
	);
};

export default VideoJSContainer;
