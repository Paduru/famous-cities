import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import MapView, { Marker } from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";

function BostonScreen(props) {
  const [coordinates, setCoordinates] = useState("");

  const location = async () => {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=Boston&key=d6d98f30bffa4df4bdf4ff76eb77a0b0`
      )
      .then((snapshot) => {
        var geometry = snapshot.data.results[0].geometry;
        setCoordinates(geometry);
        console.log(snapshot.data.results[0].geometry);
        console.log(coordinates.lat);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    location();
  }, []);

  if (coordinates === "") {
    return <Text> Loading </Text>;
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}>
          <Text>Boston</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: coordinates.lat,
                longitude: coordinates.lng,
                latitudeDelta: 100,
                longitudeDelta: 100,
              }}
            >
              <Marker
                coordinate={{
                  latitude: coordinates.lat,
                  longitude: coordinates.lng,
                }}
              >
                <Image
                  source={require("../assets/city-icon.png")}
                  style={{ width: 50, height: 50 }}
                />
              </Marker>
            </MapView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  map: {
    width: 375,
    height: 375,
  },
  mapContainer: {
    flex: 0.7,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 25,
  },
});

export default BostonScreen;
