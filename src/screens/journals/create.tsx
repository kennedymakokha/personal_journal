// MyComponent.tsx

import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
// import { primary, primaryLight } from '../../../utils/colors';
import { Button } from '../../components/button';
// import type, { LoginScreenProps } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'

type Props = {
    data: any
}
export const Create: React.FC<Props> = (props) => {
    const { navigate, goBack, ...rest } = useNavigation();
    // const [login, { isLoading, isError, error }] = useLoginMutation();
    const [reg, setReg] = React.useState(true);
    const [secure, setSecure] = React.useState(true);
    const [item, onChangeText] = React.useState({
        title: props.data.title, content: props.data.content,
        date: props.data?.date,
        category: props.data.category
    });

    // const dispatch = useDispatch()
    console.log(props.data)
    const submit = async () => {
        const { title, date, content, category } = item
        try {

            // setReg(false)
            // navigate('login')
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
    const { title, date, content, category } = item
    return (
        <ScrollView className="flex w-full "

        >

            <Inputcontainer
                type="text"
                required={true}
                multiline={false}
                secure={false}
                value={title}
                showPass={() => setSecure(!secure)}
                placeholder="Morning after" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, name: e
                }))} label='title' />
            <Inputcontainer
                secure={false}
                multiline={true}
                value={content}
                showPass={() => console.log("first")}
                type="text"
                required={true}
                placeholder="" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, email: e
                }))} label='content' />
            <Inputcontainer secure={false} showPass={() => setSecure(!secure)} type='text'
                value={category}
                required={true}
                multiline={false}
                placeholder="" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label='Category' />
            <Inputcontainer secure={false} showPass={() => setSecure(!secure)} type='date'

                value={date}
                required={true}
                multiline={false}
                placeholder="" onChange={(e: any) => onChangeText(prevState => ({
                    ...prevState, pass_confirm: e
                }))} label='date' />

            <Button title={props.data.id ? "Edit" : "Create"} onClick={() => submit()} />


        </ScrollView>

    );
};


export default Create;
