import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(serviceID, templateID, formData, publicKey);
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Error sending email.');
    }
  };

  return (
    <section id='mail' className='w-full'>
      <div className='lg:w-1/2 w-4/6 mx-auto bg-white p-6 rounded-lg shadow-md text-black'>
        <h2 className='text-2xl font-bold mb-4 '>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} required className='mt-1 p-2 w-full border rounded-lg' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} required className='mt-1 p-2 w-full border rounded-lg' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='mt-1 p-2 w-full border rounded-lg'
              rows={4}
            />
          </div>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] font-bold text-white p-2 rounded-lg transition duration-300 hover:bg-gradient-to-l'>
            Send
          </button>
        </form>
        {status && <p className='mt-4 text-center'>{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
