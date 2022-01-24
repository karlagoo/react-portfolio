import React from 'react';

function Footer() {
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
            <footer className="container">
                <div className="row">
                    <div className="col-lg-8-mx-auth text-center">
                        {icons.map(icon =>
                        (
                            <a href="{icon.link}" key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                        )
                    )}
                    </div>
                </div>
            </footer>
        </section>
    )

}

export default Footer;