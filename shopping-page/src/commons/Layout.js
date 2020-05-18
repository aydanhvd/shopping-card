import React from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import { Footer } from './Footer';


export const Layout =({children})=>{
    return(
        <Container>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 1000px
    margin: 0 auto;

`
const Content = styled.main`
    flex-grow: 1; 
    align-tems: center;
    text-align: center;
`