
'use client'

import Header from '../../components/Header';

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a server
    console.log({ name, email, subject, message });
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full items-center">
        <div className="flex h-20 w-full p-16">
          <Header text="get in touch" />
        </div>
        <div className="flex h-160 w-1/3 mt-20 mb-0">
          <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
            <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">name<span className='text-red-500 text-m'>*</span></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border-2 border-butt-color text-gray-900 text-sm rounded-lg focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color"
              placeholder="name surname"
            />
            <br />
            <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">email<span className='text-red-500 text-m'>*</span></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border-2 border-butt-color text-butt-color text-sm rounded-lg focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color"
              placeholder="name@domain.com"
            />
            <br />
            <label htmlFor="subject" className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-gray-50 border-2 border-butt-color text-butt-color text-sm rounded-lg focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color"
              placeholder="subject"
            />
            <br />
            <label htmlFor="message" className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="text-gray-900 bg-gray-50 border-2 border-butt-color text-sm rounded-lg focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color"
              placeholder="Type your message here..."
            />
            <br />
            <br></br>
            <br></br>
            <div className='flex flex-row justify-center items-center content-center'>
              <button type="submit" style={{ width: '150px', height: '50px' }} className="flex items-center content-center justify-center rounded-md bg-butt-color font-poppins text-blue-900">Send</button>
            </div>
          </form>

        </div>
      </div>
    </main>
  )
}
