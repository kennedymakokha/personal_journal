// MyComponent.tsx

import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Bio } from './bioItem';
import { JournalItem, JournalItemLoader } from './JournalItem';

import { useGetQuery, usePostMutation } from '../../../features/slices/journalSlice';
import { Multiple } from '../../../utils/multilple';
import { FloatingTab } from './floatingtab';
import Create from './create';
import { useFetchcategoriesQuery } from '../../../features/slices/categories';
import Tab from '../../components/tabs';

// import DA
import { DataRange } from './../../components/DateRange'

const Journals: React.FC = () => {
    const [category, setCategory] = useState('')
    const [period, setPeriod] = useState({ startedDate: "", endDate: "" })
    const { data, isFetching, isSuccess, refetch } = useGetQuery(period)
    const { data: categories, isSuccess: success } = useFetchcategoriesQuery({})
    const [Post, { isLoading, isError, error }] = usePostMutation();
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false)
    const [start, setstart] = useState(false)
    const [show, setShow] = useState(false)

    const initialState: any = {
        title: "", content: "",
        category: null,
        date: "",
        id: null
    }
    const [item, onChangeText] = React.useState(initialState);
    const [tabs, setTabs] = useState([
        {
            id: 2,
            title: "Personal",
            state: false
        },
        {
            id: 3,
            state: false,
            title: "Work",

        },
        {
            id: 4,
            state: false,
            title: "Travel",

        }
    ])
    const handleTab = (title: any) => {
        let newTab: any = []
        tabs.forEach(async (tab: any) => {
            if (tab.title === title) {
                let v = { ...tab, state: true }
                setCategory(tab.id)
                newTab.push(v)
                return v;
            }
            else {
                let v = { ...tab, state: false }
                newTab.push(v)
                return v;
            }
        });
        setTabs(newTab)

    }

    const submit = async () => {
        try {
            await Post(item).unwrap();
            await refetch()
            setEdit(false)
            onChangeText(initialState)
        } catch (error) {
            console.log(error)
        }
    }

    let FiltedData: [] = category === "" ? isSuccess && data : isSuccess && data.filter((obj: any) => obj.category === category)
    return (
        <View className="flex w-screen bg-blue-400    ">
            <View className=" w-full h-full  relative z-0">
                <Bio setShow={setShow} />
                <View className="flex flex-row h-14 px-4  w-full bg-blue-400 shadow-2xl">
                    <Tab data={tabs} onChange={handleTab} />
                </View>

                <View className="flex w-full bg-blue-400  px-4   ">
                    <View className=" w-full h-full relative z-0">
                        <ScrollView refreshControl={
                            <RefreshControl refreshing={!isSuccess} onRefresh={async () => {
                                setPeriod({ startedDate: "", endDate: "" })
                                setCategory('')
                                await refetch();
                            }} />}
                            className="flex w-full  mt-2">
                            {isSuccess ? FiltedData.map((item: any, i: any) => (
                                <JournalItem key={i} data={item} />
                            )) : <Multiple col={false} row={false} wrap={false} count={7} body={<JournalItemLoader />} />}
                        </ScrollView>
                    </View>


                </View>
                {show && <DataRange refetch={refetch} setShow={setShow} period={period} open={open} setOpen={setOpen}
                    start={start} setstart={setstart}
                    onChangeText={setPeriod} />}
                <FloatingTab add={false} setEdit={setEdit} />
                {edit && <Create isLoading={isLoading} open={open} setOpen={setOpen} submit={submit} data={data} item={item} onChangeText={onChangeText} />}
            </View>
        </View>

    );
};


export default Journals;
