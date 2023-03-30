// const API = 'http://localhost:3002/products';
const API = 'http://172.20.101.143:3002/products';

export const getProducts = async () => {
	const res = await fetch(API);
	return await res.json();
};
