import { StyleSheet, Linking, Pressable, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';





  
  const url = "https://www.google.com";

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if(supported) {
      await Linking.openURL(url);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };

  const url1 = "https://cancer.org/cancer/risk-prevention/sun-and-uv/uv-radiation.html";

  const handlePress1 = async () => {
    const supported = await Linking.canOpenURL(url1);
    if(supported) {
      await Linking.openURL(url1);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };

  const url2 = "https://www.skincancer.org/risk-factors/uv-radiation/";

  const handlePress2 = async () => {
    const supported = await Linking.canOpenURL(url2);
    if(supported) {
      await Linking.openURL(url2);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };
  
  const url3 = "https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index";

  const handlePress3 = async () => {
    const supported = await Linking.canOpenURL(url3);
    if(supported) {
      await Linking.openURL(url3);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };

  const url4 = "https://www.epa.gov/sunsafety/health-effects-uv-radiation";

  const handlePress4 = async () => {
    const supported = await Linking.canOpenURL(url4);
    if(supported) {
      await Linking.openURL(url4);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };const url5 = "https://www.epa.gov/sunsafety/uv-index-scale-0";

  const handlePress5 = async () => {
    const supported = await Linking.canOpenURL(url5);
    if(supported) {
      await Linking.openURL(url5);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };

  const url6 = "https://enviro.epa.gov/envirofacts/uv/search";

  const handlePress6 = async () => {
    const supported = await Linking.canOpenURL(url6);
    if(supported) {
      await Linking.openURL(url6);
    } else {
      console.log('dont know how to open this URL: ${url}');
    }
  };
 
 

export default function TabfourScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Helpful Links:</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Pressable onPress={handlePress1} style={styles.ctaButton}>
          <Text style={styles.body3}> American Cancer Society </Text>
        </Pressable>
        <Pressable onPress={handlePress2} style={styles.ctaButton}>
          <Text style={styles.body3}> Skincancer.org </Text>
        </Pressable>
        <Pressable onPress={handlePress3} style={styles.ctaButton}>
          <Text style={styles.body3}> World Health Organization </Text>
        </Pressable>
        <Pressable onPress={handlePress4} style={styles.ctaButton}>
          <Text style={styles.body3}> EPA - Health Effects </Text>
        </Pressable>
        <Pressable onPress={handlePress5} style={styles.ctaButton}>
          <Text style={styles.body3}> EPA - UV Index Scale </Text>
        </Pressable>
        <Pressable onPress={handlePress6} style={styles.ctaButton}>
          <Text style={styles.body3}> EPA - UV Index Search </Text>
        </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'lightsalmon',
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
    textAlign: 'center',
  },
  body3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
   // backgroundColor: '#009a92',

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
  ctaButton: {
    //   backgroundColor: Colors.primary100,
       backgroundColor: 'black',
       justifyContent: "center",
       alignItems: "center",
       textAlign: 'center',
       height: 50,
       marginHorizontal: 20,
       marginBottom: 50,
       borderRadius: 8,
   },
});
