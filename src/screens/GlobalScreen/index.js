
import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// "NewConfirmed":134333,
// "TotalConfirmed":8000607,
// "NewDeaths":3365,
// "TotalDeaths":441267,
// "NewRecovered":71408,
// "TotalRecovered":3769061

const GlobalScreen = ({navigatuion, route}) => {
   const {report} = route.params;
    return(
        <View style={styles.container}>
            <Card title="Relatório Covid-19">
            <ListItem title= "Novos confirmados" rightTitle={String=(report.NewConfirmed)}> </ListItem>
            <ListItem title= "Total confirmados" rightTitle={String=(report.TotalConfirmed)}> </ListItem>
            <ListItem title= "+ Mortos 24 horas" rightTitle={String=(report.NewDeaths)}> </ListItem>
            <ListItem title= "Total mortes" rightTitle={String=(report.TotalDeaths)}> </ListItem>
            <ListItem title= "Novos Recuperados" rightTitle={String=(report.NewRecovered)}> </ListItem>
            <ListItem title= "Total Recuperados" rightTitle={String=(report.TotalRecovered)}> </ListItem>
            </Card>
        </View>
    );
};


  export default GlobalScreen;