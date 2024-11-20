import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import google from '../assets/7123025_logo_google_g_icon.png'
const Login = () => {
  const { signInUser ,setUser,signWithGoogle,setEmail} = useContext(AuthContext);
const location=useLocation()
const navigate=useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    signInUser(email,password)
    .then(result=>{
        setUser(result.user)
        navigate(location?.state ? location?.state : '/')
        toast.success(result.user.email,'login successful')
    })
    .catch(error=>{
        console.log(error.message)
        toast.error(error.message)
    })
  };
  const googleLogIn=()=>{
    signWithGoogle()
    .then(result=>{
        setUser(result.user)
        console.log(result.user);
        navigate(location?.state ? location?.state : '/')
        toast.success('Login successful')
    })
  }
  return (
    <div className="bg-banner  flex flex-col justify-center items-center p-10  ">
        <h1 className="text-white font-bold text-4xl mb-5">Login Now </h1>
      <div className="card  backdrop-blur-md w-full max-w-sm shrink-0 shadow-2xl border border-blue-400 ">
        <form className="card-body" onSubmit={handleLogIn}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white font-semibold">Email</span>
            </label>
            <input
             name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-semibold">
                Password
              </span>
            </label>
            <input name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                to='/forgot'
                className="label-text-alt  link-hover text-white font-semibold"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-400 border-none text-white">Login</button>
            <div className="divider divider-info text-white font-semibold">OR</div>
            <div onClick={googleLogIn} type="button" className="btn bg-blue-400 border-none flex justify-center items-center text-white"><img className="h-10" src={google} alt="" /> Register With Google</div>
          </div>
          <p className="text-sm text-center text-white font-bold">
            Don`t have account?<Link to="/register"> Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
