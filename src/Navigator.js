import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Resgister';

const Stack = createStackNavigator();

function LoginOrProfileStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="userProfile" component={Profile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        </Stack.Navigator>
    );
}

/*const AuthRouter = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />

    </Stack.Navigator>
);*/


const Tab = createBottomTabNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Profile" screenOptions={{ showLabel: true }}>
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        tabBarIcon: ({ color }) => <Icon name="home" size={30} color={color} />,
                        title: 'Feed',
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={AddPhoto}
                    options={{
                        tabBarIcon: ({ color }) => <Icon name="camera" size={30} color={color} />,
                        title: 'Adicionar Foto',
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={LoginOrProfileStack}
                    options={{
                        tabBarIcon: ({ color }) => <Icon name="user" size={30} color={color} />,
                        title: 'Perfil',
                    }}
                />
             
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
