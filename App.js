import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NativeBaseProvider, Box, Input } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import Index from './src/index';
import Login from './src/login';
import Register from './src/register';
import AddCategory from './src/addCategory';
import AddList from './src/addList';
import ListTodo from './src/ListTodo';
import DetailList from './src/detailList';

import Container from './container';

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        
         
          <Container/>
        
      </TailwindProvider>
    </NativeBaseProvider>
  );
}

