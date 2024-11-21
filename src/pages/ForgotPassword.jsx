import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import banner from '../assets/Snow.svg'
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
    const {email,passwordReset,handleSignOut}=useContext(AuthContext)

    const handleResetPassword =(e)=>{
        e.preventDefault()
        const userEmail=e.target.email.value
     passwordReset(userEmail)
     .then(()=>{
        toast.success('Password Reset Email sent')
        window.open('https://mail.google.com/', "_blank", "noopener,noreferrer")
        handleSignOut()
     })
    
    }
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className=" h-screen flex justify-center items-center gap-8 flex-col">
                    <Helmet>
    <title>Reset Password</title>
  </Helmet>
            <div>
                <h1 className="text-2xl md:text-4xl text-white font-bold">Lost Your Key? Let’s Find It!</h1>
            </div>
    <div className="w-1/2 mx-auto ">
    <form className="card-body backdrop-blur-lg border border-blue-400 rounded-2xl" onSubmit={handleResetPassword}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" defaultValue={email} required />
        </div>
     
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Password</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default ForgotPassword;