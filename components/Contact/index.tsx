'use client'
import { useState, useRef } from 'react';
// import Link from "next/link";
import {useTranslations} from 'next-intl';
import { redirect, usePathname } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import router from 'next/router';

const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    email: '',
    message: '',
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(0);
  const [captcha, setCaptcha] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log("pressed")
    event.preventDefault();
    loading == 2 ? setLoading(loading) : setLoading(loading+1);
    let cat = recaptchaRef.current ? recaptchaRef.current.getValue() : '';
    setCaptcha(cat as string);
    recaptchaRef.current?.execute();
  };

  const sendmessage = () => {
  
    emailjs
      .send(
        'service_q4jb75b',
        'template_2mmz903',
        {
          to_email: 'laformulacapitalgroup@gmail.com',
          to_name: 'LaFormulaCapitalGroup',
          from_email: form.email,
          message: form.message,
        },
        'Rw25nLaZp_no__lqf'
      )
      .then(
        () => {
          setLoading(0);
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
      console.log(captchaCode);
      
      const response = await fetch("/api/captcha", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      });
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
                  sitekey="6LeJ8lMoAAAAAORlu3kvNSs9zljvJDc8s0NnLd6A"
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
                        id='email'
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
                        id='message'
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
                      {loading == 0 ? msg('submit.1') : (loading == 1 ? msg('submit.2') : msg('submit.3'))}
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
