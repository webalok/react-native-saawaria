import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

const babyQuilts 		= { uri: "https://www.inchmade.com/posts/backend_view/baby--custum-quilt(1).jpg" };
const KingQuilts 		= { uri: "https://www.inchmade.com/posts/backend_view/custom-size-indian-quilts-maurvii.jpg" };
const QueenQuilts 	= { uri: "https://www.inchmade.com/posts/backend_view/custum-size--quilt.jpg" };
const customQuilts = { uri: "https://www.inchmade.com/posts/backend_view/wome-setting-reel-in-sewing-machine.jpg" };

export default class Layout extends Component {
	render() {
		return (
			<View style={msms_css.container}>
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

						<View style={msms_css.box_wrapper}>

							<View style={msms_css.box_boxed}>
									<Image style= { msms_css.backgroundImage } source={babyQuilts} ></Image>
									<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >Baby quilts </Text></View>
							</View>
							<View style={msms_css.box_boxed}>
								<Image style= { msms_css.backgroundImage } source={KingQuilts} ></Image>
								<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >King size quilts</Text></View>
							</View>
							<View style={msms_css.box_boxed}>
								<Image style= { msms_css.backgroundImage } source={QueenQuilts} ></Image>
								<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >Queen size quilts</Text></View>
							</View>
							<View style={msms_css.box_boxed}>
								<Image style= { msms_css.backgroundImage } source={customQuilts} ></Image>
								<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >Custom quilts</Text></View>
							</View>
						</View>


						{/* <View style={{backgroundColor:'yellow', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
									<View style={{fontSize:10, width:'48%', margin:2, borderColor:'red', borderWidth:1}}><View style={{alignItems:'center'}}><Text>First</Text></View></View>
									<View style={{fontSize:10, width:'48%', margin:2, borderColor:'red', borderWidth:1}}><View style={{alignItems:'center'}}><Text>First</Text></View></View>
									<View style={{fontSize:10, width:'48%', margin:2, borderColor:'red', borderWidth:1}}><View style={{alignItems:'center'}}><Text>First</Text></View></View>
									<View style={{fontSize:10, width:'48%', margin:2, borderColor:'red', borderWidth:1}}><View style={{alignItems:'center'}}><Text>First</Text></View></View>
						</View> */}

						</ScrollView>
			</View>
		)
	}
}

const msms_css = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#FFF8D8'
	},
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
	},

	box_wrapper:{
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'center'
	},
	box_boxed:{
		margin:2,
		width:'48.5%',
		height:194,
		padding:2,

	},
	box_boxed_content:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	backgroundImage:{
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
},
overlay_text: {
	color: "white",
	fontSize: 18,
	textAlign: "center",
	backgroundColor: "#000000a0",
	width:'84%',
	padding:4,
}

})