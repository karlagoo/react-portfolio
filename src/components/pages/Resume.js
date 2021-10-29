import React, { useState } from 'react';
import Pdf from "../../assets/images/KarlaGoo_resume.pdf"

export default function Resume() {
    return (
        <section>
            <div>
                <div>
                    <div>
                    <h3>Front-End Proficiencies:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootsrap</li>
                    </ul>
                    <h3>Back-End Proficiencies:</h3>
                    <ul>
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
        </section>
    )
}