import React, { useState } from 'react'
import styled from 'styled-components'

function ClosetForm(props) {
    console.log(props)
   
    const [shirt, setShirt] = useState({
        name: '',
        description: '',
        url: ''
    });
  
    const [pants, setPants] = useState({
        name: '',
        description: '',
        url: ''
    });
    
    function handleShirtChange(event){
        console.log(shirt.name, shirt.description)
        setShirt({
            ...shirt,
            [event.target.name]: event.target.value
        });
    }

    function handleShirtSubmit(event){
        event.preventDefault();
        
        props.handleSubmitShirt(shirt.url)
    }

    function handlePantsChange(event){
        console.log(pants.name, pants.description)
        setPants({
            ...pants,
            [event.target.name]: event.target.value
        });
    }

    function handlePantsSubmit(event){
        event.preventDefault();
        props.handleSubmitPants({pants})
    }


    return(
        <>
        <FormContainer>
            <div>Add a shirt to your closet. Give each item a name, a descrition, and an image:</div>
            <div className='inner-form-container'>
                <form onSubmit={handleShirtSubmit}>
                    <label htmlFor="name">name:</label>
                    <input name="name" type="text" value={shirt.name} onChange={handleShirtChange}/>
                    <label htmlFor="description">description:</label>
                    <input name="description" type="text" value={shirt.description} onChange={handleShirtChange}/>
                    <label htmlFor="imageUrl">imageUrl:</label>
                    <input name="url" type="text"  value={shirt.url} onChange={handleShirtChange}/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
            <div>Add a pants or a skirt to your closet:</div>
            <div className='inner-form-container'>
                <form onSubmit={handlePantsSubmit}>
                    <label htmlFor="name">name:</label>
                    <input name="name" type="text" value={pants.name} onChange={handlePantsChange}/>
                    <label htmlFor="description">description:</label>
                    <input name="description" type="text" value={pants.description} onChange={handlePantsChange}/>
                    <label htmlFor="imageUrl">imageUrl:</label>
                    <input name="url" type="text" value={pants.url} onChange={handlePantsChange}/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </FormContainer>
        </>
    )
}

export default ClosetForm

const FormContainer = styled.div`
    
    width: 80%;
    background-color: mistyrose;
    display: flex;
    flex-direction: column;
    items-align: center;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;

    .inner-form-container {
        padding: 20px;
        font-family: 'Pacifico', cursive;
        
    }
   
    form {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 100px;
        font-family: 'Pacifico', cursive;
        margin-top: 8px;
    }

`