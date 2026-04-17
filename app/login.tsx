import MyButton from '@/component/MyButton'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'

const Login = () => {
 const [value,setValue]=useState({
  value1:"",
  value2:""
 });
 
  useEffect(()=>{
  console.log("Anand ");
 
 },[])
console.log(value);
    const router=useRouter();
    const onSingup=()=>{
        router.navigate("/Quick")
    }
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        
      }}
    >
        <Image source={require("../assets/images/login.jpg")}
        style={{
          width:"100%",
          height:400,

        }}
        resizeMode='cover' />
        <View style={{padding:20,
          gap:20
        }}>
           <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}
        onChangeText={(e)=>setValue((pre)=>({...pre,value1:e}))}/>
           <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}
        onChangeText={(e)=>setValue((pre)=>({...pre,value1:e}))}/>
           <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}
        onChangeText={(e)=>setValue((pre)=>({...pre,value1:e}))}/>
           <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}
        onChangeText={(e)=>setValue((pre)=>({...pre,value1:e}))}/>
           <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}
        onChangeText={(e)=>setValue((pre)=>({...pre,value1:e}))}/>
        <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}
        onChangeText={(e)=>setValue((pre)=>({...pre,value2:e}))}/>
         <MyButton title="Login" onPress={onSingup} />
        </View>
       
     
    </ScrollView>
  )
}

export default Login
