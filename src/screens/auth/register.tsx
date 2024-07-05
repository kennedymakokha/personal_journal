// MyComponent.tsx

import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'
import { useRegisterMutation } from '../../../features/slices/userSlice';
import { Error } from '../../components/errorComponent';

const Register = () => {
    const { navigate, goBack, ...rest } = useNavigation();
    const [register, { isLoading, isError }] = useRegisterMutation();
    const [reg, setReg] = React.useState(true);
    const [error, setError] = React.useState("");
    const [secure, setSecure] = React.useState(true);
    const [item, onChangeText] = React.useState({
        name: '', password: '',
        email: "",
        pass_confirm: ""
    });



    const submit = async () => {
        try {
            item.name = item.name.toLowerCase()
            await register(item).unwrap();
            navigate('login')

        } catch (error) {
            setError(error?.data)

        }
    }

    return (
        <Layout body={<View className="flex w-full items-center justify-center">
            {isError && <Error msg={error} />}
            <Inputcontainer
                clickable={false}
                multiline={false}
                value={item.name}
                type="text"
                required={true}
                secure={false}
                showPass={() => setSecure(!secure)}
                placeholder="nebukadinezza" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, name: e
                }))} label='userName' />

            <Inputcontainer clickable={false}
                multiline={false}
                value={item.password}
                secure={secure} showPass={() => setSecure(!secure)} type='password'

                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label='password' />
            {reg ? <Inputcontainer clickable={false}
                multiline={false}
                value={item.pass_confirm}
                secure={secure} showPass={() => setSecure(!secure)} type='password'
                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, pass_confirm: e
                }))} label='Confirm password' /> : null}

            <Button isLoading={isLoading} title="Register" onClick={() => submit()} />
            <View className='flex px-2   items-center justify-center'>
                <Text className='text-blue-500'>Already have an acount</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => navigate("login")}>
                    <Text className={`text-blue-800 font bold `}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>} />

    );
};


export default Register;
