import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesing from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "tomar un auto",
        Image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Ordenar comida",
        Image: "https://cdn.iconscout.com/icon/free/png-256/free-uber-eats-1613370-1369417.png",
        screen: "UberEatsScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation();

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={{padding: 2, paddingLeft: 6, paddingTop:4, backgroundColor:'#f6f6f6', margin: 4}}>
            <View>
                <Image 
                style={{width: 120, height: 120, resizeMode: "contain"}}
                source={{uri: item.Image}}/>
                <Text style={{marginTop: 2, fontWeight: 'bold'}}>{item.title}</Text>
                <AntDesing name='rightcircle' style={{fontSize: 20, padding: 4}}/>
            </View>
        </TouchableOpacity>
    )}/>
  )
}

export default NavOptions
