import React from 'react'
import Forget from '../Forget/Forget'
import './Logstyle.css'

function Login() {
  return (
	<div class="v132_26">
		<div class="v132_27"></div>
        <span class="v132_28">Enter your details to sign in to your account.</span>
        <span class="v132_29">Welcome 👋</span>
        <form type="submit">
		<div class="v132_30">
            <span class="v132_31">Email</span>
			<input type="email" class="v132_32"></input>
		</div>
		<div class="v132_33">
            <span class="v132_34">Password</span>
			<input type="password" class="v132_35"></input>
		</div>
		<div class="v132_36">
			<button type="submit" class="v132_37">Log In</button>
         
        </div>
        </form>
			<span class="v132_390"><a href="./Forget" class="signuplink">Forget</a></span>
            <span class="v132_39">Don't have an account? <a href="./Forget" class="signuplink">Sign up</a></span>
		<div class="v132_40"></div>
	</div>
   
  )
}

export default Login