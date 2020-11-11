import React, { useState } from 'react'
import styled  from 'styled-components'
import ClosetForm from './ClosetForm'
import ClosetDisplay from './ClosetDisplay'

//This app uses two new React features, React styled components and React hooks
//Because we learned that functional components are usually better than class components,
//the useState hook allows us to give state to functional components, yay!
//styled components allow us to get specific with our styling and define styles for components without
//having everything mixed in one css file, yay!

//APP GOALS
//Database:
//SHIRTS: name, category, imageUrl
//PANTS: name, category, imageUrl

//Components:
//FORM to add in a top and bottom
//CLOSET_DISPLAY that show a current top and bottom image, with arrow buttons to flip through
//tops and bottoms like a slideshow

//to be continued...
//most importantly-need to research more how to use store with functional components and useState hook!
//so I can connect the database I have seeded and utilize my routes/models.
//a SAVE button that will save the currently displayed top and bottom as an outfit
//an OUTFITS component will show saved outfits 
//generate an outfit based on some characteristcs/extra fields of items(a dressy top and bottom, a neutral top and bottom, etc..)
//a model to hold OUTFITS, which are saved combos of tops and bottoms


const shirtImages = ['https://aritzia.scene7.com/is/image/Aritzia/large/f20_07_a03_74147_3030_on_c.jpg', 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_03_a01_73538_19049_off_a.jpg', 'https://aritzia.scene7.com/is/image/Aritzia/large/s20_03_a01_66393_7640_off_a.jpg','https://aritzia.scene7.com/is/image/Aritzia/large/s20_07_a01_76995_12269_off_a.jpg']

function Closet(){

   const [currShirts, setCurrShirts] = useState(shirtImages);
   
   //in this function we get values from form, and ideally want to add to current 
   //images, and pass down to props to closet dipslay
    function handleSubmitShirt(itemAdded) {

        //add item to store here 
        //add to props
        //pass down props to display
       let added = itemAdded.shirt.url
        let len = currShirts.length;
        setCurrShirts({
          ...currShirts,
         // [len] : itemAdded
         added
        })
        console.log("currShirts", currShirts)
    }

    function handleSubmitPants(itemAdded) {
        console.log(itemAdded.pants.url)
        //add item to store here 
        //pass down current pants images
      }

    return (
        <>
        <Container>
            <Title>Welcome to Lea's Closet</Title>
            <SubTitle>Add clothes to the closet with the form and use the arrows to see all of your outfit options. </SubTitle>
            <ClosetForm handleSubmitPants={handleSubmitPants} handleSubmitShirt={handleSubmitShirt}/> 
            <ClosetDisplay/>  
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

