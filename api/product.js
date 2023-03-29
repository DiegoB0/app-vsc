const API = 'http://192.168.3.126:3002/products';

export const getProducts = async () => {
	const res = await fetch(API);
	return await res.json();
};
