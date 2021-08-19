import { useState, useEffect } from "react";
import videojs from "video.js";
import VREPlayer from "videojs-react-enhanced";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
import "video.js/dist/video-js.css";

require("@silvermine/videojs-quality-selector")(videojs);
require("@silvermine/videojs-quality-selector/dist/css/quality-selector.css");

const VRE = () => {
	const playerOptions = {
		src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		controls: true,
		autoplay: false,
		controlBar: {
			children: [
				"playToggle",
				"progressControl",
				"volumePanel",
				"qualitySelector",
				"fullscreenToggle",
				"pictureInPictureToggle",
			],
		},
	};

	const videojsOptions = {
		fluid: true,
		plugins: [],
	};

	const onReady = (player) => {
		console.log(player);
		player.controlBar.addChild("QualitySelector");
		player.src([
			{
				src: "assets/ForBiggerEscapes.mp4",
				type: "video/mp4",
				label: "720P",
			},
			{
				src: "assets/big_buck_bunny_720p_2mb.mp4",
				type: "video/mp4",
				label: "480P",
				selected: true,
			},
		]);
	};

	return (
		<div>
			<h1>videojs-react-enhanced</h1>
			<div>
				<VREPlayer
					playerOptions={playerOptions}
					videojsOptions={videojsOptions}
					onReady={onReady}
					onPlay={() => console.log("Play!")}
					onPause={() => console.log("Pause!")}
					onEnded={() => console.log("Ended!")}
				/>
			</div>
		</div>
	);
};

export default VRE;
