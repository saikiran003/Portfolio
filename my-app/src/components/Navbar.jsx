import React from 'react'

const Navbar = ({gotoProjectSection,gotoContactSection,gotoSkillsSection,gotoAboutSection}) => {
  return (
    <div id='navbar'>
        <div id="Name">
            <p>SK</p>

        </div>
        <div id="Sections">
            <div onClick={gotoAboutSection}>About</div>
            <div onClick={gotoSkillsSection}>Skills</div>
            <div onClick={gotoProjectSection}>Projects</div>
            <div onClick={gotoContactSection}>Contact</div>
        </div>

    </div>
  )
}

export default Navbar