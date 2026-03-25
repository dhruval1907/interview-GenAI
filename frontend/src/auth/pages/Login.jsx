import React from 'react'
import "../styles/Form.scss"
import { Link } from 'react-router'

const Login = () => {
  return (
    <main>
      <div className='from-container'>
        <h1>Login Form</h1>
        <form >
          <div className='center'>
            <label htmlFor="">Email   : </label>
            <input type="email" placeholder='enter ur email' />
          </div>
          <div className='center'>
            <label htmlFor="">Password   :</label>
            <input type="password" placeholder='enter ur password' />
          </div>
          <button>Login</button>
        </form> <br /> <br />
          <h1 style={{ fontSize: "15px", color: "black", width: "100%" }}>Dont Have an account ? <Link to={"/register"}>register with account</Link>  </h1>

      </div>
    </main>
  )
}

export default Login