import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="portfolio-logo text-2xl">kp97<span className="logo-dot">.</span></h2>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaFacebook />
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar
