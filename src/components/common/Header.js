import React from 'react';
import { View, Text, Platform } from 'react-native';

const Header = ({ headerText }) => {
	const { viewStyles, textStyles } = styles;

	return (
		<View style={viewStyles}>
			<Text style={textStyles}>
				{ headerText }
			</Text>
		</View>
	);
}

const styles = {
	viewStyles: {
		backgroundColor: '#00B4B3',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: (Platform.OS === 'ios' ? 15 : 0),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyles: {
		fontSize: 20,
		fontWeight: '600',
		color: 'white'
	}
};

export { Header };