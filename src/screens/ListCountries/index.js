import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import {ListItem} from 'react-native-elements';


const ListCountries = ({navigation, route}) => {
    const {countries} = route.params;

const callReport = (country) => navigation.navigate('Country', {report : country, name: country});

    return(
        <View style={styles.container}>
            <FlatList
                data={countries}
                renderItem={({item, index}) => (
                    <ListItem key={index}
                    onPress= {() => callReport(item)}
                     title={item.Country} 
                     subtitle={`Mortes: ${item.TotalDeaths}`} 
                     subtitleStyle= {styles.subtitleStyle}
                     bottomDivider
                      chevron />
                )}
            ></FlatList>
        </View>
    );

};

export default ListCountries;