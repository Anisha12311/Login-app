import React, {useState} from 'react'
import logo from './image/logo.jpg';

const Loginpage = () => {

    const [values, setValues] = useState({
        email : "",
        password : "",
    })

  

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value,
        })
    }
    const handleFromSubmit = (event) =>{
        event.preventDefault();

    }
 

    return (
          <div className = "page">
        <div className = "contain">
              <img src = {logo} alt = "" width = "800px" height= "680px" />
            </div>
        <div className = "container">
            
            <div className = "app-wrapper">
            <div>
                    <h1 className = "title">Welcome Back!</h1>
                </div>
                <div>
                    <h4 className = "title">Login to your account</h4>
                </div>
                <form className = "form-wrapper"> 
                    <div className = "email">
                        <label className = "label">Email</label>
                        <input className = "input" 
                        type = "email" 
                        name = "email" 
                        autoComplete = "off"
                        value = {values.email}
                        onChange = {handleChange}
                        />
                       
                    </div>
                 
                    <div className = "password">
                        <label className = "label">Password</label>
                        <input className = "input" 
                        type = "password" 
                        name = "password" 
                        autoComplete = "off"
                        value= {values.password}
                        onChange = {handleChange}
                       />
                       
                    </div>
                    <div className = "forPass">
                    <a href = "">forget passsword</a>
                    </div>
                    <div>
                        <button className = "submit" onClick = {handleFromSubmit}>Login </button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}

export default Loginpage
