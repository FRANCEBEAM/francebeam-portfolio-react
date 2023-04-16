import React from 'react';
import '../sass/Work.scss';
import { MdViewQuilt, MdDesktopWindows } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai'
import { RiCodeBoxFill } from 'react-icons/ri'


function Work() {
  return (
    <section className='work-section'>
        <div className='wrapper'>
            <h1>What I do?</h1>
            <p className='specialize'>As a front-end web developer, I specialize in crafting visually appealing and user-friendly websites that deliver outstanding user experiences.</p>
            <div className='work-container'>
                <div className='card-work'>
                    <div className='work-icon'>
                        <MdViewQuilt size={70} />
                        <p className='work-title'>UX/UI DESIGN</p>
                    </div>
                    <div className='work-description'>
                        <p>I craft and create own design that immersed in style layout, fonts and logo. Passionate of art or stylish for implementing in UI that visually appealing and provide enjoyable with ensuring a consistent and best practices.             
                        </p>
                    </div>
                </div>
                <div className='card-work'>
                    <div className='work-icon'>
                        <RiCodeBoxFill size={70} />
                        <p className='work-title'>FRONTEND DEVELOPMENT</p>
                    </div>
                    <div className='work-description'>
                        <p>I craft and create own design that immersed in style layout, fonts and logo. Passionate of art or stylish for implementing in UI that visually appealing and provide enjoyable with ensuring a consistent and best practices.             
                        </p>
                    </div>
                </div>
                <div className='card-work'>
                    <div className='work-icon'>
                        <AiFillCode size={70} />
                        <p className='work-title'>BACKEND DEVELOPMENT</p>
                    </div>
                    <div className='work-description'>
                        <p>I craft and create own design that immersed in style layout, fonts and logo. Passionate of art or stylish for implementing in UI that visually appealing and provide enjoyable with ensuring a consistent and best practices.             
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work
