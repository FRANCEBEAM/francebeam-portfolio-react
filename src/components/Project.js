import React, { useEffect } from 'react';
import '../sass/Project.scss';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ProjectData } from './ProjectSource';
import OtherProject from './OtherProject';
import AOS from 'aos';
import "aos/dist/aos.css";

function Project() {

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
            return `${str.slice(0, maxLength)}...`
        }
        return str
    }

    useEffect(()=>{
        AOS.init({
            duration : 1000,
            once: true,
            easing: 'linear'
        })
    },[]);

  return (
    <section className='project-section' id="projects">
        <div className='wrapper'>
        <h1>Projects</h1>
            <div className='project-container'>
                {
                    ProjectData.map((item, index)=>{
                        return (
                        <div className='card-project' key={index} data-aos="fade-up">
                            <div className='right'>
                                <figure>
                                    <img src={item.img} />
                                </figure>
                            </div>

                            <div className='left'>
                                <p className='sub-content'>
                                    {item.sub}
                                </p>
                                <h1 className='head-content'>
                                    {item.title}
                                </h1>
                                <p className='project-description'>
                                    {truncate(item.description, 320)}
                                </p>
                                <ul className='tech-items'>
                                    <li className='tech-item' key={index}>
                                        {item.technologies}
                                    </li>
                                </ul>
                              
            
                                <div className='btn-section'>
                                    <Link className='link-visit' to={item.hostLink}>
                                        <button className='btn-visit' type='button'>
                                            VISIT PROJECT
                                            <FaExternalLinkAlt size={16} />
                                        </button>
                                    </Link>
                                    <Link to={item.gitHubLink}>
                                        <FaGithub size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <OtherProject />
        </div>
    </section>
  )
}

export default Project
