import MyButton from '@/component/MyButton'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const Login = () => {
    const router=useRouter();
    const onSingup=()=>{
        router.navigate("/singup")
    }
  return (
    <View
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
        onChangeText={(e)=>console.log(e)}/>
        <TextInput
        placeholder='Enter Your Email'
        style={{
          borderWidth:1,
          height:50,
          paddingHorizontal:20,
          borderRadius:10
        }}/>
         <MyButton title="Login" onPress={onSingup} />
        </View>
       
     
    </View>
  )
}

export default Login
