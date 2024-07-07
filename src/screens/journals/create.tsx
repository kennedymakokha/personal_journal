// MyComponent.tsx

import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Inputcontainer } from '../../components/inputContainer';
import { Button } from '../../components/button';
import DatePicker from 'react-native-date-picker';
import { primary } from '../../../utils/colors';
import { SelectInputContainer } from '../../components/selectInput';
import { useFetchcategoriesQuery } from '../../../features/slices/categories';

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
    const { data, isSuccess } = useFetchcategoriesQuery({})
    const [secure, setSecure] = React.useState(true);
    const { title, date, content, category } = props.item
    const { onChangeText, open, setOpen, isLoading } = props

    return (
        <>
          
            <ScrollView style={{ flex: 1 }}>

                <View className="flex w-full   items-center justify-center rounded-[10px] shadow-2xl">
                    <View className="flex pt-0  pb-20 bg-white ">
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
                            array={isSuccess && data !== undefined && data}


                        />

                        <DatePicker
                            modal
                            open={open}
                            mode="date"
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
                        <View className="flex pt-20 ">
                            <Button isLoading={isLoading} title={props?.data?.id ? "Edit" : "Create"} onClick={props.submit} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>

    );
};


export default Create;
