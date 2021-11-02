import './about.css';
import me from '../../img/pic.jpg';
import cert from '../../img/problem.png';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    A Full Stack Developer with Excellent problem solving skills and ability to perform well under pressure
                </p>
                <p className="a-desc">
                    My name is Sarthak Shukla. I am currently pursuing my Bachelor of Technology in Computer Science & Engineering from JSS Academy of Technical Education, Noida. I have been Interned as a Full Stack Developer at GrowthGear where I have worked with React, Node, Express, MongoDB, Nodemailer, Styled Components, Material UI and Version Control System (Git & Github).
                </p>
                <div className="a-award">
                    <img src={cert} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">HackerRank Problem Solving</h4>
                        <p className="a-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
