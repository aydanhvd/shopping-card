import React from 'react'
import styled from 'styled-components';

export const Footer =()=>{
    return (
        <Container>
            <h3>&copy; Idrix 2020</h3>
        </Container>
    );
}

const Container = styled.footer`
    padding: 10px;
    background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
    color: white;
    display: flex;
    justify-content: start;
    align-items: center;
`