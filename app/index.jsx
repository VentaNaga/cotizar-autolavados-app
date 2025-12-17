import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import icon from '../assets/image/icon.png';
import { globalStyles, COLORS} from '../styles/globalStyles';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [items] = React.useState([
    { name: 'Exterior' },
    { name: 'Interior' },
    { name: 'Express' },
    { name: 'Detailing' },
  ]);

  return (
    <View style={{flex: 1, paddingTop: insets.top, backgroundColor: COLORS.bgDark}}>
        <Image source={icon} style={globalStyles.logo} />
        <View>
            <Text style={globalStyles.title}>¿Qué es lo que estás buscando?</Text>
        </View>

        <FlatGrid
            itemDimension={130}
            data={items}
            style ={globalStyles.gridView}
            spacing={10}
            renderItem={({ item }) => (
                <View style={[globalStyles.itemContainer, {backgroundColor: COLORS.bg}]}>
                    <Text style={[globalStyles.itemName, {color: COLORS.text}]}>{item.name}</Text>
                </View>
            )}
        />
    </View>
  );
}