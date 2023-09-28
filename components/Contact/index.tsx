'use client'
import { useState, useRef } from 'react';
import Link from "next/link";
import {useTranslations} from 'next-intl';
import { redirect, usePathname } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import fetch from "node-fetch";
import axios from 'axios';

const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    email: '',
    message: '',
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let cat = recaptchaRef.current ? recaptchaRef.current.getValue() : '';
    setCaptcha(cat as string);
    recaptchaRef.current?.execute();
  };

  const sendmessage = () => {
    setLoading(true);
  
    emailjs
      .send(
        'service_q4jb75b',
        'template_2mmz903',
        {
          to_email: 'benjamintopsmile@gmail.com',
          to_name: 'LaFormulaCapitalGroup',
          from_email: form.email,
          message: form.message,
        },
        'Rw25nLaZp_no__lqf'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. We will get back to you soon.');
          setForm({
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };
  
  const onReCAPTCHAChange = async (captchaCode: string): Promise<void> => {

    if (!captchaCode) {
      return;
    }
    try {
      // const response = await fetch("/api/index", {
      //   method: "POST",
      //   body: JSON.stringify({ captcha: captchaCode }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const response = await fetch("/api/hello", {
        method: "GET",
        // body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const response = await fetch(
      //   `https://www.google.com/recaptcha/api/siteverify?secret=6LdR8VMoAAAAALlJCOIAREmFdVlW7vKMxN-_BypO&response=${captcha}`,
      //   {
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      //       "Access-Control-Allow-Origin": "no-cors",
      //     },
      //     method: "POST",
      //   }
      // );
      if (response.ok) {
        console.log("success");
        sendmessage();
      } else {
        console.log("error");
        const error: unknown = await response.json();
        throw new Error((error as { message?: string }).message || 'Unknown error occurred');
      }
    } catch (error) {
      alert((error as Error)?.message || 'Something went wrong');
    } finally {
      recaptchaRef.current ? recaptchaRef.current.reset() : null;
    }
  };

  const msg = useTranslations('contact');
  const filename = usePathname().substring(1);
  return (
    <section id="contact" className="h-[100vh] overflow-hidden py-16 md:py-20 lg:py-28 bg-black">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full mx-auto mt-[8vh] lg:w-3/5">
            <div
              className="mb-12 rounded-md py-11 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6LdR8VMoAAAAAIA7P0iyRvIF9o8cMJ4reXhRwTTq"
                  onChange={() => onReCAPTCHAChange(captcha)}
                />
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-full">
                  </div>
                  <div className="w-full px-4 md:w-full">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-lg text-white "
                      >
                        {msg('label.1')}
                      </label>
                      <input
                        required
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder={msg('placeholder.1')}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-lg text-white"
                      >
                        {msg('label.2')}
                      </label>
                      <textarea
                        required
                        rows={5}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder={msg('placeholder.2')}
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button 
                    type='submit'
                    className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      {loading == true ? msg('sending') : msg('submit')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
