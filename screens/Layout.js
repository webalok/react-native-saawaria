import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";


export default class Layout extends Component {
	render() {
		return (
			<View style={msms_css.container}>
				 
					<View style={msms_css.head_wrapper}>
							<View style={msms_css.head_inner}>
								<View style={msms_css.head_inner_left}>
								<Text style={msms_css.head_inner_text}>Maurii Textiles</Text>
								</View>
								<View style={msms_css.head_inner_right}>
									<Text style={msms_css.head_inner_text}>sales@maurvii.in | 7007123527</Text>
								</View>
							</View>
						</View>

						<View style={msms_css.box_wrapper}>
							<View style={msms_css.box_boxed}>
										<View style={msms_css.box_boxed_content}><Text>Box 1</Text></View>
							</View>
							<View style={msms_css.box_boxed}>
										<View style={msms_css.box_boxed_content}><Text>Box 2</Text></View>
							</View>
							<View style={msms_css.box_boxed}>
										<View style={msms_css.box_boxed_content}><Text>Box 3</Text></View>
							</View>
							<View style={msms_css.box_boxed}>
										<View style={msms_css.box_boxed_content}><Text>Box 4</Text></View>
							</View>
						</View>


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
	head_inner_text:{
		color:'white'
	},

	box_wrapper:{
		width:'100%',
		height:'80%',
		padding:5,
		flexDirection:'row',
		flexWrap:'wrap',
	},
	box_boxed:{
		width:'50%',
		height:'50%',
		padding:4,
	},
	box_boxed_content:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#eee',
	}

})