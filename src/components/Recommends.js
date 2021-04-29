import styled from 'styled-components';
import { Link } from 'react-router-dom';

import React from 'react'

const Recommends = () => {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <Link to ="/">
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/69C456BFF94D11002BE1794578265588C9BDC3B9019FA59DF58C2A6A5D12E6C8/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to ="/">
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72892D0461211A96E747A6B36E11239684D2D4AFB6CF013C209DB332F80719B4/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to ="/">
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/12D7D42AF8E5EF956721977F1315AE21B692293106D32FD4102AEFE539B21C64/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to ="/">
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Recommends

const Container = styled.div`
padding: 0 0 26px;

`

const Content= styled.div`
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media( max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr))
}
`
const Wrap = styled.div`
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px ;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

img {
inset: 0px;
display: block;
height: 100%;
object-fit: cover;
opacity: 1;
position: absolute;
width: 100%;
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