import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Access to Raya and the Last Dragon for with a Disney+ subscriptio.As of 03/26/21,the price and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login

const Container=styled.div`
    display:flex;
    align-items:top;
    justify-content:center;

    position:relative;
    height:calc(100vh-70px);
    &:before{
        background-image:url("/images/login-background.jpg");
        min-height:100vh;
        background-size:cover;
        background-repeat:no-repeat;
        position:absolute;
        top:0;
        bottom:0;
        content:"";
        left:0;
        right:0;
        opacity:0.8;
        
        z-index:-1;

    }
`
const CTA=styled.div`
    max-width:650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    flex-direction:column;

`
const CTALogoOne=styled.img`
  

`
const SignUp=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;


    &:hover{
        background:#0483ee;

    }
`
const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;


`
const CTALogoTwo=styled.img`
    width:90%;
  

`