import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
	render() {
		return (
			<View>
				<ScrollView>
					<View style={msms_css.head_wrapper}>
							<View style={msms_css.head_inner}>
								<View style={msms_css.head_inner_left}>
										<View style={msms_css.head_inner_text_logo}>
												<Image style={{width: 150, height: 25 }} source={require('../asset/image/logo.png')} />  
												<Text style={msms_css.head_inner_text}> Buy any-size quilts  </Text>
										</View>
								</View>
								<View style={msms_css.head_inner_right}>
									<Text style={msms_css.head_inner_text}>  <Icon name='envelope' size={18} /> sales@quilting.in</Text>
									<Text style={msms_css.head_inner_text}>  <Icon name='phone'  		size={18} /> 7007123527</Text>
								</View>
							</View>
						</View>
						</ScrollView>
			</View>
		)
	}
}

const msms_css = StyleSheet.create({

	head_wrapper:{
		width: '100%',
		height:'auto',
		padding:10,
		backgroundColor:'#4c4a3f'
	},
	head_inner:{
		flexDirection:'row', justifyContent : 'space-between'
	},
	head_inner_left:{
		alignItems:'flex-start'
	},
	head_inner_right:{
	alignItems:'flex-end'
	},
	head_inner_text_logo:{
		justifyContent:'center',
	},
	head_inner_text:{
		color:'white',
		width:200,
		fontSize:18,
	}
});