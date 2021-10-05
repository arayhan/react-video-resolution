import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./App.css";

function App() {
	return (
		<div>
			<div className="bg-blue-500 flex items-center w-full">
				<h1 className="text-center text-xl text-white w-full py-3">
					React Video Player
				</h1>
			</div>
			<div className="max-w-2xl mx-auto mt-20 w-full">
				<div className="w-full">
					<VideoPlayer />
				</div>
			</div>
		</div>
	);
}

export default App;
