import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
import lingImage from './assets/images/ling-photo.jpg'
import stanfordLogo from './assets/images/stanford-logo.png'
// import { Card } from '@mui/material';
// import { CCard } from '@coreui/react'
import { Button, Modal, Box, Typography } from '@mui/material';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImgMediaCard from './app/components/ImgMediaCard';
import { CCardBody, CCard, CCardImage, CCardText, CCardTitle, CCardSubtitle, CButton } from '@coreui/react';
import NewJobCard from './app/components/NewJobCard';
import Typewriter from 'typewriter-effect';
import { red } from '@mui/material/colors';
import Resume from './assets/peter-ling-resume.pdf'


// Function to handle smooth scrolling when the link is clicked
function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView();
  }
}

// Add event listeners to all elements with the 'scroll-link' class
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", scrollToSection);
});



const handleButtonClick = () => {
  const handleClick = (url) => {
    // window.open('https://web.stanford.edu/class/cs194h/projects/daha/', '_blank');
    console.log(url)

  }
};

const NavHeader = () => (
  <nav style={{ display: 'flex', padding: '1rem', width: "100%", backgroundColor: "#38606B" }}>
    <p style={{flex: 4, color: "#EBD3BC"}}>peter ling</p>
    <ul style={{ display: 'flex', flex: 6, justifyContent: 'space-evenly', listStyle: 'none', padding: 0, width: '100%', alignItems: 'center' }}>
      <li><a href="#home-section" className="nav-header-element scroll-link">home</a></li>
      <li><a href="#about-section" className="nav-header-element scroll-link">about</a></li>
      <li><a href="#work-section" className="nav-header-element scroll-link">work experience</a></li>
      <li><a href="#projects-section" className="nav-header-element scroll-link">projects</a></li>
      <li><a href="#contact-section" className="nav-header-element scroll-link">contact </a></li>
    </ul>
  </nav>
);

// const TypewriterExample = () => (
//   <Typewriter
//     strings={words}
//     typeSpeed={40}
//     startDelay={1000}
//     loop={true}
//   />
// );

const TestTypewriter = () => {

  return (
    <Typewriter
      options={{
      strings: ['Engineer', 'Designer', 'Creator'],
      autoStart: true,
      loop: true,
  }}
  />

  )
  
  
}

const Home = () => (
  <section id="home-section" className="home-section">
    <div className="home-name-div">
    <h1 style={{color:" #103842"}}>peter ling</h1>
    <h3 style={{color: "#103842", marginTop: '-1em'}}>engineer, developer, designer</h3>
    {/* <Typewriter

      options={{
      strings: ['Engineer', 'Designer', 'Creator'],
      autoStart: true,
      loop: true,
      }}
    /> */}
    {/* <TestTypewriter textStyle={{ fontSize: 250 }}/> */}

  
    
    {/* Potentially looking for a better Typewriter library  */}
    {/* <TypeWriterEffect
            textStyle={{
              // fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'software developer',
              'designer',
              'engineer',
            ]}
            multiTextDelay={500}
            typeSpeed={250}
            multiTextLoop={true}
          /> */}
          
    </div> 
    
  </section>
);

const About = () => (
  <section id="about-section" className="about-section">

    <h2 className="about-section-title">about</h2>

      <div className="about-section-top-div">
        <div className="about-section-text-div">
          <p className="about-section-text">my name is peter ling. i grew up in los angeles and now attend stanford university, where i study computer science with a concentration in human-computer interaction. i've become passionate about building products and tools to individuals live more efficient and socially connected lives. when i'm not coding, you can find me on the golf course, surfing, exploring the outdoors, or walking backwards around campus as a tour guide.</p>
        </div>
        <div className="about-section-image-div"> 
          <img className="about-section-image" src={lingImage} alt="Image of Peter Ling" /> 
        </div>
      </div>


    <div className='about-section-bottom-div'>
      <div className='about-section-school-div'>
        <p>b.s., computer science '24</p>
        <p>concentration in human-computer interaction</p>

      </div>
      <img className='about-section-stanford-logo' src={stanfordLogo}/>
      <div className='about-section-school-div'>
        <p>m.s., computer science '25</p>
        <p>concentration in human-computer interaction</p>
      </div>
    </div>
    <button className="resume-button" onClick={() => window.open(Resume)}>see my resumé</button>
  </section>
);

