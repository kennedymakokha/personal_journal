import { TouchableOpacity, View } from "react-native"
import { primary } from "../../../utils/colors"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icons from 'react-native-vector-icons/Octicons'

interface Props {

    setEdit: any
    add: boolean
    // navigation: any
}


export const FloatingTab: React.FC<Props> = ({ setEdit, add }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => setEdit(true)} className="absolute p-4 right-0 top-[85%] flex justify-center items-center z-10">
            <View style={{ backgroundColor: primary }} className="flex w-14 h-14 items-center justify-center rounded-full bg-blue-400 shadow-2xl">
                {!add ? <Icons name="plus" color="white" size={20} className="font-bold" /> : <Icon name="note" color="white" size={20} />}
            </View>
        </TouchableOpacity>


    )
}
