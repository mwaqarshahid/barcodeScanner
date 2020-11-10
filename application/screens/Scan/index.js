import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

const Scan = ({ navigation }) => {

    // on successfully scanning, navigate to results screens
    const onBarcodeScanned = (code) => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'result', params: { 'code': code } }],
        });
    }

    return (
        <View style={styles._mainContainer}>
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                autoFocus='on'
                onBarCodeRead={onBarcodeScanned}
            />
        </View>
    );
}

export default Scan;
