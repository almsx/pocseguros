import React from 'react';
import { View, Text } from 'react-native';
import styles from './ComboInfo.styles';

export default ComboInfo = ({ title, children }) => {

    return (
        <View style={styles.card}>
            <View style={styles.container_reqTitle}>
                <Text style={styles.requiredTxt}>* </Text>
                <Text style={styles.txtCard}>{title}</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )

};