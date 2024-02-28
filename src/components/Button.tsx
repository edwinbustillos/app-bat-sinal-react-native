import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const Button = ({onPress, title}:any) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#393938', '#040401']}
                style={styles.linearGradient}>
                <Text style={styles.buttonYellow}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 4,
        margin: 10,
      },
      buttonYellow: {
        fontSize: 20,
        color: 'white',
      },
});

export default Button;