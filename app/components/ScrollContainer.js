import React from 'react';
import { ScrollView } from 'react-native';
import styles from './ScrollContainer.styles';

export default ScrollContainer = ({ children, backgroundColor }) => {
    return (
        <ScrollView style={[styles.safeArea, { backgroundColor }]}>
            {children}
        </ScrollView>
    )
}