import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './login-validation/formSchema'
import {Link} from 'react-router-dom' 
import styled from 'styled-components'


const StyledContainer = styled.div ` 
background-color: ${props => props.theme.primaryColor};
padding: 10%;
border-radius: 10px;
color: ${props => props.theme.secondaryColor};
`

const StyledHeader = styled.h1 ` 
color: ${props => props.theme.headerColor};
`

const ErrorStyles = styled.div ` 
color: red;
font-size: 16px;
`

function UsernameInfo() {
    const username = document.getElementById('username')
    username.style.backgroundColor = 'lightblue'
}

function PasswordInfo (){
    const username = document.getElementById('password')
    username.style.backgroundColor = 'lightblue'
}


const SignUp = styled.h4 ` 
color: ${props => props.theme.secondaryColor};
`

const initialValues = {
  username: "",
  password: "",
};

const initialErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

const Login = (props) => {

    const [credentials, setCredentials] = useState(initialValues);
    const [credentialErrors, setCredentialErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)


     const login = e => {
       e.preventDefault();
       axios.post('https://watermyplantunit4.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
         headers: {
           // btoa is converting our client id/client secret into base64
           Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
           'Content-Type': 'application/x-www-form-urlencoded'
         }
       })
       .then(res => {
         console.log(res.data)
         localStorage.setItem('token', res.data.access_token);
         props.history.push('/item');
       })
       setCredentials(initialValues)
     }
     const inputChange = (name, value) => {
         validate(name, value)
         setCredentials({
             ...credentials, [name]: value
         })
     }
     const onChange = evt => {
         const {name, value} = evt.target
         inputChange(name, value)
     }

     const validate = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(valid =>{
            setCredentialErrors({
                ...credentialErrors, [name]: ""
            })
        })
        .catch(error =>{
            setCredentialErrors({
                ...credentialErrors, [name]:error.errors[0]
            })
        })
     }

     useEffect(()=>{
         schema.isValid(credentials)
         .then(valid =>{
             setDisabled(!valid)
         })
     },[credentials])


     return(
        <StyledContainer className = "loginContainer">
        <form className = "loginForm" onSubmit={login}>
            <StyledHeader>Welcome Back! 🌱</StyledHeader>
        <div className = "username">
            <label>Username:
                <input
                    id = "username"
                    onClick = {UsernameInfo}
                    type="text"
                    name="username"
                    value = {credentials.username}
                    onChange = {onChange}
                />
            </label>
        </div>
        <div className="password">
            <label>Password:
                <input
                    id = "password"
                    onClick = {PasswordInfo}
                    type= "password"
                    name="password"
                    value={credentials.password}
                    onChange = {onChange}
                />
            </label>
        </div> 
        <div className = "errors">
            <ErrorStyles className = "errors">{credentialErrors.username}</ErrorStyles>
            <ErrorStyles className = "errors">{credentialErrors.password}</ErrorStyles>
        </div>
        <div className="buttons">
            <div><button disabled={disabled}>Login</button></div>
            <p>Don't have an account?</p><div><Link to = "/signup"><SignUp>Sign Up Here</SignUp></Link></div>
        </div>   
        </form>
        
        </StyledContainer>
     )
     
    }


export default Login;
