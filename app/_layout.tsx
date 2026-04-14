import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}} >
          <Stack.Screen name="index" options={{}} />
          <Stack.Screen name="login" options={{}} />
          <Stack.Screen name="singup" options={{}} />
          <StatusBar backgroundColor={"white"} style="dark"/>

  </Stack>;
}
