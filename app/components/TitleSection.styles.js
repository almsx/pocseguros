import {
    StyleSheet, Dimensions
} from 'react-native';
import { Colors } from '../utils/';

module.exports = StyleSheet.create({
    titleCard: {
        width: Dimensions.get('window').width * 0.95,
        height: 32,
        borderColor: Colors.blueApp,
        borderWidth: 3,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    txtCard: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
});