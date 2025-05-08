import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
const axios= require('axios').default
import { useNavigate } from 'react-router-dom'
const navigate=useNavigate()




function Register() {
    const[username, setUsername] = useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError('')
        setSuccess('')

       if(!username || !email || !password){
            setError("All fields are required")
            return
       }

       const formdata= new FormData();
         formdata.append("username",username)
         formdata.append("email",email)
         formdata.append("password",password)

         try{
            const res=await axios.post("http://localhost:5000/user/register",formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            })
            if(res.status===201){
                setSuccess("User registered successfully")
                setTimeout(()=>{
                    navigate("/login")
                },1000)
            }else{
                setError("Failed to register user")
            }
         }
            catch(err){
                setError(err.response?.data?.message || "Submission failed")
                console.error("Register Error:",err.response?.data || err.message)
            }
        }


    

  return (
    <div>
      <h1>Register the yourself</h1>
      <div className="form-container">
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='username'>UserName</label>
            <input type='text' id='username' placeholder='Enter your full name' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter valid email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button type='submit' className='btn'>Register</button>
           
            <p>By signing up, you agree to our <a href='/terms'>Terms of Service</a> and <a href='/privacy'>Privacy Policy</a>.</p>
            <p>Already have an account? <a href='/login'>Login</a></p>
        </form>
      </div>

    </div>
  )
}

export default Register
