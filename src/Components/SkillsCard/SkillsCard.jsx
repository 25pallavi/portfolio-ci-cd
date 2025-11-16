import React from 'react';
import './SkillsCard.css';
import { FaCode } from "react-icons/fa";

import {
    FaReact,
    FaGitAlt,
    FaAws,
    FaJava,
    FaCloud // Azure alternative icon
} from "react-icons/fa";

import {
    SiRedux,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiWebpack,
    SiMui,
    SiNextdotjs,
    SiChartdotjs,
    SiD3Dotjs,
    SiLeaflet,
    SiMysql,
    SiPostgresql,
    SiAuth0,
    SiGooglecloud,
    SiTestinglibrary,

} from "react-icons/si";

import { MdSecurity, MdShowChart } from "react-icons/md";

const SkillsCard = () => {
    return (
        <div className="SkillscardContainer-bg">
            <div className='SkillscardContainer'>
                <div className="container">
                    <h2>Skills</h2>
                    <p>Here are some of my skills on which I have been working..</p>

                    <div className="row">

                        {/* FRONTEND */}
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="skills-card card-border">
                                <h5>Frontend</h5>
                                <ul>
                                    <li><FaReact /> React JS</li>
                                    <li><FaReact /> React Hooks</li>
                                    <li><SiRedux /> Redux</li>
                                    <li><SiRedux /> Redux Thunk / Saga</li>
                                    <li><SiWebpack /> Webpack</li>
                                    <li><SiJavascript /> JavaScript </li>
                                    <li><SiHtml5 /> HTML</li>
                                    <li><SiCss3 /> CSS</li>

                                    {/* Charts */}
                                    <li><SiChartdotjs /> Chart.js</li>
                                    <li><MdShowChart /> ECharts</li>
                                    <li><SiD3Dotjs /> D3.js</li>
                                    <li><SiLeaflet /> Leaflet</li>

                                    <li><SiMui /> MUI</li>
                                    <li><SiNextdotjs /> Next.js</li>
                                </ul>
                            </div>
                        </div>

                        {/* OTHER */}
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="skills-card card-border">
                                <h5>Other</h5>
                               <ul>
                            <li><FaGitAlt /> Git</li>
                            <li><SiMysql /> MySQL</li>
                            <li><SiPostgresql /> PostgreSQL</li>

                            <li><SiAuth0 /> Authentication / Authorization</li>

                            <li><FaAws /> AWS</li>
                            <li><SiGooglecloud /> GCP</li>

                            <li><SiTestinglibrary /> TDD / CI</li>
                            <li><MdSecurity /> Application Security</li>
                            <li><FaCode /> VS Code</li>   {/* FIXED */}
                        </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;
