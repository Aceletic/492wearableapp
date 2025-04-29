import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Per the United States{"\n"}Environmental Protection Agency:</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    <View style={styles.textContainer}>
      <Text style={styles.body}>"Regardless of the UV Index, the following sun safety measures are always encouraged:{"\n"}{"\n"}
        Do Not Burn.{"\n"}{"\n"}
        Avoid Sun Tanning and Tanning Beds.{"\n"}{"\n"}
          Generously Apply Sunscreen to all exposed skin using a Sun Protection Factor (SPF) of at least 15 that provides broad-spectrum protection from both ultraviolet A (UVA) and ultraviolet B (UVB) rays.{"\n"}{"\n"}
           Re-apply every two hours, even on cloudy days, and after swimming or sweating.{"\n"}{"\n"}
          Wear Protective Clothing, such as a long-sleeved shirt, pants, a wide-brimmed hat and sunglasses, where possible.{"\n"}{"\n"}
          Seek Shade when appropriate, remembering that the sun's UV rays are strongest between 10 a.m. and 4 p.m.{"\n"}{"\n"}
          Use Extra Caution Near Water, Snow and Sand as they reflect the damaging rays of the sun which can increase your chance of sunburn.{"\n"}{"\n"}
          Watch for the UV Index.{"\n"}{"\n"}
          Get Vitamin D Safely through a diet that includes vitamin supplements.{"\n"}{"\n"}
           Don't seek the sun."</Text> 
           </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </ScrollView>
    </View>
  );
}
//<EditScreenInfo path="app/(tabs)/two.tsx" />
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
    backgroundColor:  '#009a92', //"gray",
    width: 380,
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gold',
    justifyContent: 'center',
    textAlign: 'center'
  },
  body: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textone: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green'
  },
  separator: {
    marginVertical: 15,
    height: 5,
    width: '80%',
  },
});
