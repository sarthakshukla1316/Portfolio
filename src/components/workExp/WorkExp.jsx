import './workExp.css';
import growthgear from '../../img/growthgear.png';

const WorkExp = () => {
    return (
        <div className="w">
            <div className="w-left">
                {/* <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={growthgear} alt="" className="a-img" />
                </div> */}
                <a href="https://growthgear.in" target="_blank"><img src={growthgear} alt="" /></a>
            </div>
            <div className="w-right">
                {/* <h1 className="a-title">Work Experience</h1> */}
                <h1 className="wl-title">Work Experience</h1>
                <h4 className="w-sub">
                    Interned as a <strong>Full Stack Developer</strong> at <a style={{color: '#59b256'}} href="https://growthgear.in/" target="_blank">GrowthGear</a> with MERN Stack 
                </h4>
                <ul className="w-desc">
                    <li>Worked on <strong>React, Redux, Styled Components, MUI, Node, Express, MongoDB, AWS</strong>.</li>
                    <li>Implemented, refactored and monitored the complete UI and functionality for continuous improvement of project.</li>
                    <li>Integrated authentication and various course API's with the UI and tested the application for any bugs and improvements</li>
                    <li>Implemented REST API's and worked on validation of forms and also worked on sending emails through nodemailer</li>
                </ul>
            </div>
        </div>
    )
}

export default WorkExp
