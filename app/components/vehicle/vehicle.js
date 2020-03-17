import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ComboInfo from '../ComboInfo';
import Loading from '../Loading';
import { URLS } from '../../utils';
import RNPickerSelect from 'react-native-picker-select';
import styles from './vehicle.styles';
import { Colors } from '../../utils/'

export default Vehicle = () => {

    const dataVehicle = [{
        key: 1,
        label: 'Automovil',
        value: 'AUT'
    },
    {
        key: 2,
        label: 'Motocicleta',
        value: 'MOT'
    },
    {
        key: 3,
        label: 'Pickup',
        value: 'CA1'
    }];

    const [vehicles, setVehicles] = useState([]);
    const [models, setModels] = useState([]);
    const [brands, setBrands] = useState([]);
    const [subBrands, setSubBrands] = useState([]);
    const [description, setDescription] = useState([]);

    const showModels = async () => {

        const urlModels = URLS.URL + `modelos?tipovehiculo=${vehicles}`;
        //console.log('URL Models ' + urlModels);
        await fetch(urlModels)
            .then((response) => response.json())
            .then((responseJson) => {
                var modelV = [];
                const info = responseJson.items;
                for (var i = 0; i < info.length; i++) {
                    const model = {
                        key: i,
                        label: responseJson.items[i],
                        value: responseJson.items[i]
                    }
                    modelV.push(model);
                    //console.log(model);
                }
                setModels(modelV);
                
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const showBrands = async () => {

        const urlBrands = URLS.URL + `modelos/${models}/marcas?tipovehiculo=${vehicles}`;
        //console.log('URL brands ' + urlBrands);
        await fetch(urlBrands)
            .then((response) => response.json())
            .then((responseJson) => {
                var brandV = [];
                const info = responseJson.items;
                for (var i = 0; i < info.length; i++) {
                    const brand = {
                        key: i,
                        label: responseJson.items[i].nombre,
                        value: responseJson.items[i].clave
                    }
                    brandV.push(brand);
                    //console.log(brand);
                }
                setBrands(brandV);
                
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const showSubBrands = async () => {

        const urlSubBrands = URLS.URL + `marcas/${brands}/modelos/${models}/submarcas?tipovehiculo=${vehicles}`;
        //console.log('URL ' + urlSubBrands);
        
        await fetch(urlSubBrands)
            .then((response) => response.json())
            .then((responseJson) => {
                
                var subbrandV = [];
                const info = responseJson.items;
                for (var i = 0; i < info.length; i++) {    
                    const subbrand = {
                        key: i,
                        label: responseJson.items[i].nombre,
                        value: responseJson.items[i].clave
                    }
                    subbrandV.push(subbrand);
                    //console.log(subbrandV);
                }
                setSubBrands(subbrandV);
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const showDescription = async () => {

        const urlDescription = URLS.URL + `marcas/${brands}/modelos/${models}/submarcas/${subBrands}/versiones?tipovehiculo=${vehicles}`;
        //console.log('URL ' + urlDescription);

        await fetch(urlDescription)
            .then((response) => response.json())
            .then((responseJson) => {
                var descriptionV = [];
                const info = responseJson.items;
                for (var i = 0; i < info.length; i++) {
                    const desc = {
                        key: i,
                        label: responseJson.items[i].nombre,
                        value: responseJson.items[i].clave
                    }
                    descriptionV.push(desc);
                    //console.log(descriptionV);
                }
                setDescription(descriptionV);
                
            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <View>
            <ComboInfo title={"Tipo de Vehículo"}>
                <RNPickerSelect
                    style={styles.picker}
                    onValueChange={(value) => setVehicles(value)}
                    items={dataVehicle}
                    placeholder={{
                        label: 'Selecciona Vehículo...',
                        value: 'vehicle',
                        key: 1000,
                        color: Colors.blue
                    }}
                    placeholderTextColor={Colors.blueApp}
                    doneText={'Aceptar'}
                    onDonePress={(value) => showModels(value)}
                />
            </ComboInfo>

            <ComboInfo title={"Modelo"}>
                <RNPickerSelect
                    style={styles.picker}
                    onValueChange={(value) => setModels(value)}
                    items={models}
                    placeholder={{
                        label: 'Selecciona Modelo...',
                        value: 'model',
                        key: 2000,
                        color: Colors.blue
                    }}
                    placeholderTextColor={Colors.blueApp}
                    doneText={'Aceptar'}
                    onDonePress={(value) => showBrands(value)}
                />
            </ComboInfo>

            <ComboInfo title={"Marca"}>
                <RNPickerSelect
                    style={styles.picker}
                    onValueChange={(value) => setBrands(value)}
                    items={brands}
                    placeholder={{
                        label: 'Selecciona Marca...',
                        value: 'brand',
                        key: 3000,
                        color: Colors.blue
                    }}
                    placeholderTextColor={Colors.blueApp}
                    doneText={'Aceptar'}
                    onDonePress={(value) => showSubBrands(value)}
                />
            </ComboInfo>

            <ComboInfo title={"SubMarca"}>
                <RNPickerSelect
                    style={styles.picker}
                    onValueChange={(value) => setSubBrands(value)}
                    items={subBrands}
                    placeholder={{
                        label: 'Selecciona SubMarca...',
                        value: 'subbrand',
                        key: 4000,
                        color: Colors.blue
                    }}
                    placeholderTextColor={Colors.blueApp}
                    doneText={'Aceptar'}
                    onDonePress={(value) => showDescription(value)}
                />
            </ComboInfo>

            <ComboInfo title={"Descripción del Vehículo"}>
                <RNPickerSelect
                    style={styles.picker}
                    onValueChange={(value) => setDescription(value)}
                    items={description}
                    placeholder={{
                        label: 'Selecciona Descripción...',
                        value: 'description',
                        key: 5000,
                        color: Colors.blue
                    }}
                    placeholderTextColor={Colors.blueApp}
                    doneText={'Aceptar'}
                    //onDonePress={(value) => showBrands(value)}
                />
            </ComboInfo>            
        </View>

    )
}