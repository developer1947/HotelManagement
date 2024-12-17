import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";
import Page4 from "../screens/Page4";
const Stack=createStackNavigator();
export default LoginStack=()=>{
  return (
    <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen options={{headerShown:false}} name="Page1" component={Page1}/>
        <Stack.Screen options={{headerShown:false}} name="Page2" component={Page2}/>
        <Stack.Screen options={{headerShown:false}} name="Page3" component={Page3}/>
        <Stack.Screen options={{headerShown:false}} name="Page4" component={Page4}/>

    </Stack.Navigator>  
  )
}