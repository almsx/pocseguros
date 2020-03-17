import {
    StyleSheet
} from 'react-native';
import { Colors } from '../utils/'

module.exports = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: Colors.blue,
        borderWidth: 2,
        borderRadius: 10
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.blue,
        textTransform: "uppercase",
        marginTop: 10
    }
});