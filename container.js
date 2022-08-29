import * as react from "react"

import { useTheme } from "native-base"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// import bottom tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// import icon tab
import { Ionicons } from "@expo/vector-icons"

// import screen
import Index from "./src/index"
import Login from "./src/login"
import Register from "./src/register"
import Addcategory from "./src/addCategory"
import Addlist from "./src/addList"
import Detaillist from "./src/detailList"
import ListTodo from "./src/ListTodo"

// create stack navigation
const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function MyTab() {
    return (
        <Tab.Navigator
            screenOption={({route}) =>({
                headerShown: false,

                tabBarIcon: ({focused}) => {
                    let iconName

                    if (route.name === "Todo List") {
                        iconName = focused ? "ios-home" : "ios-home-outline"
                    } else if(route.name === "Add List") {
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline"
                    } else if (route.name === "Add Category") {
                        iconName = focused ? "ios-home" : "ios-home-outline"
                    }

                    return <Ionicons name={iconName} size={20} color="red"/>
                },
                tabBarActiveTintColor: "red",
                tabBarInActiveTintColor: "grey"
            })}>
            
            <Tab.Screen name="Todo List" component={ListTodo} />
            <Tab.Screen name="Add List" component={Addlist} />
            <Tab.Screen name="Add Category" component={Addcategory} />

        </Tab.Navigator>
    )
}

export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index" component={Index}/>
                <Stack.Screen name="login"
                component={Login}
                options={{title: "Login",}}
                 />
                <Stack.Screen name="Register"
                component={Register}
                options={{title: "Register",}}
                 />
                <Stack.Screen name="DetailList"
                component={Detaillist}
                options={{title: "Detail List",}}
                 />
                <Stack.Screen 
                name="Todo List2"
                component={MyTab}
                options={{
                   headerShown: false,
                   headerTintColor: "white",
                   headerMode: "screen",
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}