/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import Login from './app/components/authentication/login/LoginScreen'
import Register from './app/components/authentication/register/RegisterScreen'

AppRegistry.registerComponent(appName, () => Login)
