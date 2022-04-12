
import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/networkSocial.css'

export const NetworkSocial = () => {
  return (
    <div>
    <div className="contact-form network" my={5}>
     <a href="https://github.com/damarislh10" target="_blank" rel="noreferrer"><GitHubIcon className="iconNetwork" fontSize="large" style={{ color: "gray" }}/></a>
     <a href="https://www.linkedin.com/in/damarishernandezdeveloper/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" className="iconNetwork" style={{ color: "gray" }}/></a>
    </div>
  </div>
  )
}