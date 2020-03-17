import React from 'react';
import { View, Text } from 'react-native';
import ComboInfo from '../ComboInfo';
import { Input, Button } from 'react-native-elements';
import styles from './user.styles';

export default function User(props) {
    return (
        <View>
            <ComboInfo title={'Edad'}>
                <Input
                    containerStyle={styles.input}
                    defaultValue={'32'}
                    rightIcon={{
                        type: 'material-community',
                        name: 'account-circle-outline',
                        color: '#c2c2c2'
                    }}
                    disabled={true}
                />
            </ComboInfo>
            <ComboInfo title={'Genero'}>
                <Input
                    containerStyle={styles.input}
                    defaultValue={'Masculino'}
                    rightIcon={{
                        type: 'material-community',
                        name: 'account-circle-outline',
                        color: '#c2c2c2'
                    }}
                    disabled={true}
                />
            </ComboInfo>
            <ComboInfo title={'Código Postal'}>
                <Input
                    containerStyle={styles.input}
                    defaultValue={'56344'}
                    rightIcon={{
                        type: 'material-community',
                        name: 'account-circle-outline',
                        color: '#c2c2c2'
                    }}
                    disabled={true}
                />
            </ComboInfo>
            <ComboInfo title={'Email'}>
                <Input
                    containerStyle={styles.input}
                    defaultValue={'alberto@ideashappy.com'}
                    rightIcon={{
                        type: 'material-community',
                        name: 'account-circle-outline',
                        color: '#c2c2c2'
                    }}
                    disabled={true}
                />
            </ComboInfo>
            <ComboInfo title={'Tipo de Teléfono'}>
                <Input
                    containerStyle={styles.input}
                    defaultValue={'Celular'}
                    rightIcon={{
                        type: 'material-community',
                        name: 'account-circle-outline',
                        color: '#c2c2c2'
                    }}
                    disabled={true}
                />
            </ComboInfo>
            <ComboInfo title={'Teléfono'}>
                <Input
                    containerStyle={styles.input}
                    defaultValue={'5531321143'}
                    rightIcon={{
                        type: 'material-community',
                        name: 'account-circle-outline',
                        color: '#c2c2c2'
                    }}
                    disabled={true}
                />
            </ComboInfo>
            <Button
                title="Cotizar"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                //onPress={updateDisplayName}
                //loading={isLoading}
            />
        </View>
    )
}