import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

export default function Project({ project }) {
    const { name, link, description, repo } = project;

    return (
        <div className = "col-lg-4 col-sm-6">
            <div className='portfolio-box' key={name}>
                <img 
                src={require(`../../assets/images/portfolio/${name}.png`).default}
                alt={removeHyphensAndCapitalize(name)}
                className="img-fluid"
                />
                <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                        <a href={repo} className="project-category text-faded" target="_blank">
                            <i className="fab fa-github"></i>
                            </a>
                            <br />
                            <a href={link} className="project-category text-faded" target="_blank">{name}</a>{' '}
                            <p className="project-name">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}