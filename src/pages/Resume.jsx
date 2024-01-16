import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="container" style={{ marginLeft: '10px', marginTop: '100px' }}>
  <div className="row">
    <div className="col-md-6">
      <h2>Resume</h2>
      <p>
        Download my resume <a href="../src/assets/files/Anthony G Resume.pdf" download>here</a>.
      </p>
      {/* <h2>Skills: </h2> */}
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-sm-6">
          <h2>Skills: Front-end</h2>
          <ul className="list-group">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h2> : Back-end</h2>
          <ul className="list-group">
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">Databases: MongoDB, MySQL</li>
            <li className="list-group-item">RESTful APIs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default PortfolioPage;