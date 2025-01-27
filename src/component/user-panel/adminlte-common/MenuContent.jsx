import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MenuContent = ({
  page,
  state
}) => {
  useEffect(() => {

  }, []);

  return (
    <aside className="main-sidebar fixed sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        {/* <img src="/images/others/r-residencia-logo-white.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: ".8"}} /> */}
        <span className="brand-image" style={{ marginTop: "7px", marginLeft: "15px" }}><b>AJP</b> </span>
        <span className="brand-text font-weight-light">Admin <span className="badge bg-success">{process.env.appVersion}</span> </span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">{state.name}</a>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <li className="nav-item menu-open">
              <Link to="/admin" className={`nav-link ${page === 'dashboard' ? 'active' : ''}`}>
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item menu-open">
              <Link to="/admin/messages" className={`nav-link ${page === 'messages' ? 'active' : ''}`}>
                <i className="nav-icon fas fa-envelope"></i>
                <p>
                  Messages
                </p>
              </Link>
            </li>
            <li className="nav-item menu-open">
              <a href="/logout" className="nav-link">
                <i className="nav-icon fas fa-right-from-bracket"></i>
                <p>
                  Logout
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default MenuContent