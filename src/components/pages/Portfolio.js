import React, { useState } from 'react';
import Project from '../Projects';
import Projects from '../Projects';

export default function Portfolio() {
    const projects = ([
        {
            name: "Password-Generator",
            link: "https://karlagoo.github.io/Password-Generator/"
        },
        {
            name: "Star_Spangled_Memer",
            link: "https://p1t1-web-dev-wizards.github.io/Project1---horoscope-memes/"
        },
        {
            name: "Nanny-Poppins",
            link: "https://nanny-poppins.herokuapp.com/"
        },
        {
            name: "Budget-Tracker",
            link: "https://budget-tracker-karlahw.herokuapp.com/",
        },
        {
            name: "Note-taker",
            link: "https://note-taker-karla-goo.herokuapp.com/"
        },
        {
            name: 'workout-tracker',
            link: "https://workout-tracker-karla.herokuapp.com/"
        }
    ])

    return (
        <div>
            <div>
                <h1 className="text-center margin top">Projects</h1>
                <div className="row no-gutters popup-gellery">
                    {projects.map((project)=>{
                        <Project 
                            project={project}
                            key={"project"}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}