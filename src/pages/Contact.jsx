import React, { useState } from 'react';

import '../styles/Project.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    if (name && email && message) {

     // Store values in local storage
        const formData = {
          name: name,
          email: email,
          message: message
     };
  
     localStorage.setItem('formData', JSON.stringify(formData));
 

      // Reset form fields
    setName('');
    setEmail('');
    setMessage('');

    alert("Details submitted");
  }else {

    alert("Please submit all fields");

  }

};

return (
    
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div className="card-size">
      <div className="mt-5 card-size">
        <div className="card">
        {/* <div className="card-body"> */}
          <h2 className = "font" style={{ marginLeft: '10px', marginTop: '20px' }}> Contact Details</h2>
           <form onSubmit={handleSubmit}>
            <div className="form-group" >
              <label htmlFor="name" style={{ marginLeft: '10px', marginTop: '20px' }} className = "text">Name:</label>
              <input
                type="text"
                className="form-control "
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '550px' , marginLeft: '10px', marginBottom: '20px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ marginLeft: '10px' }} className = "text">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '550px' , marginLeft: '10px', marginBottom: '20px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{ marginLeft: '10px' }} className = "text">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '550px' , marginLeft: '10px' }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', marginLeft: '10px', marginBottom: '20px' }}>Submit</button>
          </form>
          
        </div>
      </div>
    </div>
  </div>

  )

}

  // export default Contact;