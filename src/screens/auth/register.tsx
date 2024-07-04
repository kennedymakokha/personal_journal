// MyComponent.tsx

import React from 'react';
import { View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
// import { primary, primaryLight } from '../../../utils/colors';
import { Button } from '../../components/button';
// import type, { LoginScreenProps } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'

const Register = () => {
    const { navigate, goBack, ...rest } = useNavigation();
    // const [login, { isLoading, isError, error }] = useLoginMutation();
    const [reg, setReg] = React.useState(true);
    const [secure, setSecure] = React.useState(true);
    const [item, onChangeText] = React.useState({
        name: '123456789', password: '123456789',
        email: "",
        pass_confirm: ""
    });

    // const dispatch = useDispatch()

    const submit = async () => {
        const { name, email, password } = item
        try {
            console.log(item)
            // setReg(false)
            navigate('login')
            // navigation.navigate("Home")
            // console.log(await getData("FCMToken"))
            // const res = await login({ email: ID_no, password, token: await getData("FCMToken") }).unwrap();
            // console.log(res)
            // dispatch(setCredentials({ ...res }))

            // navigation.navigate("Home")

        } catch (error) {
            // setError(error?.data?.message)
            // setRef(error?.data?.item)
            console.log(error)
        }
    }
    return (
        <Layout body={<View className="flex w-full items-center justify-center">
            <Inputcontainer
                type="text"
                required={true}
                secure={false}
                showPass={() => setSecure(!secure)}
                placeholder="nebukadinezza" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, name: e
                }))} label='userName' />
            <Inputcontainer
                secure={false}
                showPass={() => console.log("first")}
                type="text"
                required={false}
                placeholder="example@mail.com" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, email: e
                }))} label='Email' />
            <Inputcontainer secure={secure} showPass={() => setSecure(!secure)} type='password'

                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label='password' />
            {reg ? <Inputcontainer secure={secure} showPass={() => setSecure(!secure)} type='password'


                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, pass_confirm: e
                }))} label='Confirm password' /> : null}

            <Button title="Register" onClick={() => submit()} />
            {/* <View className='flex- w-full items-center justify-center'>
                <Text className='text-red-500'>Login</Text>
            </View> */}
        </View>} />

    );
};


export default Register;
