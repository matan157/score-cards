import React from 'react';
import { ScrollView, View } from 'react-native';

const Menu = ({ children }) => {
	const { containerStyles, viewStyles } = styles;
	return (
		<ScrollView style={containerStyles} horizontal>
			<View style={viewStyles}>
				{ children }
			</View>
		</ScrollView>
	);
};

const styles = {
	containerStyles: {
		flex: 1,
		marginRight: 10,
		marginLeft: 10
	},
	viewStyles: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
};

export { Menu };