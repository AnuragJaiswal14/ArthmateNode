import { useEffect, useState } from "react";
import {Navbar, Container,Nav} from "react-bootstrap";
import logo from '../assets/img/logo_arthmate1.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import ReactDOM from "react-dom";
import React from "react";
import { Projects } from "./Projects";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
    const logoStyle = {
      //width: '200px', /* Adjust the width as needed */
      //height: '100px', /* Adjust the height as needed */
      objectFit: 'contain',
      //border: '1px solid #000',
      borderRadius: '8px',
      //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      paddingleft: '100px'
    };
export const NavBar = () =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
             setActiveLink(value);
             if (value === 'team') {
                ReactDOM.render(<Projects/>, document.getElementById('root'));
              }
              else if (value === 'home') {
                ReactDOM.render(<Banner/>, document.getElementById('root'));
              }
              else if (value === 'projects') {
                ReactDOM.render(<Skills/>, document.getElementById('root'));
              }
    }
   
    return (
        <Navbar expand="lg" className={scrolled? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/home">
                    <img src={logo} alt="Logo" style={logoStyle}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toogler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() =>
                     onUpdateActiveLink('home')
                     }> Home </Nav.Link>
                   <Nav.Link href="/whatwedo" className={activeLink === 'skills'? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>What we Do</Nav.Link> 
                  <Nav.Link href="/team" className={activeLink === 'project'? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('team')}> Team </Nav.Link>
                  </Nav>    
                  <span className="navbar-text">
                    <div className="social-icon">
                    <a href="https://in.linkedin.com/company/arthmate"><img src={navIcon1} alt="Linkdn"/></a>
                    <a href=""><img src={navIcon2} alt="Facebook"/></a>
                    <a href=""><img src={navIcon3} alt="Instagram"/></a>
                    
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button> 
                  </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}