import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Constant from '../../controller/Constant'
import LoginScreen from './../authentication/login/LoginScreen'
import HomeScreen from './../home/HomeScreen'
import ContactScreen from './../contact/ContactScreen'
import DetailContactScreen from './../contact/DetailContactScreen'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Constant.nameScreens.Contact}>
                <Stack.Screen name={Constant.nameScreens.Login} component={LoginScreen} />
                <Stack.Screen name={Constant.nameScreens.Home} component={HomeScreen} />
                <Stack.Screen
                    name={Constant.nameScreens.Contact}
                    component={ContactScreen}
                    options={{ title: 'Danh bạ' }}
                />
                <Stack.Screen
                    name={Constant.nameScreens.DetailContact}
                    component={DetailContactScreen}
                    options={{ title: '' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
