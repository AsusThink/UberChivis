import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";

const HomePage = () => {
  return (
    <View style={{marginTop: 20, padding: 10, backgroundColor: 'white', height: 'full'}}>
        <Image 
            style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
            }}
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1024px-Uber_logo_2018.svg.png",
            }}
        />

        <GooglePlacesAutocomplete 
            placeholder='Punto Inicio'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
        />

        <NavOptions />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    },
});