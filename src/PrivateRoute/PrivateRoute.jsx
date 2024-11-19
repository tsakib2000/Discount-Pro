/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
const {loading,user}=useContext(AuthContext)
const location =useLocation()
console.log(location);
if(loading){
    return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
}
if(user){
    return children
}
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;