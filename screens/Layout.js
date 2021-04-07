import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Header from './Header';

export default class Layout extends Component {

	constructor(props) {
		super(props);
		this.state = {
				images: [
						"https://source.unsplash.com/1024x768/?nature",
						"https://source.unsplash.com/1024x768/?water",
						"https://source.unsplash.com/1024x768/?girl",
						"https://source.unsplash.com/1024x768/?tree",
				]
		};
}

	render() {
		return (
			<View style={msms_css.container}>
				<ScrollView>

						<Header />

						<View style={msms_css.sliderParentDiv}>
								<SliderBox
										images={this.state.images}
										dotColor="#edba90"
										inactiveDotColor="#77441a"
										autoplay={true}
										imageLoadingColor='#e6e6e6'
										autoplayInterval={20000}
								/>
      </View>


						<View><Text style={msms_css.app_labels}>Shop by categories</Text></View>
						<View style={msms_css.box_wrapper}>
							
							<TouchableOpacity style={msms_css.box_boxed} >
									<Image style= { msms_css.backgroundImage } source={{ uri: 'https://www.inchmade.com/posts/backend_view/baby--custum-quilt(1).jpg' }} />
									<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >Baby quilts </Text></View>
							</TouchableOpacity >
							
							<TouchableOpacity style={msms_css.box_boxed}>
								<Image style= { msms_css.backgroundImage } source={{ uri: 'https://www.inchmade.com/posts/backend_view/custom-size-indian-quilts-maurvii.jpg' }} ></Image>
								<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >King size quilts</Text></View>
							</TouchableOpacity>
							
							<TouchableOpacity style={msms_css.box_boxed}>
								<Image style= { msms_css.backgroundImage } source={{ uri: 'https://www.inchmade.com/posts/backend_view/custum-size--quilt.jpg' }} ></Image>
								<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >Queen size quilts</Text></View>
							</TouchableOpacity>

							<TouchableOpacity style={msms_css.box_boxed}>
								<Image style= { msms_css.backgroundImage } source={{ uri: 'https://www.inchmade.com/posts/backend_view/wome-setting-reel-in-sewing-machine.jpg' }} ></Image>
								<View style={msms_css.box_boxed_content}><Text style={msms_css.overlay_text} >Custom quilts</Text></View>
							</TouchableOpacity>

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
		backgroundColor:'white'
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
		position:'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
},
overlay_text: {
	color: "white",
	fontSize: 16,
	textAlign: "center",
	backgroundColor: "#000000a0",
	width:'84%',
	padding:5,
},
app_labels:{
	fontSize: 16,
	fontWeight: "bold",
	padding:5
},
sliderParentDiv:{
	paddingTop:1
}
});