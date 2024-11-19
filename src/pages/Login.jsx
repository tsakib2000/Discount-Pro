import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-banner h-screen flex justify-center items-center ">
                <div className="card  backdrop-blur-xl w-full max-w-sm shrink-0 shadow-2xl border border-blue-400 ">

      <form className="card-body">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-white font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt  link-hover text-white font-semibold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-400 border-none">Login</button>
        </div>
      <p className="text-sm  text-white font-bold"> Don`t have account?<Link to='/register'> Register here</Link></p>
      </form>
    </div>

        </div>
    );
};

export default Login;