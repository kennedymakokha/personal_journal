// MyComponent.tsx

import React, { useState } from 'react';
import { View } from 'react-native';

interface Props {

}

const Auth: React.FC<Props> = () => {

    // const [login, { isLoading, isError, error }] = useLoginMutation();
    const [isForget, setForgetPass] = React.useState(true);
    const [item, onChangeText] = React.useState({
        name: '123456789', password: '123456789',
        email: "",
        pass_confirm: ""
    });

    // const dispatch = useDispatch()
    const [err, setError] = useState("")
    const [ref, setRef] = useState("")
    const submit = async () => {
        const { name, email, password } = item
        try {
            console.log(item)

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
        <View className="flex w-full h-2/3 py-4 bg-blue-100 rounded-t-[30px] shadow-2xl">

        </View>
    );
};


export default Auth;
