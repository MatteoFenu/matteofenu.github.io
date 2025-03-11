import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimStart(); // Evita spazi iniziali
    setFormData({ ...formData, [name]: trimmedValue });

    if (name === 'email') {
      setEmailError(validateEmail(trimmedValue) ? '' : 'Please enter a valid email');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    try {
      const response = await emailjs.send(serviceID, templateID, formData, publicKey);
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Email sent successfully! ✅');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Error sending the email. ❌');
    }
  };

  return (
    <section id='mail' className='w-full flex items-center justify-center'>
      <div className='lg:w-1/2 w-4/6 mx-auto bg-[#111133] bg-opacity-50 p-6 rounded-2xl shadow-md text-white'>
        <h2 className='text-2xl font-bold mb-4'>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-white'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='mt-1 p-2 w-full border rounded-lg text-black'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-white'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 p-2 w-full border rounded-lg text-black ${emailError ? 'border-red-500' : ''}`}
            />
            {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-white'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='mt-1 p-2 w-full border rounded-lg text-black'
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
