import './App.css';
import {Button,CardBody,navbar,Accordion,Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Experience from './experience';
import Education from './education';
import Publications from './publications';
import Certifications from './certifications';

import img1 from './images/Robot-AI.jpg';
import React, {useState,useEffect} from 'react';


function App() {

  const [count, setCount] = useState(0);

  // const handleClearLocalStorage = () => {
  //   localStorage.clear();
  //   // Optionally, you can perform additional actions after clearing localStorage
  //   // For example, resetting state or updating your UI.
  // };

  useEffect(() => {
    console.log('Component mounted');

    const storedCount = localStorage.getItem('pageVisits');
    const initialCount = Number(storedCount) || 0;
    setCount(initialCount + 1);
    localStorage.setItem('pageVisits', initialCount + 1);

    return () => {
      console.log('Component unmounted');
    };
  }, []); 
  
  
  return (
    <>
    {/* <button onClick={handleClearLocalStorage}>Clear Local Storage</button> */}

    <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
        <div className="container-xxl">
          {/* <!-- navbar brand / title --> */}
          <a className="navbar-brand" href="#intro">
            <span className="text-secondary fw-bold">
             Ricardo Alejandro Manzano Sanchez
            </span>
          </a>
          {/* <!-- toggle button for mobile nav --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          {/* <!-- navbar links --> */}
          <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#highlights">Highlights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#publications">Publications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#certifications">Certifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nothing"><strong>Visits {count}</strong></a>
          </li>
              
            </ul>
          </div>
        </div>
      </nav>



      

      <section id="intro">
      <div className="container">
        <div className="text-center">
          <h2>Highlights</h2>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center text-lg-start">
            
              <ul className="highlights">
                <li className="item">
                  Over eight years of experience in IT, Machine and Deep Learning, Data Analysis, and Automation.
                </li>
                <li className="item">
                  Multidisciplinary knowledge and integration skills capable of consolidating different technologies from IT networks, cloud, machine and deep learning, and big-data.
                </li>
                <li className="item">
                  Proactive, efficient, and personalized communication with internal and external clients able to identify needs and opportunities.
                </li>
                <li className="item">
                  Organized and efficient problem solver using divide and conquer and general view methodologies.
                </li>
                <li className="item">
                  Creative industrial professional and researcher to vision new paths in technology and businesses.
                </li>
                <li className="item">
                  Engaged with collaborative learning in industry and academia.
                </li>
                <li className="item">
                  Self-taught, results-oriented, adaptable, and responsible. Working ethically in challenging projects as pre-sales and field engineer.
                </li>
              </ul>
            
          </div>
          <div className="col-md-5 text-center">
            <Image src={img1} alt="Image Description" fluid />
          </div>
        </div>
      </div>
      </section>
    
    <section id="experience" className="bg-light">
     <Experience/>
     </section>
     <section id="education" className="bg-light">
     <Education/>
     </section>
     <section id="publications" className="bg-light">
     <Publications/>
     </section>
     <section id="certifications" className="bg-light">
     <Certifications/>
     </section>

      </>




  );
}

export default App;
