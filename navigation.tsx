import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './src/screens/Dashboard/index'
import Login from './src/screens/auth/index'
import { primary } from "./utils/colors";

const Stack = createNativeStackNavigator();

export const BaseStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Auth" component={Dashboard} /> */}
            <Stack.Screen name="Home" screenOptions={{
                headerStyle: {
                    elevation: 0, // remove shadow on Android

                },
            }} options={{
                // headerShown:false
                title: 'Dashboard',
                headerStyle: {
                    elevation: 0,
                    // backgroundColor: "white",


                },
                headerTintColor: primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} component={Dashboard} />
        </Stack.Navigator>

    );
}

