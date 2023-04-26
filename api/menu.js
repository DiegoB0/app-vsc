const API = 'http://localhost:3002/menu';

export const getMenus = async () => {
	const res = await fetch(API);
	return await res.json();
};

export const saveMenu = async (newMenu) => {
	// console.log(JSON.stringify(newMenu));
	console.log(newMenu);
	const res = await fetch(API, {
		method: 'POST',
		body: newMenu,
	});

	// return await res.json();
};
