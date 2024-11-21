import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_pbaelqj';
        const templateId = 'template_o2tvs2b';
        const publicKey = 'aKBfPKLmJDsnQYXPd';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // console.log("SUCCESS!");

          toast('Thank you for contacting me.',
            {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );

          setTimeout(() => {
            toast('I will get back to you soon!',
              {
                icon: '🚀',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            );
          }, 2000);

          setName('');
          setEmail('');
          setPhoneNumber('');
          setCompanyName('');
          setMessage('');
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("This didn't work.")
        }
      );
  };

  return (
    <div className="w-full p-10 mx-auto my-20 border-2 right rounded-3xl">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-10 md:items-start"
      >
        <div className="flex flex-col w-full gap-10 md:flex-row">
          <div className="inputField">
            <input
              type="text"
              id="name"
              placeholder=" "
              name="user_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Full name *</label>
          </div>

          <div className="inputField">
            <input
              type="email"
              id="email"
              placeholder=" "
              name="user_email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">E-mail address *</label>
          </div>
        </div>

        <div className="flex flex-col w-full gap-10 md:flex-row">
          <div className="inputField">
            <input
              type="tel"
              id="phone"
              placeholder=" "
              name="phone_number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label>Phone number *</label>
          </div>

          <div className="inputField">
            <input
              type="text"
              id="phone"
              placeholder=" "
              name="company_name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <label>Company name *</label>
          </div>
        </div>

        <div className="inputField">
          <textarea
            id="message"
            placeholder=" "
            rows="4"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="message">Tell us about your project *</label>
        </div>

        <button type="submit" className="btn btn-primary">
          <span className="arrow-icon">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m8.59619 9.40381v-2h8.00001v7.99999h-2v-4.5858l-5.77818 5.7782-1.41421-1.4142 5.77819-5.77819z"
                fill="currentColor"
              />
            </svg>
          </span>
          Submit Message
        </button>

        <div className="text-center">
          Or Reach me on
          <a
            href="https://wa.me/201019071584"
            target="_blank"
            className="ml-2 btn btn-secondary"
          >
            WhatsApp
          </a>
        </div>
      </form>


<Toaster reverseOrder={true} />

    </div>
  );
}

export default ContactForm;
