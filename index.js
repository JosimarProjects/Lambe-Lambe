/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';

const AppWithGestureHandler = () => (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigator />
    </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => AppWithGestureHandler);
