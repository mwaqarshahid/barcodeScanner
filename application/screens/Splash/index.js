import React, { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';

const image = { uri: "https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926__340.png" };

const Splash = ({ navigation }) => {

    // after 2 seconds redirect to scan screen
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'scan' }],
            });
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Welcome to Waqar Shahid's Barcode Scanner</Text>
        </View>
    );
}

export default Splash;
