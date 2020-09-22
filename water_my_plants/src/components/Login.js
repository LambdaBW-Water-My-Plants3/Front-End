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

const StyledButtons = styled.button ` 
text-decoration: none;
`

const initialValues = {
    username: '',
    password: '',
}

const initialErrors = {
    username: '',
    password: '',
}


const initialDisabled = true

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
         props.history.push('/');
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
            <h1>Welcome Back</h1>
        <div className = "username">
            <label>Username:
                <input
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
                    type= "password"
                    name="password"
                    value={credentials.password}
                    onChange = {onChange}
                />
            </label>
        </div> 
        <div className = "errors">
            <div>{credentialErrors.username}</div>
            <div>{credentialErrors.password}</div>
        </div>
        <div className="buttons">
            <StyledButtons disabled={disabled}>Login</StyledButtons>
            <p>Don't have an account?</p><StyledButtons><Link to = "/signup">Sign Up Here</Link></StyledButtons>
        </div>   
        </form>
        </StyledContainer>
     )
     
    }


export default Login
