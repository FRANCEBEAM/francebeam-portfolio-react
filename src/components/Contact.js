import React from 'react';
import '../sass/Contact.scss';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiGithub, FiFacebook, FiLinkedin,  } from 'react-icons/fi';
import { TbBrandGmail } from 'react-icons/tb'
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <section className='contact-section' id='contact'>
        <div className='wrapper'>
            <h1>Send me a message!</h1>
            <p>Got a proposal or inquire about potential collaborations? I’m always open to new opportunities and would love to hear from you.</p>
            <div className='socials-content'>
                <ul className='item-socials'>
                    <li className='item-social'>
                        <Link className='link-social' to='https://github.com/FRANCEBEAM?tab=repositories'>
                            <FiGithub size={26}/>
                        </Link>
                    </li>
                    <li className='item-social'>
                        <Link className='link-social' to='https://www.facebook.com/francisbeam.santander'>
                            <FiFacebook size={26}/>
                        </Link>
                    </li>
                    <li className='item-social'>
                        <Link className='link-social' to='mailto:santanderfrancisbeam@gmail.com'>
                            <TbBrandGmail size={26}/>
                        </Link>
                    </li>
                    <li className='item-social'>
                        <Link className='link-social' to='https://www.linkedin.com/in/francebeam'>
                            <FiLinkedin size={26}/>
                        </Link>
                    </li>
                </ul>
            </div>
            <form className='form-content'>
                <div className='grid-content'>
                    <div className='form-label'>
                        <label>Name</label>
                        <input className='input-name' type='text' placeholder='Enter your name'/>
                    </div>
                    <div className='form-label'>
                        <label>Email</label>
                        <input className='input-email' type='email' placeholder='Enter your email'/>
                    </div>
                </div>
                <div className='form-label'>
                    <label>Message</label>
                    <textarea className='input-message' placeholder='Let’s work together, I’m available for projects and work to discuss your project requirements and timeline.'/>
                </div>
                <button className='btn-send' type='button'>
                    SEND <FaTelegramPlane size={22}/>
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
