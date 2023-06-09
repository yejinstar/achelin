import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { cart, count, price, plist } from "./Cart";

const LoginScreen = ({ navigation }) => {
  const l = cart.length;
  var i = 0;
  const rs = [];
  for (i = 0; i < l; i++) {
    rs.push(
      <Text style={styles.cartItem}>
        {cart[i]} : {count[i]} : {plist[i]}
      </Text>
    );
  }
  const OrderDone = () => {
    navigation.navigate("OrderDone");
  };
  return (
    <SafeAreaView style={styles.s_container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
          {rs}
          <Text style={styles.largetext}>현재 총 가격: {price}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => OrderDone()}>
            <Text style={styles.largetext_od}>주문하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  s_container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  largetext: {
    fontSize: 30,
    textDecorationColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  largetext_od: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 35,
    textDecorationColor: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default LoginScreen;
