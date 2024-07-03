import { View, Text } from 'react-native'
import React from 'react'
import Authenticate from './src/screens/auth/index'

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const App: React.FC<Props> = () => {

  return (
    <Authenticate />
  )
}

export default App