import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles, COLORS} from '../styles/globalStyles';
import MapPin from '../assets/svg/map-pin.svg';
import ChevronDown from '../assets/svg/chevron-down.svg';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const seleccionVehiculo = [
    { id: 1, label: 'SUV' , image: require('../assets/image/SUV.png')},
    { id: 2, label: 'Sedan' , image: require('../assets/image/Sedan.png')},
    { id: 3, label: 'City-Car' , image: require('../assets/image/City-car.png')},
    { id: 4, label: 'VAN' , image: require('../assets/image/VAN.png')},
  ];

  return (
    <View style={{flex: 1, paddingTop: insets.top, backgroundColor: COLORS.highlight}}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MapPin width={24} height={24} color={COLORS.primary} style={{marginLeft: 10}} />
          {/* Se requiere poder cambiar la ubicacion manualmente */}
          {/*Se requiere que esta ubicacion sea dinamica*/}
          <Text style={globalStyles.location}>Pudahuel, Santiago. </Text>
          <ChevronDown width={24} height={24} color={COLORS.primary} style={{marginLeft: -5, marginTop: 8}} />
        </View>
        <View>
          <Text style={globalStyles.text}>Seleccione su tipo de vehículo:</Text>
        </View>
        <View style={globalStyles.container}>
          {seleccionVehiculo.map((seleccionVehiculo) =>(
            <TouchableOpacity key={seleccionVehiculo.id} style={[globalStyles.itemcontainer, {borderColor: COLORS.primary}]} onPress={() => console.log(seleccionVehiculo.label)}>
              <View>
                <Image
                  source={seleccionVehiculo.image}
                  style={globalStyles.containerImage}
                  resizeMode='contain'
                />
              </View>
              <Text>{seleccionVehiculo.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View>
            <Text style={globalStyles.title}>¿Qué es lo que estás buscando?</Text>
        </View>
    </View>
  );
}