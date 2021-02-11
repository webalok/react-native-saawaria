import React, { Component } from 'react';
import { View, Text, TextInput, Alert, Button, TouchableOpacity, StyleSheet, PixelRatio, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import SwitchSelector from "react-native-switch-selector";

import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import GET_CONST from '../Globals';
const API_URL = GET_CONST.API_URL;

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
				this.state = {
     textinput_title: '',
					textinput_description: '',
					image_source: '',
					base64_data:'',
					category_dropdown: [],
					catID: '0',
					blog_status:'1'
				}
  }

		componentDidMount(){
			this.category_dropdown();
		}

		InsertBlog = ()=> {			
			if(this.state.textinput_title.length==0){
				Alert.alert('Blog title is required');
			}
			else if(this.state.textinput_description.length==0){
				Alert.alert('Blog description is required');
			}
			else if(this.state.image_source.length==0){
				Alert.alert('Image is required');
			}
			else if(this.state.catID==0){
				Alert.alert('Blog category is required');
			}						
			else{
				fetch(API_URL+'InsertBlogData.php', {
					method: 'POST',
					headers: {'Accept':'application/json','Content-Type': 'application/json'},
					body: JSON.stringify({
						title 						: this.state.textinput_title,
						description : this.state.textinput_description,
						image_source: this.state.image_source,
						base64_data	: this.state.base64_data,
						catID       : this.state.catID,
						blog_status	: this.state.blog_status
					})
				})
				.then((response) => response.json())
				.then((responseJson) => {	/* console.log(responseJson); */  this.props.navigation.navigate('Home'); /* Alert.alert(responseJson); */  })
				.catch((error) => {
						console.error(error);
				});
			}
		}

			selectPhotoTapped() {
				
				const options = {
						quality: 1.0, 
						maxWidth: 500, 
						maxHeight: 500,
						storageOptions: {	skipBackup: false }
				};

				ImagePicker.showImagePicker(options, (response) => {
						console.log('Response = ', response);

						if (response.didCancel) {
								console.log('User cancelled photo picker');
						}
						else if (response.error) {
								console.log('ImagePicker Error: ', response.error);
						}
						else if (response.customButton) {
								console.log('User tapped custom button: ', response.customButton);
						}
						else {
								this.setState({
									image_source: response.uri,
									base64_data	:	response.data
								});
						}
				});
		}

		category_dropdown(){
			var self = this;
			axios.get(API_URL+'ListBlogCategories.php')
				.then(function (response) {
						self.setState({category_dropdown: response.data})
						console.log(self.state.category_dropdown);
				})
			.catch(function (error) {
						console.log(error);
			});
		}		

	reciveCategoryID=(value, index)=>
	{
		this.setState({ "catID": value },
		() => {
					// Alert.alert("catID", this.state.catID);
				}
		);
}


  render() {
			return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

					<TextInput
						placeholder="Enter blog title"
						onChangeText={ title => this.setState({ textinput_title : title }) }
						underlineColorAndroid='transparent'
						style={{ height: 40, padding:10, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
					/> 
					<TextInput
						placeholder="Enter blog description"
						onChangeText={ description => this.setState({ textinput_description : description }) }
						underlineColorAndroid='transparent'
						style={{ height: 40, padding:10, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
					/>
					
					<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
						<View style={styles.ImageContainer}>
							{
								this.state.image_source.length==0 ? <Text>Select a Photo</Text> :
								<Image style={styles.ImageContainer} source = {{uri:this.state.image_source}} />
							}
						</View>
					</TouchableOpacity>

					<Picker selectedValue={this.state.catID} style={{height: 80, width: '100%'}}	onValueChange={this.reciveCategoryID}	>
						<Picker.Item label='-- Choose category --' value='0' />
 					{ this.state.category_dropdown.map((item, key)=> (<Picker.Item label={item.title} value={item.ID} key={key} />) )}
    	</Picker>
 
						<View style={{margin:5, width:'95%'}}>
							<SwitchSelector
									initial={0}
									borderRadius={0}
									onPress={ ClickedValue => this.setState({blog_status:ClickedValue}) }
									textColor='#111010'
									selectedColor='#0c0c0c'
									buttonColor='#a4e0f4'
									borderColor='#e7e7e7'
									hasPadding
									options={[
											{ label:"Enable", 			value:1},
											{ label:"Disable", 		value:0}
									]}
							/>
						</View>
						
					<View style={{margin:5, width:'95%'}}><Button title='Submit' onPress={this.InsertBlog}/></View>
					<View style={{margin:5, width:'95%'}}><Button title='Home' 		onPress={() => this.props.navigation.navigate('Home')} /></View>

    </View> 
  );
  }
}

const styles = StyleSheet.create({
	container: {
			flex: 1,
			alignItems: 'center',
			backgroundColor: '#FFF8E1',
			paddingTop: 20
	},
	ImageContainer: {
			width: 100, 
			height: 100,
			borderColor: '#9B9B9B',
			borderWidth: 1 / PixelRatio.get(),
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#e7e7e7',
	}
});