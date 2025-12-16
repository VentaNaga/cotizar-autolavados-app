import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import icon from '../assets/image/icon.png';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [items] = React.useState([
    { name: 'Exterior' },
    { name: 'Interior' },
    { name: 'Express' },
    { name: 'Detailing' },
  ]);

  return (
    <View style={{flex: 1, paddingTop: insets.top}}>
        <Image source={icon} style={styles.logo} />
        <View>
            <Text style={styles.title}>¿Qué es lo que estás buscando?</Text>
        </View>

        <FlatGrid
            itemDimension={130}
            data={items}
            style ={styles.gridView}
            spacing={10}
            renderItem={({ item }) => (
                <View style={[styles.itemContainer, {backgroundColor: '#3a45adff'}]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    itemContainer: {
        justifyContent: 'flex-center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
})