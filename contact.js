import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      
      <h2>General Inquiries</h2>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Address: {contactInfo.address}</p>
      
      <h2>Follow Us</h2>
      <ul>
        <li><a href={contactInfo.socialMedia.twitter}>Twitter</a></li>
        <li><a href={contactInfo.socialMedia.facebook}>Facebook</a></li>
        <li><a href={contactInfo.socialMedia.instagram}>Instagram</a></li>
        {/* Add more social media links if needed */}
      </ul>
      
      <h2>Business Inquiries</h2>
      <p>Email: {contactInfo.businessInquiries.email}</p>
      <p>Phone: {contactInfo.businessInquiries.phone}</p>
      
      <h2>Feedback</h2>
      <p>Provide your feedback <a href={contactInfo.feedbackForm}>here</a>.</p>
    </div>
  );
}

export default ContactPage;
