import React, { useState } from 'react'
import styled  from 'styled-components'
import ClosetForm from './ClosetForm'
import ClosetDisplay from './ClosetDisplay'


function Closet(){

    return (
        <>
        <Container>
            <Title>Welcome to Lea's Closet</Title>
            <SubTitle>Add clothes to the closet with the form and use the arrows to see all of your outfit options. </SubTitle>
            <ClosetForm /> 
            <ClosetDisplay />  
        </Container>
        </>
    )
}

export default Closet;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font-family: 'Pacifico', cursive;
`

const SubTitle = styled.h3`
  font-size: 1em;
  text-align: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 20px;
`

