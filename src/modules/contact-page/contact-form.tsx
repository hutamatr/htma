'use client';

import emailjs from '@emailjs/browser';
import clsx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import InputForm from '@components/ui/input-form';

export default function ContactForm() {
  const [status, setStatus] = useState<
    'pending' | 'success' | 'reject' | 'idle'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const submitHandler: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    if (
      data.from_email === '' ||
      data.message === '' ||
      data.from_name === '' ||
      data.subject === ''
    ) {
      toast.error('Please fill all the fields', { duration: 3000 });
    }

    const templateParams = {
      from_name: data.from_name,
      message: data.message,
      subject: data.subject,
      from_email: data.from_email,
    };

    try {
      setStatus('pending');
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      if (res.status === 200) {
        setStatus('success');
        toast.success('Message sent successfully', {
          duration: 3000,
        });
        reset();
      }
    } catch (error) {
      setStatus('reject');
      toast.error('Something went wrong', { duration: 3000 });
    } finally {
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex w-full flex-col justify-center gap-y-4'
    >
      <div
        className={clsx(
          'grid grid-cols-1 gap-y-4',
          'md:grid-cols-2 md:gap-x-4'
        )}
      >
        <InputForm
          title='Name'
          type='text'
          placeholder='enter your name'
          aria-invalid={errors.from_name ? 'true' : 'false'}
          {...register('from_name', { required: true })}
        />
        <InputForm
          title='Email'
          type='email'
          placeholder='enter your email'
          aria-invalid={errors.from_email ? 'true' : 'false'}
          {...register('from_email', { required: true })}
        />
      </div>
      <InputForm
        title='Subject'
        type='text'
        placeholder='enter your email subject'
        aria-invalid={errors.subject ? 'true' : 'false'}
        {...register('subject', { required: true })}
      />
      <InputForm
        title='Message'
        type='text'
        isTextArea
        placeholder='message...'
        aria-invalid={errors.message ? 'true' : 'false'}
        {...register('message', { required: true })}
      />
      <button
        type='submit'
        className={clsx(
          'mx-auto w-fit rounded bg-custom-black px-8 py-2 text-custom-green shadow-custom-shadow',
          'disabled:cursor-not-allowed disabled:bg-custom-black/50 disabled:text-custom-green/50',
          'dark:bg-custom-green dark:text-custom-black'
        )}
        disabled={status === 'pending'}
      >
        {status === 'pending' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
