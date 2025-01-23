/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { executeScript } from '../script/script.js';

const HomeContent = () => {
  useEffect(() => {
    executeScript();
  }, []);

  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white border-bottom-0">
        <div className="container">
          <a href="#" className="navbar-brand" style={{ color: '#ffffff', fontSize: '30px' }}>
            <span className="brand-image" style={{ marginTop: "5px", marginLeft: "15px" }}><b>MB</b> </span>
            <span className="brand-text font-weight-light">MedBank </span>
          </a>

          <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" 
            style={{color: '#ffffff', borderColor: '#ffffff'}}>
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse" style={{ color: '#ffffff', fontSize: '20px' }}>
            <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{ marginRight: '10px' }}>
                <a href="/login" className="nav-link btn btn-outline-light rounded-pill" style={{ color: '#ffffff' }}>Login</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link btn btn-primary rounded-pill" style={{ color: '#ffffff' }}>Request a business account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">

        <div className="banner-home">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-home-title"><b>M</b>ed<b>B</b>ank</div>
                  <div className="banner-home-content">
                    Your Trusted Partner for Healthcare Solutions
                  </div>
                  <div style={{ fontSize: '20px', marginBottom: '30px'}}>Improving Patient Outcomes: Your Partner in Delivering Exceptional Care, Anywhere.</div>
                  <a href="#" className="btn btn-primary rounded-pill" style={{ color: '#ffffff', fontSize: '20px', padding: '20px' }}>Request a business account</a>
                </div>
                <div className="col-lg-6">
                  <img src="/images/banner-img.png" className="banner-home-image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="supplier-home">
          <div className="container" style={{ paddingTop: '20px' }}>
            <div className="row">
              <div className="col-md-3 image-supplier-container">
                <img src="/images/partners/doh.png" width="100" alt="Image 1" />
              </div>
              <div className="col-md-3 image-supplier-container">
                <img src="/images/partners/hospital1.png" width="100" alt="Image 2" />
              </div>
              <div className="col-md-3 image-supplier-container">
                <img src="/images/partners/hospital2.png" width="100" alt="Image 3" />
              </div>
              <div className="col-md-3 image-supplier-container">
                <img src="/images/partners/doh.png" width="100" alt="Image 1" />
              </div>
            </div>   
          </div>
        </div>

        <div className="info-card-home">
          <div className="container container-xxl">
            <div className="row card-deck">
              <div className="col-md-4">
                <div className="card card-home rounded-lg shadow-lg">
                  <div className="card-body">
                    <i className="fas fa-shopping-cart" style={{ fontSize: "50px" }}></i>
                    <h4 style={{ marginTop: "10px" }}>Shop Medical Supplies</h4>
                    
                    <p>
                      Being a single source with more products and choices means we can equip you to care for any patient. McKesson Medical-Surgical has branded and private-label quality products to help you deliver care without compromise.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary btn-sm rounded-pill">SHOP NOW »</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-home rounded-lg shadow-lg">
                  <div className="card-body">
                    <i className="fas fa-wrench" style={{ fontSize: "50px" }}></i>
                    <h4 style={{ marginTop: "10px" }}>Services & Solutions</h4>

                    <p>
                      Improve business performance and better manage your time and expenses with our suite of services. Rely on McKesson Medical-Surgical to help you improve the health of your business.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary btn-sm rounded-pill">LEARN MORE »</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-home rounded-lg shadow-lg">
                  <div className="card-body">
                    <i className="fas fa-book" style={{ fontSize: "50px" }}></i>
                    <h4 style={{ marginTop: "10px" }}>Insights Library</h4>

                    <p>
                      Browse articles, webinars, downloadable content, and more on topics important to you and your healthcare business from managing healthcare supply chain to improving operational efficiency.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary btn-sm rounded-pill">VIEW RESOURCES »</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-home">
          <hr />
          <div className="container container-xxl" style={{ marginTop: "50px", paddingBottom: "100px" }}>
            <center><h3>Products, Services and Expertise to Improve Care</h3></center>
            <div className="row" style={{ marginTop: "100px" }}>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>300,000+</h3>
                    <p>High-quality medical products</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>99.8%</h3>
                    <p>Order accuracy and fulfillment</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-checkmark"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>10,000+</h3>
                    <p>Branded, generic and specialty pharmaceuticals</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-medkit"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>1600+</h3>
                    <p>Field and inside sales reps</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
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
              <strong><i className="fas fa-book mr-1"></i> Medical Professionals</strong>

              <p>
                1234-1234
              </p>

              <hr/>

              <strong><i className="fas fa-map-marker-alt mr-1"></i> Help Desk</strong>

              <p>1234-1234</p>

              <hr/>
            </div>
            <div className="col-12 col-md-6">
              <strong><i className="fas fa-book mr-1"></i> About MedBank</strong>

              <p>Contact Us</p>
              <p>Careers</p>

              <hr/>

              <p>Login To Supply Manager</p>
              <p>Request Account</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default HomeContent;