const VideoPlayerButton = ({ children, onClick, className }) => {
	return (
		<button
			className={`text-white text-opacity-70 transition-all transform hover:scale-110 hover:text-opacity-100 hover:bg-opacity-20 rounded-full flex items-center justify-center ${className}`}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default VideoPlayerButton;
