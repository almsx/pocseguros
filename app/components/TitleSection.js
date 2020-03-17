import React from 'react';
import { View, Text } from 'react-native';
import styles from './TitleSection.styles';

export default TitleSection = ({ style, title }) => {
    return (
        <View style={[styles.titleCard, style]}>
            <Text style={styles.txtCard}>{title}</Text>
        </View>
    )
}