import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdEmail,MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import banner from '../assets/Snow.svg'
const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ backgroundImage: `url(${banner})` }} className=" h-screen p-8">
      <div className="flex justify-center items-center"></div>
      <div className="flex gap-6 flex-col items-center h-full w-full justify-center ">
        <div className="text-center">
          <h1 className="text-white  text-2xl md:text-4xl font-bold">
            Welcome,{user?.displayName}!{" "}
          </h1>
          <h1 className="text-white  text-2xl md:text-4xl font-bold">
            Stay cool and explore your profile. 😊✨
          </h1>
        </div>
        <div className="">
          <div className="*:text-white shadow-xl w-full rounded-lg py-3 backdrop-blur-lg border border-blue-300">
            <div className="photo-wrapper p-2 ">
              <img
                className="w-40 h-40 rounded-full mx-auto ring ring-blue-400"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-white  font-medium leading-8">
                {user?.displayName}
              </h3>

              <table className="text-base my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold flex items-center gap-1">
                    <MdEmail />  Email :
                    </td>
                    <td className="px-2 py-2">{user?.email || "N/A"}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-center items-center my-3">
                <Link to='/updateProfile' className="btn bg-blue-400 text-white border-none">
                <MdUpdate />   Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
