import { View, Text } from 'react-native'
import React from 'react'
import Authenticate from './src/screens/auth/index'
import { NavigationContainer } from '@react-navigation/native';
import { BaseStack } from './navigation';
export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const App: React.FC<Props> = () => {

  return (
    <NavigationContainer>
      <BaseStack />
    </NavigationContainer>

  )
}

export default App