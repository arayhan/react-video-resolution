import VREPlayer from "videojs-react-enhanced";
import videoJsResolutionSwitcher from "videojs-resolution-switcher";
import "videojs-resolution-switcher/lib/videojs-resolution-switcher.css";
import "video.js/dist/video-js.css";

const VRE = () => {
	const playerOptions = {
		src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		controls: true,
		autoplay: "play",
	};

	const videojsOptions = {
		fluid: true,
		plugins: [
			{
				name: "videoJsResolutionSwitcher",
				plugin: videoJsResolutionSwitcher,
				option: {
					default: "high",
					dynamicLabel: true,
				},
			},
		],
	};

	const onReady = (player) => console.log(player);

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
