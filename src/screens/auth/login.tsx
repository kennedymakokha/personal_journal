// MyComponent.tsx

import React from 'react';
import { View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
// import { primary, primaryLight } from '../../../utils/colors';
import { Button } from '../../components/button';
// import type, { LoginScreenProps } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../features/slices/authSlice';
import { useLoginMutation } from '../../../features/slices/userSlice';

const Register = () => {
    const { navigate, goBack, ...rest } = useNavigation();
    const [login, { isLoading, isError, error }] = useLoginMutation();
    const [reg, setReg] = React.useState(true);
    const [secure, setSecure] = React.useState(true);
    const [item, onChangeText] = React.useState({
        name: '123456789', password: '123456789',
        email: "",
        pass_confirm: ""
    });

    const dispatch = useDispatch()

    const submit = async () => {
        const { email, password } = item
        try {
            const res = await login({ email: email, password, }).unwrap();
            dispatch(setCredentials({ ...res }))

            navigate('journals')

        } catch (error) {
            // setError(error?.data?.message)
            // setRef(error?.data?.item)
            console.log(error)
        }
    }
    return (
        <Layout body={<View className="flex w-full items-center justify-center">
            <Inputcontainer
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

            <Inputcontainer
                multiline={false}
                value={item.password}
                secure={secure}
                showPass={() => setSecure(!secure)}
                type='password'

                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label='password' />


            <Button title="Login" onClick={() => submit()} />

        </View>} />

    );
};


export default Register;
