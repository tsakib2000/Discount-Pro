import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import google from '../assets/7123025_logo_google_g_icon.png'
const Register = () => {
    const{handleRegister,setUser,updateUserProfile,signWithGoogle}=useContext(AuthContext)
    const[error,setError]=useState('')
    const navigate=useNavigate()
    const upperCase =/^(?=.*[A-Z]).*$/;
    const lowerCase=/^(?=.*[a-z]).*$/;
    const length=/^.{6,}$/;
    const handleSubmit=(e)=>{
        e.preventDefault()
        setError('')
        const form =e.target
        const name=form.name.value
        const photo=form.photo.value
        const email=form.email.value
        const password=form.password.value
if(!upperCase.test(password)){
    return setError('Password Must have an Uppercase letter ')
}
if(!lowerCase.test(password)){
    return setError('Password Must have an Lowercase letter ')
}
if(!length.test(password)){
    return setError('Password Length must be at least 6 character ')
}
       handleRegister(email,password)
       .then(result=>{
        setUser(result.user)
       
        toast.success('Register successful')
        updateUserProfile({displayName:name,photoURL:photo})
        .then(()=>{
            navigate('/')
        })
       })
       .catch(error=>{
        toast.error(error.message)
       })
    }
const googleLogIn=()=>{
    signWithGoogle()
    .then(result=>{
        setUser(result.user)
        console.log(result.user.photoURL);
        navigate('/')
        toast.success('Register successfull')
    })
}
    return (
        <div className="bg-banner flex flex-col justify-center items-center p-10 ">
            <h1 className="text-white font-bold text-4xl mb-5">Register Now </h1>
        <div className=" card backdrop-blur-md w-full max-w-sm  shadow-2xl border border-blue-400 ">

<form className="card-body" onSubmit={handleSubmit}>
<div className="form-control ">
  <label className="label">
    <span className="label-text text-white font-semibold">Name</span>
  </label>
  <input name='name'  type="text" placeholder="Name" className="bg-blue-200 placeholder:text-white input input-bordered" required />
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text text-white font-semibold">Photo</span>
  </label>
  <input name='photo'  type="text" placeholder="Photo URL" className="bg-blue-200 placeholder:text-white input input-bordered" required />
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text text-white font-semibold">Email</span>
  </label>
  <input  name='email' type="email" placeholder="Email" className="bg-blue-200 placeholder:text-white input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text text-white font-semibold">Password</span>
  </label>
  <input  name='password'  type="password" placeholder="password" className="bg-blue-200 placeholder:text-white input input-bordered" required />
  {
    error && <p className="text-red-600 italic text-sm py-2">⚠️ {error}</p>
  }

</div>
<div className="form-control mt-6">
  <button className="btn bg-blue-400 border-none text-white">Register</button>
  <div className="divider">or</div>
  <div onClick={googleLogIn} type="button" className="btn bg-blue-400 border-none flex justify-center items-center text-white"><img className="h-10" src={google} alt="" /> Register With Google</div>
</div>
<p className="text-sm  text-white font-bold"> All ready have account?<Link to='/login'> Log in now</Link></p>
</form>
</div>

</div>
    );
};

export default Register;