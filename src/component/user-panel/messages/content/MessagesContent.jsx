/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';
import { executeScript } from '../script/script.js';

const MessagesContent = (props) => {
  useEffect(() => {
    executeScript();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Messages</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {/* <li className="breadcrumb-item"><Link to="/admin-panel">Dashboard</Link></li> */}
                <li className="breadcrumb-item active">Messages</li>
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
                  Welcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default MessagesContent;