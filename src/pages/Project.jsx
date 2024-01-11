// import { useState, useEffect } from 'react';
// import search from '../assets/utils/API';
// import ProjectList from './ProjectResult';

// const SearchResultContainer = () => {
//   const [results, setResults] = useState([]);

//   const searchGithub = async () => {
//     const { data } = await search();
//     setResults(data.data); 
//   };
 

//   useEffect(() => {
//     searchGithub();
//   }, []);

//   return (
//     <div>
//       <ProjectList results ={results} />


//     </div>
//   );
// };

// export default SearchResultContainer;

import React, { useEffect, useState } from "react";
import '../styles/Project.css';




import { MarkGithubIcon } from '@primer/octicons-react';

function UserRepositories({ }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/anthogr45/repos`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    // <div>
    //   <h2>GitHub Repositories</h2>
    //   <ul>
    //     {repositories.map((repo) => (
    //       <li key={repo.id}>
    //         <a href={repo.html_url}>{repo.name}</a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

  //   <div>
  //     <h2>GitHub Repositories</h2>
      
  //     <ul className="list-group">
  //         {repositories.map((repo) => (
  //          <li className="list-group-item" key={repo.id}>
  //           <a href={repo.html_url}>{repo.name}</a>
  //   </li>
  // ))}
  // </ul>
  // </div>


  // <div>
  // <h2>My GitHub Repositories</h2>
  // <div className="repos-container">
  //   {repositories.map(repo => (
  //     <div key={repo.id} className="repo-card">
  //       <h3>{repo.name}</h3>
  //       <p>{repo.description}</p>
  //       <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><MarkGithubIcon size={25} />View on GitHub</a>
  //     </div>
  //   ))}
  // </div>
  // </div>
  
//   <div>
//   <h2>My GitHub Repositories</h2>
//   <div className="repos-container">
//     {repositories.map(repo => (
//       <div key={repo.id} className="card text-bg-info" style={{ maxWidth: '28rem' }}>
//         <div className="card-header">{repo.name}</div>
//         <div className="card-body">
//           <p className="card-text">{repo.description}</p>
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//             <MarkGithubIcon size={25} />View on GitHub
//           </a>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

<div>
  <h2>My GitHub Repositories</h2>
  <div className="repos-container">
    {repositories.map(repo => (
      <div key={repo.id} className="card text-bg-info repos-container"  style={{ maxWidth: '28rem', marginBottom: '1rem' }}>
        <div className="card-header header-font">{repo.name}</div>
        <div className="card-body">
          <p className="card-text">{repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <MarkGithubIcon size={25} />View on GitHub
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


  );
}

export default UserRepositories;