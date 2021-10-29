import React, { useState } from 'react';
import { Card, Column, Container, Image, Row } from 'react-bootstrap';
import karla from '../../assets/images/karla.jpeg'


export default function AboutMe() {
    return (
        <>
        <div className="Card" style={{maxWidth: "540px", display:"flex"}}>
            <div className="Row no-gutters">
                <div className="Column">
                    <img src={karla} style={{
                        width: "300px",
                        borderRadius: "100%"
                    }}></img>
                    <div className="Row">
                        <div className="card-body">
                            <h5>About Me!</h5>
                            <p>I was born in Chicago and raised in Mexico. I studied marketing at the University of Illinois at Chicago. I am a history buff with an affinity for horror movies and webtoons. My love for web development started when I was a young kid trying to have the coolest MySpace page out of all my friends. As I grew older I knew I was meant to do something creative that would showcase my passion for all things weird! In an interesting turn of events, my passion for helping people turned me into working in the healthcare field after graduation, but something in me knew that I was meant to do something in web development. Currently I am a full-stack web development student at Northwestern University in my third week of a six-month course. As this course progresses, I am excited to build on to this portfolio and create works that will display my creativity!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  {/* <Card style={{ 
      display: 'flex',}}>
      <div>About Me!</div>
       <Card.Body>
        <Card.Img  src={karla} style={{
            width: "300px",
            borderRadius: "100%"
        }}/>
      <Card.Text style={{
          padding: "50px"
      }}>
      I was born in Chicago and raised in Mexico. I studied marketing at the University of Illinois at Chicago. I am a history buff with an affinity for horror movies and webtoons. My love for web development started when I was a young kid trying to have the coolest MySpace page out of all my friends. As I grew older I knew I was meant to do something creative that would showcase my passion for all things weird! In an interesting turn of events, my passion for helping people turned me into working in the healthcare field after graduation, but something in me knew that I was meant to do something in web development. Currently I am a full-stack web development student at Northwestern University in my third week of a six-month course. As this course progresses, I am excited to build on to this portfolio and create works that will display my creativity!
      </Card.Text>
    </Card.Body>
  </Card> */}
  
</>
    )
}