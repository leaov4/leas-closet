import React, { useState } from 'react'
import styled  from 'styled-components'
import ClosetForm from './ClosetForm'
import ClosetDisplay from './ClosetDisplay'

//This app uses two React features we haven't seen yet, React styled components and React hooks
//Because we learned that functional components are usually better than class components,
//the useState hook allows us to give state to functional components, yay!

//APP GOALS
//Database:
//SHIRTS: name, category, imageUrl
//PANTS: name, category, imageUrl)

//Components:
//FORM to add in a top and bottom
//CLOSET_DISPLAY that show a current top and bottom image, with arrow buttons to flip through
//tops and bottoms like a slideshow

//to be continued...
//SAVE button will save the currently displayed top and bottom as an outfit
//OUTFITS component will show saved outfits 

//to be continued...
//generate an outfit based on some characteristcs/extra fields of items(a dressy top and bottom, a neutral top and bottom, etc..)
//a model to hold OUTFITS, which are saved combos of tops and bottoms

function Closet(){

    function handleSubmitShirt(itemAdded) {
        console.log(itemAdded)
        //add item to store here 
    }
    function handleSubmitPants(itemAdded) {
        console.log(itemAdded.pants.url)
        //add item to store here 
      }

    return (
        <>
        <Container>
            <Title>Welcome to Lea's Closet</Title>
            <SubTitle>Add clothes to the closet with the form and use the arrows to see all of your outfit options. </SubTitle>
            <ClosetForm handleSubmitPants={handleSubmitPants} handleSubmitShirt={handleSubmitShirt}/>
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

