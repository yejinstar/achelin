import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { addToCart, count, price } from "./Cart";
const image1 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_1.jpeg",
};
const image2 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_2.jpeg",
};
const image3 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_3.jpeg",
};
const image4 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_4.jpeg",
};
const image5 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_5.jpeg",
};
const image6 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_6.jpeg",
};
const image7 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_7.jpeg",
};
const image8 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/2/2_8.jpeg",
};

const OrderScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [restaurent, setRestaurent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const l = count.length;
  var i = 0;
  var t = 0;
  for (i = 0; i < l; i++) {
    t = t + count[i];
  }
  const [total, setTotal] = useState(t);
  const [totalPrice, setTotalPrice] = useState(price);
  const apitest = () => {
    const response = axios.get(
      "http://182.225.112.75:25000/api/v1/restaurant/1"
    );
    console.log(response);
  };
  const adding = (item, price) => {
    addToCart(item, price);
    setTotal(total + 1);
    setTotalPrice(totalPrice + price);
  };
  const changeRest = (Rest) => {
    console.log("changed to : ", Rest);
    navigation.navigate("Order" + Rest);
  };
  const toOrderList = () => {
    navigation.navigate("Ordered");
  };
  return (
    <View style={styles.outercontainer}>
      <Text style={styles.title}>메뉴 선택</Text>
      <View style={styles.innercontainer}>
        <View style={styles.TextBox}>
          <TouchableOpacity onPress={() => changeRest("1")}>
            <Text style={styles.restItem}>만권화밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectTextBox}>
          <TouchableOpacity onPress={() => changeRest("2")}>
            <Text style={styles.restItem}>행복돈까스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TextBox}>
          <TouchableOpacity onPress={() => changeRest("3")}>
            <Text style={styles.restItem}>바켓버거</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.TextBox}>
          <TouchableOpacity onPress={() => changeRest("4")}>
            <Text style={styles.restItem}>감탄떡볶이</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TextBox}>
          <TouchableOpacity onPress={() => changeRest("5")}>
            <Text style={styles.restItem}>옥미관</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TextBox}></View>
      </View>

      <View style={styles.innercontainer}>
        <View style={styles.MenuBox}>
          <Image source={image1} style={styles.image} />
        </View>
        <View style={styles.MenuBox}>
          <Image source={image2} style={styles.image} />
        </View>
        <View style={styles.MenuBox}>
          <Image source={image3} style={styles.image} />
        </View>
        <View style={styles.MenuBox}>
          <Image source={image4} style={styles.image} />
        </View>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("고구마치즈돈까스", 8000)}>
            <Text style={styles.menuItem}>고구마{"\n"}치즈돈까스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("김치나베돈까스", 7500)}>
            <Text style={styles.menuItem}>김치나베{"\n"}돈까스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("모듬순살돈까스", 8500)}>
            <Text style={styles.menuItem}>모듬순살{"\n"}돈까스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("순살돈까스", 6500)}>
            <Text style={styles.menuItem}>순살돈까스</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.MenuBox}>
          <Image source={image5} style={styles.image} />
        </View>
        <View style={styles.MenuBox}>
          <Image source={image6} style={styles.image} />
        </View>
        <View style={styles.MenuBox}>
          <Image source={image7} style={styles.image} />
        </View>
        <View style={styles.MenuBox}>
          <Image source={image8} style={styles.image} />
        </View>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("치즈돈까스", 7500)}>
            <Text style={styles.menuItem}>치즈돈까스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("치즈크림파스타", 7000)}>
            <Text style={styles.menuItem}>치즈크림{"\n"}파스타</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("치즈토마토파스타", 7000)}>
            <Text style={styles.menuItem}>치즈토마토{"\n"}파스타</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("카레돈까스", 7000)}>
            <Text style={styles.menuItem}>카레돈까스</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => toOrderList()}>
        <Text style={styles.cartTitle}>장바구니</Text>
        <Text style={styles.cartTitle}>
          {total}개 / {price}원
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  innercontainer: {
    flex: 0,
    padding: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  menuItem: {
    fontSize: 14,
    marginBottom: 2,
    textAlignVertical: "center",
    textAlign: "center",
    color: "#007AFF",
  },
  restItem: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  TextBox: {
    width: 100,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  MenuBox: {
    width: 75,
    height: 75,
    borderColor: "black",
    borderWidth: 1,
  },
  MenutextBox: {
    width: 75,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  selectTextBox: {
    width: 100,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "yellow",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default OrderScreen;
