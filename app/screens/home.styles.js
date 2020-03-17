import { Colors } from '../utils/';
import { StyleSheet, Dimensions } from 'react-native';

const heightHeader = Dimensions.get('window').height * 0.13;
const heightMenu = Dimensions.get('window').height * 0.22;
const heightFooter = Dimensions.get('window').height * 0.13;
const wh_Button = heightMenu * 0.6;

module.exports = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    txt: {
        color: Colors.blue,
        borderColor: Colors.blue,
        borderWidth: 2,
        height: 100, 
        width: 100
    },
    scroll: {
        width: 100,
        height: 100,
        borderColor: Colors.blue,
        borderWidth: 2
    },
    title: {
        backgroundColor: Colors.blue,
        color: Colors.white
    }
});