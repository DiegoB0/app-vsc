import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { authUser } from '../api/auth';

const LoginScreen = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const navigation = useNavigation();

	const handleChange = (name, value) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			const userResponse = await authUser(user.email, user.password);
			if (userResponse.status == 200) {
				navigation.navigate('Home');
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<View>
			<Text style={{ fontSize: 22, marginTop: '20%', textAlign: 'center' }}>
				INICIAR SESION
			</Text>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '30%',
				}}
			>
				<View
					style={{
						width: '80%',
						marginBottom: 20,
					}}
				>
					<TextInput
						placeholder="Escriba su email..."
						placeholderTextColor="gray"
						// value={email}
						// onChangeText={setEmail}
						style={{
							borderWidth: 1,
							borderColor: '#ccc',
							padding: 10,
							borderRadius: 10,
							fontSize: 16,
						}}
						onChangeText={(text) => handleChange('email', text)}
						value={user.email}
					/>
				</View>
				<View style={{ width: '80%', marginBottom: 20 }}>
					<TextInput
						placeholder="Escriba su contraseña..."
						placeholderTextColor="gray"
						// value={password}
						// onChangeText={setPassword}
						secureTextEntry
						style={{
							borderWidth: 1,
							borderColor: '#ccc',
							padding: 10,
							borderRadius: 10,
							fontSize: 16,
						}}
						onChangeText={(text) => handleChange('password', text)}
						value={user.password}
					/>
				</View>
				<TouchableOpacity
					// onPress={() => navigation.navigate('Home')}
					onPress={handleSubmit}
					style={{
						backgroundColor: 'red',
						padding: 10,
						borderRadius: 10,
						width: '80%',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: '#fff',
							fontSize: 16,
							fontWeight: 600,
							borderRadius: 100,
						}}
					>
						INGRESAR
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => console.log('¿Olvido su contraseña?')}
					style={{ marginTop: 20 }}
				>
					<Text style={{ color: 'gray', fontSize: 16, fontWeight: 600 }}>
						¿Olvido su contraseña?
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginScreen;
