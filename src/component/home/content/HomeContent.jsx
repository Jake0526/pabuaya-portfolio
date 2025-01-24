/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { executeScript } from '../script/script.js';

const HomeContent = () => {
  useEffect(() => {
    executeScript();
  }, []);

  const [rresidenceImage, setRresidenceImage] = useState("/images/work/rresidence1.jpg");

  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white border-bottom-0">
        <div className="container">
          <a href="#" className="navbar-brand" style={{ color: '#ffffff', fontSize: '30px' }}>
            <span className="brand-image" style={{ marginTop: "5px", marginLeft: "15px" }}><b>W</b></span>
            <span className="brand-text font-weight-light">elcome</span>
          </a>

          <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" 
            style={{color: '#ffffff', borderColor: '#ffffff'}}>
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse" style={{ color: '#ffffff', fontSize: '20px' }}>
            {/* <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form> */}
            
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#banner-home" className="nav-link" style={{ color: '#ffffff' }} onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  document.getElementById('banner-home').scrollIntoView({ behavior: 'smooth' });
                }}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#about-me" className="nav-link" style={{ color: '#ffffff' }} onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
                }}>About</a>
              </li>
              <li className="nav-item">
                <a href="#about-me" className="nav-link" style={{ color: '#ffffff' }} onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' });
                }}>Works</a>
              </li>
              {/* <li className="nav-item" style={{ marginRight: '10px' }}>
                <a href="/login" className="nav-link btn btn-outline-light rounded-pill" style={{ color: '#ffffff' }}>Login</a>
              </li> */}
              <li className="nav-item">
                <a href="#lets-build" className="nav-link btn btn-primary rounded-pill" style={{ color: '#ffffff' }} onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  document.getElementById('lets-build').scrollIntoView({ behavior: 'smooth' });
                }}>LET'S BUILD SOMETHING</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">

        <div className="banner-home" id="banner-home">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12" style={{paddingTop: '50px'}}>
                  <div className="banner-home-title">Hi!</div>
                  <div className="banner-home-content">
                    My name is Alvin Jake Pabuaya
                  </div>
                  <div style={{ fontSize: '20px', marginBottom: '30px'}}>I'm a full stack web developer specializing in building web applications using JavaScript, ReactJS, Node.js and Kubernetes</div>
                  <a 
                    href="#about-me" 
                    className="btn btn-primary rounded-pill" 
                    style={{ color: '#ffffff', fontSize: '20px', padding: '20px' }}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Find out more
                  </a>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <img src="/images/jake.png" className="banner-home-image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="supplier-home">
          <div className="container">
            <div className="row">
              <div className="col-md-3 image-supplier-container">
                {/* <img src="/images/partners/doh.png" width="100" alt="Image 1" /> */}
              </div>
              <div className="col-md-3 image-supplier-container">
                <img src="/images/citygov.png" width="100" alt="Image 2" className="grayscale-image" />
              </div>
              <div className="col-md-3 image-supplier-container">
                <img src="/images/r-residencia-logo.png" width="100" alt="Image 3" className="grayscale-image" />
              </div>
              <div className="col-md-3 image-supplier-container">
                {/* <img src="/images/partners/doh.png" width="100" alt="Image 1" /> */}
              </div>
            </div>   
          </div>
        </div>

        <div className="about-me" id="about-me">
          <div className="container">
            <center> <h1><strong>ABOUT</strong></h1> </center>
            <p style={{ fontSize: '20px' }}>
              I am a Full Stack Web Developer with 9+ years of experience in designing, developing, and maintaining robust and scalable web applications. Expertise in full-stack development, with a strong focus on cloud-native architectures. Proficient in Kubernetes for container orchestration and Git for efficient version control. Deep understanding of Single Sign-On (SSO) principles and hands-on experience with Hydra. Passionate about CI/CD best practices and implementing automated pipelines for streamlined software delivery.
            </p>
          </div>
        </div>

        <div className="skills-experience">
          <div className="container" style={{ paddingTop: '50px' }}>
            <div className="card">
              <div className="card-header p-2">
                <ul className="nav nav-pills d-flex justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#skills" data-toggle="tab">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience" data-toggle="tab">
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="active tab-pane" id="skills">
                    <div className="row">
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="90" data-width="100" data-height="100" data-fgColor="#3c8dbc"/>

                        <div className="knob-label">Javascript</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="80" data-width="100" data-height="100" data-fgColor="#f56954"/>

                        <div className="knob-label">NodeJS</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="80" data-width="100" data-height="100" data-fgColor="#00a65a"/>

                        <div className="knob-label">ReactJS</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="80" data-width="100" data-height="100" data-fgColor="#00c0ef"/>

                        <div className="knob-label">MySQL</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="80" data-width="100" data-height="100" data-fgColor="#00c0ef"/>

                        <div className="knob-label">Kubernetes</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="100" data-width="100" data-height="100" data-fgColor="#3c8dbc"/>

                        <div className="knob-label">Apollo Client</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="90" data-width="100" data-height="100" data-fgColor="#f56954"/>

                        <div className="knob-label">Ory (Oauth2)</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="100" data-width="100" data-height="100" data-fgColor="#00a65a"/>

                        <div className="knob-label">HTML/CSS</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="90" data-width="100" data-height="100" data-fgColor="#00a65a"/>

                        <div className="knob-label">GitLab</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="100" data-width="100" data-height="100" data-fgColor="#00c0ef"/>

                        <div className="knob-label">Apollo GraphQL</div>
                      </div>
                      <div className="col-6 col-md-3 text-center">
                        <input type="text" className="knob" value="80" data-width="100" data-height="100" data-fgColor="#3c8dbc"/>

                        <div className="knob-label">MeteorJS</div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="experience">
                    <div className="timeline timeline-inverse">
                    <div className="time-label">
                        <span className="bg-success">
                          Current
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-circle bg-primary"></i>

                        <div className="timeline-item">
                          <h3 className="timeline-header"><a href="#">City Government of Davao (HRMO)</a> - Senior Full Stack Web Developer</h3>

                          <div className="timeline-body">
                            <ul>
                              <li>
                                Main function is to provide security on HRMIS by using Ory Hydra, Oathkeeper and Keto, a SingleSignOn that provides authentication, authorization and gateway for all the resources like API, file links etc.  
                              </li>
                              <li>
                                Uses MeteorJS which uses nodeJS as backend for our framework and ReactJS for our front-end. 
                              </li>
                              <li>
                                Assigned to restructure the database of HRMIS to fit the development. 
                              </li>
                              <li>
                                Assigned on creating an API that uses Apollo GraphQL for other developers to use.
                              </li>
                              <li>
                                Assigned as DevOps that maintain kubernetes, repository, API, CI/CD and other utilities that other developers need in order to have a quality output.
                              </li>
                              <li>
                                Assigned to create socket client for communication of CCTV third party software IPSOTEK VISuite for face detection, face recognition, case enrollment, and other commands for controlling CCTV through Web Applications. 
                              </li>
                            </ul> 
                          </div>
                          <div className="timeline-footer">
                            <a href="https://hrmo.davaocity.gov.ph/" target="_blank" className="btn btn-primary btn-sm">Visit</a>
                          </div>
                        </div>
                      </div>
                      <div className="time-label">
                        <span className="bg-success">
                          August 2018
                        </span>
                      </div>

                      <div className="time-label">
                        <span className="bg-success">
                          April 2018
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-circle bg-primary"></i>

                        <div className="timeline-item">
                          <h3 className="timeline-header"><a href="#">Ingenuity Global Consulting, Inc</a> - Software Developer</h3>

                          <div className="timeline-body">
                            <ul>
                              <li>
                                Assigned to external project for bixly as one of developers for their web app which uses django. 
                              </li>
                              <li>
                                Do some troubleshooting and create new apps depending on the ticket given.  
                              </li>
                              <li>
                                Assigned to Edward lynx as tech support to help the team for creating API for Laravel. 
                              </li>
                              <li>
                                Assigned to Game Development team which handles 2DKit game engine that uses haxe language and Unity Game Engine. 
                              </li>
                              <li>
                                Used PhotonEngine as a network engine and multiplayer platform for both 2DKit game engine (Haxe) and Unity Game Engine.
                              </li>
                              <li>
                                Used Playfab for player management together with PhotonEngine.  
                              </li>
                              <li>
                                Helped on creating API for connecting PhotonEngine and Playfab on Javascript since both technologies are not supported for haxe base game engine. 
                              </li>
                              <li>
                                Used ECS Framework for game development for the structure of development.  
                              </li>
                            </ul> 
                          </div>
                          <div className="timeline-footer">
                            <a href="https://ingenuity.ph/" target="_blank" className="btn btn-primary btn-sm">Visit</a>
                          </div>
                        </div>
                      </div>
                      <div className="time-label">
                        <span className="bg-success">
                          February 2017
                        </span>
                      </div>

                      <div className="time-label">
                        <span className="bg-success">
                          December 2016
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-circle bg-primary"></i>

                        <div className="timeline-item">
                          <h3 className="timeline-header"><a href="#">Modern Mix ICT</a> - Web Developer</h3>

                          <div className="timeline-body">
                            <ul>
                              <li>
                                Develop Street Team, a web and mobile base Geo-tagging for monitoring teamwork. 
                              </li>
                              <li>
                                Used Laravel 5.2 for back-end and angularJS for front-end. 
                              </li>
                              <li>
                                Used Ionic Framework for faster mobile development.
                              </li>
                              <li>
                                Used Google Map API for information presentation. 
                              </li>
                              <li>
                                Assigned to develop the web platform for vehicle tracking systems. 
                              </li>
                              <li>
                                Create API for communication of custom made tracking devices, other modules like audio (Microphone and Speaker) and to control the device from a web app. 
                              </li>
                              <li>
                                Used Google Map API for information presentation and some controllers. 
                              </li>
                            </ul> 
                          </div>
                        </div>
                      </div>
                      <div className="time-label">
                        <span className="bg-success">
                          May 2016
                        </span>
                      </div>

                      <div className="time-label">
                        <span className="bg-success">
                          October 2015
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-circle bg-primary"></i>

                        <div className="timeline-item">
                          <h3 className="timeline-header"><a href="#">Davao Century Lending Corp</a> - Web Developer</h3>

                          <div className="timeline-body">
                            <ul>
                              <li>
                                Develop Cloud Kilat, a web base Geo-tagging and GIS Development for monitoring 
                                of debtor accounts. 
                              </li>
                              <li>
                                Used CodeIgniter Framework for back-end and AngularJS for front-end.
                              </li>
                              <li>
                                Used Google Map API for information presentation.
                              </li>
                            </ul> 
                          </div>
                        </div>
                      </div>
                      <div className="time-label">
                        <span className="bg-success">
                          May 2015
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-section" id="work-section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="container">
            <center> <h1><strong>WORK</strong></h1> </center>
            
            <div className="row" style={{ paddingTop: '30px' }}>
              <div className="col-lg-6">
                <div className="col-12">
                  <img src={rresidenceImage} className="product-image" alt="RResidence"/>
                </div>
                <div className="col-12 product-image-thumbs">
                  <div className="product-image-thumb" onClick={() => {
                    setRresidenceImage("/images/work/rresidence1.jpg");
                  }}>
                    <img src="/images/work/rresidence1.jpg" alt="Product Image"/>
                  </div>
                  <div className="product-image-thumb active" onClick={() => {
                    setRresidenceImage("/images/work/rresidence2.jpg");
                  }}>
                    <img src="/images/work/rresidence2.jpg" alt="Product Image"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="my-3">R Residencia</h3>
                <p>RResidence Website is a comprehensive online platform that provides clients with detailed information about the property, enabling them to make reservations directly. The website also features an intuitive admin panel for managing reservations, visualizing key data through interactive graphics, tracking sales performance, and generating comprehensive reports.</p>

                <hr/>
                <h4>Development Tools</h4>
                <ul>
                  <li>MeteorJS</li>
                  <li>ReactJS</li>
                  <li>Kubernetes</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>Apollo Services</li>
                  <li>Apollo Client</li>
                </ul>

                <div className="mt-4 product-share">
                  <a href="http://rresidenciadavao.com/" target="_blank" className="text-gray">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="row" style={{ paddingTop: '30px' }}>
              <div className="col-lg-6">
                <h3 className="d-inline-block d-sm-none">City Government of Davao (HRMIS-ePays)</h3>
                <div className="col-12">
                  <img src="/images/work/hrmis.jpg" className="product-image" alt="RResidence"/>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="my-3">City Government of Davao (HRMIS-ePays)</h3>
                <p>HRMIS-ePays is a human resource management information system and electronic payroll system designed to automate all processes related to personnel management and payroll. It employs a microservices architecture utilizing MeteorJS, ReactJS, MariaDB, and Kubernetes.</p>

                <hr/>
                <h4>Development Tools</h4>
                <ul>
                  <li>MeteorJS</li>
                  <li>ReactJS</li>
                  <li>Kubernetes</li>
                  <li>MariaDB</li>
                  <li>MongoDB</li>
                  <li>ExpressJS</li>
                  <li>ORY Hydra</li>
                  <li>GraphQL</li>
                  <li>Apollo Services</li>
                  <li>Apollo Client</li>
                </ul> 
              </div>
            </div>
          </div>
        </div>

        <div className="lets-build" id="lets-build" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div className="container">
            <center> <h1><strong>LET'S BUILD SOMETHING</strong></h1> </center>
            
            <div className="card">
              <div className="card-body row">
                <div className="col-lg-5 text-center d-flex align-items-center justify-content-center">
                  <div className="">
                    <h2>C<strong>ontacts</strong></h2>
                    <p className="lead mb-5">
                      Email: pabuaya34@gmail.com<br/>
                      Phone: +639392478355<br/>
                      LinkedIn: <a href="https://www.linkedin.com/in/alvin-jake-pabuaya-651bb8bb/" target='_blank'>Alvin Jake Pabuaya</a><br/>
                    </p>

                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="form-group">
                    <label for="budget">What's the budget for your project?</label>
                    <select className="custom-select form-control-border" id="budget">
                      <option>Less than $300 (Fixing a bug, simple on pager, ...)</option>
                      <option>$300 - $900 (Website, Dashboard, ...)</option>
                      <option>$900 - $1800 (Web Application)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="projectDuration">When do you need this project completed</label>
                    <select className="custom-select form-control-border" id="projectDuration">
                      <option>1 - 2 months</option>
                      <option>2 - 3 months</option>
                      <option>3 - 6 months</option>
                      <option>6 months+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="emailAddress">EMail</label>
                    <input type="email" id="emailAddress" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" className="form-control" rows="4"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Send"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <aside className="control-sidebar control-sidebar-dark">
      </aside> */}

      <footer className="main-footer footer-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <strong><i className="fas fa-book mr-1"></i> Alvin Jake Pabuaya</strong>

              <p>
                +639392478355
              </p>
            </div>
            <div className="col-12 col-md-6">
              <strong><i className="fas fa-book mr-1"></i> Socials</strong>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default HomeContent;