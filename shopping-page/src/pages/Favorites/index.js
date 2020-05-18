import React, { useContext, useState } from 'react';
import { Layout } from '../../commons';
import { favoritesContext } from '../../context/favoritesContext';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const Favorites = () => {
	const { favorites, setFavorites } = useContext(favoritesContext);
	console.log(favorites);
	const removeFromFavorites = (name) => {
		setFavorites((favorites) => favorites.filter((item) => item.name !== name));	
	};

	return (
		<Layout>
			<FavoritesHolder>
				<StyledHeading>Favorites</StyledHeading>
				{favorites.map(({ image, name, price}) => (
					<FavoritesItem key={name}>
						<img src={image} />
						<h4>{name}</h4>
						<i>price:{price}$</i>
						<br />
						<StyledButton onClick={() => removeFromFavorites(name)}><FaStar/></StyledButton>
					</FavoritesItem>
				))}
			</FavoritesHolder>
		</Layout>
	);
};

const FavoritesHolder = styled.div`
	margin: 10px;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const StyledHeading = styled.h1`
	background-color: #eb3161;
	color: white;
	margin: 60px, auto, 20px, auto;
	width: 160px;
	padding: 5px;
`;
const FavoritesItem = styled.div`
	width: 80%;
	padding: 10px;
	margin:10px;
	border: 1px solid white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	border: 1px solid grey;
`;
const StyledButton = styled.button`
	padding: 15px;
	border-radius: 10px;
	background-color: #eb3161;
	box-shadow: -4px -2px 139px -9px rgba(0,0,0,0.19);
	border: 1px solid white;
	color: white;
	margin: 15px;
	font-size: 15px;
`;
