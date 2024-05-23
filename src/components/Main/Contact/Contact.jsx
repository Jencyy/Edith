import React, { useState } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="row contact-content">
          <div className="col-md-6 contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="" disabled>Select inquiry type</option>
                  <option value="admission">Admission</option>
                  <option value="courses">Courses</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6 contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4914649388174!2d72.88665444734443!3d21.212351382064206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f859d9765cb%3A0xe5d73466b4f2a961!2sPavitraa%20Point!5e0!3m2!1sen!2sin!4v1716450147489!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Institute Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
