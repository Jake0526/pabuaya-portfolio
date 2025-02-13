import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import '../css/style.css';

const RealtimeChatContent = () => {
  useEffect(() => {
    
  }, [])

  return (
    <>
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white border-bottom-0">
        <div className="container">
          <a href="#" className="navbar-brand" style={{ color: '#ffffff', fontSize: '30px' }}>
            <span className="brand-image" style={{ marginTop: "5px", marginLeft: "15px" }}><b>AJP</b></span>
            <span className="brand-text font-weight-light">Dev</span>
          </a>

          <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" 
            style={{color: '#ffffff', borderColor: '#ffffff'}}>
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse" style={{ color: '#ffffff', fontSize: '20px' }}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link" style={{ color: '#ffffff' }}>Home</a>
              </li>
              <li className="nav-item">
                <a href="/?pageto=about-me" className="nav-link" style={{ color: '#ffffff' }}>About</a>
              </li>
              <li className="nav-item">
                <a href="/?pageto=work-section" className="nav-link" style={{ color: '#ffffff' }}>Works</a>
              </li>
              <li className="nav-item">
                <a href="/?pageto=lets-build" className="nav-link btn btn-primary rounded-pill" style={{ color: '#ffffff' }}>LET'S BUILD SOMETHING</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link rounded-pill"> <img className="img-circle img-sm" src="/dist/img/user1-128x128.jpg" alt="Message User Image" /> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="content-header" style={{paddingTop: '50px'}}>
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="">Real-time Chat</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active">Project</li>
                  <li className="breadcrumb-item active">Real-time Chat</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-3">
                    <div className="card card-primary card-outline">
                      <div className="card-header">
                        <h3 className="card-title">Chats</h3>
                      </div>

                      <div className="card-body user-list">
                        <ul className="nav nav-pills flex-column">
                          <li className="nav-item" style={{cursor: 'pointer'}}>
                            <div className="chat-list">
                              <img className="img-circle img-sm" src="/dist/img/user3-128x128.jpg" alt="User Image" />
                              <div className="user-content">
                                <span className="username">
                                  <strong>Maria Gonzales</strong>
                                  <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                <br/>
                                <br/>
                                <span>
                                  <span className="badge bg-primary float-right">12</span>
                                  <p>It is a long established fact that a reader ...</p>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item" style={{cursor: 'pointer'}}>
                            <div className="chat-list">
                              <img className="img-circle img-sm" src="/dist/img/user3-128x128.jpg" alt="User Image"/>
                              <div className="user-content">
                                <span className="username">
                                  <strong>Maria Gonzales</strong>
                                  <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                <br/>
                                <br/>
                                <span>
                                  <span className="badge bg-primary float-right">12</span>
                                  <p>It is a long established fact that a reader ...</p>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item" style={{cursor: 'pointer'}}>
                            <div className="chat-list">
                              <img className="img-circle img-sm" src="/dist/img/user3-128x128.jpg" alt="User Image"/>
                              <div className="user-content">
                                <span className="username">
                                  <strong>Maria Gonzales</strong>
                                  <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                <br/>
                                <br/>
                                <span>
                                  <span className="badge bg-primary float-right">12</span>
                                  <p>It is a long established fact that a reader ...</p>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item" style={{cursor: 'pointer'}}>
                            <div className="chat-list">
                              <img className="img-circle img-sm" src="/dist/img/user3-128x128.jpg" alt="User Image"/>
                              <div className="user-content">
                                <span className="username">
                                  <strong>Maria Gonzales</strong>
                                  <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                <br/>
                                <br/>
                                <span>
                                  <span className="badge bg-primary float-right">12</span>
                                  <p>It is a long established fact that a reader ...</p>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item" style={{cursor: 'pointer'}}>
                            <div className="chat-list">
                              <img className="img-circle img-sm" src="/dist/img/user3-128x128.jpg" alt="User Image"/>
                              <div className="user-content">
                                <span className="username">
                                  <strong>Maria Gonzales</strong>
                                  <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                <br/>
                                <br/>
                                <span>
                                  <span className="badge bg-primary float-right">12</span>
                                  <p>It is a long established fact that a reader ...</p>
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="card-footer">

                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="card card-primary card-outline direct-chat direct-chat-primary">
                      <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>

                        {/* <div className="card-tools">
                          <button type="button" className="btn btn-tool" data-card-widget="collapse">
                              <i className="fas fa-minus"></i>
                          </button>
                          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                            <i className="fas fa-comments"></i>
                          </button>
                          <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                          </button>
                        </div> */}
                      </div>
                      <div className="card-body chat-content">
                        <div className="direct-chat-messages">
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">Alexander Pierce</span>
                              <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                            </div>
                            <img className="direct-chat-img" src="/dist/img/user1-128x128.jpg" alt="Message User Image" />
                            <div className="direct-chat-text">
                              Is this template really for free? That's unbelievable!
                            </div>
                          </div>

                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">Sarah Bullock</span>
                              <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                            </div>
                            <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                            <div className="direct-chat-text">
                              You better believe it!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <form action="#" method="post">
                          <div className="input-group">
                            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                            <span className="input-group-append">
                              <button type="submit" className="btn btn-primary">Send</button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="main-footer footer-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <strong><i className="fas fa-book mr-1"></i> Alvin Jake Pabuaya</strong>

              <p>
                +639392478355 <br/>
                pabuaya34@gmail.com
              </p>
            </div>
            {/* <div className="col-12 col-md-6">
              <strong><i className="fas fa-book mr-1"></i> Socials</strong>

            </div> */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default RealtimeChatContent;