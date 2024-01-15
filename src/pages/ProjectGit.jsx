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
    <div className="top-margin" style={{  marginTop: '100px', marginBottom: '150px' }}>
       <h2>My GitHub Repositories</h2>
       <div className="repos-container ">
         {repositories.map(repo => (
          <div key={repo.id} className="card text-bg-info repos-container top-margin top-margin"  style={{ maxWidth: '28rem', marginBottom: '1rem' }}>
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