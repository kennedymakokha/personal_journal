import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './src/screens/Dashboard/index'
import Login from './src/screens/auth/index'
import Journals from './src/screens/journals/index'
import { primary } from "./utils/colors";

const Stack = createNativeStackNavigator();

export const BaseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Journal" component={Journals} />
            {/* <Stack.Screen name="Login" component={Login} /> */}
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
            <Stack.Screen name="Journals" component={Journals} />
        </Stack.Navigator>

    );
}

