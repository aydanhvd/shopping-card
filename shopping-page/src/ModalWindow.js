import React, {useContext } from 'react';
import { cartContext } from './context/cartContext';
import styled from 'styled-components';


export const ModalWindow = () => {
    const{ modal,setModal } = useContext(cartContext);
	const handleModal = () => {
		setModal((e) => !e);
	};
	return (
		<ModalHolder>
			<ModalHeader>
			
			</ModalHeader>
			<p>You have remuved an item from your card</p>
			<StyledButton onClick={handleModal}>Confirm</StyledButton>
		</ModalHolder>
	);
};
const ModalHolder = styled.div`
	border: 1px solid white;
	width: 400px;
	color: white;
	border-radius: 4px;
	background-color: #eb3162;
`
const ModalHeader = styled.div`
	width: 100%;
	border-radius: 4px;
	background-color:#EDD0DD;
	height: 40px;
	display: flex;
	justify-content: flex-end;
`
const StyledButton = styled.button`
	width: 80%;
	background-color:#EDD0DD;
	color: #eb3162;
	border: 1px solid #EDD0DD;
	border-radius: 4px;
	padding: 10px;
	margin: 10px;
`