/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';

import { executeScript } from '../script/script.js';

const messagesQuery = gql`
query Messages {
  messages {
    _id
    budget
    targetCompletion
    fullName
    email
    message
    createdAt
    createdBy
    updatedAt
    updatedBy
  }
}
`;

const MessagesContent = (props) => {
  const [messages, setMessages] = useState([]);

  const messagesResult = useQuery(messagesQuery, {
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      setMessages(data.messages);
    },
  });

  useEffect(() => {
    if (messages.length)
      executeScript();
  }, [messages]);

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
                  <div className="row">
                    <div className="col-lg-12">
                      <table id="messages-table" className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Budget</th>
                            <th>Target of Completion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            messages.map((message, i) => (
                              <tr key={i}>
                                <td>{message.fullName}</td>
                                <td>{message.email}</td>
                                <td>{message.message}</td>
                                <td>{message.budget}</td>
                                <td>{message.targetCompletion}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Budget</th>
                            <th>Target of Completion</th>
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
  )
};

export default MessagesContent;