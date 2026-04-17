import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

function Quick() {
  return (
    
   
                <ScrollView>
                <FlatList data={[1,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9,2,3,4,5,6,7,7,8,9]}
                contentContainerStyle={{marginTop:40}}
                numColumns={6}
                ListHeaderComponent={
                    <View
                    style={{width:"100%",height:200,backgroundColor:"blue"}}>9
                    </View>
                }
                 ListFooterComponent={
                    <View
                    style={{width:"100%",height:200,backgroundColor:"blue"}}>9
                    </View>
                }
                renderItem={({item})=>{
                    return(
                        <View  style={{
                    width:100,
                    height:100,
                    backgroundColor:"red",
                    marginBottom:20,
                    marginRight:20,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>{item}</Text>

                        </View>
                    )
                }}
                />
               

                </ScrollView>
            )
       
}

export default Quick
