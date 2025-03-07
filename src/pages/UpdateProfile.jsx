import { useContext } from "react";
import { CiLink } from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import banner from '../assets/Snow.svg'
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
    const {updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate();
    const handleUpdate=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const photo=e.target.photo.value;
       updateUserProfile({displayName:name,photoURL:photo})
navigate('/profile')
        e.target.reset()
    }
  return (
    <div style={{ backgroundImage: `url(${banner})` }} className=" p-10 flex flex-col gap-3 justify-center items-center">
              <Helmet>
    <title>Update Profile</title>
  </Helmet>
      <h1 className="text-center font-bold text-2xl md:text-4xl text-white">Update Your Information</h1>
      <div className="card  backdrop-blur-md w-full max-w-sm shrink-0 shadow-2xl border border-blue-400 ">
        <form className="card-body" onSubmit={handleUpdate}>
          <label className="input input-bordered flex items-center gap-2">
          <MdOutlineDriveFileRenameOutline />
            <input name='name' type="text" className="grow" placeholder="Name" required />
          </label>
          <label className="input input-bordered flex items-center gap-2">
          <CiLink />
            <input name='photo' type="text" className="grow" placeholder="Photo Url" required/>
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-blue-400 border-none text-white"><FiExternalLink />Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
