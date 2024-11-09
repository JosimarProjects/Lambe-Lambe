/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigator />
        </GestureHandlerRootView>

    </Provider>
);

/*const AppWithGestureHandler = () => (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigator />
    </GestureHandlerRootView>
);*/

AppRegistry.registerComponent(appName, () => Redux);
