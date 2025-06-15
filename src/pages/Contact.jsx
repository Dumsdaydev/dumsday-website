import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_w729pbf',      // 🔁 Replace this
      'template_dkb93xl',     // 🔁 Replace this
      templateParams,
      'pp0AdXy6jnBr9cV1a'       // 🔁 Replace this
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (err) => {
        console.error('FAILED...', err);
        toast.error('❌ Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="contact-page">
      <ToastContainer />
      <h1>Contact Us</h1>
      <p>Got a question, feedback, or just want to say hi? We'd love to hear from you.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;