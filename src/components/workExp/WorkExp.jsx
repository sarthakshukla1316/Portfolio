import './workExp.css';
import growthgear from '../../img/growthgear.png';
import forklyft from '../../img/forklyft.png';

const WorkExp = () => {
    return (
        <>
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
                        <li>Integrated authentication and various course API's with the UI and tested the application for any bugs and improvements.</li>
                        <li>Implemented REST API's and worked on validation of forms and also worked on sending emails through nodemailer & pan verification.</li>
                    </ul>
                </div>
            </div>

            <div className="w1">
                <div className="w-left secInt">
                    {/* <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={growthgear} alt="" className="a-img" />
                    </div> */}
                    <a href="https://forklyft.in" style={{ display: 'flex', justifyContent: 'center' }} target="_blank"><img style={{ width: '60%' }} src={forklyft} alt="" /></a>
                </div>
                <div className="w-right">
                    {/* <h1 className="a-title">Work Experience</h1> */}
                    {/* <h1 className="wl-title">Work Experience</h1> */}
                    <h4 className="w-sub">
                        Interned as a <strong>Software Engineer</strong> at <a style={{color: '#59b256'}} href="https://forklyft.in/" target="_blank">Forklyft</a> with MERN Stack and many more
                    </h4>
                    <ul className="w-desc">
                        <li>Worked on <strong>React, Next , Redux , Tailwind, Handlebars, Node, Express, MongoDB, MYSQL.</strong>.</li>
                        <li>Collaborated with designers to create a sleek and innovative UI design and Implemented the UI and integrated various API's.</li>
                        <li>Developed a Refer and Earn, Lead Created and Revisited section, sending whatsapp message, quora pixel etc.</li>
                        <li>Worked on bug fixing & website optimisation.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WorkExp
