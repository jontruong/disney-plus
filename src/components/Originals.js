import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Originals = () => {
    return (
        <Container>
        <h4>Originals</h4>
        <Content>
            <Wrap>
            <Link to ="/">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BCFB7A813E9037EEAB86851852F83C94C5CD3105F7C6E51DBE2E43CD9945C37/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
            </Link>
            </Wrap>
            <Wrap>
            <Link to ="/">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
            </Link>
            </Wrap>
            <Wrap>
            <Link to ="/">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/277C70BE07BBFAD1A5B452BE95931E4AF066D6741ED43BC45AE676D6C7B32300/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
            </Link>
            </Wrap>
            <Wrap>
            <Link to ="/">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7EBAD9ACDF30C67D314C86F8C64886DE82BD41C0C97D29EAD46CF074FD7FA67E/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
            </Link>
            </Wrap>
        </Content>
        
    </Container>
    )
}

const Container = styled.div`
padding: 0 0  26px`;
const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap: 25px;
gap: 25px;

@media( max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr))
}`
const Wrap = styled.div`
padding-top: 56.25%;
border: 3px solid rgba( 249, 249, 249, 0.1);
position: relative;
overflow: hidden;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
border-radius: 10px; 
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor: pointer;

img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    z-index: 1;
    top:0;
}

&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8)
}

`

export default Originals
