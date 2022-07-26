import React, { useState } from 'react';
import Button from '../../common/Button';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import HandleStatus from './HandleStatus';

export interface Status {
  type: 'success' | 'warning' | 'error';
  text: EmailJSResponseStatus;
}

export default function Message() {
  const [result, setResult] = useState<Status>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lcyd3m5', 'template_2dn9eir', e.currentTarget, 'M05-oRoEXypvBd76i')
      .then(
        (result) => {
          if (result.text === 'OK') {
            setResult({
              type: 'success',
              text: {
                status: 401,
                text: 'We are receive your message, thanks for get in touch.',
              },
            });
          } else {
            setResult({ type: 'warning', text: result });
          }
        },
        (error) => {
          setResult({ type: 'error', text: error });
        }
      );

    e.currentTarget.reset();
    setTimeout(setResult, 5000, undefined);
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-5">
      <input type="text" required name="name" className="form-control" placeholder="Your Name" />
      <input type="email" required name="email" className="form-control" placeholder="Email" />
      <textarea
        required
        name="message"
        id=""
        rows={8}
        className="form-control"
        placeholder="Message"
      ></textarea>
      <div className="flex flex-col gap-2 items-center md:items-end">
        <HandleStatus result={result} />
        <Button type="submit" text="Send Message" variant="footer-outline-white" />
      </div>
    </form>
  );
}
