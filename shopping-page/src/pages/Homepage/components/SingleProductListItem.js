import React, { useState ,useContext} from 'react';
import styled from 'styled-components';
import {Button } from '../components/Button';
import {cartContext} from '../../../context/cartContext'
import { favoritesContext } from '../../../context/favoritesContext';

export const SingleProductListItem = ({name,price,image})=>{
    const {addToCart }=useContext(cartContext);
	const {addToFavorites } =useContext(favoritesContext);
	const [ buttonColor, setButtonColor ] = useState(false);
	const handleColor = () => {
		setButtonColor((e) => !e);
		addToFavorites( name,price );
	};


    return(
        <Item>
            <img className='item-img' src={image}/>
            <h3>{name}</h3>
            <p><i>Price: </i>{price}$</p>
            <Button name={name}
                    price={price}
                    addToCart={addToCart}
                    addToFavorites={handleColor}

            />
        </Item>

    )
}

const Item = styled.div`
    width: 350px;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    margin: 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    box-shadow: -4px -2px 139px -9px rgba(0,0,0,0.19);
    padding: 15px
`
