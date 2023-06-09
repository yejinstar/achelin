import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { cart, count, price, plist } from "./Cart.js";

const OrderDoneScreen = ({ navigation }) => {
  const l = cart.length;
  var i = 0;
  const rs = [];
  for (i = 0; i < l; i++) {
    rs.push(
      <Text style={styles.cartItem}>
        {cart[i]} {count[i]}개 {plist[i]}원
      </Text>
    );
  }
  const ordernum = 143;
  return (
    <SafeAreaView style={styles.s_container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
          <Text style={styles.largetext}>
            {"\n"}주문번호 : {ordernum}번{" "}
          </Text>
          <Text style={styles.largetext}>
            {"\n"}----------------------{"\n"}
          </Text>
          {rs}
          <Text style={styles.largetext}>
            {"\n"}----------------------{"\n"}
          </Text>
          <Text style={styles.largetext}>총 금액 : {price}원</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
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
    textAlign: "center",
  },
  cartItem: {
    fontSize: 14,
    marginBottom: 8,
  },
  s_container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
});

export default OrderDoneScreen;
