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
import Form from './form';

const Register = () => {


    return (
        <Layout body={<Form page="login" />} />

    );
};


export default Register;
