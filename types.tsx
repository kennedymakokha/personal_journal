// import type { NativeStackScreenProps } from "@react-navigation/native-stack";
// // import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

  
// export type RootStackParamList = {

//  Login: undefined;
 
//  Home: { homeId: number };

// };


// export type LoginScreenProps = NativeStackScreenProps<

//  RootStackParamList,
 
//  "Login"

// >;


// export type HomeScreenProps = NativeStackScreenProps<
 
//  RootStackParamList,
 
//  "Home"

// >;



import { NavigationProp, ParamListBase } from '@react-navigation/native';

declare global {
 namespace ReactNavigation {
   interface RootParamList extends ParamListBase {}
  }
}

export function useNavigation<
  T extends NavigationProp
>(): T;

