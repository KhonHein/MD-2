import Cart from '@/components/shop/Cart';
import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const logoImg = require('@/assets/images/n.png');
  const banner6 = require('@/assets/images/banner6.png');
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Pressable>
            <Image source={logoImg} style={styles.logoImg}/>
        </Pressable>
        <Pressable>
          <Cart/>
        </Pressable>
      </View>

      <ScrollView>
      <Image
        style={styles.banner}
        source={banner6}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  titleContainer:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:3,
  },
  logoImg:{
    width:30,
    height:25,
  },
  cardContainer:{
    width:50,
    height:50,
  },
  title:{
    
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
