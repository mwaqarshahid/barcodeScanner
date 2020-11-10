import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from './styles';

const Result = ({ navigation, route }) => {

    const { code } = route.params;

    // function to go to scan screen again
    const onScanAgainClick = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'scan' }],
        });
    }
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // calling API inside useEffect hook
    useEffect(() => {
        fetch(`https://barcode.monster/api/${code.type}`)
            .then((response) => setData(response))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>API Result</Text>
            {isLoading ? <ActivityIndicator /> : (
                <View>
                    <Text style={styles.text}>1. Barcode Type: {data._bodyBlob._data.name}</Text>
                    <Text style={styles.text}>2. Barcode Data: {data._bodyBlob._data.blobId}</Text>
                </View>
            )}
            <TouchableOpacity
                onPress={onScanAgainClick}
                style={styles.button}>
                <Text style={{ color: 'white' }}>SCAN AGAIN</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Result;
