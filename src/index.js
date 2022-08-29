import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
// import { SvgUri } from 'react-native-svg';

export default function Index({ navigation }) {
    return (
        <View className="flex items-center justify-center bg-white">
            <StatusBar/>
            <Image
            style={style.image}
            source={{ uri: "https://res.cloudinary.com/dzhuxgenm/image/upload/v1661461608/waystodo-fe/imageIndex_sdakh2.png"}}/>       

            <Text style={style.labelText1} className="text-[35px] font-extrabold text-center">Ways <Text className="text-red-700">To</Text><Text className="text-red-500">DO</Text></Text>
            <Text  style={style.labelText2} className="text-[12px] font-weight-[500] text-center">Write your activity and finish your activity.Fast, Simple and Easy to Use</Text>

            <View style={style.btnindex} className="mt-5 flex items-center">
            <TouchableOpacity style={style.btnLogin} className="content-center text-center">
                <Text className="items-center color-white text-[16] font-weight-[800] text-center" onPress={() => navigation.navigate("login")}>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRegiter} className="text-center">
                <Text className="items-center color-white text-[16] font-weight-[800] text-center" onPress={() => navigation.navigate("Register")}>Regiter</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        backgroundColor: "white",
        flex: 1,
        padding : 30
    },
    image :{
        width: 228, 
        height:258
    },
    labelText2 :{
        textAlign: "center",
        marginTop: 5,
        padding: 60        
    },
    btnindex:{
        marginTop:20
    },
    btnLogin: {
        marginTop:60,
        backgroundColor:"#FF5555",
        width: 310,
        height: 40,
        color: "white",
        textAlign: "center",
        justifyContent:"center",
        borderRadius:10,
        fontWeight: 800
    },
    btnRegiter:{
        backgroundColor: "rgba(0, 0, 0, 0.31)",
        marginTop:12,
        width: 310,
        height: 40,
        color: "white",
        textAlign: "center",
        justifyContent:"center",
        borderRadius:10
    }
})