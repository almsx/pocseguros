import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Colors } from '../utils';
import styles from './ViewContainer.styles';

export default ViewContainer = ({ style, alignment, children, backgroundColor }) => {

    const theAlignment = alignment ? alignment : 'flex-start';
    const paddingTop = theAlignment === 'center' ? 0 : 0;

    if (backgroundColor === undefined) {
        backgroundColor = Colors.white;
    }

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
            <View style={[styles.container, { justifyContent: theAlignment, paddingTop }, { backgroundColor }, style]}>
                {children}
            </View>
            <StatusBar backgroundColor={Colors.titleApp} barStyle="dark-content" />
        </SafeAreaView>
    );
}
