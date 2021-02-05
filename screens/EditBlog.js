import React, { Component } from 'react';
import { View, Text, TextInput, Alert, Button, TouchableOpacity, StyleSheet, PixelRatio, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker/lib/commonjs';

export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
					textinput_ID:'',
     textinput_title: '',
					textinput_description: '',
					image_source: '',
					base64_data:''
    };
  }

		componentDidMount(){
			this.setState({
				textinput_ID 								: this.props.route.params.item.ID,
				textinput_title 					: this.props.route.params.item.title,
				textinput_description: this.props.route.params.item.description,
				image_source									:	'http://192.168.2.34:8282/api/upload/'+this.props.route.params.item.image,
				base64_data										:	''
			})
		}
		
		UpdateBlog = ()=> {

			if(this.state.textinput_title.length==0){
				Alert.alert('Blog title is required field');
			}
			else if(this.state.textinput_description.length==0){
				Alert.alert('Blog description is required field');
			}
			else if(this.state.image_source.length==0){
				Alert.alert('Image is required field');
			}						
			else{
				fetch('http://192.168.2.34:8282/api/UpdateBlogRecord.php', {
					method: 'POST',
					headers: {'Accept':'application/json','Content-Type': 'application/json'},
					body: JSON.stringify({
						ID										: this.state.textinput_ID,
						title 						: this.state.textinput_title,
						description : this.state.textinput_description,
						image_source: this.state.image_source,
						base64_data	: this.state.base64_data
					})
				})
				.then((response) => response.json())
				.then((responseJson) => {	this.props.navigation.navigate('Home');  /*Alert.alert(responseJson); */  })
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


  render() {
			return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

					<TextInput
						placeholder="Enter blog title"
						onChangeText={ title => this.setState({ textinput_title : title }) }
						underlineColorAndroid='transparent'
						style={{ height: 40, padding:10, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
						value={this.state.textinput_title}
					/> 
					<TextInput
						placeholder="Enter blog description"
						onChangeText={ description => this.setState({ textinput_description : description }) }
						underlineColorAndroid='transparent'
						style={{ height: 40, padding:10, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
						value={this.state.textinput_description}
					/>
					
					<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
						<View style={styles.ImageContainer}>
							{
								this.state.image_source.length == 0 	? <Text>Select a Photo</Text> :
								<Image style={styles.ImageContainer} source = {{uri:this.state.image_source}} />
							}
						</View>
					</TouchableOpacity>


					<View style={{margin:5, width:'95%'}}><Button title='Submit' onPress={this.UpdateBlog}/></View>
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