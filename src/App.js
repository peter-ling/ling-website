import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
import lingImage from './assets/images/ling-photo.jpg'
import gradPhoto from './assets/images/grad-photo.JPG'
import stanfordLogo from './assets/images/stanford-logo.png'
import backgroundImage from './assets/images/palisades-sunset-min.jpg'
import andoverLogo from './assets/images/andover-logo.png'
import fanduelPhoto from './assets/images/fanduel-photo.JPEG'
import tiktokTeamImage from './assets/images/tiktok-team-image.webp'
import { Button, Modal, Box, Typography, AppBar, Toolbar, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const headerOffset = 64; // navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

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

const NavHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 64; // navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      color: '#2c3e50'
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#2c3e50',
              fontFamily: '"LeagueSpartan", sans-serif'
            }}
          >
            Peter Ling
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#2c3e50' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  sx={{
                    color: '#2c3e50',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontFamily: '"LeagueSpartan", sans-serif',
                    '&:hover': {
                      backgroundColor: 'rgba(44, 62, 80, 0.08)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};


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
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
    }}></div>
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
      <a 
        href="https://www.stanford.edu" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={stanfordLogo} 
          alt="Stanford Logo" 
          style={{ 
            width: '100px', 
            height: 'auto' 
          }} 
        />
      </a>
      <div className='about-section-school-div'>
        <p>m.s., computer science '25</p>
        <p>concentration in human-computer interaction</p>
      </div>
      {/* After Phillips Academy Education div */}
      <div style={{ 
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <Button 
          onClick={() => window.open(Resume, '_blank')}
          sx={{
            fontFamily: '"LeagueSpartan", sans-serif',
            textTransform: 'none',
            backgroundColor: '#2c3e50',
            color: 'white',
            fontSize: '1.1rem',
            padding: '10px 40px',
            '&:hover': {
              backgroundColor: '#1a252f'
            }
          }}
        >
          View Resume
        </Button>
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
            <CCardTitle style={{fontSize: "2rem"}}>TikTok</CCardTitle>
            <button className='job-card-button' onClick={handleOpenStartup}>learn more</button>
            <Modal
              open={openStartup}
              onClose={handleCloseStartup}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='job-card-modal'
            >
              <Box className='job-card-modal-box'>
                <h1>My time at TikTok</h1>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Some info on fanduel
                </Typography> */}
                <p className='job-card-modal-description'>Working part-time as a software engineer at TikTok. The team works out of New York while I work remotely during school. I help to create features in React Native using Next.js and contribute insightful design input for the platform.</p>
                
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
              onClose={() => setOpenFanduel(false)}
              aria-labelledby="modal-title"
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxWidth: 800,
                bgcolor: 'background.paper',
                borderRadius: '20px',
                boxShadow: 24,
                p: 4,
                fontFamily: '"LeagueSpartan", sans-serif',
                maxHeight: '90vh',
                overflow: 'auto',
                overflowX: 'hidden'
              }}>
                <Typography variant="h4" sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                  My Time at FanDuel
                </Typography>
                <Typography sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                  As a software engineering intern, I worked on a backend team responsible for receiving and constructing data from 3rd party sources into FanDuel's daily fantasy sports platform. My work included:
                </Typography>
                <ul style={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                  <li>Writing numerous API endpoints in Java to handle sports data while operating on the agile software development cycle</li>
                  <li>Gaining an understanding of the company's engineering architecture to update services to new development stacks</li>
                  <li>Undergoing thorough testing and code review prior to releasing features onto production</li>
                  <li>Participating in an intern hackathon team which conducted product research and presented new cross-selling features</li>
                </ul>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '2rem'
                }}>
                  <img 
                    src={fanduelPhoto} 
                    alt="FanDuel Experience" 
                    style={{
                      width: '80%',
                      height: 'auto',
                      borderRadius: '10px',
                      marginBottom: '1rem'
                    }}
                  />
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontSize: '0.9rem',
                      color: '#666',
                      fontStyle: 'italic'
                    }}
                  >
                    The FanDuel Engineering Team
                  </Typography>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  <Button 
                    onClick={() => setOpenFanduel(false)}
                    sx={{
                      fontFamily: '"LeagueSpartan", sans-serif',
                      textTransform: 'none',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      fontSize: '1.1rem',
                      padding: '10px 40px',
                      '&:hover': {
                        backgroundColor: '#1a252f'
                      }
                    }}
                  >
                    Close
                  </Button>
                </div>
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

      <div className="grid" style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        border: 'none',
        justifyItems: 'center'
      }}>

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
        <div style={{ 
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <a href="mailto:pling1@stanford.edu" className="button">
            Send me an email
          </a>
          <a 
            href="https://www.linkedin.com/in/ling-peter/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [openStartup, setOpenStartup] = useState(false);
  const [openFanduel, setOpenFanduel] = useState(false);
  const [openMercury, setOpenMercury] = useState(false);

  return (
    <div className="App">
      <NavHeader />
      <main>
        {/* Home Section */}
        <section id="home" className="section">
          <div style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }}></div>
          <div className="container">
            <div className="grid" style={{ 
              gridTemplateColumns: '1fr 1fr', 
              gap: '4rem', 
              alignItems: 'center'
            }}>
              <div className="fade-in">
                <h1 style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1.5rem',
                  fontFamily: '"LeagueSpartan", sans-serif'
                }}>
                  Hi, I'm Peter!
                </h1>
                <div style={{ 
                  fontSize: '1.5rem', 
                  color: '#EBD3BC', 
                  marginBottom: '2rem',
                  fontFamily: '"LeagueSpartan", sans-serif'
                }}>
                  <Typewriter
                    options={{
                      strings: ['Builder', 'Designer', 'Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <p style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '2rem', 
                  opacity: 0.9,
                  fontFamily: '"LeagueSpartan", sans-serif',
                }}>
                  Learn more about my journey making things happen with tech
                </p>
                <div className="button-container" style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#about" 
                     className="button" 
                     onClick={(e) => {
                       e.preventDefault();
                       scrollToSection('#about');
                     }}>
                    More About Me
                  </a>
                  <a href="#contact" 
                     className="button" 
                     onClick={(e) => {
                       e.preventDefault();
                       scrollToSection('#contact');
                     }}>
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="fade-in" style={{ textAlign: 'center' }}>
                <img 
                  src={lingImage} 
                  alt="Peter Ling" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '400px', 
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container" style={{ border: 'none' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: '#2c3e50',
              marginBottom: '3rem',
              textAlign: 'center',
              fontFamily: '"LeagueSpartan", sans-serif'
            }}>About Me</h2>
            <div className="grid" style={{ 
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              border: 'none'
            }}>
              <div className="fade-in" style={{ border: 'none' }}>
                <div style={{ padding: '1rem', border: 'none' }}>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.8',
                    color: '#2c3e50',
                    marginBottom: '1.5rem',
                    fontFamily: '"LeagueSpartan", sans-serif'
                  }}>
                    I grew up in Pacific Palisades, CA and now attend Stanford University, where I've become passionate about building products and tools to help individuals live more efficient and socially connected lives.
                  </p>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.8',
                    color: '#2c3e50',
                    marginBottom: '2rem',
                    fontFamily: '"LeagueSpartan", sans-serif'
                  }}>
                    When I'm not coding, you can find me on the golf course, surfing, exploring the outdoors, or walking backwards around campus as a tour guide.
                  </p>
                  <div style={{ marginTop: '2rem', border: 'none' }}>
                    <h3 style={{ 
                      marginBottom: '1.5rem',
                      color: '#2c3e50',
                      fontSize: '1.5rem',
                      fontFamily: '"LeagueSpartan", sans-serif'
                    }}>Education</h3>
                    
                    {/* Stanford Education */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '2rem',
                      border: 'none',
                      marginBottom: '2rem'
                    }}>
                      <a 
                        href="https://www.stanford.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                      <img 
                        src={stanfordLogo} 
                        alt="Stanford Logo" 
                        style={{ 
                          width: '100px', 
                          height: 'auto' 
                        }} 
                      />
                      </a>
                      <div style={{ border: 'none' }}>
                        <p style={{ 
                          fontWeight: '600', 
                          marginBottom: '0.5rem',
                          fontSize: '1.1rem',
                          color: '#2c3e50',
                          fontFamily: '"LeagueSpartan", sans-serif'
                        }}>Stanford University</p>
                        <p style={{ 
                          marginBottom: '0.3rem',
                          color: '#2c3e50',
                          fontFamily: '"LeagueSpartan", sans-serif'
                        }}>B.S. Computer Science '24</p>
                        <p style={{ 
                          marginBottom: '0.3rem',
                          color: '#2c3e50',
                          fontFamily: '"LeagueSpartan", sans-serif'
                        }}>M.S. Computer Science '25</p>
                        <p style={{ 
                          color: '#666',
                          fontSize: '0.95rem',
                          fontFamily: '"LeagueSpartan", sans-serif'
                        }}>Concentration in Human-Computer Interaction</p>
                      </div>
                    </div>

                    {/* Phillips Academy Education */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '2rem',
                      border: 'none'
                    }}>
                      <a 
                        href="https://www.andover.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <img 
                          src={andoverLogo} 
                          alt="Phillips Academy Logo" 
                          style={{ 
                            width: '100px', 
                            height: 'auto' 
                          }} 
                        />
                      </a>
                      <div style={{ border: 'none' }}>
                        <p style={{ 
                          fontWeight: '600', 
                          marginBottom: '0.5rem',
                          fontSize: '1.1rem',
                          color: '#2c3e50',
                          fontFamily: '"LeagueSpartan", sans-serif'
                        }}>Phillips Academy</p>
                        <p style={{ 
                          marginBottom: '0.3rem',
                          color: '#2c3e50',
                          fontFamily: '"LeagueSpartan", sans-serif'
                        }}>High School</p>
                      </div>
                    </div>

                    {/* After Phillips Academy Education div */}
                    <div style={{ 
                      marginTop: '2rem',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%'
                    }}>
                      <Button 
                        onClick={() => window.open(Resume, '_blank')}
                        sx={{
                          fontFamily: '"LeagueSpartan", sans-serif',
                          textTransform: 'none',
                          backgroundColor: '#2c3e50',
                          color: 'white',
                          fontSize: '1.1rem',
                          padding: '10px 40px',
                          '&:hover': {
                            backgroundColor: '#1a252f'
                          }
                        }}
                      >
                        View Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fade-in" style={{ textAlign: 'center', border: 'none' }}>
                <img 
                  src={gradPhoto} 
                  alt="Peter Ling Graduation" 
                  style={{ 
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container" style={{ border: 'none' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: '#EBD3BC',
              marginBottom: '3rem',
              textAlign: 'center',
              fontFamily: '"LeagueSpartan", sans-serif'
            }}>Work Experience</h2>
            <div className="grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              border: 'none'
            }}>
              {/* TikTok Card */}
              <Card sx={{ 
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 1
                    }}
                  >
                    TikTok
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 0.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    Solutions Engineer Intern
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 0.5,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    June 2024 — September 2024
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 2,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    New York, NY
                  </Typography>
                  <Button 
                    onClick={() => setOpenStartup(true)}
                    sx={{
                      fontFamily: '"LeagueSpartan", sans-serif',
                      textTransform: 'none',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      fontSize: '0.9rem',
                      '&:hover': {
                        backgroundColor: '#1a252f'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* FanDuel Card */}
              <Card sx={{ 
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 1
                    }}
                  >
                    FanDuel
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 0.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    Software Engineer Intern
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 0.5,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    June 2023 — August 2023
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 2,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    New York, NY
                  </Typography>
                  <Button 
                    onClick={() => setOpenFanduel(true)}
                    sx={{
                      fontFamily: '"LeagueSpartan", sans-serif',
                      textTransform: 'none',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      fontSize: '0.9rem',
                      '&:hover': {
                        backgroundColor: '#1a252f'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Mercury Systems Card */}
              <Card sx={{ 
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 1
                    }}
                  >
                    Mercury Systems
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 0.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    Software Engineer Intern
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 0.5,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    June 2022 — August 2022
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 2,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    Torrance, CA
                  </Typography>
                  <Button 
                    onClick={() => setOpenMercury(true)}
                    sx={{
                      fontFamily: '"LeagueSpartan", sans-serif',
                      textTransform: 'none',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      fontSize: '0.9rem',
                      '&:hover': {
                        backgroundColor: '#1a252f'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Modals */}
              <Modal
                open={openStartup}
                onClose={() => setOpenStartup(false)}
                aria-labelledby="tiktok-modal-title"
              >
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  maxWidth: 800,
                  bgcolor: 'background.paper',
                  borderRadius: '20px',
                  boxShadow: 24,
                  p: 4,
                  fontFamily: '"LeagueSpartan", sans-serif',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  overflowX: 'hidden'
                }}>
                  <Typography variant="h4" sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    My Time at TikTok
                  </Typography>
                  <Typography sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    At TikTok, the Solutions Engineering team works to help advertisers maximize their success on the platform. Here I had two main projects.
                  </Typography>
                  <Typography sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    I first built a too to automate the process of closing poor performing ad groups for clients. While they could previously see which groups were noot performing well, clients would need to manually go onto the TikTok ads platform and close them all individually, causing inneficiencies in optimizing ad group performance. Using Python, TikTok Marketing API, and different in-house Cloud APIs, I built this service that clients were beginning to being onboarded onto towards the end of my internship. 
                  </Typography>
                  <Typography sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    Additionally, I took on a data engineering project to create new dashboards for solutions engineers at TikTok. Previously, SEs needed to go to several different tables and dashboards to get info on specific ad performance metrics and conversion rates. Putting them all together, I made it easier for SEs to quickly access the data they need to make informed decisions for their clients. 
                  </Typography>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: '2rem'
                  }}>
                    <img 
                      src={require('./assets/images/tiktok-team-image.webp')}
                      alt="TikTok Team" 
                      style={{
                        width: '80%',
                        height: 'auto',
                        borderRadius: '10px',
                        marginBottom: '1rem'
                      }}
                    />
                    <Typography 
                      sx={{ 
                        fontFamily: '"LeagueSpartan", sans-serif',
                        fontSize: '0.9rem',
                        color: '#666',
                        fontStyle: 'italic'
                      }}
                    >
                      My team's farewell party for my on my last day as an intern
                    </Typography>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <Button 
                      onClick={() => setOpenStartup(false)}
                      sx={{
                        fontFamily: '"LeagueSpartan", sans-serif',
                        textTransform: 'none',
                        backgroundColor: '#2c3e50',
                        color: 'white',
                        fontSize: '1.1rem',
                        padding: '10px 40px',
                        '&:hover': {
                          backgroundColor: '#1a252f'
                        }
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </Box>
              </Modal>

              <Modal
                open={openFanduel}
                onClose={() => setOpenFanduel(false)}
                aria-labelledby="fanduel-modal-title"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{
                  position: 'relative',
                  width: '80%',
                  maxWidth: 800,
                  bgcolor: 'background.paper',
                  borderRadius: '20px',
                  boxShadow: 24,
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '& ::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '& ::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                  '& ::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                    borderRadius: '4px',
                  },
                  '& ::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#666',
                  }
                }}>
                  <div style={{
                    padding: '2rem',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    boxSizing: 'border-box'
                  }}>
                    <Typography variant="h4" sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                      My Time at FanDuel
                    </Typography>
                    <Typography sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif', width: '100%' }}>
                      As a software engineering intern, I worked on a backend team responsible for receiving and constructing data from 3rd party sources into FanDuel's daily fantasy sports platform. My work included:
                    </Typography>
                    <ul style={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif', width: '100%' }}>
                      <li>Writing numerous API endpoints in Java to handle sports data while operating on the agile software development cycle</li>
                      <li>Gaining an understanding of the company's engineering architecture to update services to new development stacks</li>
                      <li>Undergoing thorough testing and code review prior to releasing features onto production</li>
                      <li>Participating in an intern hackathon team which conducted product research and presented new cross-selling features</li>
                    </ul>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '100%',
                      marginBottom: '2rem'
                    }}>
                      <img 
                        src={fanduelPhoto} 
                        alt="FanDuel Experience" 
                        style={{
                          width: '80%',
                          height: 'auto',
                          borderRadius: '10px',
                          marginBottom: '1rem'
                        }}
                      />
                      <Typography 
                        sx={{ 
                          fontFamily: '"LeagueSpartan", sans-serif',
                          fontSize: '0.9rem',
                          color: '#666',
                          fontStyle: 'italic'
                        }}
                      >
                        Successful escape room on National Intern Day
                      </Typography>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%'
                    }}>
                      <Button 
                        onClick={() => setOpenFanduel(false)}
                        sx={{
                          fontFamily: '"LeagueSpartan", sans-serif',
                          textTransform: 'none',
                          backgroundColor: '#2c3e50',
                          color: 'white',
                          fontSize: '1.1rem',
                          padding: '10px 40px',
                          '&:hover': {
                            backgroundColor: '#1a252f'
                          }
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </Box>
              </Modal>

              <Modal
                open={openMercury}
                onClose={() => setOpenMercury(false)}
                aria-labelledby="mercury-modal-title"
              >
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  maxWidth: 600,
                  bgcolor: 'background.paper',
                  borderRadius: '20px',
                  boxShadow: 24,
                  p: 4,
                  fontFamily: '"LeagueSpartan", sans-serif'
                }}>
                  <Typography variant="h4" sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    My Time at Mercury Systems
                  </Typography>
                  <Typography sx={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    Spending a summer as a software engineering intern at Mercury introduced me to the world of aerospace and defense engineering. In my first professional software engineering experience, I learned how to communicate with other engineers on a scrum team. I completed my project which was to:
                  </Typography>
                  <ul style={{ marginBottom: 2, fontFamily: '"LeagueSpartan", sans-serif' }}>
                    <li>Create a packaging app in C/C++ built to take in a binary file representing the internal system of the V-22 Osprey plane</li>
                    <li>Gain an understanding of public/private key encryption and use the OpenSSL library to ensure secure file loading</li>
                  </ul>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <Button 
                      onClick={() => setOpenMercury(false)}
                      sx={{
                        fontFamily: '"LeagueSpartan", sans-serif',
                        textTransform: 'none',
                        backgroundColor: '#2c3e50',
                        color: 'white',
                        fontSize: '1.1rem',
                        padding: '10px 40px',
                        '&:hover': {
                          backgroundColor: '#1a252f'
                        }
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container" style={{ border: 'none' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: '#2c3e50',
              marginBottom: '3rem',
              textAlign: 'center',
              fontFamily: '"LeagueSpartan", sans-serif'
            }}>Projects</h2>
            <div className="grid" style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              border: 'none',
              justifyItems: 'center'
            }}>
              {/* Project Card 1 */}
              <Card sx={{ 
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 1
                    }}
                  >
                    daha
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 0.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    An Online Campus Lending Marketplace
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 2,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    React Native, Supabase, Expo, Figma
                  </Typography>
                  <Button 
                    onClick={() => window.open('https://www.youtube.com/watch?v=9TLdPbU3arc&ab_channel=PeterLing', '_blank')}
                    sx={{
                      fontFamily: '"LeagueSpartan", sans-serif',
                      textTransform: 'none',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      fontSize: '0.9rem',
                      '&:hover': {
                        backgroundColor: '#1a252f'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Project Card 2 */}
              <Card sx={{ 
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 1
                    }}
                  >
                    Quad Contest
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      fontWeight: 600,
                      marginBottom: 0.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    Rogue Like 2d Survival Game
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: '"LeagueSpartan", sans-serif',
                      marginBottom: 2,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    Unity, C#
                  </Typography>
                  <Button 
                    onClick={() => window.open('https://www.quadcontest.online', '_blank')}
                    sx={{
                      fontFamily: '"LeagueSpartan", sans-serif',
                      textTransform: 'none',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      fontSize: '0.9rem',
                      '&:hover': {
                        backgroundColor: '#1a252f'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container" style={{ border: 'none' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: '#EBD3BC',
              marginBottom: '3rem',
              textAlign: 'center',
              fontFamily: '"LeagueSpartan", sans-serif'
            }}>Get in Touch</h2>
            <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              border: 'none' 
            }}>
              <div style={{ 
                padding: '2rem', 
                textAlign: 'center',
                border: 'none',
                background: 'none'
              }}>
                <p style={{ 
                  marginBottom: '2rem',
                  fontSize: '1.2rem',
                  color: '#EBD3BC',
                  fontFamily: '"LeagueSpartan", sans-serif'
                }}>
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <div style={{ 
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center'
                }}>
                  <a href="mailto:pling1@stanford.edu" className="button">
                    Send me an email
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ling-peter/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;