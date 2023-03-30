import React, { useEffect, useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import io from 'socket.io-client';
import { getProducts } from '../api/product';

const ProductsList = () => {
	const [orders, setOrders] = useState([]);

	// const socket = io('http://localhost:3003');
	const socket = io('http://172.20.101.143:3003');

	const loadProducts = async () => {
		const data = await getProducts();
		setOrders(data);
	};
	useEffect(() => {
		socket.on('data', (data) => {
			const newProduct = data.body;
			setOrders((order) => [...order, newProduct]);
		});
	}, []);

	useEffect(() => {
		loadProducts();
	}, []);

	const [hiddenOrders, setHiddenOrders] = useState([]);

	const handleHideOrder = (orderId) => {
		setHiddenOrders([...hiddenOrders, orderId]);
	};

	const isOrderHidden = (orderId) => {
		return hiddenOrders.includes(orderId);
	};

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			{orders.map((order) => (
				<View
					key={order._id}
					style={[styles.card, isOrderHidden(order.id) && styles.hiddenCard]}
				>
					<Text style={styles.orderNumber}>{order.orderNumber}</Text>
					<View style={styles.mealsContainer}>
						{order.meals.map((meal, index) => (
							<Text key={index} style={styles.meal}>
								{meal.name}: {meal.quantity}
							</Text>
						))}
					</View>
					<Text style={styles.paymentType}>{order.paymentType}</Text>
					<Text style={styles.price}>${order.price.toFixed(2)}</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => handleHideOrder(order.id)}
					>
						<Text style={styles.buttonText}>Listo</Text>
					</TouchableOpacity>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
	},
	orderNumber: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 5,
	},
	mealsContainer: {
		flexDirection: 'column',
		marginLeft: 10,
		marginBottom: 5,
	},
	meal: {
		fontSize: 14,
		marginBottom: 2,
	},
	quantity: {
		fontSize: 14,
		marginBottom: 2,
		color: '#888',
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		marginBottom: 5,
	},
	paymentType: {
		fontSize: 14,
		color: '#888',
		textAlign: 'right',
		marginRight: 10,
		marginBottom: 5,
	},
	button: {
		backgroundColor: '#ffa100',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 10,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default ProductsList;
