import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { getMenus } from '../api/menu';
import MenuList from '../components/MenuList';

const MenuScreen = () => {
	const [menu, setMenu] = useState([]);

	const navigation = useNavigation();

	const loadMenus = async () => {
		const data = await getMenus();
		setMenu(data);
	};

	useEffect(() => {
		loadMenus();
	}, []);

	return (
		<ScrollView>
			<Text style={{ fontSize: 22, textAlign: 'center', marginTop: '10%' }}>
				LISTA DEL MENU
			</Text>
			<MenuList menu={menu} />
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
