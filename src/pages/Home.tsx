import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native'
import image from "../../assets/background_home.jpg";
import ButtonX from '../components/Button';
import Logo from '../../assets/logo.png';

const Home = ({navigation}:any) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image source={Logo} style={styles.logo} />
        <ButtonX title="Começar" onPress={() => navigation.navigate('Form')} />
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap"

      },
    image: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
      width: 300,
      height: 300,
    }
});

export default Home;
