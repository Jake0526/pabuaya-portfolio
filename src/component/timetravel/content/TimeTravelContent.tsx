import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import ViewModal from './modal/ViewModal';
import '../css/style.css';

const TimeTravelContent = () => {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState(''); 

  useEffect(() => {
    if (!$.fn.dataTable.isDataTable('#messages-table')) {
      $('#messages-table').DataTable({
        paging: true,
        lengthChange: false,
        searching: true,
        ordering: true,
        info: true,
        autoWidth: false,
        responsive: true,
      });
    }
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
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="content-header" style={{paddingTop: '50px'}}>
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="">Time Travel</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active">Project</li>
                  <li className="breadcrumb-item active">Time Travel</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">  </h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <table id="messages-table" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Place</th>
                              <th>Description</th>
                              <th>Aprox Year</th>
                              <th>Coordinates</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Santa Ana Warf, Davao City</td>
                              <td></td>
                              <td>1930-1940</td>
                              <td></td>
                              <td>
                                <button className="btn btn-primary" onClick={() => {
                                  setImage1('/images/timetravel/sta-ana/sta-ana-now.jpg');
                                  setImage2('/images/timetravel/sta-ana/sta-ana-old.jpg');
                                  $('#view-modal').modal('show');
                                }}>View</button>
                              </td>
                            </tr>
                            <tr>
                              <td>Downtown, Davao City</td>
                              <td></td>
                              <td>1942</td>
                              <td></td>
                              <td>
                                <button className="btn btn-primary" onClick={() => {
                                  setImage1('/images/timetravel/downtown/downtown-now.jpg');
                                  setImage2('/images/timetravel/downtown/downtown-old.jpg');
                                  $('#view-modal').modal('show');
                                }}>View</button>
                              </td>
                            </tr>
                            <tr>
                              <td>City Hall of Davao</td>
                              <td></td>
                              <td>1946</td>
                              <td></td>
                              <td>
                                <button className="btn btn-primary" onClick={() => {
                                  setImage1('/images/timetravel/cityhall/city-hall-now.jpg');
                                  setImage2('/images/timetravel/cityhall/city-hall-old.jpg');
                                  $('#view-modal').modal('show');
                                }}>View</button>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Place</th>
                              <th>Description</th>
                              <th>Aprox Year</th>
                              <th>Coordinates</th>
                              <th>View</th>
                            </tr>
                          </tfoot>
                        </table>
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

      <ViewModal image1={image1} image2={image2} />
    </>
  )
}

export default TimeTravelContent;