import React from 'react';
import { StyleSheet } from 'react-native';

import LoginScreen from '../screen/LoginScreen';  // Adjusted the import statement
import AdminDashboard from '../screen/AdminDashboard';
import SelectHouseScreen from '../screen/SelectHouseScreen';
import ManageUsersScreen from '../screen/ManageUsersScreen';
import HomeScreen from '../screen/HomeScreen';
import SelectPatientsScreen from '../screen/SelectPatientsScreen';
import DetailsPlanFarma from '../screen/DetailsPlanFarma';
import DetailsUltimaMEd from '../screen/DetailsUltimaMEd';
import FinalizarJornada from '../screen/FinalizarJornada';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistreScreen from '../screen/RegistreScreen';
import UsuariosScreen from '../screen/UsuariosScreen';
import OperadoresScreen from '../screen/OperadoresScreen';
import DetailsOperador from '../screen/DetailsOperador';
import MapLoc from '../screen/MapLoc';
import ListAsistencia from '../screen/ListAsistencia';
import MapLocEntrada from '../screen/MapLocEntrada';
import DetailsUsuarios from '../screen/DetailsUsuarios';
import CardPlanFarmacologico from '../screen/CardPlanFarmacologico';
import DetailsPlanFarmacologico from '../screen/DetailsPlanFarmacologico';

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name='UsuariosScreen' component={UsuariosScreen} />
      <Stack.Screen name='OperadoresScreen' component={OperadoresScreen} />
      <Stack.Screen name='DetailsOperador' component={DetailsOperador} />
      <Stack.Screen name='MapLoc' component={MapLoc} />
      <Stack.Screen name='ListAsistencia' component={ListAsistencia} />
      <Stack.Screen name='MapLocEntrada' component={MapLocEntrada} />
      <Stack.Screen name='DetailsUsuarios' component={DetailsUsuarios}/>
      <Stack.Screen name='CardPlanFarmacologico' component={CardPlanFarmacologico}/>
      <Stack.Screen name='DetailsPlanFarmacologico' component={DetailsPlanFarmacologico}/>

      <Stack.Screen name="SelectHouse" component={SelectHouseScreen} />
      <Stack.Screen name="SelectPatients" component={SelectPatientsScreen} />
      <Stack.Screen name="ManageUsers" component={ManageUsersScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerLeft: () => null, // Esto quita el botón de retroceso
        }}/>
      <Stack.Screen name="DetailsPlanFarma" component={DetailsPlanFarma} />
      <Stack.Screen name="DetailsUltimaMEd" component={DetailsUltimaMEd} />
      <Stack.Screen name="FinalizarJornada" component={FinalizarJornada} />
      <Stack.Screen name="RegistreScreen" component={RegistreScreen} />

    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});