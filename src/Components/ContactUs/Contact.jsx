import './ContactUs.css'

import React, { useState,useRef } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


const Contact = ()=>{

  const form = useRef();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can send formData to an email API like EmailJS or your own server
      console.log(formData);
      setSubmitted(true);

      const publicKey="3EMKHmEHv7CKZE6Ez";
      const service_id="service_9tyzzgq";
      const template_id="template_pxtdkzo";

      

      emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  




    };


    return (
        <>
          <div className="contact-div" >
            <Container className="py-5" id="contact">
              <h2 className="text-center">Contact Me</h2>

              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Thank you for your message! I'll get back to you soon.
                </Alert>
              )}

              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button className="ThemeBtn" variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Container>
          </div>
        </>
    )
}


export default Contact;