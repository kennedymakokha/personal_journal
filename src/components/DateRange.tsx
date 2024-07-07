import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { Inputcontainer } from "./inputContainer"
import DatePicker from "react-native-date-picker"
import { useEffect, useState } from "react"
import { primary } from "../../utils/colors"


interface Props {
    open: boolean
    setOpen: any
    start: boolean
    setstart: any
    onChangeText: any
    period: any
    setShow: any
    refetch: any


}


export const DataRange: React.FC<Props> = ({ onChangeText, refetch, setShow, start, setstart, open, setOpen, period }) => {
    const [ocuurancedate, setDate] = useState(new Date())

    return (
        <>
            <View className="absolute p-4 right-0 left-0 bottom-[5%] top-[5%] flex justify-center items-center z-10">
                <View className="flex w-[80%] h-1/3 items-center justify-center rounded-md bg-slate-100 shadow-2xl">
                    <View className="flex w-full  items-center py-4    ">
                        <Inputcontainer clickable={true} secure={false} showPass={() => console.log("first")} type='date'
                            value={null}
                            required={true}
                            multiline={false}
                            placeholder={period?.startedDate ? period?.startedDate : "start Date"}
                            onChange={() => setOpen(true)} label='Start Date' />
                        <Inputcontainer clickable={true} secure={false} showPass={() => console.log("first")} type='date'
                            value={null}
                            required={true}
                            multiline={false}
                            placeholder={period?.endDate ? period?.endDate : "end Date"}
                            onChange={() => { setstart(true); }} label='End Date' />
                        <DatePicker
                            modal
                            open={open}
                            mode="date"
                            date={ocuurancedate}
                            onConfirm={(date) => {
                                setOpen(false)
                                onChangeText((prevState: any) => ({
                                    ...prevState, startedDate: date.toString()
                                }))

                            }}
                            theme="light"
                            title={null}
                            dividerColor={primary}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <DatePicker
                            modal
                            open={start}
                            mode="date"
                            date={ocuurancedate}
                            onConfirm={async (date) => {
                                setstart(false)
                                onChangeText((prevState: any) => ({
                                    ...prevState, endDate: date.toString()
                                }))
                                await refetch()
                                setShow(false)


                            }}
                            theme="light"
                            title={null}
                            dividerColor={primary}
                            onCancel={() => {
                                setstart(false)
                            }}
                        />
                    </View>

                    <View className="flex h-4"></View>
                </View>
            </View>
            <View className="absolute inset-0  opacity-50 bg-black w-full h-full flex justify-center items-center z-2">

            </View>

        </>


    )
}
