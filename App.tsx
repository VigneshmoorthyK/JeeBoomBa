/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import Config from 'react-native-config';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('');

  useEffect(()=>{
    console.log("config ->",Config)
  },[])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'pink' : 'orange',
    flex:1
  };

  const HomeScreen = () => {
    return(
      <View style={{flex:1,backgroundColor:"pink"}}/>
    )
  }

  const ProfileScreen = () => {
    return(
      <View style={{flex:1,backgroundColor:"blue"}}/>
    )
  }

  const DrawerStyle = (props : any) =>{
    return(
      <View style={{flex:1,backgroundColor:"white"}}>
        <Text onPress={()=>{props.navigation.navigate("Home")}} style={{color:"black",fontSize:18, borderBottomWidth:1,borderBottomColor:"black",padding:10}}>Profile</Text>
        <Text style={{color:"black",fontSize:18, borderBottomWidth:1,borderBottomColor:"black",padding:10}}>Profile</Text>
        <Text style={{color:"black",fontSize:18, borderBottomWidth:1,borderBottomColor:"black",padding:10}}>Profile</Text>
        <Text style={{color:"black",fontSize:18, borderBottomWidth:1,borderBottomColor:"black",padding:10}}>Profile</Text>
        <Text style={{color:"black",fontSize:18, borderBottomWidth:1,borderBottomColor:"black",padding:10}}>Profile</Text>
      </View>
    )
  }

const Drawer = createDrawerNavigator();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=><DrawerStyle {...props}/>}>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
