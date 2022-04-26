import React from 'react';
import Resume from '../Teresa Loaeza Resume.pdf';

const Profile = () => {
    return (
        <>
        <div>
            <h1 className = "title">Portfolio</h1>
        </div>
        
        <div className = "section1">
            <div className = "about">
                <h2>About Me</h2>
                <p>My name is Teresa Loaeza, and I found my passion for coding two years ago. I have strived to put my all into my coding throughout the years. I am continuously learning to strengthen my tech skills. Creatively driven, always looking for a way to sprinkle creativity into my projects while still challenging myself to try new techniques.</p>
            </div>
            <div className = "image1">
            <img src = "./pimages/teresa.png" alt = "tech desk"/>
            </div>
        </div>

        <div className = "projects">
            <h3>Projects</h3>
            <a href = '/Projects'>View Projects</a>
        </div>

        <div className = "resume">
            <a href = {Resume} target="_blank" rel="noopener noreferrer"> View Resume Here</a>
        </div>
        </>
    )
}

export default Profile
