import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ContactForm({ darkMode, toggleDarkMode }) {
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setToast({ show: true, message: 'Message sent successfully!\nI will contact you soon!', type: 'success' });
    reset();

    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const onError = (errors) => {
    setToast({ show: true, message: 'Please fill all required fields!', type: 'error' });

    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div
  className={`fixed top-1/2 left-1/2 z-50 px-8 py-3 rounded shadow-lg text-gray-700 font-semibold
    -translate-x-1/2 -translate-y-1/2 whitespace-pre-line text-center
    ${toast.type === 'success' ? 'bg-green-300' : 'bg-red-600'}`}
>
  {toast.message}
</div>
      )}

      <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-transparent dark:bg-[#2a3448] backdrop-blur-xl p-8 rounded-2xl shadow-lg">

        <label htmlFor="email" className="block text-black dark:text-white font-serif italic mb-2">
          Your Email
        </label>
       
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
          className="w-full p-3 mb-6 rounded-lg font-serif italic bg-white dark:bg-[#1e293b] bg-opacity-70 placeholder-black dark:placeholder-white text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Your email"
        />

        <label htmlFor="message" className="block text-black dark:text-white font-serif italic mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: true })}
          className="w-full p-3 mb-6 rounded-lg font-serif italic bg-white dark:bg-[#1e293b] bg-opacity-70 placeholder-black dark:placeholder-white text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Your message"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-pastelBlue text-white font-serif italic hover:bg-gray-700 transition-colors"
        >
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm;
