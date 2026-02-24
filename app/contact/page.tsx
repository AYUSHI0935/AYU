"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // typing ke time error remove
    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send(
        "service_qaz3w59", // yaha apna Service ID daalo
        "template_gwmhtff", // yaha Template ID daalo
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "wHs9Gy1s3NyoAkyp5" // yaha Public Key daalo
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setErrors({});
        },
        (error) => {
          console.log(error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section className="contact">
      <div className="container contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Work Together</h1>
          <p>
            Have an idea or project? Send us a message and our team will get
            back to you within 24 hours.
          </p>

          <div className="contact-details">
            <div>
              <h3>Email</h3>
              <span>contact@mywebsite.com</span>
            </div>

            <div>
              <h3>Phone</h3>
              <span>+91 98765 43210</span>
            </div>

            <div>
              <h3>Location</h3>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <div className="form-group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <label>Your Name</label>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <label>Email Address</label>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
            <label>Subject</label>
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <label>Your Message</label>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}