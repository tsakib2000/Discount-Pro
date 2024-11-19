/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
const {loading,user}=useContext(AuthContext)
if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}
if(user){
    return children
}
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;