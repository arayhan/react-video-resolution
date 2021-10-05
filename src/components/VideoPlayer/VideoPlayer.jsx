import { useState, useRef } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import {
	MdPlayArrow,
	MdPause,
	MdSkipPrevious,
	MdSkipNext,
	MdHighQuality,
} from "react-icons/md";
import ReactPlayer from "react-player";
import InputSlider from "./components/InputSlider";
import { VideoData } from "./VideoPlayerData";
import VideoPlayerButton from "./components/VideoPlayerButton";

const VideoPlayer = ({ className }) => {
	const playerRef = useRef();

	const [isLoading, setIsLoading] = useState(false);
	const [activeVideoQuality, setActiveVideoQuality] = useState(VideoData[0]);
	const [playing, setPlaying] = useState(false);
	const [duration, setDuration] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);

	const formatSeconds = (seconds) => {
		if (isNaN(seconds)) return "00:00";

		const date = new Date(seconds * 1000);
		const hh = date.getUTCHours();
		const mm = date.getUTCMinutes().toString().padStart(2, "0");
		const ss = date.getUTCSeconds().toString().padStart(2, "0");

		return hh ? `${hh.toString().padStart(2, "0")}:${mm}:${ss}` : `${mm}:${ss}`;
	};

	const handleProgress = (progress) => {
		setCurrentTime(progress.playedSeconds);
		setDuration(playerRef.current.getDuration());
	};

	const handleSeek = (newValue) => {
		setCurrentTime(duration * (newValue / 100));
		playerRef.current.seekTo(duration * (newValue / 100));
	};

	const handleChangeResolution = (resource) => {
		setActiveVideoQuality(resource);
		setIsLoading(true);
		setTimeout(() => {
			handleSeek((currentTime / duration) * 100);
			setIsLoading(false);
		}, 200);
	};

	return (
		<div className={`relative w-full ${className}`}>
			<ReactPlayer
				ref={playerRef}
				width="100%"
				playing={playing}
				height="480px"
				onProgress={handleProgress}
				url={activeVideoQuality.url}
			/>

			<div className="transition-all absolute left-0 top-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center p-3">
				{isLoading && (
					<BiLoaderAlt
						className="text-white text-opacity-70 animate-spin"
						size={56}
					/>
				)}
				{!isLoading && (
					<div className="flex items-center space-x-14">
						<VideoPlayerButton className="hover:bg-white bg-opacity-20 w-12 h-12">
							<MdSkipPrevious size={28} />
						</VideoPlayerButton>
						<VideoPlayerButton
							className="hover:bg-white bg-opacity-20 w-12 h-12"
							onClick={() => setPlaying(!playing)}
						>
							{playing ? <MdPause size={32} /> : <MdPlayArrow size={32} />}
						</VideoPlayerButton>
						<VideoPlayerButton className="hover:bg-white bg-opacity-20 w-12 h-12">
							<MdSkipNext size={28} />
						</VideoPlayerButton>
					</div>
				)}
				<div className="absolute left-0 bottom-3 w-full px-3 space-y-5">
					<InputSlider
						value={(currentTime / duration) * 100}
						onChange={handleSeek}
						onSliderClick={handleSeek}
					/>
					<div className="text-white text-opacity-70 px-3 flex justify-between">
						<div className="flex items-center space-x-6">
							<VideoPlayerButton onClick={() => setPlaying(!playing)}>
								{playing ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
							</VideoPlayerButton>
							<button className="text-xs">
								{formatSeconds(currentTime)} / {formatSeconds(duration)}
							</button>
						</div>
						<div>
							<div className="relative">
								<div className="absolute z-10 shadow-md left-1/2 -top-3 transform -translate-x-1/2 -translate-y-full overflow-hidden bg-white text-xs rounded-sm">
									{VideoData.map((video) => (
										<button
											className={`${
												activeVideoQuality.resolution === video.resolution
													? "bg-gray-200 text-indigo-500 font-semibold"
													: "text-gray-500 bg-white"
											} px-3 py-2 hover:bg-gray-300`}
											onClick={() => handleChangeResolution(video)}
											type="button"
										>
											{video.resolution}
										</button>
									))}
								</div>
								<VideoPlayerButton>
									<MdHighQuality size={24} />
								</VideoPlayerButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
