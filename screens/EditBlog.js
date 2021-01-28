import React, { Component } from 'react';
import { View, Text, TextInput, Alert, Button, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
					textinput_ID:'',
     textinput_title: '',
     textinput_description: ''
    };
  }

		componentDidMount(){
			this.setState({
				textinput_ID 								: this.props.route.params.item.ID,
				textinput_title 					: this.props.route.params.item.title,
				textinput_description: this.props.route.params.item.description
			})
		}
		
		UpdateBlog = ()=> {

			if(this.state.textinput_title.length<1){
				Alert.alert('Blog title is required field');
			}
			else if(this.state.textinput_description.length<1){
				Alert.alert('Blog description is required field');
			}
			else{
				fetch('http://192.168.2.34:8282/api/UpdateBlogRecord.php', {
					method: 'POST',
					headers: {'Accept':'application/json','Content-Type': 'application/json'},
					body: JSON.stringify({
						ID										: this.state.textinput_ID,
						title 						: this.state.textinput_title,
						description : this.state.textinput_description
					})
				})
				.then((response) => response.json())
				.then((responseJson) => {	this.props.navigation.navigate('Home');  /*Alert.alert(responseJson); */  })
				.catch((error) => {
						console.error(error);
				});
			}
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
					
					<View style={{margin:5, width:'95%'}}><Button title='Submit' onPress={this.UpdateBlog}/></View>
					<View style={{margin:5, width:'95%'}}><Button title='Home' 		onPress={() => this.props.navigation.navigate('Home')} /></View>

    </View> 
  );
  }
}
