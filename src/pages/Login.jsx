import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    signInUser(email,password)
    .then(result=>{
        toast.success(result.user.email,'login successfull')
    })
    .catch(error=>{
        toast.error(error.message)
    })
  };
  return (
    <div className="bg-banner  flex flex-col justify-center items-center p-10  ">
        <h1 className="text-white font-bold text-4xl mb-5">Register Now </h1>
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
            <button className="btn bg-blue-400 border-none">Login</button>
          </div>
          <p className="text-sm  text-white font-bold">
            {" "}
            Don`t have account?<Link to="/register"> Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
