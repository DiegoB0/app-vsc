const API = 'http://locslhost:3002/auth/login';

export const authUser = async () => {
	requestOptions = {
		method: 'POST',
	};
	const res = await fetch(API, requestOptions);
	return await res.json();
};
