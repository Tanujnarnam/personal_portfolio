import Loader from "react-loaders"
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from "../Contact/ContactForm.js"


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray = ['C', 'o', 'n', 't', 'a','c','t','','M','e']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return(
  <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={contactArray}
            idx={15}
           />
        <br />
        </h1>
        <br />
        <ContactForm/>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact