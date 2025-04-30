import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  // Text,
  TouchableOpacity,
  // View,
} from "react-native";
import { Text, View } from '../../components/Themed';
import DeviceModal from "../../components/DeviceConnectionsModal";
import useBLE from "../../useBLE";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";


export default function DebugScreen() {
  const {
    // destructure useBLE hook
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    uvIndex,
    stepCount,
    disconnectFromDevice,
  } = useBLE();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // state for modal

  const scanForDevices = async () => {
    // scan for devices
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
        scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  const getUvIndexColor = (uvIndex: string): string => {
    const indexNumber = TrueUVdiv10(uvIndex);
    if(indexNumber <= 2) return "lightgreen";
    else if(indexNumber <= 5) return "gold";
    else if(indexNumber <= 7) return "lightsalmon";
    else if(indexNumber <= 10) return "maroon";
    else if(indexNumber >= 11) return "violet";
    else return "white";


  }

  const TrueUVdiv10 = (uvIndex: string): number => {
    return (Number(uvIndex)); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
      <Text style={styles.body}>Current Step Count</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.title}>{stepCount}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        { connectedDevice ?
        (<Text style={[
          styles.title,
          {color: getUvIndexColor(uvIndex)},
        ]}>{TrueUVdiv10(uvIndex)}</Text>)
        :
        (<Text style={styles.body2}>No device connected</Text>) }
      </View>     

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View>
        { connectedDevice ?
        (<Text style={styles.body}> Current UV Index</Text>):
        (<Text style={styles.body0}>Please Connect to a UV Sensor via Bluetooth </Text>) }
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity onPress={connectedDevice ? disconnectFromDevice : openModal} style={styles.ctaButton}>
        <Text style={styles.body3}>
          {connectedDevice ? "Disconnect  " : "Connect  "}
        </Text>
      </TouchableOpacity>

      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
      </View>
      </ScrollView>
    </SafeAreaView>

    

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
    backgroundColor: '#009a92', //"gray",
    width: 380,
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontSize: 85,
    fontWeight: 'bold',
    color: "white",
    backgroundColor: '#009a92',
    textAlign: 'center',
  },
  textone: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'lightgreen',
    backgroundColor: '#009a92',
    textAlign: 'center',
  },
  texttwo: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'gold',
    backgroundColor: '#009a92',
    textAlign: 'center',
  },
  textthree: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'lightsalmon',
    backgroundColor: '#009a92',
    textAlign: 'center',
  },
  textfour: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'maroon',
    backgroundColor: '#009a92',
    textAlign: 'center',
  },
  textfive: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'violet',
    backgroundColor: '#009a92',
    textAlign: 'center',
  },
  body: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#009a92',
    textAlign: 'center',

  },
  body0: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#009a92',
    textAlign: 'center',

  },
  body2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'lightgreen',
    textAlign: 'center',
    backgroundColor: '#009a92',
  },
  body3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
   // backgroundColor: '#009a92',

  },
  separator: {
    marginVertical: 25,
    height: 10,
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
