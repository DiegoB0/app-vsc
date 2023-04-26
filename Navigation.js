import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Screens
import LoginScreen from './screens/LoginScreen';
import MenuFormScreen from './screens/MenuFormScreen';
import MenuScreen from './screens/MenuScreen';
import OrdersScreen from './screens/OrdersScreen';
import StaticsScreen from './screens/StaticsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MenuStack() {
	return (
		<Stack.Navigator
			initialRouteName="Menus"
			screenOptions={{
				headerTitleAlign: 'center',
				// headerTintColor: '#ffa100',
				headerTitleStyle: {
					color: 'goldenrod',
					fontWeight: 600,
					fontSize: 19,
				},
			}}
		>
			<Stack.Screen
				name="Menus"
				component={MenuScreen}
				options={({ navigation }) => ({
					headerShown: true,
					headerLeft: null,
					title: 'Menu',
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('MenuForm')}
							style={{ marginRight: 20 }}
						>
							<AntDesign name="pluscircle" size={32} color="#ffa100" />
						</TouchableOpacity>
					),
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('SignIn')}
							style={{
								marginRight: 20,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<MaterialIcons
								name="keyboard-arrow-left"
								size={32}
								color="gray"
							/>
							<Text
								style={{
									color: 'gray',
									fontSize: 16,
									fontWeight: 600,
								}}
							>
								Cerrar Sesion
							</Text>
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name="MenuForm"
				title="Menu"
				component={MenuFormScreen}
				options={({ navigation }) => ({
					headerShown: true,
					title: 'Menu',
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('Menus')}
							style={{
								marginRight: 20,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<MaterialIcons
								name="keyboard-arrow-left"
								size={32}
								color="#ffa100"
							/>
							<Text
								style={{
									color: '#ffa100',
									fontSize: 16,
									fontWeight: 600,
								}}
							>
								Regresar
							</Text>
						</TouchableOpacity>
					),
				})}
			/>
		</Stack.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Orders"
			screenOptions={{
				tabBarActiveTintColor: 'red',
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: 'goldenrod',
					fontWeight: 600,
					fontSize: 19,
				},
			}}
		>
			<Tab.Screen
				name="Orders"
				component={OrdersScreen}
				options={({ navigation }) => ({
					tabBarIcon: ({ color, size }) => (
						<Entypo name="home" size={32} color={color} />
					),
					tabBarBadge: 3,
					title: 'Ordenes',
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('SignIn')}
							style={{
								marginRight: 20,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<MaterialIcons
								name="keyboard-arrow-left"
								size={32}
								color="gray"
							/>
							<Text
								style={{
									color: 'gray',
									fontSize: 16,
									fontWeight: 600,
								}}
							>
								Cerrar Sesion
							</Text>
						</TouchableOpacity>
					),
				})}
			></Tab.Screen>
			{/* <Tab.Screen
				name="Statics"
				component={StaticsScreen}
				options={({ navigation }) => ({
					tabBarIcon: ({ color, size }) => (
						<Entypo name="bar-graph" size={32} color={color} />
					),
					title: 'Ventas',
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('SignIn')}
							style={{
								marginRight: 20,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<MaterialIcons
								name="keyboard-arrow-left"
								size={32}
								color="gray"
							/>
							<Text
								style={{
									color: 'gray',
									fontSize: 16,
									fontWeight: 600,
								}}
							>
								Cerrar Sesion
							</Text>
						</TouchableOpacity>
					),
				})}
			></Tab.Screen> */}
			<Tab.Screen
				name="Menu"
				title="Menu"
				component={MenuStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="fastfood" size={32} color={color} />
					),
					headerShown: false,
				}}
			></Tab.Screen>
		</Tab.Navigator>
	);
}

function MyStack() {
	return (
		<Stack.Navigator
			screenOptions={globalScreenOptions}
			initialRouteName="SignIn"
		>
			<Stack.Screen
				name="SignIn"
				component={LoginScreen}
				options={{
					title: 'Mi Chuy 🍔',
					headerStyle: { backgroundColor: '#ffa100' },
				}}
			/>
			<Stack.Screen
				name="Home"
				component={MyTabs}
				options={{
					headerShown: false,
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

export default function Navigation() {
	return (
		<NavigationContainer>
			<MyStack></MyStack>
		</NavigationContainer>
	);
}
