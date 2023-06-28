import React from 'react'
import { LinkedIn, Email, GitHub } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Micah</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating</p>
          <a href='https://www.linkedin.com/in/micah-bugbee/' target='_blank' rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href='mailto:micahbugbee@hotmail.com' target='_blank' rel="noopener noreferrer">
            <Email />
          </a>
          <a href='https://github.com/micahbugbee' target='_blank' rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React, Typescript, HTML, CSS, Javascript, Ionic, Bootstrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Node.js, Express, MySQL, Sequelize, MongoDB, Mongoose</span>
          </li>
          <li className='item'>
            <h2>Related Tech Skills</h2>
            <span>Git, GitHub, JWT, BCrypt, AWS, Trello</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home