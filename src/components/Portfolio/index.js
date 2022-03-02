import React, { useState } from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);

    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: "Password-Generator",
            description: "HTML/CSS/JavaScript",
            link: "https://karlagoo.github.io/Create-a-random-password-/",
            repo: "https://github.com/karlagoo/Create-a-random-password-"
        },
        {
            name: "Star-Spangled-Memer",
            description: "HTML/CSS/Materialize/JavaScript",
            link: "https://p1t1-web-dev-wizards.github.io/Project1---horoscope-memes/",
            repo: "https://github.com/p1t1-Web-Dev-Wizards/Project1---horoscope-memes"
        },
        {
            name: "Nanny-Poppins",
            description: "Handlebars/CSS/Bootstrap/JavaScript/AWS/Bootstrap",
            link: "https://nanny-poppins.herokuapp.com/",
            repo: "https://github.com/p2t4-require-espresso/nanny-poppins"
        },
        {
            name: 'Budget-Tracker',
            description: "NodeJS/Express/MongoDB/HTML/CSS",
            link: "https://budget-tracker-karlahw.herokuapp.com/",
            repo: "https://github.com/karlagoo/Budget-Tracker"
        },
        {
            name: "Note-taker",
            description: "Bootstrap/HTML/CSS/JavaScript",
            link: "https://note-taker-karla-goo.herokuapp.com/",
            repo: "https://github.com/karlagoo/Note-Taker"
        },
        {
            name: 'workout-tracker',
            description: "MongoDB/Mongoose/NodeJS/Bootstrap/JavaScript/HTML",
            link: "https://workout-tracker-karla.herokuapp.com/",
            repo: "https://github.com/karlagoo/Workout-Tracker"
        }
    ]);

    return (
        <section className="p-0">
            <br />
            <br />
            <br />
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    )
}