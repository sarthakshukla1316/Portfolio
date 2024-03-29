import "./intro.css";
import me from "../../img/sarthak.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Sarthak Shukla</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">MERN Stack</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Javascript</div>
            </div>
          </div>
          <p className="i-desc">
          A Logical and results-driven Software Engineer with good problem-solving skills and technically proficient in analyzing real life problems and providing optimize approach with strong Computer science & Engineering concepts.
          </p>
          <a href={`${window.location.origin}/resume.pdf`} target="_blank" className="resume">View Resume</a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
