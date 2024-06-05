import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="portfolio-logo text-2xl">kp97<span className="logo-dot text-purple-800 custom-logo">.</span></h2>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/kprav33n97/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/kprav33n97" target="_blank"><FaGithub/></a>
        <a href="mailto:kpraveenkumar2006@gmail.com" target="_blank"><FaEnvelope />
</a>
        <a href="https://www.instagram.com/kprav33n97/" target="_blank"><FaInstagram/></a>     
      </div>
    </nav>
  )
}

export default Navbar
