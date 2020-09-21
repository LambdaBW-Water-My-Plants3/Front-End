import React, {useState} from 'react'
import axios from 'axios'



const Login = (props) => {
    const [credentials, setCredentials] = useState({username: '', password: ''});
     const login = e => {
       e.preventDefault();
       axios.post(' link here', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
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
     }
     return(
         <div className = "loginContainer">
            <form>
                <h1>Welcome Back</h1>
            <div className = "username">
                <label>Username:
                    <input
                        type="text"
                        name="username"
                    />
                </label>
            </div>
            <div className="password">
                <label>Password:
                    <input
                        type= "password"
                        name="password"
                    />
                </label>
            </div> 
            <div className="submit">
                <button>Login</button>
            </div>   
            </form>
         </div>
     )
    }


export default Login
