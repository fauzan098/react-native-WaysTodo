import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, FlatList ,TextInput } from "react-native";
import { Input, Box, } from "native-base"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export default function AddCategory({navigation}) {

    const [ data, setData ] = React.useState([])
    const [dataLoading, setDataLoading] = React.useState(false)

    const [form, setForm] = React.useState({
        name:''
    })

    const [isLoading, setIsloading] = React.useState(false)

    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnPress = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token === null){
                navigation.navigate('login')
            }

            const config = {
                header: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer' + token
                }
            }

            const body = JSON.stringify(form)
            setIsloading(true)
            const response = await axios.post('https://api.kontenbase.com/query/api/v1/53ef5f54-3409-4c62-927d-34873d723b3f/category', body, config)
            console.log(response);

            setIsloading(false)
            alert('Succsess..')

        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
            setIsloading(false)
        }
    }

    const getData = async() =>{
        try {
            const token = await AsyncStorage.getItem('token')
            if (token === null) {
                navigation.navigate('login')
            }

            const config = {
                header: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + token
                }
            }

            setDataLoading(true)

            const res = await axios.get('https://api.kontenbase.com/query/api/v1/53ef5f54-3409-4c62-927d-34873d723b3f/category', config)
            setData(res.data)
            setDataLoading(false)
        } catch (error) {
            console.log(error);
            setDataLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    },[])

    return (
        <View className="flex bg-white py-3.5 px-3.5">
            <StatusBar/>
            <Text  style={style.labelText2} className="text-[25px] mb-5 font-extrabold">Add Category</Text>

            {/* input Category */}
            <Box alignItems="center" className="mt-2" >
                <Input 
                type="text" 
                style={style.textInput} 
                mx="1"  
                placeholder="Category Name"
                onChangeText={(value) => handleOnChange('name', value)}
                value={form.name}/>
            </Box>

            <View style={style.btnindex} className="flex items-center">
            <TouchableOpacity style={style.btnLogin} className="content-center text-center"
            onPress={handleOnPress}>
                {
                    isLoading ? <Text className="color-white text-[16]">Loading...</Text>:<Text className="color-white text-[16]">Add Category</Text> 
                }
            </TouchableOpacity>
            </View>

            <Text className="text-[25px] font-extrabold mt-20 font-extrabold">List Category</Text>
            <View className="flex flex-row">
                <FlatList
                    numColumns={3}
                    data={data}
                    key={item => item.index}
                    renderItem={({item}) => (
                        <View style={style.bgStudy} className="basis-1/4 ml-1 py-px mt-3">
                        <Text style={style.fontstudy}>{item.name}</Text>
                    </View>
                    )}
                    refreshing={dataLoading}
                    onRefresh={getData}
                    />
            </View>
                    
        </View>
    )
}

const style = StyleSheet.create({
    labelText2 :{
        marginTop: 5 
    },
    textInput:{
        width: 310,
        height:40,
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        padding:10,
        color: '#999999'
    },
    btnindex:{
        marginTop:10
    },
    btnLogin: {
        marginTop:20,
        backgroundColor:"#FF5555",
        width: 310,
        height: 40,
        color: "white",
        textAlign: "center",
        justifyContent:"center",
        borderRadius:10,
    },
    bgStudy: {
        backgroundColor: "#81C8FF",
        borderRadius: 5,
        alignItems:'center',
        color: 'white',
        height:20,
        fontSize:10
    },
    bgHomework: {
        backgroundColor: "#FF8181",
        borderRadius: 5,
        alignItems:'center',
        color: 'white',
        height:20,
        fontSize:10,
    },
    bgWorkout: {
        backgroundColor: "#FFB681",
        borderRadius: 5,
        alignItems:'center',
        color: 'white',
        height:20,
        fontSize:10
    },
    fontstudy:{
        color:"#FFFFFF",
        fontSize: 10,
        fontWeight:800
    },
    fonthomework:{
        color:"#FFFFFF",
        fontSize: 10,
        fontWeight:800
    },
    fontworkout:{
        color:"#FFFFFF",
        fontSize: 10,
        fontWeight:800
    }
})