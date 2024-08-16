import {NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <h1 className='logo-text'>Tanuj</h1>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href='https://github.com/Tanujnarnam'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar