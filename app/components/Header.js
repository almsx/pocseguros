import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from "./Header.styles";
import { Images } from "../utils/";

export default Header = ({ action, iconLeft }) => {
    return (
        <>
            <View style={styles.header}>
                {iconLeft &&
                    <>
                        <TouchableOpacity style={[styles.head, styles.headLeft]} onPress={action}>
                            <Image
                                source={Images.BACK}
                                style={styles.icon_back}
                            />
                        </TouchableOpacity>
                        <View style={styles.head}>
                            <Image
                                source={Images.LOGOGNP}
                                style={styles.icon_logo}
                            />
                        </View>
                        <View style={[styles.head, styles.headRight]} />
                    </>
                }
                {!iconLeft &&
                    <View style={styles.head}>
                        <Image
                            source={Images.LOGOGNP}
                            style={[styles.icon_logo, styles.icon_logo2]}
                        />
                    </View>
                }
            </View>
            <View style={styles.ghost}>
                <Image
                    source={Images.GHOST}
                    style={styles.icon_ghost}
                />
            </View>
        </>
    );
};