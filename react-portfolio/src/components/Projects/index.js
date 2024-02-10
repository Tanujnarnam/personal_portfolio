import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return(
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's',]}
            idx={15}
           />
        </h1>
      </div>
      <div className='projects-zone'>
        <div className='project-div'>
          <img src='./Weight_BodyHero.webp' alt="Bodybuilder"/>
          <div className='overlay'>
            <h1>Liftlog</h1>
            <p>React, Node JS, PostgreSQL, Express</p>
            <Link to="https://liftlogger.netlify.app/" target="_blank">GO</Link>
          </div>
        </div>
        <div className='project-div'>
          <img src='./NBA.png' alt="Bucket Whiz"/>
          <div className='overlay'>
            <h1>Bucket Whiz</h1>
            <p>React, Node JS, PostgreSQL, Express</p>
            <Link to="https://bucketwhiz.netlify.app/" target="_blank">GO</Link>
          </div>
        </div>
        <div className='project-div'>
          <img src='./partlycloudy.png' alt="Bucket Whiz"/>
          <div className='overlay'>
            <h1>Weather App</h1>
            <p>HTML, CSS, Javascript</p>
            <Link to="https://weatherover.netlify.app/" target="_blank">GO</Link>
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact