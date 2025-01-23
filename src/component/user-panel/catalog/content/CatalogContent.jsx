/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';
import { executeScript } from '../script/script.js';

const categoriesQuery = gql`
query Categories {
  categories {
    _id
    name
    parentID
    isActive
    photo
    video
    subCategories {
      _id
      name
      parentID
      isActive
      photo
      video
      subCategories {
        _id
        name
        parentID
        isActive
        photo
        video
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
    createdAt
    createdBy
    updatedAt
    updatedBy
  }
}
`;

const CatalogContent = (props) => {
  useEffect(() => {
    executeScript();
  }, []);

  const [categories, setCategories] = useState([]);
  
  const categoriesResult = useQuery(categoriesQuery, {
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      const categoriesData = data.categories;
      
      // console.log('categoriesData: ', categoriesData);

      setCategories(categoriesData)
    }
  });

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Catalog</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {/* <li className="breadcrumb-item"><Link to="/admin-panel">Dashboard</Link></li> */}
                <li className="breadcrumb-item active">Catalog</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">All Category</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <nav className="mt-2">
                    <ul className="nav nav-pills flex-column">
                      {
                        categories.map(category => (
                          <li key={category._id} className="nav-item">
                            <a href="#" className="nav-link">
                              {category.name}
                              <span className="float-right">
                                <i className="fas fa-angle-left"></i>
                              </span>
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card card-solid">
                <div className="card-header">
                  <h3 className="card-title">Browse Top Categories</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body" style={{ maxHeight: "575px", overflow: "auto" }}>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch flex-column">
                      <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top" src="/dist/img/photo1.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                          <h5 className="card-title text-primary text-white">Classic Stethoscope</h5>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-default">
                            <i className="fas fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <nav aria-label="Contacts Page Navigation">
                    <ul className="pagination justify-content-center m-0">
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item"><a className="page-link" href="#">6</a></li>
                      <li className="page-item"><a className="page-link" href="#">7</a></li>
                      <li className="page-item"><a className="page-link" href="#">8</a></li>
                    </ul>
                  </nav>
                </div>

              </div>

              <div className="card card-solid">
                <div className="card-header">
                  <h3 className="card-title">Top Products</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-12 col-xl-6 d-flex align-items-stretch flex-column">
                      <div className="card bg-light d-flex flex-fill">
                        <div className="card-header text-muted border-bottom-0">
                          Classic Stethoscope
                        </div>
                        <div className="card-body pt-0">
                          <div className="row">
                            <div className="col-5">
                              <p className="text-muted text-sm"><b>Description: </b> A reliable medical tool for listening to heart and lung sounds. </p>
                              <ul className="text-muted">
                                <li className="small"> Model: Classic Pro</li>
                                <li className="small"> Material: Stainless steel and latex-free tubing</li>
                              </ul>
                            </div>
                            <div className="col-7 text-center">
                              <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" style={{width: "100%"}} />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-primary">
                              <i className="fas fa-peso-sign"></i> Bid Initiation
                            </a>
                            <a href="#" className="btn btn-sm btn-default">
                              <i className="fas fa-eye"></i> Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 d-flex align-items-stretch flex-column">
                      <div className="card bg-light d-flex flex-fill">
                        <div className="card-header text-muted border-bottom-0">
                          Classic Stethoscope
                        </div>
                        <div className="card-body pt-0">
                          <div className="row">
                            <div className="col-5">
                              <p className="text-muted text-sm"><b>Description: </b> A reliable medical tool for listening to heart and lung sounds. </p>
                              <ul className="text-muted">
                                <li className="small"> Model: Classic Pro</li>
                                <li className="small"> Material: Stainless steel and latex-free tubing</li>
                              </ul>
                            </div>
                            <div className="col-7 text-center">
                              <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" style={{width: "100%"}} />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-primary">
                              <i className="fas fa-peso-sign"></i> Bid Initiation
                            </a>
                            <a href="#" className="btn btn-sm btn-default">
                              <i className="fas fa-eye"></i> Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 d-flex align-items-stretch flex-column">
                      <div className="card bg-light d-flex flex-fill">
                        <div className="card-header text-muted border-bottom-0">
                          Classic Stethoscope
                        </div>
                        <div className="card-body pt-0">
                          <div className="row">
                            <div className="col-5">
                              <p className="text-muted text-sm"><b>Description: </b> A reliable medical tool for listening to heart and lung sounds. </p>
                              <ul className="text-muted">
                                <li className="small"> Model: Classic Pro</li>
                                <li className="small"> Material: Stainless steel and latex-free tubing</li>
                              </ul>
                            </div>
                            <div className="col-7 text-center">
                              <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" style={{width: "100%"}} />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="text-right">
                            <a href="#" className="btn btn-sm btn-primary">
                              <i className="fas fa-peso-sign"></i> Bid Initiation
                            </a>
                            <a href="#" className="btn btn-sm btn-default">
                              <i className="fas fa-eye"></i> Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <nav aria-label="Contacts Page Navigation">
                    <ul className="pagination justify-content-center m-0">
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item"><a className="page-link" href="#">6</a></li>
                      <li className="page-item"><a className="page-link" href="#">7</a></li>
                      <li className="page-item"><a className="page-link" href="#">8</a></li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default CatalogContent;