const WorkExperience = () => {

  const [openStartup, setOpenStartup] = useState(false);
  const [openFanduel, setOpenFanduel] = useState(false);
  const [openMercury, setOpenMercury] = useState(false);

  const handleOpenStartup = () => {
    setOpenStartup(true);
  };
  
  const handleCloseStartup = () => {
    setOpenStartup(false);
  };

  const handleOpenFanduel = () => {
    setOpenFanduel(true);
  };
  
  const handleCloseFanduel = () => {
    setOpenFanduel(false);
  };
  
  const handleOpenMercury = () => {
    setOpenMercury(true);
  };
  
  const handleCloseMercury = () => {
    setOpenMercury(false);
  };

  return (


  <section id="work-section" className="work-section">

    <div className="work-greater-div">
      <h2>work experience</h2>
      <h3>here's where i've interned</h3>

      <div className="work-experiences-div">

      <CCard className="job-card">
          <CCardBody className="job-card-body">
            {/* <CCardImage style={{width: '100%'}} orientation="top" src={require('./assets/images/fanduel_logo_2.jpeg')} /> */}
            <CCardTitle style={{fontSize: "2rem"}}>Stealth Mode Startup</CCardTitle>
            <button className='job-card-button' onClick={handleOpenStartup}>learn more</button>
            <Modal
              open={openStartup}
              onClose={handleCloseStartup}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='job-card-modal'
            >
              <Box className='job-card-modal-box'>
                <h1>My time at Fanduel</h1>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Some info on fanduel
                </Typography> */}
                <p className='job-card-modal-description'>i work part-time as a software engineer for a stealth mode startup. the team works out of new york so i am remote while i'm in school. i help to create features in react native using next.js and supabase and i also contribute insightful design input, as the small team size allows me to have a larger amount of responsibility.</p>
                
              </Box>
            </Modal>

            <CCardSubtitle style={{fontSize: "1rem",  marginBottom: '-1.75rem'}}>Software Engineer Intern</CCardSubtitle>
            <CCardSubtitle style={{fontSize: "1rem"}}>October 2023—, Remote</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="job-card">
          <CCardBody className="job-card-body">
            <CCardImage style={{width: '100%'}} orientation="top" src={require('./assets/images/fanduel_logo_2.jpeg')} />
            <CCardTitle style={{fontSize: "2rem"}}>FanDuel</CCardTitle>
            <button className='job-card-button' onClick={handleOpenFanduel}>learn more</button>
            <Modal
              open={openFanduel}
              onClose={handleCloseFanduel}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='job-card-modal'
            >
              <Box className='job-card-modal-box'>
                <h1>My time at Fanduel</h1>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Some info on fanduel
                </Typography> */}
                <p className='job-card-modal-description'>as a software engineering intern, I worked on a backend team that was responsible for receiving and constructing data from 3rd party sources into FanDuel's daily fantasy sports platform. my work included: </p>
                <ul className='job-card-modal-list'>
                  <li>writing numerous API endpoints in java to properly handle sports data within FanDuel while operating on the agile software development cycle</li>
                  <li>gaining an undertsanding of the company's engineering architecture in order to update services to new development stacks</li>
                  <li>undergoing thorough testing and code review prior to releasing features onto production through FanDuel's deployment pipelines</li>
                  <li>participating on an intern hackathon team which conducted product research and presented a new feature which potentially help to cross-sell FanDuel customers between daily fantasy sports and sportsbook</li>
                </ul>
              </Box>
            </Modal>

            <CCardSubtitle style={{fontSize: "1rem",  marginBottom: '-1.75rem'}}>Software Engineer Intern</CCardSubtitle>
            <CCardSubtitle style={{fontSize: "1rem"}}>Summer 2023, New York, NY</CCardSubtitle>
          </CCardBody>
        </CCard>



        <CCard className="job-card">
          <CCardBody className="job-card-body">
            <CCardImage style={{width: '100%'}} orientation="top" src={require('./assets/images/mercury_logo2.png')} />
            <CCardTitle style={{fontSize: "2rem"}}>Mercury Systems</CCardTitle>


            <button className='job-card-button' onClick={handleOpenMercury}>learn more</button>
            <Modal
              open={openMercury}
              onClose={handleCloseMercury}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='job-card-modal'
            >
              <Box className='job-card-modal-box'>
                <h1>My time at Mercury Systems</h1>
                <p className='job-card-modal-description'>spending a summer as a software engineering intern at Mercury introduced me to the world of aerospace an defense engineering which was completely foreign to me before. in my first professional software engineering experience, i learned how to communicate with other engineers on a scrum team. i completed my project which was to:</p>
                <ul className='job-card-modal-list'>
                  <li>create a packaging app in C/C++ built to take in a binary file representing the internal system of the V-22 Osprey plane</li>
                  <li>gain an understanding of public/private key encryption and use the OpenSSL library to ensure that the binary file would load in safely and securly. </li>
                </ul>
              </Box>
            </Modal>


            <CCardSubtitle style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>Software Engineering Intern</CCardSubtitle>
            <CCardSubtitle style={{fontSize: "1rem"}}>Summer 2022, Torrance, CA</CCardSubtitle>
          </CCardBody>
        </CCard>
      </div>

    </div>
  </section>

  )
  }

  



