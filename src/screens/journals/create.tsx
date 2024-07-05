// MyComponent.tsx

import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
// import { primary, primaryLight } from '../../../utils/colors';
import { Button } from '../../components/button';
// import type, { LoginScreenProps } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import Layout from './index'
import DatePicker from 'react-native-date-picker';
import { primary } from '../../../utils/colors';
import { SelectInputContainer } from '../../components/selectInput';

type Props = {
    data: any,
    submit: any
    onChangeText: any;
    item: any;
    setOpen: any;
    open: boolean
    isLoading: boolean

}
export const Create: React.FC<Props> = (props) => {

    const [ocuurancedate, setDate] = useState(new Date())

    const [secure, setSecure] = React.useState(true);
    const { title, date, content, category } = props.item
    const { onChangeText, open, setOpen, isLoading } = props

    return (
        <>
            <View className="absolute w-full h-full right-0 top-[15%] flex justify-center items-center z-10">
                <View className="flex w-full h-full items-center  justify-center  rounded-[10px] bg-blue-300 shadow-2xl">

                </View>
            </View>
            <View className="absolute w-full h-full right-0 top-[10%] flex justify-center items-center z-20">

                <View className="flex w-full h-full items-center justify-center rounded-[10px] shadow-2xl">
                    <View className="flex w-full pt-0 bg-blue-300 ">
                        <Inputcontainer clickable={false}
                            type="text"
                            required={true}
                            multiline={false}
                            secure={false}
                            value={title}
                            showPass={() => setSecure(!secure)}
                            placeholder={props?.data?.id ? props?.data?.title : "My Journaling journey"}
                            onChange={(e: any) => onChangeText((prevState: any) => ({
                                ...prevState, title: e
                            }))} label='title' />
                        <Inputcontainer clickable={false}
                            secure={false}
                            multiline={true}
                            value={content}
                            showPass={() => console.log("first")}
                            type="text"
                            required={true}
                            placeholder={props?.data?.id ? props?.data?.content : "Once upon a time..."}
                            onChange={(e: any) => onChangeText((prevState: any) => ({
                                ...prevState, content: e
                            }))} label='content' />

                        <Inputcontainer clickable={true} secure={false} showPass={() => setSecure(!secure)} type='date'
                            value={date}
                            required={true}
                            multiline={false}
                            placeholder={props?.data?.id ? props?.data?.date : ocuurancedate.toString()}
                            onChange={() => setOpen(true)} label='date' />
                        <SelectInputContainer
                            label="Category"
                            required={true}
                            onChange={(e: any) => onChangeText((prevState: any) => ({
                                ...prevState, category: e
                            }))}
                            array={[
                                {
                                    "id": 1,
                                    "name": "fun",
                                    "createdAt": "2024-07-03T08:21:39.546Z",
                                    "updatedAt": "2024-07-03T08:21:39.546Z"
                                },
                                {
                                    "id": 2,
                                    "name": "Personal",
                                    "createdAt": "2024-07-05T10:30:20.052Z",
                                    "updatedAt": "2024-07-05T10:30:20.052Z"
                                },
                                {
                                    "id": 3,
                                    "name": "Work",
                                    "createdAt": "2024-07-05T10:30:40.973Z",
                                    "updatedAt": "2024-07-05T10:30:40.973Z"
                                },
                                {
                                    "id": 4,
                                    "name": "Travel",
                                    "createdAt": "2024-07-05T10:30:55.703Z",
                                    "updatedAt": "2024-07-05T10:30:55.703Z"
                                }
                            ]}


                        />



                        <DatePicker
                            modal
                            open={open}
                            date={ocuurancedate}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                onChangeText((prevState: any) => ({
                                    ...prevState, date: date.toString()
                                }))
                            }}
                            theme="light"
                            title={null}
                            dividerColor={primary}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <View className="flex mt-24">
                            <Button isLoading={isLoading} title={props?.data?.id ? "Edit" : "Create"} onClick={props.submit} />
                        </View>
                    </View>
                </View>
            </View>
        </>

    );
};


export default Create;
