import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Image, View, StyleSheet, TextInput } from "react-native";

export default function DetailList() {
    return(
        <View  className="bg-cyan-100 px-3 py-3 rounded-md">
            <StatusBar/>
            <View className="w-80">
                <View className="flex flex-row">
                    <View>
                        <Text className="text-[25px] mb-1 font-extrabold">Study - Golang</Text>
                    </View>
                    <View style={style.rightside}>
                        <View className="w-12 h-5 bg-cyan-300 rounded-md">
                            <Text className="flex items-center justify-center text-[10px] text-slate-100">Study</Text>
                        </View>
                        <View className="w-8 h-8 bg-slate-300 mt-3 ml-2 rounded-full justify-center">

                        </View>
                    </View>   
                </View>
                <View>
                    <Text style={style.text} className="mt-5">Learn Golang to improve fundamentals and familiarize with coding</Text>
                </View>
                <View>
                    <Image 
                    source={{ uri:"https://res.cloudinary.com/dzhuxgenm/image/upload/v1661526396/waystodo-fe/calender_u9nkrj.png"}}
                    />
                    <Text style={style.text} className="mt-5">19 july 2022</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    rightside:{
        marginLeft:80
    },
    text:{
       color:"#9B9B9B"
    }
})