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
import { ComfirmDelete } from './ConfirmDelete';
import { useNavigation } from '@react-navigation/native';


const Journals: React.FC = ({ route }: any) => {

    const [Edit, { isLoading, isError, error }] = useEditMutation();
    const [Delete, { isLoading: deleting, isError: errorDeleting }] = useDeleteMutation();


    const [open, setOpen] = useState(false)
    const paramData = route.params.params
    const { navigate, goBack, ...rest } = useNavigation();
    const { data, refetch, isSuccess } = useGetSingleQuery(paramData.id)
    const { refetch: fetchJanals } = useGetQuery()
    const [edit, setEdit] = useState(false)
    const [showdelete, setDelete] = useState(false)
    const [item, onChangeText] = React.useState({
        title: paramData?.title, content: paramData?.content,
        category: paramData?.category,
        date: paramData?.date,
        id: paramData?.id
    });
    const submit = async () => {
        try {

            await Edit(item).unwrap();
            await refetch()
            setEdit(false)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteJournal = async () => {
        try {
            await Delete(item).unwrap();
            await fetchJanals()

            navigate('journals')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View className="flex w-screen bg-blue-400    ">
            <View className=" w-full h-full  relative z-0">
                {!isSuccess && <View className="flex items-center justify-center  w-full h-full">
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>}
                <ScrollView className="flex w-full p-4 ">
                    <TouchableOpacity activeOpacity={1} onPress={() => setEdit(false)} className="flex flex-row justify-between">
                        <View className='flex items-center h-20 justify-center flex-col'>
                            <Text className='text-slate-800'>{moment(data?.date).format("dddd DD MMMM YYYY")}</Text>
                        </View>
                        <View className="w-[35%] h-28 flex flex-col justify-center items-center ">
                            <DateContainer date={data?.date} />

                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: primary }} className={`text-4xl text-[${primary}] pb-2 font-bold capitalize`}>{data?.title}</Text>
                    <Text className='text-slate-200 text-[18px] text-[20px] text-justify'>{data?.content}</Text>
                    <View className="flex p-2 h-14 justify-center">
                        <View className='flex  h-full flex-row items-center justify-between px-2 rounded-md bg-blue-100'>
                            <View className='flex flex-row items-center'><Icon name="calendar" color={primary} className='text-blue-400' size={20} />
                                <Text className='text-slate-400'> {moment(data?.createdAt).format("dddd DD MMMM YYYY")}</Text></View>
                            <TouchableOpacity activeOpacity={1} onPress={() => setDelete(true)} className="flex border border-[red] float-right px-6 py-1 rounded-md">
                                <Icon1 name="trash-2" color="red" size={20} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
                <FloatingTab add={true} setEdit={setEdit} />
                {showdelete && <ComfirmDelete loading={deleting} submit={deleteJournal} setDelete={setDelete} />}

                {edit && <Create isLoading={isLoading} open={open} setOpen={setOpen} submit={submit} data={data} item={item} onChangeText={onChangeText} />
                }
            </View>
        </View>
    );
};


export default Journals;
