import React, { useState } from 'react';
import { Card, Column, Container, Image, Row, Col } from 'react-bootstrap';
import karla from '../../assets/images/karla.jpeg'


export default function AboutMe() {
    return (
        <>
  <Container>
      <Row>
    <Col>
        <div className="col-lg-10 mx-auto">
            <h1>About Me</h1>
        <hr />
        I was born in Chicago and raised in Mexico. I studied marketing at the University of Illinois at Chicago. I am a history buff with an affinity for horror movies and webtoons. My love for web development started when I was a young kid trying to have the coolest MySpace page out of all my friends. As I grew older I knew I was meant to do something creative that would showcase my passion for all things weird! In an interesting turn of events, my passion for helping people turned me into working in the healthcare field after graduation, but something in me knew that I was meant to do something in web development. Currently I am a full-stack web development student at Northwestern University in my third week of a six-month course. As this course progresses, I am excited to build on to this portfolio and create works that will display my creativity!</div>
     
    </Col>
  </Row>
  </Container>
  
</>
    )
}