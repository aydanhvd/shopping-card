
import React,{useContext} from 'react'
import styled from 'styled-components';
import {productsContext} from '../../../context/products'
import {SingleProductListItem} from './SingleProductListItem'

export const ProductsList =()=>{
    const makeUps = useContext(productsContext);
    return(
        <List>
            {makeUps.map(({name,price,image})=>
            <SingleProductListItem 
                    key ={name} 
                    name={name}
                    price={price} 
                    image={image}
            />)}
        </List>
        
    )

}
const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px ;
`