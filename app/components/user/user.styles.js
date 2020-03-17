import {
    StyleSheet, Dimensions
} from 'react-native';
import { Colors } from '../../utils/';

module.exports = StyleSheet.create({
    view: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    input: {
        marginBottom: 10
    },
    btnContainer: {
        marginTop: 20,
        width: Dimensions.get('window').width * 0.95,
        marginBottom: 20
    },
    btn: {
        backgroundColor: Colors.orange
    }
});