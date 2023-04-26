import React, { useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { saveMenu } from '../api/menu';

const MenuFormScreen = ({ navigation }) => {
	const [menu, setMenu] = useState({
		name: '',
		price: '',
	});

	const handleChange = (name, value) => {
		setMenu({ ...menu, [name]: value });
	};

	const handleSubmit = () => {
		saveMenu(menu);
		// console.log(menuSaved);

		// navigation.navigate('Menu');
	};

	return (
		<View>
			<Text style={{ fontSize: 22, textAlign: 'center', marginTop: '10%' }}>
				{' '}
				AGREGAR COMIDA AL MENU{' '}
			</Text>

			<View style={style.container}>
				<TextInput
					placeholder="Escribe el nombre de la comida"
					placeholderTextColor="gray"
					style={style.input}
					onChangeText={(text) => handleChange('name', text)}
				></TextInput>

				<TextInput
					placeholder="Escribe el precio de la comida"
					placeholderTextColor="gray"
					style={style.input}
					onChangeText={(text) => handleChange('price', text)}
				></TextInput>

				<TouchableOpacity
					onPress={handleSubmit}
					style={{
						backgroundColor: 'red',
						padding: 10,
						borderRadius: 10,
						width: '80%',
						marginTop: '8%',
						alignSelf: 'center',
					}}
				>
					<Text
						style={{
							color: '#fff',
							fontSize: 16,
							fontWeight: 600,
							textAlign: 'center',
						}}
					>
						GUARDAR
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '12%',
	},
	input: {
		width: '80%',
		fontSize: 16,
		marginTop: '5%',
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		borderRadius: 10,
	},
});

export default MenuFormScreen;
