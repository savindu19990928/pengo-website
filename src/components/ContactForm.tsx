import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, CircleAlertIcon, LoaderCircleIcon } from 'lucide-react';
import { capabilities } from '../data/capabilities';
import { whatsappLink, whatsappNumber } from '../data/navigation';
import { InquiryPayload, submitInquiry } from '../utils/inquiry';
import { easeOut } from '../utils/motion';

type FormErrors = Partial<Record<keyof InquiryPayload, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: InquiryPayload = { name: '', email: '', phone: '', company: '', service: '', message: '' };

function validate(values: InquiryPayload): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';else
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (values.phone && !/^[+\d\s()-]{7,}$/.test(values.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!values.message.trim()) errors.message = 'Tell us a little about your project.';
  return errors;
}

const inputBase =
'w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-midnight placeholder:text-steel/60 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4';

export function ContactForm() {
  const [values, setValues] = useState<InquiryPayload>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof InquiryPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await submitInquiry(values);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (field: keyof InquiryPayload) =>
  `${inputBase} ${errors[field] ? 'border-pengo-red focus:ring-pengo-red/15' : 'border-ice focus:border-arctic focus:ring-arctic/15'}`;

  const fieldError = (field: keyof InquiryPayload) =>
  errors[field] ?
  <p id={`${field}-error`} className="mt-2 text-sm text-pengo-red-deep">
        {errors[field]}
      </p> :
  null;

  const describedBy = (field: keyof InquiryPayload) => errors[field] ? `${field}-error` : undefined;

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(17,24,39,0.35)] ring-1 ring-ice md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ?
        <motion.div
          key="success"
          role="status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="flex min-h-[440px] flex-col items-start justify-center">
          
            <span className="grid h-14 w-14 place-items-center rounded-full bg-arctic-deep text-white">
              <CheckIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em]">Thank you, {values.name.split(' ')[0]}.</h3>
            <p className="mt-3 max-w-md leading-relaxed text-steel">
              We’ll be in touch soon. For anything urgent, message us on WhatsApp at {whatsappNumber}.
            </p>
            <button
            type="button"
            onClick={() => {
              setValues(initialValues);
              setStatus('idle');
            }}
            className="mt-8 rounded-full border border-ice px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:border-arctic hover:text-arctic-deep">
            
              Send another inquiry
            </button>
          </motion.div> :

        <motion.form
          key="form"
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Project inquiry">
          
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">Send us a message</h2>
            <p className="mt-2 text-sm text-steel">Fields marked * are required.</p>

            {status === 'error' &&
          <div role="alert" className="mt-6 flex gap-3 rounded-xl bg-pengo-red/10 p-4 text-sm text-pengo-red-deep">
                <CircleAlertIcon className="h-5 w-5 shrink-0" />
                <p>
                  Something went wrong while sending your message. Please try again, or reach us on{' '}
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="font-semibold underline">
                    WhatsApp
                  </a>
                  .
                </p>
              </div>
          }

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-midnight">Name *</label>
                <input id="name" name="name" autoComplete="name" value={values.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={describedBy('name')} className={fieldClass('name')} placeholder="Your full name" />
                {fieldError('name')}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-midnight">Email *</label>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={describedBy('email')} className={fieldClass('email')} placeholder="you@company.com" />
                {fieldError('email')}
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-midnight">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update('phone')} aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')} className={fieldClass('phone')} placeholder="+94 7X XXX XXXX" />
                {fieldError('phone')}
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-midnight">Company</label>
                <input id="company" name="company" autoComplete="organization" value={values.company} onChange={update('company')} className={fieldClass('company')} placeholder="Company name" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-midnight">Service of interest</label>
                <select id="service" name="service" value={values.service} onChange={update('service')} className={fieldClass('service')}>
                  <option value="">Select a service</option>
                  {capabilities.map((c) =>
                <option key={c.id} value={c.name}>{c.name} — {c.tagline}</option>
                )}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-midnight">Message *</label>
                <textarea id="message" name="message" rows={5} value={values.message} onChange={update('message')} aria-invalid={!!errors.message} aria-describedby={describedBy('message')} className={`${fieldClass('message')} resize-none`} placeholder="What would you like to build or improve?" />
                {fieldError('message')}
              </div>
            </div>

            <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-arctic-deep px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker disabled:cursor-wait disabled:opacity-80 sm:w-auto">
            
              {status === 'submitting' ?
            <>
                  <LoaderCircleIcon className="h-4 w-4 animate-spin" />
                  Sending…
                </> :

            <>
                  Submit
                  <ArrowRightIcon className="h-4 w-4" />
                </>
            }
            </button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}