import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoryScreen from "../screens/StoryScreen";
import BottomTabNavigator from "./TabNavigator";


const Stack = createStackNavigator()
const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "Tela Inicial" component = {BottomTabNavigator}/>
            <Stack.Screen name = "Tela de Historias" component = {StoryScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator