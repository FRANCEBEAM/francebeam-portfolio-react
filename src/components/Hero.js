import React from 'react'
import '../sass/Hero.scss'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FiGithub , FiFacebook} from 'react-icons/fi';


function Hero() {
  return (
    <section className='hero-section'>
      <div className='wrapper'>
          <div className='left-orientation'>
            <ul className='left-socials'>
                <li className='social'>
                  <Link to='/'>
                    <FiGithub className='github' size={24}/>
                  </Link>
                </li>
                <li className='social'>
                  <Link className='facebook' to='/'>
                    <FiFacebook size={24}/>
                  </Link>
                </li>
                <li className='gmail'>
                  <Link to='mailto:santanderfrancisbeam@gmail.com'>
                    santanderfrancisbeam@gmail.com
                  </Link>
                </li>
                <li className='line'>
                  
                </li>
            </ul>
          </div>
          <div className='hero-content'>
            <p className='sub-head'>Hi, my name is</p>
            <h2>Francis Beam Santander</h2>
            <h1>Front End Developer.</h1>
            <p className='desc'>I build amazing <span>website</span>, and <span>web design</span> for quality products with great user experiences and passionate of creating interactive. Let’s build and work together.</p>

            
              
              <Link to='https://www.youtube.com/watch?v=HriYRoxWo1I' className='link-projects'>
                <button className='btn-projects'>
                    CHECK OUT MY PROJECTS <HiOutlineArrowNarrowRight size={22}/>
                </button>
                </Link>
              
           
          </div>
        
          <svg className='element1' width="61" height="80" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_740_1155" fill="white">
            <path d="M9.49365 18.6206H40.873V49.9999H9.49365V18.6206Z"/>
            </mask>
            <path d="M9.49365 18.6206V17.6206H8.49365V18.6206H9.49365ZM40.873 18.6206H41.873V17.6206H40.873V18.6206ZM40.873 49.9999V50.9999H41.873V49.9999H40.873ZM9.49365 49.9999H8.49365V50.9999H9.49365V49.9999ZM9.49365 19.6206H40.873V17.6206H9.49365V19.6206ZM39.873 18.6206V49.9999H41.873V18.6206H39.873ZM40.873 48.9999H9.49365V50.9999H40.873V48.9999ZM10.4937 49.9999V18.6206H8.49365V49.9999H10.4937Z" fill="#C9C9C9" mask="url(#path-1-inside-1_740_1155)"/>
            <circle cx="9.32284" cy="9.32284" r="8.82284" stroke="#CDCDCD"/>
          </svg>
       
          <svg className='element2' width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 22.1496C9.88071 22.1496 11 21.0094 11 19.603C11 18.1965 9.88071 17.0564 8.5 17.0564C7.11929 17.0564 6 18.1965 6 19.603C6 21.0094 7.11929 22.1496 8.5 22.1496Z" fill="#CCCCCC"/>
            <path d="M5.71752 12.2267C8.87522 12.2267 11.435 9.6594 11.435 6.4925C11.435 3.32559 8.87522 0.758301 5.71752 0.758301C2.55982 0.758301 0 3.32559 0 6.4925C0 9.6594 2.55982 12.2267 5.71752 12.2267Z" fill="#CCCCCC"/>
          </svg>

          <svg className='element3' width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 6.01882C3.88071 6.01882 5 4.87867 5 3.47223C5 2.06579 3.88071 0.925644 2.5 0.925644C1.11929 0.925644 0 2.06579 0 3.47223C0 4.87867 1.11929 6.01882 2.5 6.01882Z" fill="#CCCCCC"/>
          </svg>

          
          <svg className='element4' width="214" height="210" viewBox="0 0 214 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_758_23" fill="white">
            <path d="M35 31H173V169H35V31Z"/>
            </mask>
            <path d="M35 31V30H34V31H35ZM173 31H174V30H173V31ZM173 169V170H174V169H173ZM35 169H34V170H35V169ZM35 32H173V30H35V32ZM172 31V169H174V31H172ZM173 168H35V170H173V168ZM36 169V31H34V169H36Z" fill="#C9C9C9" mask="url(#path-1-inside-1_758_23)"/>
            <ellipse cx="1.25" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="1.09016" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="8.62569" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="16.1612" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="23.6967" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="31.2323" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="38.7678" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="46.3033" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="53.8388" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="61.3743" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="1.25" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="8.75" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="16.2501" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="23.7501" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="31.2499" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="38.7499" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="46.25" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="53.75" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="61.25" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <ellipse cx="68.7501" cy="68.9098" rx="1.25" ry="1.09016" fill="#CDCDCD"/>
            <circle cx="173" cy="169" r="40.5" stroke="#CDCDCD"/>
          </svg>

          <svg className='element5' width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 7.83875C5.433 7.83875 7 6.27174 7 4.33875C7 2.40575 5.433 0.838745 3.5 0.838745C1.567 0.838745 0 2.40575 0 4.33875C0 6.27174 1.567 7.83875 3.5 7.83875Z" fill="#CCCCCC"/>
          </svg>

          <svg className='element6' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.71752 12.3322C8.87522 12.3322 11.435 9.76493 11.435 6.59803C11.435 3.43112 8.87522 0.863831 5.71752 0.863831C2.55982 0.863831 0 3.43112 0 6.59803C0 9.76493 2.55982 12.3322 5.71752 12.3322Z" fill="#CCCCCC"/>
          </svg>

          {/* <svg className='element7' width="275" height="275" viewBox="0 0 275 275" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="134.146" height="134.146" fill="#332FD0" fill-opacity="0.2"/>
            <rect x="70.4268" y="70.4268" width="134.146" height="134.146" fill="#332FD0" fill-opacity="0.6"/>
            <rect x="140.854" y="140.854" width="134.146" height="134.146" fill="#332FD0" fill-opacity="0.9"/>
          </svg> */}

          <svg className='scroll-down' width="50" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 23.75L7.5 16.25L9.25 14.5L15 20.2187L20.75 14.5L22.5 16.25L15 23.75ZM15 16.25L7.5 8.75L9.25 7L15 12.7188L20.75 7L22.5 8.75L15 16.25Z" fill="#222222"/>
          </svg>

      </div>
      <svg className='element7' width="275" height="275" viewBox="0 0 275 275" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="134.146" height="134.146" fill="#332FD0" fill-opacity="0.2"/>
            <rect x="70.4268" y="70.4268" width="134.146" height="134.146" fill="#332FD0" fill-opacity="0.6"/>
            <rect x="140.854" y="140.854" width="134.146" height="134.146" fill="#332FD0" fill-opacity="0.9"/>
          </svg>
    </section>
  )
}

export default Hero
