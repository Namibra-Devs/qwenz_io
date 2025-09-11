import Threads from "../components/Threads";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Threads
        color={[1, 1, 1]}
        amplitude={1.2}
        distance={0.8}
        enableMouseInteraction={true}
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Reach out to the Qwenz.io team for partnerships, support, or general inquiries.
        </p>

        {/* Contact Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {/* Call */}
          <a
            href="tel:+233257887464"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
          >
            <Phone className="w-5 h-5" /> Call Us
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+233257887464"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:scale-105 transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:info@namibra.io"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg hover:scale-105 transition"
          >
            <Mail className="w-5 h-5" /> Email
          </a>
        </div>
      </div>
    </div>
  );
}
