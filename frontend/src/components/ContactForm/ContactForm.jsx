import React from "react";
import { Formik } from "formik";

const SUBMIT_URL = "//localhost:3001/messages";

function ContactForm() {
  return (
    <section className="contact-form">
      <h2 className="contact-form__heading">Reach out to us!</h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          setStatus({})
          try {
            const res = await fetch(SUBMIT_URL, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            if (res.ok) {
              resetForm();
              setStatus({ success: true });
            } else {
              throw new Error("Form submition failed");
            }
          } catch (e) {
            setStatus({ error: e.message });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          status,
        }) => (
          <form
            className="contact-form__form"
            id="contact-form"
            name="contact"
            onSubmit={handleSubmit}
          >
            <input
              className="contact-form__input"
              type="text"
              name="name"
              id="name-input"
              required
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name*"
            />
            <span className="contact-form__error-message">
              {errors.name && touched.name && errors.name}
            </span>
            <input
              className="contact-form__input"
              type="email"
              name="email"
              id="email-input"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your e-mail*"
            />
            <span className="contact-form__error-message">
              {errors.email && touched.name && errors.email}
            </span>
            <textarea
              className="contact-form__input contact-form__input_type_textarea"
              name="message"
              required
              placeholder="Your message*"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="contact-form__error-message">
              {errors.message && touched.message && errors.message}
            </span>
            <div className='contact-form__button-wrapper'>
            <span className='contact-form__error-status'>
              {status?.error}
            </span>
            {status?.success && <span className='contact-form__success-status'>Success</span>}
            <button
              className="contact-form__button"
              type="submit"
              disabled={isSubmitting}
            >
              Send message
            </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default ContactForm;
