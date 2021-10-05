import { useRef, useEffect } from "react";
import videojs from "video.js";
import qualityselector from "videojs-qualityselector";
import "videojs-qualityselector/dist/videojs-qualityselector.css";
import "video.js/dist/video-js.css";

export const VideoJS = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		let player;

		if (videoElement) {
			videojs.registerPlugin("qualityselector", qualityselector);
			player = videojs(
				videoElement,
				{
					playbackRates: [0.5, 1, 1.5, 2],
					autoplay: true,
					controls: true,
					responsive: true,
					fluid: true,
					sources: [
						{
							src: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
							type: "video/mp4",
							res: 480,
							label: "LD",
						},
						{
							src: "assets/big_buck_bunny_720p_2mb",
							type: "video/mp4",
							res: 720,
							label: "HD",
						},
					],
				},
				() => {
					console.log("player is ready");
				}
			);

			player.qualityselector({
				sources: [
					{
						format: "highres",
						src: "assets/video-2.mp4",
						type: "video/mp4",
					},
					{
						format: "720p",
						src: "assets/video-1.mp4",
						type: "video/mp4",
					},
					{
						format: "360p",
						src: "assets/video-1-low.mp4",
						type: "video/mp4",
					},
					{
						format: "auto",
						src: "assets/video-2.mp4",
						type: "video/mp4",
						selected: true,
					},
				],
				formats: [
					{ code: "highres", name: "High" },
					{ code: "720p", name: "720p" },
					{ code: "360p", name: "360p" },
					{ code: "auto", name: "Auto" },
				],

				onFormatSelected: function (format) {
					console.log(format);
				},
			});
		}

		return () => {
			if (player) player.dispose();
		};
	}, []);

	return (
		<div data-vjs-player>
			<video ref={videoRef} className="video-js vjs-big-play-centered" />
		</div>
	);
};
export default VideoJS;
