import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontSize: 24, marginBottom: 30 }}>Login</Text>
			<View style={{ width: '80%', marginBottom: 20 }}>
				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
					style={{
						borderWidth: 1,
						borderColor: '#ccc',
						padding: 10,
						borderRadius: 5,
					}}
				/>
			</View>
			<View style={{ width: '80%', marginBottom: 20 }}>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					style={{
						borderWidth: 1,
						borderColor: '#ccc',
						padding: 10,
						borderRadius: 5,
					}}
				/>
			</View>
			<TouchableOpacity
				onPress={handleLogin}
				style={{
					backgroundColor: 'red',
					padding: 10,
					borderRadius: 5,
					width: '80%',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: '#fff', fontSize: 16 }}>Log In</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => console.log('Forgot password')}
				style={{ marginTop: 20 }}
			>
				<Text style={{ color: 'gray', fontSize: 16, fontWeight: 600 }}>
					¿Olvido su contraseña?
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;
