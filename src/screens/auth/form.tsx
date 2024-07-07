// MyComponent.tsx

import React, { useEffect } from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'
import { useEditUserDetailsMutation, useFetchuserQuery, useLoginMutation, useRegisterMutation } from '../../../features/slices/userSlice';
import { Error } from '../../components/errorComponent';
import { setCredentials } from '../../../features/slices/authSlice';
import { useDispatch } from 'react-redux';

const Form = (props: any, { }) => {
    let initialState = {
        name: '', password: '',
        email: "",
        pass_confirm: ""
    }
    const { navigate, goBack, ...rest } = useNavigation();
    const [register, { isLoading, isError }] = useRegisterMutation();
    const [login, { isLoading: islogin, isError: isLoginErr }] = useLoginMutation();
    const [Edit, { isLoading: isEditing }] = useEditUserDetailsMutation();
    const { data: userInfo, refetch } = useFetchuserQuery({})
    const [reg, setReg] = React.useState(true);
    const [error, setError] = React.useState("");
    const [secure, setSecure] = React.useState(true);
    const [item, onChangeText] = React.useState(initialState);


    const dispatch = useDispatch()

    useEffect(() => {
        const { data } = props
        if (props.data !== undefined) {
            onChangeText({
                name: data.name, password: data.password,
                email: data.email,
                pass_confirm: ""
            })
        }
    }, [])

    const submit = async () => {
        item.name = item.name.toLowerCase()
        if (props.page === "register") {
            try {
                await register(item).unwrap();
                navigate('login')
                onChangeText(initialState)
            } catch (error: any) {

                setError(error?.data)
            }
        } else if (
            props.page === "login"
        ) {
            try {
                const res = await login(item).unwrap();
                dispatch(setCredentials({ ...res }))
                navigate('journals')
                onChangeText(initialState)
            } catch (error: any) {

                setError(error?.data)
            }
        } else {
            try {
                await Edit(item).unwrap();
                navigate('journals')
                onChangeText(initialState)
                await refetch()
            } catch (error: any) {

                setError(error?.data)
            }
        }
    }

    return (

        <View className="flex w-full items-center justify-center">
            {error && <Error msg={error} />}
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

            {props.page !== "login" && <Inputcontainer
                clickable={false}
                multiline={false}
                value={item.email}
                type="text"
                required={true}
                secure={false}
                showPass={() => setSecure(!secure)}
                placeholder="nebu@example.com" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, email: e
                }))} label='Email' />
            }
            <Inputcontainer clickable={false}
                multiline={false}
                value={item.password}
                secure={secure} showPass={() => setSecure(!secure)} type='password'

                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label='password' />
            {props.page === "register" && <Inputcontainer clickable={false}
                multiline={false}
                value={item.pass_confirm}
                secure={secure} showPass={() => setSecure(!secure)} type='password'
                required={true}
                placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, pass_confirm: e
                }))} label='Confirm password' />}

            {/* {props.page === "register" && <View className='flex px-2   items-center justify-center'>
                <Text className='text-blue-500'>Already have an acount</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => navigate("login")}>
                    <Text className={`text-blue-800 font bold `}>Login</Text>
                </TouchableOpacity>
            </View>} */}
            <Button isLoading={
                props.page === "register" ? isLoading : props.page === "login" ? islogin : isEditing
            } title={props.page === "register" ? "Register" : props.page === "login" ? "Login" : "Edit"} onClick={() => submit()} />

            {props.page === "register" && <View className=' h-20   px-2   '>
                <Text className='text-blue-500  text-center'>Already have an acount</Text>
                <TouchableOpacity className='w-full  flex flex-row items-center justify-center' activeOpacity={1} onPress={() => navigate("login")}>
                    <Text className={`text-blue-800 font bold w-full text-center `}>Login</Text>
                </TouchableOpacity>
            </View>}
        </View>

    );
};


export default Form;
