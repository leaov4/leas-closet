import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchShirts } from './redux/shirts';
import {fetchPants} from './redux/pants';

const shirtImages = ['https://aritzia.scene7.com/is/image/Aritzia/large/f20_07_a03_74147_3030_on_c.jpg', 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_03_a01_73538_19049_off_a.jpg', 'https://aritzia.scene7.com/is/image/Aritzia/large/s20_03_a01_66393_7640_off_a.jpg','https://aritzia.scene7.com/is/image/Aritzia/large/s20_07_a01_76995_12269_off_a.jpg']

function ClosetDisplay({pants, fetchPants}) {

    const [shirtIndex, setShirtIndex] = useState(0);
    const [pantsIndex, setPantsIndex] = useState(0);

    useEffect(() => {
        fetchPants();
      }, []);

    let pantsImages = [];
    
    pants.forEach(item => {
        pantsImages.push(item.url)
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
      pants: state.pantsReducer.pants
    }
}
  
export default connect(mapState, {fetchPants})(ClosetDisplay)
  
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


