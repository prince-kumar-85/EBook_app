import React, {useState} from 'react'

function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');

        if(!email || !password){
            setError("All fields are required")
        }

        const formdata= new FormData();
        formdata.append("email",email);
        formdata.append("password",password);

        // Add your login API call here

    }

  return (
    <div>
      <h1>Login Page</h1>
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Enter valid email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type='submit' className='btn'>Login</button>
                {error && <p className="error">{error}</p>}
            </form> 
            <p>Don't have an account? <a href='/register'>Register</a></p>
            <p>Forgot your password? <a href='/reset-password'>Reset Password</a></p>
        </div>
    </div>
  )
}

export default Login
