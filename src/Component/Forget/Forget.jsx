import React from 'react'
import './Forget.css'
import { useNavigate } from "react-router-dom";

function Forget() {

  const navigate = useNavigate();

function handleclick () {
  navigate("/Verification")
}

  return (
    <div class="v132_41">
        <div class="v132_42"></div>
        <span class="v132_43">We'll send you an email with instructions to reset it.</span>
        <span class="v132_44">Forgot password?</span>
        <form type="submit">
        <div class="v132_45">
            <span class="v132_46">Email</span>
            <input type="email" class="v132_47"></input>
        </div>
       
        <div class="v132_48">
            <button onClick={handleclick} class="v132_49">Next</button>
        
        </div>
        </form>
        <div class="v132_52"></div>
    </div>
  )
}

export default Forget