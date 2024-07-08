// MyComponent.tsx

import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { DateContainer } from '../../components/dateComponent';
import moment from 'moment'
import Create from './create';
import { primary } from '../../../utils/colors';
import { useDeleteMutation, useEditMutation, useGetQuery, useGetSingleQuery } from '../../../features/slices/journalSlice';
import { FloatingTab } from './floatingtab';
import Icon1 from 'react-native-vector-icons/Feather'
// import { ComfirmDelete } from './ConfirmDelete';
import { useNavigation } from '@react-navigation/native';
import { ComfirmDelete } from '../../components/ConfirmDelete';


const Journals: React.FC = ({ route, navigation }: any) => {

    const [Edit, { isLoading, isError, error }] = useEditMutation();
    const [Delete, { isLoading: deleting, isError: errorDeleting }] = useDeleteMutation();
    const { data: journals, refetch: fetchJournals } = useGetQuery({ startedDate: "", endDate: "" })

    const [open, setOpen] = useState(false)
    const paramData = route.params.params
    const { navigate, goBack, ...rest } = useNavigation();
    const { data, refetch, isSuccess } = useGetSingleQuery(paramData.id)

    const [edit, setEdit] = useState(false)
    const [showdelete, setDelete] = useState(false)
    const initialState: any = {
        title: paramData?.title, content: paramData?.content,
        category: paramData?.category,
        date: paramData?.date,
        id: paramData?.id
    }
    const [item, onChangeText] = React.useState(initialState);
    const submit = async () => {
        try {

            await Edit(item).unwrap();
            await refetch()
            setEdit(false)
            await fetchJournals()
            onChangeText(initialState)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteJournal = async () => {
        try {
            await Delete(item).unwrap();
            await fetchJournals()
            navigation.goBack()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View className="flex w-screen bg-slate-50    ">
            <View className=" w-full h-full  relative z-0">
                {!isSuccess && <View className="flex items-center   justify-center  w-full h-full">
                    <ActivityIndicator size="large" color="#1a3e72" />
                </View>}
                {!edit ? <ScrollView className="flex w-full p-4  ">
                    <TouchableOpacity activeOpacity={1} onPress={() => setEdit(false)} className="flex flex-row justify-between">
                        <View className='flex  justify-center  h-20 justify-center flex-col'>
                            <Text className='text-blue-900 font-bold'>Journal Date</Text>
                            <Text className='text-slate-800'>{moment(data?.date).format("dddd DD MMMM YYYY")}</Text>
                        </View>
                        <View className="w-[35%] h-28 flex flex-col justify-center items-center ">
                            <DateContainer date={data?.date} show={false} onConfirm={undefined} close={undefined} />

                        </View>
                    </TouchableOpacity>
                    <View className="flex p-2 rounded-md ">
                        <Text style={{ color: primary }} className={`text-4xl text-[${primary}] pb-2 font-bold capitalize`}>{data?.title}</Text>
                        <Text className='text-slate-500 text-[18px] text-[20px] text-justify'>{data?.content}</Text>
                        <View className="flex py-2  h-24 justify-center">
                            <View className='flex  h-full flex-row items-center justify-between p-4 rounded-md bg-blue-100'>
                                <View className='flex flex-row items-center'>
                                    <Icon name="calendar" color={primary} className='text-blue-400' size={34} />
                                    <View className='flex px-2 '>
                                        <Text className='font-bold  text-blue-800'>Published On</Text>
                                        <Text className='text-slate-400 '>{moment(data?.createdAt).format("dddd DD MMMM YYYY")}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity activeOpacity={1} onPress={() => setDelete(true)} className="flex  bg-red-500 float-right px-2 py-2 rounded-md">
                                    <Icon1 name="trash-2" color="white" size={20} />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </ScrollView> : <Create isLoading={isLoading} open={open} setOpen={setOpen} submit={submit} data={data} item={item} onChangeText={onChangeText} />
                }
                <FloatingTab edit={edit} add={true} setEdit={setEdit} />
                {showdelete && <ComfirmDelete loading={deleting} submit={deleteJournal} setDelete={setDelete} />}


            </View>
        </View>
    );
};


export default Journals;
