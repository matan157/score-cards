import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { Menu, MenuItem, Header } from './common';

class App extends Component {	
	constructor(props) {
		super(props);
		this.state = { currentScore: 1, scores: [ 1, 2, 3, 5, 8, 13, 21 ] };
		setCustomText(customTextProps);
	}

	setScore(score) {
		this.setState({ currentScore: score });
	}

	renderMenuItems() {
		return (
			this.state.scores.map(score => <MenuItem onPress={() => {this.setScore(score)}} key={score}>{score}</MenuItem>)
		);
	}

	render() {
		return(
			<View style={styles.containerStyles}>
				<Header headerText={'Score Cards'} />
				<View style={styles.viewStyles}>
					<View style={styles.scoreStyles}>
						<Text style={styles.scoreTextStyles}>{ this.state.currentScore }</Text>
					</View>
					<View>
						<Menu style={styles.menuStyles}>
							{ this.renderMenuItems() }
						</Menu>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	viewStyles: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	containerStyles: {
		flex: 1
	},
	scoreStyles: {
		flex: 1
	},
	scoreTextStyles: {
		fontSize: 200,
		color: 'black',
		alignSelf: 'center'
	},
	menuStyles: {
		flex: 1
	}
}

// set default font family for the app based on platform
const customTextProps = {
	style: {
		fontFamily: (Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif')
	}
}

export default App;