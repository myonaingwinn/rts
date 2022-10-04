interface ChildProps {
	color: string;
	onClick: () => void;
	children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			I'm Child! color : {color}
			<button onClick={onClick}>Click me</button>
		</div>
	);
};

export const ChildAsProps: React.FC<ChildProps> = ({
	color,
	onClick,
	children,
}) => {
	return (
		<div>
			I'm ChildAsProps!
			<div style={{ color: color }}>color : {color}</div>
			<div>children : {children}</div>
			<button onClick={onClick}>Click me</button>
		</div>
	);
};
