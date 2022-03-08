import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I was born in Chicago and raised in Mexico. I studied marketing at the University of Illinois at Chicago. I am a history buff with an affinity for horror movies and webtoons. My love for web development started when I was a young kid trying to have the coolest MySpace page out of all my friends. As I grew older I knew I was meant to do something creative that would showcase my passion for all things weird! In an interesting turn of events, my passion for helping people turned me into working in the healthcare field after graduation, but something in me knew that I was meant to do something in web development.</p>
                       
                        <p className="text-faded mb-5">I am a full-stack web developer and recent graduate from Northwestern University coding bootcamp. I am excited to build a large porfolio filled with fun and exciting projects! The journey to coding awaits!</p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

//         <>
//   <Container>
//       <Row>
//     <Col>
//         <div className="col-lg-10 mx-auto">
//             <h1>About Me</h1>
//         <hr />
//         <p>I was born in Chicago and raised in Mexico. I studied marketing at the University of Illinois at Chicago. I am a history buff with an affinity for horror movies and webtoons. My love for web development started when I was a young kid trying to have the coolest MySpace page out of all my friends. As I grew older I knew I was meant to do something creative that would showcase my passion for all things weird! In an interesting turn of events, my passion for helping people turned me into working in the healthcare field after graduation, but something in me knew that I was meant to do something in web development. Currently I am a full-stack web development student at Northwestern University in my third week of a six-month course. As this course progresses, I am excited to build on to this portfolio and create works that will display my creativity!</p>
//         </div>
     
//     </Col>
//   </Row>
//   </Container>
  
// </>
