import React,{useState,useContext} from 'react'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';



export const Button =({name,price,id,addToFavorites,addToCart})=>{
   
    return(
        <Holder>
			<StyledButton onClick={()=>addToCart( name, price )}
            >Add to cart</StyledButton>
			<StyledFavButton onClick={()=>addToFavorites(name, price)}>
			Favorite<FaStar/>
			</StyledFavButton>
		</Holder>

    );
}
const Holder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
const StyledButton = styled.button`
    padding: 15px;
    width: 45%;
    margin-bottom: 15px;
	border-radius: 10px;
	background-color: #fd748e;
	border: 1px solid white;
	color: white;
    font-size: 15px;
    align-items: center;
    display: flex;
    justify-content: center
`
const StyledFavButton = styled.button`
    padding: 15px;
    width: 45%;
    margin-bottom: 15px;
	border-radius: 10px;
	background-color: #fc7cad;
	border: 1px solid white;
	color: white;
    font-size: 15px;
    align-items: center;
    display: flex;
    justify-content: center
`