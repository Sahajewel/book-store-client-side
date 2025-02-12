import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-3xl mx-auto bg-gray-600 p-6 rounded-lg shadow-lg pt-36">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Contact Us</h2>

      <div className="text-center mb-6">
        <p className="text-white">📍 saitama, Tokyo, Japan</p>
        <p className="text-white">📞 +81 80 5052 6822</p>
        <p className="text-white">✉️ info@sahajewel.com.com</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gray-400 text-white p-3 rounded-lg hover:bg-gray-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
