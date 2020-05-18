import React, { useContext, useState } from 'react';
import { Layout } from '../../commons';
import { cartContext } from '../../context/cartContext';
import { ModalWindow } from '../../ModalWindow'
import styled from 'styled-components';

export const Cart = () => {
	const { cart, setCart } = useContext(cartContext);
	const{ modal,setModal, handleModal } = useContext(cartContext);
	console.log(cart);
	const removeFromCart = (name, count) => {
		if (count > 1) {
			setCart((cart) =>
				cart.map((item) => {
					if (item.name === name) {
						return {
							...item,
							count: item.count - 1
						};
					}
					return item;
				})
			);
		} else {
			setCart((cart) => cart.filter((item) => item.name !== name));
		}
		if(!modal){
			handleModal();
		};
	};

	return (
		<Layout>
			<CartHolder>
				{modal&&<ModalWindow/>}
				{cart.map(({ name, price,count }) => (
					<CartItem key={name}>
						<h4>{name}</h4>
						<p>Quantity:{count}</p>
						<i>price:{price}$</i>
						<br />
						<StyledButton onClick={() => removeFromCart(name, count)}> ✖ </StyledButton>
					</CartItem>
				))}
				
				<Total>
					<h3>
						Total:<br/>
						<span>{cart.reduce((total, { price, count }) => total + price * count, 0)}$</span>
					</h3>
					<StyledButton>Checkout</StyledButton>
				</Total>
				</CartHolder>
				
			
	
		</Layout>
	);
};

const CartHolder = styled.div`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Total = styled.div`
	padding: 10px;
	width: 80%;
	color: #eb3161;
	display: flex;
	font-size: 20px;
	flex-direction: column;
	margin: 4px;
	justify-content: center;
	border: 1px solid grey;
	border-radius: 4px;
`
const StyledButton= styled.button`
	padding: 15px;
	border-radius: 10px;
	background-color: #eb3161;
	border: 1px solid white;
	color: white;
	margin: 15px;
	font-size: 15px;

`
const CartItem = styled.div`
	margin-bottom: 10px;
	width: 80%;
	font-size: 20px;
	border: 1px solid white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 4px;
	border: 1px solid grey;
	
`;
