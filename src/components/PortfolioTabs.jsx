import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PortfolioTabs() {
  const currentPage = useLocation().pathname;

  

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ marginBottom: '100px' }}>
        <div className="container">
        <li><a href="#"><img src="../src/assets/images/AG Avata.png" alt="Male Avatar" className='navbar img'/></a></li>
          <Link className="navbar-brand" to="/">  Anthony Gooneratne, Projrct Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${currentPage === '/About' ? 'active' : ''}`} to="/About">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentPage === '/ProjectPortfolio' ? 'active' : ''}`} to="/ProjectPortfolio">Project Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentPage === '/ProjectGit' ? 'active' : ''}`} to="/ProjectGit">Github</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`} to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`} to="/Resume">Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </div>
      
   
  )}


export default PortfolioTabs;





