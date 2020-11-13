import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchShirts } from './redux/shirts';
import { fetchPants } from './redux/pants';

function ClosetDisplay({pants, fetchPants, shirts, fetchShirts}) {

    const [shirtIndex, setShirtIndex] = useState(0);
    const [pantsIndex, setPantsIndex] = useState(0);
    let pantsImages = [];
    let shirtImages = [];
    
    useEffect(() => {
        fetchPants();
        fetchShirts();
      }, []);

    pants.forEach(item => {
        pantsImages.push(item.url)
    })
    
    shirts.forEach(item => {
        shirtImages.push(item.url)
    })
  
    function onClickLeftShirt(){
        if ( shirtIndex > 0){
            let i = shirtIndex - 1;
            setShirtIndex(i)
        } else {
            setShirtIndex(shirtImages.length-1)
        }
    }

    function onClickRightShirt(){
        console.log("props!!", pants)
        if ( shirtIndex < shirtImages.length-1){
            let i = shirtIndex + 1;
            setShirtIndex(i)
        } else if ( shirtIndex >= shirtImages.length-1) {
            setShirtIndex(0)
        }
    }

    function onClickLeftPants(){
        if ( pantsIndex > 0){
            let i = pantsIndex - 1;
            setPantsIndex(i)
        } else {
            setPantsIndex(pantsImages.length-1)
        }
    }

    function onClickRightPants(){
        if ( pantsIndex < pantsImages.length-1){
            let i = pantsIndex + 1;
            setPantsIndex(i)
        } else if ( pantsIndex >= pantsImages.length-1) {
            setPantsIndex(0)
        }
    }

    return(
        <>
        <ClosetDisplayStyles>
            <div>Display goes here</div>
            <div className="row">
                <button className="go-left" onClick={onClickLeftShirt}>{'<'}</button>
                <img src={shirtImages[shirtIndex]} width="30%" height="auto"/>
                <button className="go-right" onClick={onClickRightShirt}>{'>'}</button>
            </div>
            <div className="row">
                <button className="go-left" onClick={onClickLeftPants}>{'<'}</button>
                <img src={pantsImages[pantsIndex]} width="30%" height="auto"/>
                <button className="go-right" onClick={onClickRightPants}>{'>'}</button>
            </div>
        </ClosetDisplayStyles>
        </>
    )
}

const mapState = state => {
    return {
      pants: state.pantsReducer,
      shirts: state.shirtReducer
    }
}
  
export default connect(mapState, {fetchPants, fetchShirts})(ClosetDisplay)
  
const ClosetDisplayStyles = styled.div`
   
   .row{
       display: flex;
       justify-content: center;
   }
    
    
    button {
        border:none;
        background-color:transparent;
        outline:none;
        color: white;
        font-weight: bold;
        font-size: 50px;
    }

    button:hover {
        color: grey;
    }

`


