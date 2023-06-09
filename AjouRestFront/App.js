import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./LoginScreen.js";
import OrderScreen1 from "./OrderScreen1.js";
import OrderScreen2 from "./OrderScreen2.js";
import OrderScreen3 from "./OrderScreen3.js";
import OrderScreen4 from "./OrderScreen4.js";
import OrderScreen5 from "./OrderScreen5.js";
import OrderedScreen from "./OrderedScreen.js";
import OrderDoneScreen from "./OrderDoneScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Order1" component={OrderScreen1} />
        <Stack.Screen name="Order2" component={OrderScreen2} />
        <Stack.Screen name="Order3" component={OrderScreen3} />
        <Stack.Screen name="Order4" component={OrderScreen4} />
        <Stack.Screen name="Order5" component={OrderScreen5} />
        <Stack.Screen name="Ordered" component={OrderedScreen} />
        <Stack.Screen name="OrderDone" component={OrderDoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
