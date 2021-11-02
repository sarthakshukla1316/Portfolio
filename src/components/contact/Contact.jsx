import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import instagram from '../../img/instagram.jpg';

const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    const [done, setDone] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            setDone(true);
            setName('');setEmail('');setMessage('');setSubject('');
            setTimeout(() => {
                setDone(false);
            }, 3000);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your projects</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 9140099548
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                                sarthakshukla1316@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                                Sector 62, Noida, UP
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        starting if the right organization comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkmode && '#333', color: darkmode && '#fff'}} type="text" placeholder="Name" name="user_name" onChange={(e) => setName(e.target.value)} value={name} />
                        <input style={{backgroundColor: darkmode && '#333', color: darkmode && '#fff'}} type="text" placeholder="Subject" name="user_subject" onChange={(e) => setSubject(e.target.value)} value={subject} />
                        <input style={{backgroundColor: darkmode && '#333', color: darkmode && '#fff'}} type="text" placeholder="Email" name="user_email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <textarea style={{backgroundColor: darkmode && '#333', color: darkmode && '#fff'}} rows="5" placeholder="Message" name="message" onChange={(e) => setMessage(e.target.value)} value={message} />
                        <button>Submit</button>
                        {done && (
                            <h1 style={{color: '#59b256', fontSize: '14px', marginTop: '12px'}}>Thank you, Your email has been sent</h1>
                        )}
                    </form>
                </div>
            </div>
            <div className="footer">
                <span className="icons">
                    <a href="https://www.linkedin.com/in/sarthakshukla1316/" target="_blank"><img className="instaImg" src={linkedin} alt="" /></a>
                </span>
                <span className="icons">
                    <a href="https://github.com/sarthakshukla1316" target="_blank"><img className="instaImg" src={github} alt="" /></a>
                </span>
                <span className="icons">
                    <a href="https://www.instagram.com/sarthak_shukla__/" target="_blank"><img className="instaImg" src={instagram} alt="" /></a>
                </span>
            </div>
        </div>
    )
}

export default Contact
