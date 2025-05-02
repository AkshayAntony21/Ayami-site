"use client";

import {
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#040902] py-32 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Let’s <span className="text-[#00E0C6]">Connect</span>
        </h2>

        <p className="mb-12 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Have a project in mind? Want to collaborate or ask something?<br />
          Drop us a message — we’d love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-12">
          <a
            href="https://wa.me/919876543210?text=Hi%20Ayami%2C%20I%27m%20interested%20in%20your%20architectural%20visualizations!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg transition"
          >
            <MessageCircle size={24} />
            Chat with us on WhatsApp
          </a>
          <a
            href="mailto:hello@ayami.com"
            className="flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg rounded-lg transition"
          >
            <Mail size={24} />
            Send us an Email
          </a>
        </div>

        <div className="flex justify-center items-center gap-6">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-7 h-7 hover:text-[#E1306C] transition" />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-7 h-7 hover:text-red-500 transition" />
          </a>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-7 h-7 hover:text-blue-500 transition" />
          </a>
          <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-7 h-7 hover:text-[#0077b5] transition" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-7 h-7 hover:text-sky-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
