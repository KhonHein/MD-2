import Cart from "@/components/shop/Cart";
import Category from "@/components/shop/Category";
import Line from "@/components/shop/Line";
import Product from "@/components/shop/Product";
import Title from "@/components/shop/Title";
import { ThemedView } from "@/components/ThemedView";
import { categories, products } from "@/data";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { useNavigation ,useRouter} from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const logoImg = require("@/assets/images/n.png");
  const banner6 = require("@/assets/images/banner6.png");
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

    const navigation = useNavigation();
    const router = useRouter();
    const [select, setSelect] = useState("uuid1");
    
    const handleSelect = (id: string) => {
      setSelect(id);
    }
    const productsList = products.filter(
      (item) => item.categories_id === select
    );
    const goDetail = (id: string) => {
      router.navigate(`/${id}`);
      console.log(id)
    };
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Pressable>
          <Image source={logoImg} style={styles.logoImg} />
        </Pressable>
        <Pressable style={styles.cardContainer}>
          <Cart />
        </Pressable>
      </ThemedView>
      <ScrollView>
        <Image
          style={styles.banner}
          source={banner6}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <ThemedView>
          <Title title="Shop By Category" actionText="see all"/>
          <Line/>
          <FlashList
          data={categories}
          renderItem={({item,index})=><Category {...item} onSelect={handleSelect} select={select}/>}
          extraData={select}
          estimatedItemSize={80}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
          <Line/>
          <Title title="Recomended for You" actionText="See All"/>
        
          <FlashList
            data={productsList}
            renderItem={({ item }) => (
              <Product {...item} onCallRoute={goDetail} />
            )}
            estimatedItemSize={200}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    marginHorizontal: 5,
  },
  logoImg: {
    width: 30,
    height: 25,
  },
  cardContainer: {
    marginRight:10,
    
  },
  title: {},
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
