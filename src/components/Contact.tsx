"use client";

import {
  Mail,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#040902] py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Let’s <span className="text-[#00E0C6]">Connect</span>
        </h2>

        <p className="mb-12 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          Have a project in mind? Want to collaborate or ask something?
          <br className="hidden sm:block" />
          Drop us a message — we’d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12 w-full">
          <a
            href="https://wa.me/919496055568"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 text-base sm:text-lg rounded-lg transition"
          >
            <MessageCircle size={24} />
            Chat with us on WhatsApp
          </a>

          <a
            href="mailto:projectayami@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black px-6 py-4 text-base sm:text-lg rounded-lg transition"
          >
            <Mail size={24} />
            Send us an Email
          </a>
        </div>

        <div className="flex justify-center items-center gap-6">
          <a href="https://www.instagram.com/ayamiprojects/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 hover:text-[#E1306C] transition" />
          </a>
          <a href="https://www.youtube.com/@AyamiProjects" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="w-6 h-6 sm:w-7 sm:h-7 hover:text-red-500 transition" />
          </a>
          <a href="https://www.instagram.com/ayamiprojects/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
