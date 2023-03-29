import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

//Screens

import GraphScreen from './screens/GraphScreen';
import LoginScreen from './screens/LoginScreen';
import ProductsList from './screens/ProductsScreen';

function MyStack() {
	return (
		<Stack.Navigator screenOptions={globalScreenOptions}>
			<Stack.Screen
				name="ProductsList"
				component={ProductsList}
				options={{
					title: 'Mi Chuy 🍔',
					headerStyle: { backgroundColor: 'red' },
				}}
			/>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{
					title: 'Mi Chuy 🍔',
					headerStyle: { backgroundColor: '#ffa100' },
				}}
			/>
			<Stack.Screen
				name="GraphScreen"
				component={GraphScreen}
				options={{
					title: 'Mi Chuy 🍔',
					headerStyle: { backgroundColor: 'red' },
				}}
			/>
		</Stack.Navigator>
	);
}

//Styles
const globalScreenOptions = {
	headerTitleStyle: { color: 'white', fontWeight: '800' },
	headerTintColor: 'white',
	headerTitleAlign: 'center',
};

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
