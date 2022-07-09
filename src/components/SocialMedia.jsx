import React from 'react'
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {VscGithub} from 'react-icons/vsc'
import {FiLinkedin} from 'react-icons/fi'
import {IoNewspaperSharp} from 'react-icons/io5'
import {FaBlog} from 'react-icons/fa'



const SocialMedia = () => {
  return (
    
    <div className='app__social'>
        <div>
            
            <ul><a href='https://twitter.com/Jaypatil1101'><BsTwitter /></a></ul>
        </div>
        <div>
            <ul><a href = 'https://www.facebook.com/profile.php?id=100065264958930'><FaFacebookF /></a></ul>
        </div>
        <div>
            <ul><a href = 'https://www.instagram.com/jayyy_patilll/'><BsInstagram /></a></ul>
        </div>
        <div>
            <ul><a href = 'https://github.com/JayPatil1101'><VscGithub /></a></ul>
        </div>
        <div>
            <ul><a href = 'https://www.linkedin.com/in/jaypatil1101/'><FiLinkedin /></a></ul>
        </div>
        <div>
            <ul><a href = 'https://www.linkedin.com/in/jaypatil1101/overlay/1635496389243/single-media-viewer/'><IoNewspaperSharp /></a></ul>
        </div>
        <div>
            <ul><a href = 'https://medium.com/@jaypatil1101'><FaBlog /></a></ul>
        </div>
    </div>
  )
}



export default SocialMedia

