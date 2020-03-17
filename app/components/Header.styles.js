import {
    StyleSheet, Dimensions
} from 'react-native';

module.exports = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    head: {
        flex: 1,
        height: 70,
        alignItems: 'center'
    },
    icon_logo: {
        marginTop: 10,
        width: 100,
        height: 45,
        alignSelf: 'center'
    },
    icon_back: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    headLeft: {
        justifyContent: 'center'
    },
    headRight: {
    },
    icon_ghost: {
        width: Dimensions.get('window').height * 0.95,
        height: 5
    }
});