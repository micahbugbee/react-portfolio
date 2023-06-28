import React from 'react'
import { LinkedIn, Facebook, GitHub } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
          <a href='https://www.linkedin.com/in/micah-bugbee/' target='_blank' rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href='https://www.facebook.com/micah.bugbee' target='_blank' rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href='https://github.com/micahbugbee' target='_blank' rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
        <p> &copy; 2023 micahbugbee.com</p>
    </div>
  )
}

export default Footer