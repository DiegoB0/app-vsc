import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MenuItem = ({ menu, handleDelete }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity
				onPress={() => navigation.navigate('MenuForm', { id: menu._id })}
			>
				<Text>nombre: {menu.name}</Text>
				<Text>precio: ${menu.price}</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{ flexDirection: 'row', alignItems: 'center' }}
				onPress={() => handleDelete(menu._id)}
			>
				<MaterialIcons name="delete" size={24} color="red" />
				<Text style={{ color: 'red', fontSize: 14, fontWeight: 600 }}>
					Eliminar
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: '#fff',
		padding: 25,
		marginHorizontal: 12,
		marginVertical: 8,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default MenuItem;
