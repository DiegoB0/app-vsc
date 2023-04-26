const API = 'http://localhost:3002/auth/login';

export const authUser = async (email, password) => {
	const res = await fetch(API, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	// console.log(res.status);
	return res;
};
