import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, TextInput } from "react-native";
import { Input, Box, } from "native-base"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Register({navigation}) {
    const [form, setForm] = React.useState({
        email:'',
        firstName:'',
        password:'',
    })

    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnPress = async () => {
        try {
            const config = {
                header: {
                    'Content-type': 'application/json',
                }
            }

            const body = JSON.stringify(form)

            const response = await axios.post('https://api.kontenbase.com/query/api/v1/53ef5f54-3409-4c62-927d-34873d723b3f/auth/register', body, config)
            console.log(response)

            if (response) {
                await AsyncStorage.setItem('token', response.data.token)
            }
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                console.log(value);
                navigation.navigate('login')
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
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

            <Text style={{marginLeft:35}} className="font-extrabold text-2xl mt-5 ml-2">Regiter</Text>

            {/* input login */}
            <Box alignItems="center" className="mt-5" >
                <Input 
                type="text"
                style={style.textInput} 
                mx="2"  
                placeholder="Email"
                onChangeText={(value) => handleOnChange('email', value)} 
                value={form.email}/>
            </Box>
            <Box alignItems="center" className="mt-5" >
                <Input 
                type="text" 
                style={style.textInput} 
                mx="2"  
                placeholder="Name"
                onChangeText={(value) => handleOnChange('firstName', value)} 
                value={form.firstName}/>
            </Box>
            <Box alignItems="center" className="mt-4" >
                <Input 
                type="password" 
                style={style.textInput} 
                mx="2"  
                placeholder="Password" 
                onChangeText={(value) => handleOnChange('password', value)}
                value={form.password}/>
            </Box>

            <View style={style.btnindex} className="mt-5 flex items-center">
                <TouchableOpacity style={style.btnLogin} className="content-center text-center" onPress={handleOnPress}>
                    <Text className="color-white text-[16] font-weight-[800]">Register</Text> 
                </TouchableOpacity>
            </View>

            <Text className="mt-4 text-center">Joined us before ? <Text className="text-red-500" onPress={()=> navigation.navigate("login")}>Login</Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    image :{
        width: 257, 
        height:184
    },
    labelText2 :{
        marginTop: 5,
        fontWeight:800   
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