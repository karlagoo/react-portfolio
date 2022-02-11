import React from 'react';

export default function Project({ project }) {
    const { name, link } = project;

    return (
        <div>
            <div className='portfolio-box' key={name}>
                <img src={require(`../../assets/images/projects/${name}.png`)}
                />
                <div>
                    <div>
                        <a href={link}></a>
                    </div>
                </div>
            </div>
        </div>
    )

}