import React, { useEffect, useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { getMenu, saveMenu, updateMenu } from '../api/menu';

const MenuFormScreen = ({ navigation, route }) => {
	const [menu, setMenu] = useState({
		name: '',
		price: '',
	});

	const [edit, setEdit] = useState(false);

	const handleChange = (name, value) => {
		setMenu({ ...menu, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			if (!edit) {
				await saveMenu(menu.name, menu.price);
			} else {
				await updateMenu(route.params.id, menu.name, menu.price);
			}
			navigation.navigate('Menus');
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (route.params && route.params.id) {
			setEdit(true);
			(async () => {
				const menu = await getMenu(route.params.id);
				setMenu({ name: menu.name, price: menu.price });
			})();
		}
	}, []);

	return (
		<View>
			{!edit ? (
				<Text style={{ fontSize: 22, textAlign: 'center', marginTop: '10%' }}>
					{' '}
					AGREGAR COMIDA AL MENU{' '}
				</Text>
			) : (
				<Text style={{ fontSize: 22, textAlign: 'center', marginTop: '10%' }}>
					{' '}
					ACTUALIZAR COMIDA DEL MENU{' '}
				</Text>
			)}

			<View style={style.container}>
				<TextInput
					placeholder="Escribe el nombre de la comida"
					placeholderTextColor="gray"
					style={style.input}
					onChangeText={(text) => handleChange('name', text)}
					value={menu.name}
				></TextInput>

				<TextInput
					placeholder="Escribe el precio de la comida"
					placeholderTextColor="gray"
					style={style.input}
					onChangeText={(text) => handleChange('price', text)}
					value={menu.price}
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
