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
					plugins: {},
				},
				() => {
					console.log("player is ready");
				}
			);

			player.qualityselector({
				sources: [
					{
						format: "highres",
						src: "assets/ForBiggerEscapes.mp4",
						type: "video/mp4",
					},
					{
						format: "hd1080",
						src: "assets/big_buck_bunny_720p_2mb.mp4",
						type: "video/mp4",
					},
					{
						format: "hd720",
						src: "assets/ForBiggerEscapes.mp4",
						type: "video/mp4",
					},
					{
						format: "large",
						src: "assets/big_buck_bunny_720p_2mb.mp4",
						type: "video/mp4",
					},
					{
						format: "medium",
						src: "assets/ForBiggerEscapes.mp4",
						type: "video/mp4",
					},
					{
						format: "small",
						src: "assets/big_buck_bunny_720p_2mb.mp4",
						type: "video/mp4",
					},
					{
						format: "auto",
						src: "assets/ForBiggerEscapes.mp4",
						type: "video/mp4",
					},
				],
				formats: [
					{ code: "highres", name: "High" },
					{ code: "hd1080", name: "1080p" },
					{ code: "hd720", name: "720p" },
					{ code: "large", name: "480p" },
					{ code: "medium", name: "360p" },
					{ code: "small", name: "240p" },
					{ code: "auto", name: "Auto" },
				],

				onFormatSelected: function (format) {
					console.log(format);
				},
			});

			console.log({ player, videoRef, videoElement, videojs });
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
