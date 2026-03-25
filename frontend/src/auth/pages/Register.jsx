import React from 'react'
import "../styles/Form.scss"
import { useNavigate, Link } from 'react-router'

const Login = () => {


  const handelSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <main>
      <div className='from-container'>
        <h1>Register Form</h1>
        <form
          onSubmit={handelSubmit}
        >
          <div className='center'>
            <label htmlFor="">Email   : </label>
            <input type="email" placeholder='enter ur email' />
          </div>
          <div className='center'>
            <label htmlFor="">Username   : </label>
            <input type="email" placeholder='enter ur email' />
          </div>
          <div className='center'>
            <label htmlFor="">Password   :</label>
            <input type="password" placeholder='enter ur password' />
          </div>
          <button>Register</button>
        </form>
        <h1 style={{ fontSize: "15px", color: "black" }}>Have an account ? <Link to={"/login"}>login with account</Link>  </h1>
      </div>
    </main>
  )
}

export default Login