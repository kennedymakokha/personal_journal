import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './src/screens/Dashboard/index'
import Login from './src/screens/auth/login'

import Journal from './src/screens/journals/journal'
import { primary } from "./utils/colors";
import Splash from "./src/screens/auth/splash";
import Register from "./src/screens/auth/register";
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { MyDrawer } from "./drawerNavigation";
const Stack = createNativeStackNavigator();


export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={({ route }: { route: RouteProp<ParamListBase, "Journal"> | any }) => ({

            headerStyle: {
                backgroundColor: primary,
                elevation: 0
            },
            headerShown: false,
            // headerTintColor: quaternary,
            headerTitleStyle: {
                fontWeight: 'semibold',
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: "white"
                // textAlign: 'center'
            },

        })} >
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="registrer" component={Register} />
        </Stack.Navigator>

    );
}
export const JournalStack = () => {
    return (
        <Stack.Navigator screenOptions={({ route }: any) => ({
            headerStyle: {
                backgroundColor: primary,
                elevation: 0
            },
            headerTitleStyle: {
                fontWeight: 'semibold',
                textTransform: 'capitalize',
                letterSpacing: 2,
                color: "white"
            },

        })} >
            <Stack.Screen name="Journals"
                options={{ headerShown:false }}
                component={MyDrawer} />
            <Stack.Screen name="Journal" options={({ route }: { route: RouteProp<ParamListBase, "Journal"> | any }) => ({
                title: `${route.params?.name}`,
                headerStyle: {
                    backgroundColor: primary,
                    elevation: 0
                },
                headerTitleStyle: {
                    fontWeight: 'semibold',
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    color: "white"
                },

            })}
                component={Journal} />

        </Stack.Navigator>

    );
}
export const BaseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="auth" options={{ headerShown: false }} component={AuthStack} />


            <Stack.Screen name="Home" options={{

                title: 'Dashboard',
                headerStyle: {
                    backgroundColor: "white",
                },
                headerTintColor: primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} component={Dashboard} />
            <Stack.Screen name="journals" options={{ headerShown: false }} component={JournalStack} />

        </Stack.Navigator>

    );
}



