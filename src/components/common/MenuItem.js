import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MenuItem = ({ onPress, children }) => {
	const { buttonStyles, textStyles } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyles}>
			<Text style={textStyles}>
				{ children }
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyles: {
		width: 80,
		height: 80,
		backgroundColor: '#4c5056',
		shadowColor: 'black',
		shadowOpacity: 0.5,
		shadowOffset: {
			height: 2,
			width: 2
		},
		elevation: 2,
		marginTop: 10,
		marginBottom: 5,
		marginRight: 5,
		marginLeft: 5,
		justifyContent: 'center'
	},
	textStyles: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 40
	}
};

export { MenuItem };