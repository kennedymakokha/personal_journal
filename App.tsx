import { View, Text } from 'react-native'
import React from 'react'

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const App: React.FC<Props> = () => {

  return (
    <View className='w-full h-full bg-red-200 items-center justify-center'>
      <Text>App</Text>
    </View>
  )
}

export default App