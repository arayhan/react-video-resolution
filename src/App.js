import VideoPlayer from "./components/VideoJSOne";
import "./App.css";

function App() {
	return (
		<div className="App max-w-screen-md mx-auto p-10">
			<h1 className="text-center text-2xl">VideoJS</h1>
			<div className="w-full">
				<VideoPlayer />
			</div>
		</div>
	);
}

export default App;
