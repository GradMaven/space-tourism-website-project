import {Link} from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg";
import { useState, useEffect } from "react";


export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleButtonClick = () => {
        setNavbarOpen(!navbarOpen); // Toggle the navbar state
      };
    
      // Close the navbar when clicking on a link
      const handleLinkClick = () => {
        setNavbarOpen(false);
      };

   useEffect(() => {
    document.addEventListener("click", handleLinkClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);


    return (
        <>

        <header className="header flex items-center justify-between w-full lg:flex-row">
            <div>
                <Link to="/"><img src={logo} alt="Space Tour" title="Space Tourism"></img></Link>
            </div>
            <nav className={`navbar ${navbarOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl font-bold lg:mr-2">00</span>Home</Link>
                    </li>
                    <li>
                        <Link to="/destination" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl font-bold lg:mr-2">01</span>Destination</Link>
                    </li>
                    <li>
                        <Link to="/crew" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl font-bold lg:mr-2">02</span>Crew</Link>
                    </li>
                    <li>
                        <Link to="/technology" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl font-bold lg:mr-2">03</span>Technology</Link>
                    </li>
                </ul>
            </nav>
            <div className="lg:hidden">
                <button onClick={handleButtonClick}>
                    <CgMenuLeft className="text-white text-4xl"/>
                </button>
            </div>
        </header>
        </>
    )
}