import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Platform } from "react-native";
import { Input, Box, Select, CheckIcon, TextArea} from "native-base"
// import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddList() {
    let [service, setService] = React.useState("");
    // const [date, setDate] = useState(new Date())
    // const [mode, setMode] =useState('date')
    // const [show, setShow] =useState(false)
    // const [text, setText] =useState('empty')

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date
    //     setShow(Platform.OS === 'android')
    //     setDate(currentDate)

    //     let tempDate = new Date(currentDate)
    //     let fDate = tempDate.getDate() + '/' +  (tempDate.getMonth() + 1 + '1' + tempDate.getFullYear())
    //     let fTime = 'hours' + tempDate.getHours() + ' | minutes' + tempDate.getMinutes()
    //     setText(fDate + "\n" + fTime)

    //     console.log(fDate + '(' + fTime + ')');
    // }

    // const showMode = (currentMode) => {
    //     setShow(true)
    //     setMode(currentMode)
    // }

    return (
        <View className="flex bg-white mb-5">
            <StatusBar/>
            {/* header */}
            <Text  style={style.labelText2} className="text-[25px] mb-5 font-extrabold">Add List</Text>

            {/* input List */}
            <Box w={310} maxW="310" alignItems="" className="mt-3 mb-3" >
                <Input bgColor={`#00000019`} type="text" placeholder="Email"/>
                <Input bgColor={`#00000019`} type="text" marginTop={2} placeholder="Date"/>
                <Select bgColor={`#00000019`} marginTop={2} selectedValue={service} accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                    // bg: "#1A000000",
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>
                <TextArea bgColor={`#00000019`} h={20} placeholder="Description" marginTop={2} w={310} />
            </Box>
            
            {/* button */}
            <View style={style.btnindex} className="flex items-center">
            <TouchableOpacity style={style.btnLogin} className="content-center text-center h-10">
                <Text className="color-white text-[16]">Add List</Text> 
            </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    labelText2 :{
        marginTop: 5 
    },
    inputselect:{
        // backgroundColor:'rgba(0, 0, 0, 0.1)'
    },
    textInput:{
        width:310,
        height:40,
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        padding:10,
        color: '#999999'
    },
    textInputArea :{
        width:'100%',
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        padding:10,
        color: '#999999',
        marginBottom: 20
    },
    btnindex:{
        marginTop:10
    },
    btnLogin: {
        marginTop:20,
        backgroundColor:"#FF5555",
        width: 310,
        color: "white",
        textAlign: "center",
        justifyContent:"center",
        borderRadius:10
    }
})