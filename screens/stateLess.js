import React, {useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

function garryGross(){
	let [count, setCount] = useState(0);
	useEffect( ()=> {
			if(count<=1){
				setCount(1);
			}
	});
	return (
		<View>
			<Text style={{fontSize:30}}>G A R R Y G R O S S</Text>
			<Button title='- count' onPress = { ()=> setCount(count-1)  } />
				<Text> {count} </Text>
			<Button title='+ count' onPress = { ()=> setCount(count+1) } />
		</View>
	);
}

function carry(count){

}

export default garryGross;
