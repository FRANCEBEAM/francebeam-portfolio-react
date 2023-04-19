import React from 'react'
import { FaRegFolder, FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub, FiExternalLink} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../sass/OtherProject.scss';
import { OtherProjectData } from './ProjectSource';

function OtherProject() {
  return (
    <div className='other-container'>
         <h1 className='other-head'>Other Projects</h1> 
        <div className='wrapper'> 
            {
                OtherProjectData.map((item, index)=>{
                    return(
                    <Link className='card-project' key={index}>
                        <div className='card-content' to={item.hostLink}>
                            <div className='project-icons'>
                                <FaRegFolder size={32}/>
                                <ul className='project-links'>
                                    <li className='project-link'>
                                        <Link to={item.gitHubLink}>
                                            <FiGithub size={22}/>
                                        </Link>
                                    </li> 
                                    <li className='project-link'>
                                        <Link to={item.hostLink}>
                                            <FiExternalLink size={22}/>
                                        </Link>
                                    </li> 
                                </ul>
                            </div>
                            <div className='project-content'>
                                <h1 className='project-title'>
                                    {item.title}
                                </h1>
                                <p className='project-description'>
                                    {item.description}
                                </p>
                                <ul className='tech-used'>
                                    <li className='tech'>
                                        {item.technologies}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                   )
                })
            }
        </div>
        <div className='showmore'>
            <button className='btn-showmore' type='button'> 
                Show More
            </button>
        </div>
    </div>
  )
}

export default OtherProject