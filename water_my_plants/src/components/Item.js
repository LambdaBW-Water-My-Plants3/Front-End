import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'



const StyledContainer = styled.div ` 
display: flex;
flex-wrap: wrap;
background-color: ${prop => prop.theme.primaryColor};
justify-content: space-around;
`

const StyledItems = styled.div ` 
width: 30%;
border: 10px solid white;
border-radius: 10px;
padding: 5%;
margin-top: 5%;
margin-bottom: 5%;
color: ${prop => prop.theme.headerColor};
`

const StyledImages = styled.img ` 
width: 80%;
height: 400px;
border: 5px solid ${prop => prop.theme.secondaryColor};
border-radius: 10px;
margin-top: 5%;
`
function ImageSize() {
    const image = document.getElementsByClassName("plantimage")
    for (let i = 0; i < image.length; i++){
    image[i].style.height = "700px"
    image[i].style.width = "100%"
    }
}

function ImageSizeLeave() {
    const image = document.getElementsByClassName("plantimage")
    for (let i = 0; i< image.length; i++ ){
        image[i].style.height = "400px"
        image[i].style.width = "80%"
    }
}

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
               <StyledItems>
               <h2>{items.nickname}</h2>
               <h3>{items.species}</h3>
               <h3>{items.waterfrequency}</h3>
            <StyledImages onMouseOver = {ImageSize} onMouseLeave = {ImageSizeLeave} className = "plantimage" src = {items.imgurl} alt = "random plant"/>
               </StyledItems >
            ))}
        </StyledContainer>
    )
}