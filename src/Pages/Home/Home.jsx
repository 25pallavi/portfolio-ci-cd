import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IMAGE } from "../../Utils/Theme"
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'
import './Home-responsive.css'
import Header from '../../Components/Header/Header';

import Footer from '../../Components/Footer/Footer';
import SkillsCard from '../../Components/SkillsCard/SkillsCard';
import Projects from '../../Components/Projects/Projects';
import Education from '../../Components/Education/Education';
import Contact from '../../Components/ContactUs/Contact';





const Home = () => {
    return (
        <>
        <div className="common-bg">
            <div className="gradient-body">
                <Header/>
                <div className="Banner" id="aboutUs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-content-top">
                                    <h1 >Hi,I am
                                        <span>Pallavi Kumari</span>
                                    </h1>
                                    <h2>
                                        I am{' '}
                                        <span style={{ color: '#00bcd4', fontWeight: 'bold' , display:'flex' }}>
                                            <Typewriter
                                                words={['Frontend Developer', 'UI/UX Developer']}
                                                loop={true} // 0 means infinite loop
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={200}
                                                deleteSpeed={200}
                                                delaySpeed={1500}
                                            />
                                        </span>
                                    </h2>
                                    <p className='bannerPara'>Passionate 
                                        about clean code and thoughtful 
                                        design, I approach frontend 
                                        development with both creativity 
                                        and precision. I’m always eager to 
                                        explore new tools and technologies 
                                        to craft exceptional user 
                                        education-sections.</p>

                                    <div className="getStarted" id="getStarted">
                                        <Link className='ThemeBtn' to="https://drive.google.com/file/d/1c5klWWHk3ORI3Su50kPrS-ftlPuHFfhR/view?usp=drive_link">Ckeck Resume
                                            <span><MdOutlineKeyboardArrowRight /></span>

                                            <p className='bnrHideMenu'>Ckeck Resume
                                                <span><MdOutlineKeyboardArrowRight /></span></p>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">

                                <div className="banner-content-right">

                                    <img src={IMAGE.pic_pallavi1} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="banner-rays-bg">
                <video className='BannerRays' autoPlay loop muted>
                    <source src={IMAGE.BannerRays} type="video/mp4" />

                </video>
            </div>

            <div className="banner-vdo-bg">
                <video className='banner-vdo-bginr' autoPlay loop muted>
                    <source src={IMAGE.BannerVdo} type="video/mp4" />

                </video>
            </div>
                </div>
          
            </div>

            <div className="skills" id="skills">
            <SkillsCard></SkillsCard>
            </div>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
            </div>
        </>
    );
}

export default Home;
