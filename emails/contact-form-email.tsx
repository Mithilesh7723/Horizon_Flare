import type React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ 
  name, 
  email, 
  company, 
  phone, 
  service, 
  message 
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h1 style={{ color: '#007BFF' }}>New Contact Form Submission</h1>
    <p>You have received a new message from your website's contact form.</p>
    <hr />
    <h2>Submission Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
      {company && <li><strong>Company:</strong> {company}</li>}
      {phone && <li><strong>Phone:</strong> {phone}</li>}
      <li><strong>Service of Interest:</strong> {service}</li>
    </ul>
    <h2>Message:</h2>
    <p style={{ whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
      {message}
    </p>
    <hr />
    <p style={{ fontSize: '12px', color: '#777' }}>This email was sent from the Horizon Flare website contact form.</p>
  </div>
);

export default ContactFormEmail;
