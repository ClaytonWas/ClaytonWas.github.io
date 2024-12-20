import React from 'react';
import NavBar from '../components/NavBar';
import Project from '../components/Project';

import SimulationOfEcoSystemFoodChainsPhoto from '../assets/images/SimulationOfEcoSystemFoodChains.jpeg';
import WebAppPhotoEdits from '../assets/images/WebAppPhotoEdits.jpeg'
import Ducks from '../assets/images/Ducks.jpeg'

const Projects = () => (
    <div className="bg-gray-200 min-h-screen flex flex-col">
        <NavBar />
        <div className="flex flex-grow flex-col justify-center items-center">
            <Project 
                title="PhotoEdits" 
                description="Photo manipulation software inspired by applications like Photoshop and Photopea. Performs image manipulations through a user interface on the browser."
                picture={WebAppPhotoEdits}
                html_link="https://webappphotoedits.onrender.com/"
            />

            <Project 
                title="Simulation of Ecosystem Food Chains" 
                description="Simulation of ecosystem with multiple intertwined food webs that mimics natural ecological processes. The simulation aims to demonstrate predation, carrying capacity, and biomass flow through trophic levels in an ecosystem."
                picture={SimulationOfEcoSystemFoodChainsPhoto}
                html_link="https://github.com/ClaytonWas/Simulation-of-Ecosystem-Food-Chains"
            />

            <Project 
                title="Ducks" 
                description="The open world fun fest where you can talk to other players AND walk around! A multiplayer proof of concept for an MMO using WebSockets."
                picture={Ducks}
                html_link="https://github.com/ClaytonWas/Ducks"
            />
        </div>
    </div>
);

export default Projects;
