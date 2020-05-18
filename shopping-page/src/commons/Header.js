import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiSolidLeaf } from 'react-icons/gi';

export const Header = () => {
	return (
		<Container>
			<Logo>
				Idrix<GiSolidLeaf />
			</Logo>
			<Holder>
				<StyledNavlink exact to="/">Products</StyledNavlink>
				<StyledNavlink to="/cart">Cart</StyledNavlink>
				<StyledNavlink to="/favorites">Favorites</StyledNavlink>
				<Styledloglink to="">Log In</Styledloglink>
				<Styledloglink to="">Log out</Styledloglink>
			
			</Holder>
	
				
		</Container>
	);
};
const Logo = styled.div`
	color: white;
	font-size: 40px;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
`;
const Holder = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const Styledloglink = styled(NavLink)`
	text-transform: Uppercase;
	margin-left: 30px;
	color: white;
	text-decoration: none;
`

const Container = styled.header`
	padding: 20px;
	display: flex;
	justify-content: space-around;
	text-align: center;
	align-items: center;
	border: 1px solid white;
	background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
`;
const StyledNavlink = styled(NavLink)`
    width: 30%;
    margin 6px;
    color: white;
    text-decoration: none;
    text-transform: Uppercase;
    border: 1px solid white;
    border-radius: 10px;
    padding: 20px;
    font-size: 15px;
    transition: all .3s ease;
    &.active{
        border: 3px solid white;
        box-shadow: -1px 3px 71px -7px rgba(0,0,0,0.47);
    }
`;
