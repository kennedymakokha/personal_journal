import { View, Text } from 'react-native'
import React from 'react'
import Authenticate from './src/screens/auth/index'
import { NavigationContainer } from '@react-navigation/native';
import { BaseStack } from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';
export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const App: React.FC<Props> = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BaseStack />
      </NavigationContainer>
    </Provider>

  )
}

export default App