import React, { useState } from 'react';
import Contact from './Contact';

const ContactFormHandler = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = (formData) => {
    // Here you would typically handle the form submission to your backend service
    // For this example, we'll just simulate a successful submission
    console.log('Form submitted:', formData);
    setFormStatus('Form submitted successfully!');
    // You can also add any additional logic you need for handling the form data here
  };

  return (
    <div>
      <Contact onSubmit={handleFormSubmit} />
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default ContactFormHandler;
