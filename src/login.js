import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, TextInput } from "react-native";
import { Input, Box, } from "native-base"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Login({navigation}) {
    
    const [form, setForm] = React.useState({
        email:'',
        password:''
    })

    const [isLoading, setIsLoading] = React.useState(false)

    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnPress = async() => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const body = JSON.stringify(form)
            setIsLoading(true)
            const response = await axios.post('https://api.kontenbase.com/query/api/v1/53ef5f54-3409-4c62-927d-34873d723b3f/auth/login', body, config)
            setIsLoading(false)
            if (response) {
                await AsyncStorage.setItem('token', response.data.token)
            }

            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                console.log(value);
                navigation.navigate('Todo List2')
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
            setIsLoading(false)
        }
    }

    return (
        <View className="flex bg-white content-center">
            <StatusBar/>
            <View className="items-center">
                <Image
                style={style.image}
                source={{ uri: "https://res.cloudinary.com/dzhuxgenm/image/upload/v1661475011/waystodo-fe/LoginIcon_qewyiu.png"}}/>
            </View>

            <Text style={{marginLeft:35, marginTop:35}} className="font-extrabold text-2xl ml-2.54">Login</Text>

            {/* input login */}
            <Box alignItems="center" className="mt-5" >
                <Input 
                    style={style.textInput} 
                    mx="2"  
                    placeholder="Email"
                    onChangeText={(value)=> handleOnChange('email',value)}
                    value={form.email}/>
                <Input 
                    type="password" 
                    style={style.textInput} 
                    mx="2" 
                    marginTop={2}  
                    placeholder="Password"
                    onChangeText={(value)=> handleOnChange('password',value)}
                    value={form.password}/>
            </Box>
            {/* end */}

            {/* button register */}
            <View className="mt-1 flex items-center">
                <TouchableOpacity style={style.btnLogin} className="content-center text-center"
                onPress={handleOnPress}>
                    {
                       isLoading ?  <Text className="color-white text-[16] font-weight-[800]">Loading</Text> : <Text className="color-white text-[16] font-weight-[800]">Login</Text> 
                    }
                </TouchableOpacity>
            </View>
            {/* end */}

            <Text className="mt-3 mb-4 text-center">New Users ? <Text className="text-red-500" onPress={() => navigation.navigate("Register")}>Register</Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    image :{
        width: 257, 
        height:184
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
    btnLogin: {
        marginTop:30,
        backgroundColor:"#FF5555",
        width: 310,
        height: 40,
        color: "white",
        textAlign: "center",
        justifyContent:"center",
        borderRadius:10,
        fontWeight: 800
    }
})