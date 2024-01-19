import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['','T', 'a', 'n', 'u', 'j','','N','a','r','n','a','m']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return(
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br/>
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}/>
        <br />
        </h1>
        <br />
        <h2>Computer Science Student at Texas A&M University</h2>
        <Link to="/about" className='flat-button'>ABOUT ME</Link>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home 