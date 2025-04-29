import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.textContainer}>
      <Text style={styles.textone}>0-2                Safe{"\n"}</Text> 
      <Text style={styles.body}>You can safely enjoy being outside. Wear sunglasses on bright days. If you burn easily, cover up and use sunscreen SPF 15+. In winter, reflection off snow can nearly double UV strength.</Text> 
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.textContainer}>
      <Text style={styles.texttwo}>3-5     Moderate{"\n"}</Text>
      <Text style={styles.body}>Take precautions if you will be outside, such as wearing a hat and sunglasses and using sunscreen SPF 15+. Reduce your exposure to the sun's most intense UV radiation by seeking shade during midday hours.</Text> 
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.textContainer}>
      <Text style={styles.textthree}>6-7                High{"\n"}</Text>
      <Text style={styles.body}>Protection against sun damage is needed. Wear a wide-brimmed hat and sunglasses, use sunscreen SPF 15+ and wear a long-sleeved shirt and pants when practical. Reduce your exposure to the sun's most intense UV radiation by seeking shade during midday hours.</Text> 
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.textContainer}>
      <Text style={styles.textfour}>8-10  Very High{"\n"}</Text>
      <Text style={styles.body}>Protection against sun damage is needed. If you need to be outside during midday hours between 10 a.m. and 4 p.m., take steps to reduce sun exposure. A shirt, hat and sunscreen are a must, and be sure you seek shade. Beachgoers should know that white sand and other bright surfaces reflect UV and can double UV exposure.</Text> 
      </View>

     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

     <View style={styles.textContainer}>
      <Text style={styles.textfive}>11+        Extreme{"\n"}</Text>
      <Text style={styles.body}>Protection against sun damage is needed. If you need to be outside during midday hours between 10 a.m. and 4 p.m., take steps to reduce sun exposure. A shirt, hat and sunscreen are a must, and be sure you seek shade. Beachgoers should know that white sand and other bright surfaces reflect UV and can double UV exposure.</Text> 
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009a92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "gray",
    width: 380,
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'yellow'
  },
  body: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    width: '90%'
  },
  textone: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'lightgreen'
  },
  texttwo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'gold'
  },
  textthree: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'lightsalmon'
  },
  textfour: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'maroon'
  },
  textfive: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'violet'
  },
  separator: {
    marginVertical: 10,
    height: 5,
    width: '80%',
  },
});
