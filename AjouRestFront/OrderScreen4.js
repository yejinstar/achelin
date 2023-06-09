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
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_1.jpeg",
};
const image2 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_2.jpeg",
};
const image3 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_3.jpeg",
};
const image4 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_4.jpeg",
};
const image5 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_5.jpeg",
};
const image6 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_6.jpeg",
};
const image7 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_7.jpeg",
};
const image8 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/4/4_8.jpeg",
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
        <View style={styles.TextBox}>
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
        <View style={styles.selectTextBox}>
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
          <TouchableOpacity onPress={() => adding("김치말이국수", 3900)}>
            <Text style={styles.menuItem}>김치말이{"\n"}국수</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("더블치즈떡볶이", 5000)}>
            <Text style={styles.menuItem}>더블치즈{"\n"}떡볶이</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("밀떡볶이", 3500)}>
            <Text style={styles.menuItem}>밀떡볶이</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("새우완탕쌀국수", 7500)}>
            <Text style={styles.menuItem}>새우완탕{"\n"}쌀국수</Text>
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
          <TouchableOpacity onPress={() => adding("스파이시쌀국수", 6500)}>
            <Text style={styles.menuItem}>스파이시{"\n"}쌀국수</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("쌀떡볶이", 3500)}>
            <Text style={styles.menuItem}>쌀떡볶이</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("치킨퐁쌀국수", 8000)}>
            <Text style={styles.menuItem}>치킨퐁{"\n"}쌀국수</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("포유쌀국수", 6500)}>
            <Text style={styles.menuItem}>포유쌀국수</Text>
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
