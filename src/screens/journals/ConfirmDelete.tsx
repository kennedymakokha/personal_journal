import { Text, TouchableOpacity, View } from "react-native"
import { primary } from "../../../utils/colors"


interface Props {

    setDelete: any
    submit: any
    loading: boolean
    // navigation: any
}

const Button = ({ outline, onClick, title, danger, loading }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onClick} className="flex w-1/2 px-2">
            <View className={`flex w-full py-2 items-center justify-center ${loading && "opacity-60"} rounded-md ${danger ? "bg-red-500" : `bg-[${primary}]`} ${outline ? `border border-${primary}` : ``}`}>
                <Text className="text-xl font-bold">{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export const ComfirmDelete: React.FC<Props> = ({ setDelete, submit, loading }) => {
    return (
        <>
            <View className="absolute p-4 right-0 left-0 bottom-[5%] top-[5%] flex justify-center items-center z-10">
                <View className="flex w-3/4 h-1/4 items-center justify-center rounded-md bg-slate-100 shadow-2xl">
                    <View className="flex w-full items-center justify-between h-1/2 px-2 ">
                        <Text className="text-slate-500 text-center text-[20px] font-bold"> Are You sure you want to delete ?</Text>
                    </View>
                    <View className="flex w-full flex-row items-center justify-between h-1/4">
                        <Button loading={false} onClick={() => setDelete(false)} danger={false} outline={true} title="Cancel" />
                        <Button loading={loading} onClick={submit} danger={true} outline={false} title="Delete" />
                    </View>
                </View>
            </View>
            <View className="absolute inset-0  opacity-70 bg-black w-full h-full flex justify-center items-center z-2">

            </View>

        </>


    )
}
