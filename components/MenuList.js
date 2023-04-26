import React from 'react';
import { FlatList, Text, View } from 'react-native';

import MenuItem from './MenuItem';

const MenuList = ({ menu }) => {
	const renderItem = ({ item }) => {
		console.log(item);
		return <MenuItem menu={item} />;
	};

	return (
		<FlatList
			data={menu}
			renderItem={renderItem}
			style={{ marginTop: '10%' }}
		></FlatList>
	);
};

export default MenuList;
