"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [placeholder]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_19p43ma",
      "template_izzh3bp",
      formData,
      "CV45Mt8JlC-TonYeu"
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message Sent!!");
      setFormData({
        Name: "",
        Email: "",
        Message: ""
      });
    }, (err) => {
      console.log("FAILED...", err);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-foreground mb-8">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Get in Touch</h3>
              <p className="text-card-foreground leading-relaxed mb-4">
                I'd love to hear from you! Whether you're interested, have questions about my work, or just want to say hello.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-card-foreground">nishant2465@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Instagram</h4>
                <p className="text-card-foreground">@nishants91</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-card-foreground">Ahmedabad, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Send a Message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {["Name", "Email", "Message"].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    {field}
                  </label>
                  {field === "Message" ? (
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <input
                      type={field === "Email" ? "email" : "text"}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
