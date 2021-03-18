import React, { Component } from 'react';
import { View, Text, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import CallingStateLess from './stateLess';
import GET_CONST from '../Globals';
const API_URL = GET_CONST.API_URL;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
						dropdown:[],
						axios_dropdown: [],
						page: 7,
						showLoader:true
				};
  }

 componentDidMount(){
		this.callApi(); 
		this._unsubscribe = this.props.navigation.addListener('focus', () => { this.callApi(); });
	}
	componentWillUnmount() {
			this._unsubscribe();
			this.callApi(); 
			this.setState = (state,callback)=>{
				return;
			};
	}	

 async callApi(){
  let urlJson  = await fetch(API_URL+'ShowAllBlogsList.php?page='+this.state.page, {headers: {'Cache-Control': 'no-cache'}});
  let jsonResp = await urlJson.json();
		console.log('Record showing upto ' + this.state.page); 
		this.setState({data:jsonResp, showLoader:false });
 }


removeBlog = (blogID)=> {
		fetch(API_URL+'DeleteBlogRecord.php', {
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

	customFunction(){
		var formData = new FormData();
		formData.append('UserId', 'abc@abc.com');
		formData.append('VisitId', '28596');
		formData.append('EvidenceCapturedDate', '09/10/2019 13:28:20');
		formData.append('EvidenceCategory', 'Before');
		// formData.append('EvidenceImage', { uri: Platform.OS === 'android' ? `file:///${path}` : path, type: 'image/jpeg', name: 'image.jpg' });
		axios({
			url: API_URL+'customFunction.php',
			method: 'POST',
			data: formData,
			headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
		})
		.then(function (response) {
			console.log('*****handle success******');
			console.log(response.data);
		})
		.catch(function (response) {
			console.log('*****handle failure******');
			console.log(response);
		});
	}


	renderFooter = ()=>
	{
			return(
				<View>
					<ActivityIndicator size="large" color="#000000" />
				</View>
		)
	}

	handleLoadMore = ()=> 
	{ 
			this.setState( {page: this.state.page + 1 },
				()=> { this.callApi();	}
			)
	}


 render() {

		if(this.state.showLoader){
			return(
				<View>
					<ActivityIndicator size="large" color="#000000" />
				</View>
			)
		}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<CallingStateLess />
						<Text onPress={() => this.props.navigation.navigate('Add Blog')} 				style={{padding:10, fontWeight:'bold', fontSize:15, color:'blue'}}> Add Blog post </Text>
						<Text onPress={() => this.props.navigation.navigate('Visit Layout')} style={{padding:10, fontWeight:'bold', fontSize:15, color:'blue'}}> Cool Layout 		</Text>
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
								onEndReached={this.handleLoadMore}
								ListFooterComponent={this.renderFooter}
							/>
    </View> 
  );
 }
}
