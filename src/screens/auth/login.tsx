// MyComponent.tsx

import React from 'react';
import { Text, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
// import { primary, primaryLight } from '../../../utils/colors';
import { Button } from '../../components/button';
// import type, { LoginScreenProps } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../features/slices/authSlice';
import { useLoginMutation } from '../../../features/slices/userSlice';
import { Error } from '../../components/errorComponent';

const Register = () => {
    const { navigate, goBack, ...rest } = useNavigation();
    const [login, { isLoading, isError }] = useLoginMutation();
    const [error, setError] = React.useState("");
    const [secure, setSecure] = React.useState(true);
    const [item, onChangeText] = React.useState({
        name: '', password: ''

    });

    const dispatch = useDispatch()

    const submit = async () => {

        try {
            item.name = item.name.toLowerCase()
            const res = await login(item).unwrap();
            dispatch(setCredentials({ ...res }))
            console.log(res)
            navigate('journals')

        } catch (error) {
            setError(error?.data)
        }
    }
    return (
        <Layout body={<View className="flex w-full items-center justify-center">
            {isError && <Error msg={error} />}
            <Inputcontainer clickable={false}
                multiline={false} value={item.name}
                type="text"
                required={true}
                secure={false}
                showPass={() => setSecure(!secure)}
                placeholder="nebukadinezza"
                onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, name: e
                }))}
                label='userName' />

            <Inputcontainer clickable={false}
                multiline={false}
                value={item.password}
                secure={secure}
                showPass={() => setSecure(!secure)}
                type='password'

                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label='password' />


            <Button isLoading={isLoading} title="Login" onClick={() => submit()} />

        </View>} />

    );
};


export default Register;
