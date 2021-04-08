import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './Header';
import GlobalCss from '../GlobalCss';


export default class CategoriedProducts extends Component {
	render() {
		return (
			<View>
					<Header />
					<View><Text style={GlobalCss.app_labels}>Product description</Text></View>
			</View>
		)
	}
}
