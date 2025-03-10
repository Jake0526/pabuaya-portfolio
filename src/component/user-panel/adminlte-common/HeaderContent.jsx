import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const HeaderContent = ({
  page,
}) => {
  useEffect(() => {
    document.body.style = "";
  }, []);

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderContent