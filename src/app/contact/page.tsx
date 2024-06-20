'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../components/Header';
import { useRouter } from 'next/navigation';

export default function Contact(){
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_47bszpg', 'template_pxpizyo', form.current, {
        publicKey: 'RLXoqZX5WE0_owUXc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
          router.push('/contact/success');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSent(true);
          router.push('/contact/unsuccessful');
        },
      );
  };

  return (

    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full items-center">

        
          <div className="flex h-12 md:h-16 w-full md:p-16 md:pt-24 justify-center items-center content-center md:justify-start md:items-center md:content-center ">
            
          <div className="-ml-3 md:-ml-0"></div>
            <Header text="get in touch" />
          </div>

        
          <div className="flex h-160 w-2/3 mt-10 md:mt-20 mb-0">
            <form className="max-w-sm mx-auto w-full" ref={form} onSubmit={sendEmail}>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">name<span className='text-red-500 text-m'>*</span></label>
              <input className="bg-gray-50 border-2 border-butt-color text-sm rounded-sm focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color" type="text" name="user_name" />
              <br></br>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple" >email<span className='text-red-500 text-m'>*</span></label>
              <input className="bg-gray-50 border-2 border-butt-color text-sm rounded-sm focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color" type="email" name="user_email" />
              <br></br>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">message<span className='text-red-500 text-m'>*</span></label>
              <textarea rows={6} 
                className="text-gray-900 bg-gray-50 border-2 border-butt-color text-sm rounded-sm focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color" 
                placeholder="Type your message here..." 
                name="message" />
              <br></br>
              <br></br>
              <div className='flex flex-row justify-center items-center content-center'>
                <input type="submit" value="Send" className="flex items-center content-center justify-center rounded-md bg-butt-color font-poppins text-blue-900 h-10 w-28" />
              </div>
            </form>
          </div>  

      </div>
    </main>
  );
};