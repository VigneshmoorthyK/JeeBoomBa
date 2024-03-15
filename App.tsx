/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Alert
} from 'react-native';

import {createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import Config from 'react-native-config';
import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';



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

  const Stripe = () => {
    const [key, setKey] = useState('');
    const {confirmPayment} = useStripe();
    const getClientSecret = () => {
      fetch('http://192.168.5.135:3000/create-payment-intent',{method:"POST"})
      .then((res)=>{
        
        return res.json()
      })
      .then(res=>{
        console.log("RES ==>",res.clientSecret)
        setKey(res.clientSecret)
      })
      .catch((err : any)=>{
        console.log("Err =",err)
      })
    }
    const handleConfirmation = async () => {
      if (key) {
        console.log("come")
        const {paymentIntent, error} = await confirmPayment(key, {
          paymentMethodType:"Card",
          paymentMethodData:{
            billingDetails:{
              name:"Vignesh",
              email:"vigneshmoorthy.kumar@softsuave.com",
              phone:"1234567890",address:{
                city:"Chennai",
                country:"IN",
                line1:"line 1",
                line2:"line 2",
                postalCode:"610204",
                state:"Tamil Nadu"
              }
            },
          }

        });

        console.log("pay=",paymentIntent, error)
  
        if (!error) {
          Alert.alert('Received payment', `Billed for ${paymentIntent?.amount}`);
        } else {
          Alert.alert('Error', error.message);
        }
      }
    }

    return(
      <View style={{flex:1,backgroundColor:"blue"}}>
        <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
        <Button title='GET SECRET' onPress={getClientSecret}/>
        <Button title='pay' onPress={handleConfirmation}/>
        </View>
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
      <StripeProvider
      publishableKey="pk_test_51NybFRSEckTmmCIwJWJCwOnLwSnpOpgHGisxMGv6T7MwWanH26PO8OH3LwLngLrBB62aQteAQKFgxL8yUL49rqDQ00XMlS3gg6"
      merchantIdentifier="merchant.identifier">
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=><DrawerStyle {...props}/>}>
          <Drawer.Screen name='Home' component={Stripe} />
          <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
      </StripeProvider>
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