const Projects = () => (
  <section id="projects-section" className="projects-section">
    {/* List of your projects, including project name, description, and a link */}
    <div className="projects-greater-div">
    <h2>projects</h2>
    <h3>take a look at some of the stuff i've worked on over the years</h3>

      <div className="projects-grid-container">

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>daha</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>designed, itereated, and coded an app to create a lending market on campuses with a team of 3 other stanford students. helped prototype throughout the design process, co-wrote the front-end and back-end code, and also coded the landing/information page.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://web.stanford.edu/class/cs194h/projects/daha/')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>react native, javascript, supabase, html/css, design</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>september 2022 — march 2023</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>card probability distribution displayer</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>i've always been intrigued by the numbers, statistics, and probability that lay the grounds for card games such as poker. this led me to build this python tool that can help a player understand the probability of future cards to be dealt given the previous action.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/word-guessing-game')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>C++</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>febuary 2022</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>my personal website</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>taught myself react in order to build my personal portfolio website, which i guess you are looking at now. </CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/ling-website')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>react, css, javascript</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>april 2023 —</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>chatbot</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>created a functional movie-recommending chatbot using techniques such as sentiment analysis and ML.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/larsenweigle/chatbot/blob/main/chatbot.py')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>python, machine learning</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>may — june 2023</CCardSubtitle>
          </CCardBody>
        </CCard>
        
        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>hangman game</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>created a hangman game in C++ while learning the language and some of its libraries</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/word-guessing-game')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>C++</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>june 2021</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>emotional hub website</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>built a platform in html to serve as both a source of positivity and a reflective journal. gained database experience by linking the site up with a MongoDB responsible for reading, writing, and deleting.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/emotional-hub-website')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>html, css, MongoDB</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>may 2021</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>football player guessing game</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>created a command line game that challenges a user to guess a football player given certain hints about who they might be. an early project for me that taught me alot about I/O in c++.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/football-trivia-game')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>C++</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>march 2022</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>tripmates</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>built an MVP for a peer-recommendation site for students studying abroad. created the recommendation grid and linked it with a supabase backend so that users' progress and a recommendation's number of votes would save</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/tripmates')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>html, css</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>april — may 2023</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>logistic regression</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>wrote, trained, and tested a machine learning algorithm that takes in csv files to make predictions on their outputs.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/logistic-regression')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>python, machine learning</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>november — december 2021</CCardSubtitle>
          </CCardBody>
        </CCard>

        <CCard className="project-card">
          <CCardBody className="project-card-body">
            <CCardTitle className='project-card-title'>naive bayes</CCardTitle>
            <CCardSubtitle className="project-card-description"  style={{fontSize: "1rem", marginTop: '-1.75rem'}}>using naive bayes, created a machine learning algorithm to make predictions given previous training data.</CCardSubtitle>
            <button className='project-card-button' onClick={() => window.open('https://github.com/peter-ling/naive-bayes')}>learn more</button>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem", marginBottom: '-1.75rem'}}>python, machine learning</CCardSubtitle>
            <CCardSubtitle className="project-card-description" style={{fontSize: "1rem"}}>november — december 2021</CCardSubtitle>
          </CCardBody>
        </CCard>
        
      </div> 
    </div>
  </section>
);

const Contact = () => (
  <section id="contact-section" className='contact-section'>
    <div className='contact-greater-div'>
      <h2 className="contact-section-title">contact me</h2>
      <h3>here are some ways you can get in touch with me!</h3>
      <div className='contact-elements-div'>
        <a className='contact-element-button' href='mailto:pling1@stanford.edu'>pling1@stanford.edu</a>
        <a className='contact-element-button' href="https://www.linkedin.com/in/ling-peter/" target="_blank">linkedin</a>
        <a className='contact-element-button' href="https://github.com/peter-ling" target="_blank">github</a>
      </div>
    </div>
  </section>
);

const App = () => {

  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobileDevice) {
      alert('this site is currently only optimized for desktops for now, so it might not look pretty yet on your mobile device. try using a desktop device in the meantime!');
    }
  }, []);

  return (
    <main className="App" style={{ width: '100%', height: "100%", backgroundColor: "#38606B"}}>

      <NavHeader />
      
      <Home />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <footer style={{backgroundColor: "#38606B"}}>
        <p style={{color: "#EBD3BC", backgroundColor: "#38606B", paddingLeft: '0.5%'}}>Copyright © 2023 Peter Ling</p>
    </footer>
  </main>
    
  )

}

export default App;