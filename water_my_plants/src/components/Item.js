import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const HeaderContainer = styled.div `
text-align: center;
margin-left: 50%;

`
const StyledContainer = styled.div ` 
display: flex;
flex-wrap: wrap;
background-color: ${prop => prop.theme.primaryColor};
justify-content: space-around;
`

const StyledItems = styled.div ` 
width: 30%;
border: 5px solid white;
padding: 5%;
margin-top: 5%;
margin-bottom: 5%;
`

const StyledImages = styled.img ` 
width: 80%;
height: 400px;
`



export default function Item () {
    const [plantData, setPlantData] = useState([])

    useEffect(()=>{
        axios
        .get('https://watermyplantunit4.herokuapp.com/plants/plants/')
        .then(response => {
            console.log(response.data)
            setPlantData(response.data)
        })
        .catch(error => {
            console.log("sorry no plants", error)
        })
    },[])

    return(
        <StyledContainer className = "plantList">
            {plantData.map(items => (
                <StyledItems >
               <h2>{items.nickname}</h2>
               <h3>{items.species}</h3>
               <h3>{items.waterfrequency}</h3>
               <StyledImages src = {items.imgurl} alt = "random plant"/>
               </StyledItems >
            ))}
        </StyledContainer>
    )
}