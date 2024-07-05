
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { primary } from '../../../utils/colors';
import Icon from 'react-native-vector-icons/Feather'
import { Button } from '../../components/button';
import { Inputcontainer } from '../../components/inputContainer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { MultipleBox } from '../../../utils/multilple';

const Profile = () => {
    const [edit, setEdit] = useState(false)
    const [secure, setSecure] = React.useState(true);
    const { userInfo } = useSelector((state: any) => state.auth)
    const [item, onChangeText] = React.useState({
        name: '', password: ''

    });
    const Item = (props: any) => {
        const { title, value } = props
        return (
            <View className="flex  items-center  justify-center w-1/3 h-full">
                <Text className={`text-xl font-bold text=[${primary}]`}>{title}</Text>
                <Text className='italic font-semibold text-blue-400'>{value} </Text>
            </View>
        )
    }

    const Bio = (props: any) => {
        const { label, value } = props
        return (
            <View className='flex mb-2 flex-row'>
                <View className='w-[24%]  '><Text className='font-bold uppercase text-[18px]'>{label}:</Text></View>
                <View className='w-2/3'><Text className='text-[18px]'>{value}</Text></View>
            </View>
        )
    }
    return (
        <View className="bg-white w-full h-full relative z-0">
            <View className="flex bg-blue-400 w-full h-1/3 items-center justify-center">
                <View className="flex bg-white  rounded-full  w-40 h-40 items-center justify-center">
                    <Icon name="user" size={140} />
                </View>
            </View>

            <View className="flex  w-full h-3/4 items-center justify-center">
                {!edit ? <View className="flex bg-white pt-20   w-full h-full px-2">
                    <Bio label="name" value={userInfo?.name} />
                    <Bio label="email" value={userInfo?.email} />

                </View> : <View className="flex bg-white pt-14   w-full h-full px-1">
                    <Inputcontainer clickable={false}
                        multiline={false} value={item.name}
                        type="text"
                        required={true}
                        secure={false}
                        showPass={() => setSecure(!secure)}
                        placeholder="nebukadinezza"
                        onChange={(e: any) => onChangeText(prevState => ({
                            ...prevState, name: e
                        }))}
                        label='userName' />

                    <Inputcontainer clickable={false}
                        multiline={false}
                        value={item.password}
                        secure={secure}
                        showPass={() => setSecure(!secure)}
                        type='password'

                        required={true}
                        placeholder="********" onChange={(e: any) => onChangeText(prevState => ({
                            ...prevState, password: e
                        }))} label='password' />

                    <Button isLoading={false} title="Edit" onClick={() => console.log("firs")} />
                </View>}

            </View>
            <View className="absolute bg-blue-50 flex-row left-10 right-10 w-[80%] h-20  shadow-2xl  rounded-md bottom-[62%] flex justify-center items-center z-10">
                <Item title="Fun" value="200" />
                <Item title="Personal" value="100" />
                <Item title="Travel" value="2100" />
            </View>
          

            <View className="absolute right-3 top-3 flex justify-center items-center z-20">
                <TouchableOpacity activeOpacity={1} onPress={() => setEdit(!edit)} className="flex w-10 h-10 border bg-white border-white items-center justify-center  rounded-full ">
                    <Icon name="edit-2" color={primary} size={20} className="font-bold" />
                </TouchableOpacity>

            </View>

        </View>

    );
};


export default Profile;
