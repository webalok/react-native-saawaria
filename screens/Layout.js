import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Layout extends Component {
	render() {
		return (

			<View style={{ flex: 1, flexDirection:'row', backgroundColor:'#aa7b03', justifyContent: 'center', alignItems:'center'}}>
					
				<View style={{ flex: 1, flexDirection:'row', backgroundColor:'#e7e7e7', borderColor:'red', borderWidth:1, padding:10}}>	
					<View style={{ flex: 0.3 }}>
							<Text>Maxwell</Text>
					</View>
					<View style={{ flex: 1, alignItems: 'flex-end'}}>
							<View>
								<Text>sales@maurvii.com | 7007123527</Text>
							</View>
					</View>
				</View>
				
			</View>
		)
	}
}
