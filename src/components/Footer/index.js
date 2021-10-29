import React from 'react';

export default function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "http://github.com/karlagoo"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/karlagoo/"
        },
        {
            name: "fab fa-twitter",
            link: "https://twitter.com/itsgoocci"
        }
    ]
    return (
        <section>
            <footer className="container" style={{
                position: "absolute",
                width: "100%",
                bottom: "0",
                height:"2.5rem",
                alignItems: "center",
                backgroundColor: "whitesmoke"
            }}>
                <div className="Row">
                {icons.map(icon =>
                ( 
                    <a href={icon.link} key={icon.name}><i> className={icon.name}</i></a>
                )
                )}
                </div>
            </footer>
        </section>
    )

}