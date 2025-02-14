import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/journals/index'
import { View } from 'react-native';
import { ImageBackground } from 'react-native';
import { Avatar, Fun, back } from './images';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { primary } from './utils/colors';
import Profile from './src/screens/auth/profile';
import Categories from './src/screens/Dashboard/index';
import { useFetchuserQuery } from './features/slices/userSlice';
import { logout } from './features/slices/authSlice';
const Drawer = createDrawerNavigator();



const CustomDraw = (props: any) => {
    const { data: userInfo } = useFetchuserQuery({})
    const dispatch = useDispatch()
    const LogOutHandler = async () => {
        try {
            dispatch(logout({ id: userInfo?.id }))
            props.navigation.navigate('login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{}}>
                <ImageBackground source={back} style={{ padding: 20 }} >
                    <Image source={Avatar} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10, borderColor: "white", borderWidth: 2 }} />
                    <Text style={{ color: '#fff', fontFamily: 'Roboto-Medium', textTransform: 'uppercase', fontSize: 30, fontWeight: 'bold', marginBottom: 5 }}>{userInfo?.name}</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Roboto-regular', textTransform: 'uppercase' }}></Text>

                </ImageBackground>
                <DrawerItemList {...props} />
                <TouchableOpacity onPress={() => LogOutHandler()} className="flex justify-center   border-t py-2 bg-blue-900 border-t-[0.5px] items-center flex-row gap-x-10 px-5">
                    <Text className="font-bold">Logout</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>

            <View style={{ backgroundColor: primary, height: '160px', display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: 'center' }} className="h-20 bg-black flex-row flex  text-white items-center justify-center px-4">
                <Text style={{ color: 'white', padding: 10 }} className="text-green-100 text-center" >Put it in writting</Text>
            </View>
        </View>
    )
}
export function MyDrawer() {


    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: primary, },
                headerTitleStyle: { color: "white" },
                // drawerStyle: {
                //     backgroundColor: '#000',
                //     width: 240,
                // },
            }}
            drawerContent={(props) => <CustomDraw {...props} />}>


            <Drawer.Screen name="Home1" options={{
                title: "Dashboard",
                headerStyle: { backgroundColor: primary, },
                headerTintColor: '#fff',
                headerTitleStyle: { color: "white" },
                drawerIcon: () => <AntDesign name="home" className="w-20  font-bold" color={primary} size={20} />

            }} component={Home} />
            <Drawer.Screen name="Categories" component={Categories}
                options={{
                    headerTintColor: '#fff',
                    drawerIcon: () => <Icon name="user-group" className="w-20 " color={primary} size={15} />
                }}
            />
            {/* <Drawer.Screen name="Transactions" component={Home}
                options={{
                    drawerIcon: () => <Icon name="money-bill-transfer" color={primary} size={15} />
                }}
            /> */}
            <Drawer.Screen name="Profile" component={Profile}
                options={{
                    headerTintColor: "white",
                    drawerIcon: () => <AntDesign name="setting" color={primary} size={20} />
                }}
            />
        </Drawer.Navigator>
    );
}