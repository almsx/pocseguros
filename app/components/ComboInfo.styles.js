import {
    StyleSheet, Dimensions
} from 'react-native';
import { Colors } from '../utils/';

module.exports = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.95,
        borderColor: Colors.grayBack,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'column'
    },
    container_reqTitle: {
        flexDirection: 'row'
    },
    requiredTxt: {
        color: Colors.orange,
        fontSize: 30,
        fontWeight: 'bold',
    },
    txtCard: {
        color: '#000',
        fontSize: 18,
        marginBottom: 10
    },
    picker: {
        width: 100,
        height: 100
    }
});