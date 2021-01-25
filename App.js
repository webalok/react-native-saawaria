import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home     from './screens/Home';
import AddBlog  from './screens/AddBlog';
import EditBlog  from './screens/EditBlog';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"       component={Home} />
        <Stack.Screen name="Add Blog"   component={AddBlog} />
								<Stack.Screen name="Edit Blog"  component={EditBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;