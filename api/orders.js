const API = 'http://localhost:3002/orders';

export const getOrders = async () => {
	const res = await fetch(API);
	return await res.json();
};
