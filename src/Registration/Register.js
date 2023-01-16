import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
const [formData, setFormData] = useState({
name: '',
phone: '',
email: '',
password: ''
});

const [registerResponse, setRegisterResponse] =useState(''); 

const handleChange = event => {

    const formData1={...formData};
    formData1[event.target.name]=event.target.value;
    setFormData(formData1);

};

const handleSubmit = event => {
event.preventDefault();
const rb={"name":formData.name,"phone":formData.phone,"email":formData.email,"password":formData.password}
        axios.post('http://localhost:3000/register',rb)
        .then(response=>{
            console.log("Tryting to hit the api");
            console.log(response);
            setRegisterResponse(response.data);
        })
        .catch(error=>{
            console.log("error is:",error);
        })

console.log(formData);

};

return (
<div className='rootdiv'>
<h1 className='login'>Register</h1>
<form className='myForm' onSubmit={handleSubmit}>
<label>
Name:
<input
        className='myInput'
         type="text"
         name="name"
         value={formData.name}
         onChange={handleChange}
       />
</label>
<br />
<label>
Phone:
<input
className='myInput'
         type="text"
         name="phone"
         value={formData.phone}
         onChange={handleChange}
       />
</label>
<br />
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
         className='myInput'
         type="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
       />
</label>
<br />
<button className='btn' type="submit">Register</button>
</form>

<div>{registerResponse?registerResponse:null}</div>

</div>
);
};

export default Register;