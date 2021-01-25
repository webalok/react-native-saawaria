import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

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

 render() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => this.props.navigation.navigate('Add Blog')} style={{padding:10, fontWeight:'bold', borderColor:'pink', fontSize:15, color:'blue'}}> Add Blog </Text>
      <FlatList data={this.state.data} renderItem={ ({item}) => <Text style={{fontSize:20, marginTop:5, padding:10, backgroundColor:'skyblue', width:300 }}> {item.title} <Button title='edit' onPress={() => this.props.navigation.navigate('Edit Blog', {item})} /> </Text> }  keyExtractor={item => item.ID}  />
    </View> 
  );
 }
}
