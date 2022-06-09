import React from "react";
import{useState} from "react";
import {useNavigate} from "react-router-dom";


function Login(){
	
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

async function loginUser(event){
	event.preventDefault()
	const response=await fetch('http://localhost:3001/login',{
	  method:'POST',
	  headers:{
			 'Content-Type':'application/json'
	  },
	  body: JSON.stringify({
		email,
		password
	  })
	})
	const data = await response.json()
    if(data.user){
		alert("login succesful");
		Navigate("/data")
	}
	else{
		alert("enter valid user name or password");
	}
	
	//console.log(data);
}
 
  let Navigate  = useNavigate();

 
    
    return( 
        
        <div>
            <div className="container1">
            
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={loginUser}>
				<div className="login__field">
					
					<input type="text" className="login__input" placeholder="email"  value={email} onChange={(e)=> setEmail(e.target.value)}  name="email" />
				</div>
				<div className="login__field">
					
					<input type="password" className="login__input" placeholder="Password"  value={password} onChange={(e)=> setPassword(e.target.value)}  name="repeatpassword" />
				</div>
				<button className="button login__submit" >
					<span className="button__text">Log In Now</span>
					
				</button>				
			</form>
		
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </div>
    )
	}
export default Login;