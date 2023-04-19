import React from 'react';
import '../sass/Project.scss';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ProjectData } from './ProjectSource';
import OtherProject from './OtherProject';

function Project() {
  return (
    <section className='project-section'>
        <div className='wrapper'>
        <h1>Projects</h1>
            <div className='project-container'>
                {
                    ProjectData.map((item, index)=>{
                        return (
                        <div className='card-project' key={index}>
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
                                    {item.description}
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
