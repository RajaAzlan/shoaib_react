import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { ArrowBarLeft, PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '@/assets/scss/layout/nav.scss';

function Nav() {
  function toogleNav(e) {
    e.preventDefault();
    let menu = document.querySelector('body');
    let menuToggle = document.querySelector('.code');
    if (menu.classList.contains('nav-toggle')) {
      menu.classList.remove('nav-toggle');
      menuToggle.classList.remove('open');
    } else {
      menu.classList.add('nav-toggle');
      menuToggle.classList.add('open');
    }

    var btn_toggler = document.querySelector('.btn-toggler');
    if (btn_toggler.classList.contains('btn_animate')) {
      setTimeout(function() {
        btn_toggler.classList.remove('btn_animate');
      }, 400);
    } else {
      setTimeout(function() {
        btn_toggler.classList.add('btn_animate');
      }, 400);
    }
  }
  return (
    <header>
      <nav>
        <Container fluid className="d-flex flex-wrap align-items-center px-4">
          <div className="ms-auto d-lg-none d-md-block d-sm-block d-block">
            <button
              className="btn btn-toggler bg-transparent shadow-none"
              onClick={toogleNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="ms-auto d-lg-block d-md-none d-sm-none d-none">
            <ul className="list-unstyled d-flex flex-wrap align-items-center mb-0 position-relative">
              <li className="d-inline-block">
                <a href="/" className="code" onClick={toogleNav}>
                  <ArrowBarLeft />
                </a>
              </li>
              <li className="d-inline-block ms-auto">
                <Dropdown className="dropdown-custom dropdown position-relative">
                  <Dropdown.Toggle
                    className="btn bg-transparent border-0 shadow-none dropdown-toggle pe-0"
                    id="dropdown-basic"
                  >
                    <PersonFill />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu list-unstyled position-absolute">
                    <ul className="d-flex flex-wrap m-0 p-0">
                      <li className="d-flex flex-wrap w-100">
                        <Dropdown.Item className="dropdown-item w-100">
                          <Link to="/"> Logout</Link>
                        </Dropdown.Item>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
          <div className="overlay-layer d-lg-none" onClick={toogleNav}></div>
        </Container>
      </nav>
    </header>
  );
}
export default Nav;
