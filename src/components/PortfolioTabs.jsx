import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PortfolioTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Anthony Gooneratne</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PortfolioTabs;









// import React from 'react';
// function PortfolioTabs() {
//   const currentPage = useLocation().pathname;
//   return (
//     <div>
    
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//       <div className="container">
//         <a className="navbar-brand" href="#" >Anthony Gooneratne</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="#about" to="/About">About Me </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#portfolio" to="/Project">Project Portfolio</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact" to="/Contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </div>


//   );
// }

// export default PortfolioTabs;


