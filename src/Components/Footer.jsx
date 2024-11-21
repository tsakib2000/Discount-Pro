import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const handleFacebook=()=>{
    window.open("https://www.facebook.com/tauhid.sakib.40/", "_blank")
  }
  const handleGithub=()=>{
    window.open("https://github.com/tsakib2000", "_blank")
  }
  const handleTwitter=()=>{
    window.open("https://x.com/TAUHIDULIS10407", "_blank")
  }
  return (
    <footer className="*:text-blue-400 footer footer-center bg-base-200 text-base-content rounded p-10 bg-transparent *:font-semibold">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About Me</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <button onClick={handleFacebook} className="btn bg-transparent shadow-none text-blue-400 text-3xl border-none ">
            <FaFacebook />
          </button>
          <button onClick={handleGithub} className="btn bg-transparent shadow-none text-3xl border-none ">
            <FaGithub />
          </button>
          <button onClick={handleTwitter} className="btn bg-transparent shadow-none text-3xl border-none ">
            <FaXTwitter />
          </button>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Discount Pro
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
