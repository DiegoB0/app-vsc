import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { deleteMenu, getMenus } from '../api/menu';
import MenuItem from './MenuItem';

const MenuList = () => {
	const [menu, setMenu] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const isFocused = useIsFocused();

	const loadMenus = async () => {
		const data = await getMenus();
		setMenu(data);
	};

	useEffect(() => {
		loadMenus();
	}, [isFocused]);

	const handleDelete = async (id) => {
		await deleteMenu(id);
		await loadMenus();
	};

	const renderItem = ({ item }) => {
		return <MenuItem menu={item} handleDelete={handleDelete} />;
	};
	const onRefresh = React.useCallback(async () => {
		setRefreshing(true);
		await loadMenus();
		setRefreshing(false);
	});

	return (
		<FlatList
			data={menu}
			renderItem={renderItem}
			style={{ marginTop: '10%' }}
			refreshControl={
				<RefreshControl
					onRefresh={onRefresh}
					refreshing={refreshing}
					colors={['red', 'yellow']}
					progressBackgroundColor="gray"
				/>
			}
		></FlatList>
	);
};

export default MenuList;
