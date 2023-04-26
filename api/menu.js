const API = 'http://localhost:3002/menu';

export const getMenus = async () => {
	const res = await fetch(API);
	return await res.json();
};

export const getMenu = async (id) => {
	const res = await fetch(`${API}/${id}`);
	return await res.json();
};

export const saveMenu = async (menuName, menuPrice) => {
	const price = parseInt(menuPrice);
	const res = await fetch(API, {
		method: 'POST',
		body: JSON.stringify({
			name: menuName,
			price: price,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await res.json();
};

export const deleteMenu = async (id) => {
	await fetch(`${API}/${id}`, {
		method: 'DELETE',
	});
};

export const updateMenu = async (id, menuName, menuPrice) => {
	const price = parseInt(menuPrice);
	await fetch(`${API}/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			name: menuName,
			price: price,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
