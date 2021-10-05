import ReactSlider from "react-slider";

const InputSlider = ({
	value,
	onChange,
	onAfterChange,
	onBeforeChange,
	onSliderClick,
}) => {
	const Track = (props, state) => {
		return (
			<div
				{...props}
				className={`${
					state.index === 0 ? "bg-indigo-500" : "bg-gray-400 bg-opacity-70"
				} h-1 cursor-pointer`}
			/>
		);
	};

	return (
		<div>
			<ReactSlider
				className="flex items-center"
				min={0}
				max={100}
				pearling
				marks
				value={value}
				onChange={onChange}
				onBeforeChange={onBeforeChange}
				onAfterChange={onAfterChange}
				onSliderClick={onSliderClick}
				markClassName="bg-green-500"
				renderTrack={Track}
				thumbClassName="w-4 h-4 shadow-md outline-none rounded-full bg-indigo-500 cursor-pointer"
			/>
		</div>
	);
};

export default InputSlider;
