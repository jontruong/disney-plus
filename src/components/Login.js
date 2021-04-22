import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""></CTALogoOne>
                    <SignUp>
                        GET ALL THREE
                    </SignUp>
                    <Description> 
                        Sign up for Disney+ only.
                        $7.99/month or $79.99/year.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""></CTALogoTwo>
                    
                </CTA>
            <BackgroundImage></BackgroundImage>
            </Content>

        </Container>
    )
}

export default Login

const Container = styled.div`
overflow:hidden;
display:flex;
text-align:center;
height:100%;
flex-direction:column;
`

const Content = styled.div`
margin-bottom: 10vw;
width:100%;
min-height:100vh;
box-sizing:border-box;
flex-direction: column;
position:relative;
display:flex;
align-items: center;
justify-content:center;
padding: 80px 40px;
height: 100%;`

const BackgroundImage = styled.div`
height:100%;
background-position:top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/loginBackground.jpeg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;`

const CTA = styled.div`
max-width: 650px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 2vw;
margin-right: auto;
margin-top: 0;
margin-left: auto;`

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display:block;
width:100%;
transition-timing-function: ease-out;
transition: opacity 0.2s;`

const SignUp = styled.a`
font-weight:bold;
color: #f9f9f9;
background-color: #0063e5;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
margin-bottom: 10px;

:hover{
    background-color: #0483ee;
}
`

const Description = styled.div`
color: hsla(0,0%, 95.3%, 1);
font-size: 20px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;`

const CTALogoTwo = styled.img
`max-width:600px;
margin-bottom: 20px;
display:inline-block;
vertical-align:bottom;
width:100%;`