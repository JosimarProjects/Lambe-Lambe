import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';

const Tab = createBottomTabNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ showLabel: true }}>
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
                        title: 'Add Picture',
                    }} 
                />
                <Tab.Screen 
                    name="Profile" 
                    component={Feed} 
                    options={{
                        tabBarIcon: ({ color }) => <Icon name="user" size={30} color={color} />,
                        title: 'Profile',
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
