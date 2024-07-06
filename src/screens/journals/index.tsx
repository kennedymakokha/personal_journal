// MyComponent.tsx

import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Recent } from './recentItem';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { PriodItem, TabItem } from './priodItem';
import { JournalItem, JournalItemLoader } from './JournalItem';

import { useGetQuery, usePostMutation } from '../../../features/slices/journalSlice';
import { Multiple } from '../../../utils/multilple';
import { FloatingTab } from './floatingtab';
import Create from './create';
import DateRange from '../../components/dateRange';
import { Text } from 'react-native';
import { useFetchcategoriesQuery } from '../../../features/slices/categories';



const Journals: React.FC = () => {
    const { data, isFetching, isSuccess, refetch } = useGetQuery({})
    const { data: categories, isSuccess: success } = useFetchcategoriesQuery({})
    const [Post, { isLoading, isError, error }] = usePostMutation();
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false)
    const [item, onChangeText] = React.useState({
        title: "", content: "",
        category: null,
        date: "",
        id: null
    });

    const submit = async () => {
        try {
            // item.category = parseInt(item.category)
            console.log(item)
            await Post(item).unwrap();
            await refetch()
            setEdit(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View className="flex w-screen bg-blue-400    ">
            <View className=" w-full h-full  relative z-0">
                <Recent bg={true} isSuccess={isSuccess} data={data} />
                <View className="flex flex-row h-14 px-4  w-full bg-blue-400 shadow-2xl">
                    {success && categories !== undefined && categories.map(cat => (
                        <TabItem isSuccess={isSuccess} key={cat.id} title={cat.name} />
                    ))}

                </View>
                <View className="flex w-full bg-blue-400  p-4   ">


                    {/* <DateRange /> */}
                    {/* <View className="flex w-full flex-row h-10 mt-4  ">
                        <PriodItem isSuccess={isSuccess} title="Weekly" />
                        <PriodItem isSuccess={isSuccess} title="monthly" />
                        <PriodItem isSuccess={isSuccess} title="monthly" />
                    </View> */}
                    <View className=" w-full h-full relative z-0">
                        <ScrollView className="flex w-full gap-y-2 mt-4">
                            {isSuccess ? data?.map((item: any, i: any) => (
                                <JournalItem key={i} data={item} />
                            )) : <Multiple col={false} row={false} wrap={false} count={5} body={<JournalItemLoader />} />}
                        </ScrollView>
                    </View>


                </View>

                <FloatingTab add={false} setEdit={setEdit} />
                {edit && <Create isLoading={isLoading} open={open} setOpen={setOpen} submit={submit} data={data} item={item} onChangeText={onChangeText} />}
            </View>
        </View>

    );
};


export default Journals;
