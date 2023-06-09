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
  SafeAreaView,
  StatusBar,
} from "react-native";
import { addToCart, count, price } from "./Cart";
const image1 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_1.jpeg",
};
const image2 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_2.jpeg",
};
const image3 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_3.jpeg",
};
const image4 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_4.jpeg",
};
const image5 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_5.jpeg",
};
const image6 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_6.jpeg",
};
const image7 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_7.jpeg",
};
const image8 = {
  uri: "file:///Users/sim-yeongjun/Desktop/AjouRest/1/1_8.jpeg",
};

const OrderScreen = ({ navigation }) => {
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
    console.log(response.status);
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
        <View style={styles.selectTextBox}>
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
          <TouchableOpacity onPress={() => adding("돼지껍데기볶음덮밥", 6500)}>
            <Text style={styles.menuItem}>돼지껍데기{"\n"}볶음덮밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("두루치기화밥", 6000)}>
            <Text style={styles.menuItem}>두루치기{"\n"}화밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity
            onPress={() => adding("마라큐브스테이크덮밥", 8500)}
          >
            <Text style={styles.menuItem}>마라큐브{"\n"}스테이크덮밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("매운닭갈비덮밥", 6000)}>
            <Text style={styles.menuItem}>매운닭갈비{"\n"}덮밥</Text>
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
          <TouchableOpacity onPress={() => adding("소고기열무비빔밥", 7500)}>
            <Text style={styles.menuItem}>소고기{"\n"}열무비빔밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("소불고기덮밥", 7000)}>
            <Text style={styles.menuItem}>소불고기{"\n"}덮밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("직화닭고기덮밥", 6500)}>
            <Text style={styles.menuItem}>직화닭고기{"\n"}덮밥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenutextBox}>
          <TouchableOpacity onPress={() => adding("큐브스테이크덮밥", 8000)}>
            <Text style={styles.menuItem}>큐브스테이크{"\n"}덮밥</Text>
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
  selectTextBox: {
    width: 100,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "yellow",
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default OrderScreen;
