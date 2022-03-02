import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'
import Pdf from "../../assets/images/resume2022.pdf"

export default function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <section className="bg-dark">
            <div className="masthead text-center d-flex">
            <div className= "container">
                <div className = "row">
                    <div className = "col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                    <h3>Front-End Proficiencies:</h3>
                    <ul style={{listStyle: "none"}}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootsrap</li>
                    </ul>
                    <h3>Back-End Proficiencies:</h3>
                    <ul style={{listStyle: "none"}}>
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB, Mongoose</li>
                        <li>MERN Stack</li>
                    </ul>
                    <p><a href={Pdf}>Download my Resume</a></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}