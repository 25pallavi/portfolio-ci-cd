import React from "react";
import { IMAGE } from "../../Utils/Theme"
import { useState } from "react"

import { NavLink,Link } from "react-router-dom";
import '../Header/Header.css'
import '../Header/Header-responsive.css'
import { FaArrowRight } from "react-icons/fa6";
import { DiCssdeck } from "react-icons/di";

const Header =()=>{

    let [show, setShow] = useState(false);
   // State to keep track of the active link
   const [activeIndex, setActiveIndex] = useState(null);

   // Function to handle click and set the active index
   const handleClick = (index) => {
       setActiveIndex(index);
   };

    return(
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-3 col-4">                       
                        <div className="logo">
                            <Link to='/'>
                             <DiCssdeck /> 
                             <span>Portfolio</span>
                            </Link>                           
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-5 col-3">
                    <button className="micon" onClick={() => setShow(!show)}>
                                {(!show) ? <span>&equiv;</span> : <span>&equiv;</span>}
                    </button>
                    <div  className={`nav-list-all ${(show ? "mactive" : "" )}`}>
                    <button className="micon" onClick={() => setShow(!show)}>
                                {(!show) ? <span></span> : <span>X</span>}
                    </button>
                    
                    <ul className="navigation-list">
                        <li>
                            <a 
                                href="#aboutUs" 
                                onClick={()=>handleClick(0)} className={activeIndex===0 ? 'active' : ''}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#skills" 
                                onClick={() => handleClick(1)} 
                                className={activeIndex === 1 ? "active" : ""}
                            >
                                Skills
                            </a>
                        </li>
                    
                        <li>
                            <a 
                                href="#project" 
                                onClick={() => handleClick(3)} 
                                className={activeIndex === 3 ? "active" : ""}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#education" 
                                onClick={() => handleClick(4)} 
                                className={activeIndex === 4 ? "active" : ""}
                            >
                                Education
                            </a>
                        </li>

                        <li>
                            <a 
                                href="#contact" 
                                onClick={() => handleClick(2)} 
                                className={activeIndex === 2 ? "active" : ""}
                            >
                                contact
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-5">
                    <div className="contactUs">
                        <Link to="https://github.com/25pallavi">Github Profile <span className="hide-btn">Click Me<FaArrowRight /></span> </Link>
                    </div>
                    </div>

            </div>
            </div>
        </div>

    
    )
}
export default Header