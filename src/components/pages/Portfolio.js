import React, { useState } from 'react';

export default function Portfolio() {
    const projects = useState([
        {
            name: "password-generator",
            link: "https://karlagoo.github.io/Password-Generator/"
        },
        {
            name: "horoscope-memes",
            link: "https://p1t1-web-dev-wizards.github.io/Project1---horoscope-memes/"
        },
        {
            name: "nanny-poppins",
            link: "https://nanny-poppins.herokuapp.com/"
        },
        {
            name: "budet-tracker",
            link: "https://budget-tracker-karlahw.herokuapp.com/",
        },
        {
            name: "note-taker",
            link: "https://note-taker-karla-goo.herokuapp.com/"
        },
        {
            name: 'workout-tracker',
            link: "https://workout-tracker-karla.herokuapp.com/"
        }
    ])

    return (
        <p>Portfolio!</p>
    )
}