import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Image, View, StyleSheet, TextInput } from "react-native";
import { Input, Box, Select, CheckIcon, TextArea} from "native-base"

export default function ListTodo({ navigation }) {
    let [service, setService] = React.useState("");
    return (
        <View style={{padding:10}}>
            <StatusBar/>
            {/* header */}
            <View className="flex flex-row">
                <View>
                    <Text className="text-[25px] mb-1 font-extrabold">Hi Radif</Text>
                    <Text className="text-[12px] mb-5 font-normal text-red-500">200 List</Text>
                </View>
                <Image
                    style={style.imageProfile}
                    className="w-12 h-12 float-right rounded-full border-4 border-red-500"
                    source={{ uri: "https://res.cloudinary.com/dzhuxgenm/image/upload/v1661529407/waystodo-fe/profilephoto_uh3fo3.png"}}
                    />    
            </View>

            {/* input List */}
            <TextInput style={style.textInput} className="border-stone-200 w-80 rounded-md mr-4 mt-5 h-10 p-2.5 " placeholder="Search List"/>
            <View className="flex flex-row mb-3">
                {/* <TextInput style={style.textInput} className="border-stone-200 w-28 mr-4 h-10 rounded-md p-2.5" placeholder="Choose Date"/> */}
                <Input bgColor={`#00000019`} type="text" marginRight={3} className="h-10 p-1.5" placeholder="choose date"/>
                <Select bgColor={`#00000019`} marginRight={3} selectedValue={service} accessibilityLabel="Category" className="w-16 h-10 p-1.5" placeholder="Category" _selectedItem={{
                    bg: "#1A000000",
                    endIcon: <CheckIcon size="1" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>
                <Select bgColor={`#00000019`} marginRight={3} selectedValue={service} accessibilityLabel="Status" className="w-16 h-10 p-1.5" placeholder="Status" _selectedItem={{
                    bg: "#1A000000",
                    endIcon: <CheckIcon size="1" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>
            </View>
            <View className="flex flex-row w-80 h-24 bg-cyan-100 px-2.5 py-2.5 mb-4 rounded-xl">
                <View className="w-60">
                    <Text className="text-xs font-extrabold mb-2">Study-Golang</Text>
                    <Text className="text-[10px] text-gray-300">Learning Golang to Improve fundamental and familiarize with coding</Text>
                    
                    <Image
                    className="w-48"
                    source={{ uri: "https://res.cloudinary.com/dzhuxgenm/image/upload/v1661526396/waystodo-fe/calender_u9nkrj.png"}}/>       
                    <Text className="text-[8px] mt-1 text-gray-300">19 july 2022</Text>
                </View>
                <View>
                    <View className="w-12 h-5 bg-cyan-300 rounded-md">
                        <Text className="flex items-center justify-center text-[10px] text-slate-100">Study</Text>
                    </View>
                    <View className="w-8 h-8 bg-slate-300 mt-3 ml-2 rounded-full justify-center" >
                        <Text onPress={() => navigation.navigate("DetailList")}></Text>
                    </View>
                </View>
            </View>
            <View className="flex flex-row w-80 h-24 bg-lime-100 px-2.5 py-2.5 rounded-xl">
                <View className="w-60">
                    <Text className="text-xs font-extrabold mb-2">Study-Golang</Text>
                    <Text className="text-[10px] text-gray-300">Learning Golang to Improve fundamental and familiarize with coding</Text>
                    
                    <Image
                    className="w-48"
                    source={{ uri: "https://res.cloudinary.com/dzhuxgenm/image/upload/v1661526396/waystodo-fe/calender_u9nkrj.png"}}/>       
                    <Text className="text-[8px] mt-1 text-gray-300">19 july 2022</Text>
                </View>
                <View>
                    <View className="w-16 h-5 bg-cyan-300 rounded-md">
                        <Text className="flex items-center justify-center text-[10px] text-slate-100">Home Work</Text>
                    </View>
                    <View className="w-8 h-8 bg-slate-300 mt-3 ml-2 rounded-full flex justify-center">
                        <Image
                        className="w-8 h-8"
                        source={{ uri: "https://res.cloudinary.com/dzhuxgenm/image/upload/v1661531126/waystodo-fe/iconCheck_tmabe7.png"}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    imageProfile: {
        marginLeft:165
    },
    textInput:{
        borderColor: 'grey',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        color: '#999999',
        marginBottom: 20
    }
})