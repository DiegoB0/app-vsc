import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import MenuList from '../components/MenuList';

const MenuScreen = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Text style={{ fontSize: 22, textAlign: 'center', marginTop: '10%' }}>
				LISTA DEL MENU
			</Text>
			<MenuList />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default MenuScreen;
