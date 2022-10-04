import { ChildAsProps } from "./Child";

export const Parent = () => {
	return (
		<div>
			I'm Parent!
			<ChildAsProps color="blue" onClick={() => console.log("I'm clicked.")}>
				子供の子
			</ChildAsProps>
		</div>
	);
};

export default Parent;
