import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert.jsx"; // Added .jsx
import { Particles } from "../components/Particles.jsx"; // Added .jsx
import { motion } from "framer-motion";
import { mySocials } from "../constants/index.js"; // Import your social links, added /index.js
import CopyEmailButton from "../components/CopyEmailButton.jsx"; // Added .jsx
import { ShineBorder } from "../components/ShineBorder.jsx"; // Added .jsx

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const myEmail = "soumabhamajumder@gmail.com";

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // --- OPTIMIZED LOGIC: Using Environment Variables ---
    // Make sure your .env file has:
    // VITE_EMAILJS_SERVICE_ID=your_service_id
    // VITE_EMAILJS_TEMPLATE_ID=your_template_id
    // VITE_EMAILJS_PUBLIC_KEY=your_public_key
    // ----------------------------------------------------

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Soumabha",
          from_email: formData.email,
          to_email: myEmail,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50">
        {showAlert && <Alert type={alertType} text={alertMessage} />}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-heading mb-12 text-center"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full max-w-5xl p-8 mx-auto rounded-3xl bg-black/40 backdrop-blur-lg shadow-2xl shadow-black/30"
      >
        <ShineBorder
          borderWidth={2} // Adjusted back
          duration={8} // Adjusted back
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-16">
          {/* LEFT COLUMN: Contact Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-neutral-400 mb-8">
                Fill up the form and I will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-cyan-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.552a.75.75 0 001.25.122l.823-.823a1.875 1.875 0 012.39-.668l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 9.75V7.5a3 3 0 013-3H1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-300">+91 12345 67890</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-cyan-400"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <CopyEmailButton email={myEmail} className="!px-0" />
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {mySocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/50"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-8 md:mb-4">
              Send me a message
            </h3>
            <form className="w-full space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-neutral-300"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full px-4 py-3 text-white border rounded-lg bg-black/50 border-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                  placeholder="John Doe"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full px-4 py-3 text-white border rounded-lg bg-black/50 border-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                  placeholder="JohnDoe@email.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full px-4 py-3 text-white border rounded-lg bg-black/50 border-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                  placeholder="Share your thoughts..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 text-lg font-semibold text-center text-white rounded-lg cursor-pointer bg-radial from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                {!isLoading ? "Send Message" : "Sending..."}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
