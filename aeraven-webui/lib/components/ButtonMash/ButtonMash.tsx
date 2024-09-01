export interface IconProps {
	displayText: string,
};

export const ButtonMash = ( props: IconProps ) => {
	return(
		<span>
			<span>{props.displayText}</span>
			<span>{props.displayText}</span>
		</span>
	);
};