// MyComponent.tsx

import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'
import { useRegisterMutation } from '../../../features/slices/userSlice';
import { Error } from '../../components/errorComponent';
import Form from './form';

const Register = () => {
    // const { navigate, goBack, ...rest } = useNavigation();
    const [register, { isLoading, isError }] = useRegisterMutation();
    // const [reg, setReg] = React.useState(true);
    // const [error, setError] = React.useState("");
    // const [secure, setSecure] = React.useState(true);
    // const [item, onChangeText] = React.useState({
    //     name: '', password: '',
    //     email: "",
    //     pass_confirm: ""
    // });




    return (
        <Layout body={<Form page="register" />} />

    );
};


export default Register;
