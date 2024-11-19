import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser ,setUser} = useContext(AuthContext);
const location=useLocation()
const navigate=useNavigate()
console.log(location);
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
        console(error.message)
        toast.error(error.message)
    })
  };
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
              <a
                href="#"
                className="label-text-alt  link-hover text-white font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-400 border-none text-white">Login</button>
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
