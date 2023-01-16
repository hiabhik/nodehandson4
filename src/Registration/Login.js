// Login page

import React, { useState } from 'react';

import axios from 'axios';

const Login = () => {
const [formData, setFormData] = useState({  
email: '',
password: ''
});

const [loginResponse, setLoginResponse] =useState('');  

const handleChange = event => {
setFormData({
...formData,
[event.target.name]: event.target.value
});
};

const handleSubmit = event => {
event.preventDefault();
const rb={"email":formData.email,"password":formData.password}
        axios.post('http://localhost:3000/mylogin',rb)
        .then(response=>{
            console.log("Tryting to hit the api");
            console.log(response);
            setLoginResponse(response.data);
        })
        .catch(error=>{
            console.log("error is:",error);
        })
};

return (
<div className='rootdiv'>
<h1 className='login'>Login</h1>
<form className='myForm' onSubmit={handleSubmit}>
<label>
Email:
<input
         className='myInput'
         type="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
       />
</label>
<br />
<label>
Password:
<input  
        className='password'
        type="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
       />
</label>
<br />
<button className='btn' type="submit">Login</button>
</form>

<div>{loginResponse?loginResponse:null}</div>

</div>
);
};

export default Login;



