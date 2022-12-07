import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Constant from '../../controller/Constant'
import HomeScreen from '../../controller/HomeScreen'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Constant.nameScreen.Home}>
                <Stack.Screen name={Constant.nameScreen.Home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
