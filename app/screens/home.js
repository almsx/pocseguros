import React, { useState, useEffect } from 'react';
import ViewContainer from '../components/ViewContainer';
import ScrollContainer from '../components/ScrollContainer';
import styles from './home.styles';
import Header from '../components/Header';
import TitleSection from '../components/TitleSection';
import Vehicle from '../components/vehicle/vehicle';
import User from '../components/user/user';

export default function Home(props) {

    return (
        <ViewContainer style={styles.container}>
            <Header />
            <ScrollContainer style={styles.scroll}>
                <TitleSection style={styles.title} title={"Datos del conductor - Vehículo"} />
                <Vehicle />
                <TitleSection style={styles.title} title={"Datos del conductor - Habitual"} />
                <User />
            </ScrollContainer>
        </ViewContainer>
    )
}