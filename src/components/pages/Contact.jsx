import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const styles = {
    contact: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      minHeight: '100px',
    },
    error: {
      color: 'red',
      fontSize: '0.9rem',
    },
    submitButton: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#596c80',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessages = { ...errors };

    if (!value) {
      errorMessages[name] = 'This field is required';
    } else if (name === 'email' && !validateEmail(value)) {
      errorMessages.email = 'Please enter a valid email address';
    } else {
      delete errorMessages[name];
    }

    setErrors(errorMessages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize error messages object
    let errorMessages = {};

    // Validate each field
    if (!formData.name) {
      errorMessages.name = 'Name is required';
    }

    if (!formData.email) {
      errorMessages.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errorMessages.email = 'Please enter a valid email address';
    }

    if (!formData.message) {
      errorMessages.message = 'Message is required';
    }

    // If there are errors, prevent submission
    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
      return;
    }

    // If validation passes, handle form submission (e.g., send data to a server)
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);

    // Clear form data and errors after submission
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section style={styles.contact}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name"
            required
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            required
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            id="message"
            required
            style={styles.textarea}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
