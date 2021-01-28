import React, { Component } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
				};
  }

 componentDidMount(){
  this.callApi(); 
 }  

 async callApi(){
  let urlJson  = await fetch('http://192.168.2.34:8282/api/ShowAllBlogsList.php');
  let jsonResp = await urlJson.json();
  this.setState({data:jsonResp});
 }

	removeBlog = (blogID)=> {
		fetch('http://192.168.2.34:8282/api/DeleteBlogRecord.php', {
			method: 'POST',
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ ID : blogID })
			})
			.then((response) => response.json())
			.then((responseJson) => {
				this.callApi(); 
			}).catch((error) => {
						console.error(error);
			});
		
	}

 render() {
		this.callApi();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => this.props.navigation.navigate('Add Blog')} style={{padding:10, fontWeight:'bold', fontSize:15, color:'blue'}}> Add Blog </Text>
							
							<FlatList 
								data={this.state.data}
								renderItem=
								{
									({item}) => 
										<Text style={{fontSize:20, marginTop:5, padding:10, backgroundColor:'skyblue', width:300 }}> 
											{item.title} {"\n"}
											
											<View style={{flexDirection: 'row'}}>
													<View style={{flex:1 , marginRight:10}} >
														<Button title='edit' onPress={	()=> this.props.navigation.navigate('Edit Blog', {item})} ></Button>
													</View>
													<View style={{flex:1}} >
														<Button title='Remove' onPress={	()=> this.removeBlog(item.ID)}></Button>
													</View>
												</View>
										</Text> 
								} 
								keyExtractor={item => item.ID}  
							/>
    </View> 
  );
 }
}
