import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MenuItem = ({ menu }) => {
	return (
		<View style={styles.itemContainer}>
			<Text>nombre: {menu.name}</Text>
			<Text>precio: ${menu.price}</Text>
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
	},
});

export default MenuItem;
