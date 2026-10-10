"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, AlertCircle, MapPin, FileText, ArrowUpRight, ArrowDown } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      botcheck: formData.get("botcheck") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
        setErrorMessage(data.message || "Failed to dispatch email via SMTP.");
      }
    } catch (error: any) {
      setFormStatus("error");
      setErrorMessage(error?.message || "Delivery failed. Please email directly at abhis699675@gmail.com");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white/70 dark:bg-black/40 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ─── Editorial Portrait Showcase (Reference Style) ─── */}
        <FadeInOnScroll>
          <div className="group relative w-full overflow-hidden rounded-3xl bg-slate-100/90 dark:bg-neutral-900/70 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 shadow-2xl backdrop-blur-md transition-all duration-700">
            {/* Subtle architectural geometric wireframe arcs */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20%" cy="30%" r="220" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-neutral-600" />
              <circle cx="85%" cy="70%" r="280" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-neutral-600" />
              <circle cx="50%" cy="50%" r="380" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-cyan-500/40" />
            </svg>

            {/* Ambient radial backlight behind Abhishek */}
            <div
              className="absolute inset-0 pointer-events-none z-0 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              style={{
                background: "radial-gradient(ellipse 65% 65% at 50% 55%, rgba(6, 182, 212, 0.18) 0%, transparent 70%)"
              }}
            />

            {/* Giant Bold Background Typography: DEVELOPER (Supports both Dark & Bright mode with reactive hover) */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none select-none z-0 overflow-hidden">
              <span className="font-black tracking-tight sm:tracking-normal uppercase text-slate-900/10 dark:text-white/[0.08] text-[13vw] sm:text-[12vw] lg:text-[10rem] xl:text-[11.5rem] leading-none whitespace-nowrap translate-y-3 sm:translate-y-6 transition-all duration-700 ease-out group-hover:text-cyan-600/25 dark:group-hover:text-cyan-400/25 group-hover:tracking-wider group-hover:scale-105 group-hover:drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                DEVELOPER
              </span>
            </div>

            {/* Top Corner Meta Info */}
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-10">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  AI / ML Engineer
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Generative AI & Computer Vision
                </p>
              </div>

              <div className="flex flex-col sm:items-end space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Work
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                  Hamirpur · Mohali, India
                </span>
              </div>
            </div>

            {/* Centerpiece Portrait Cutout with subtle hover lift */}
            <div className="relative z-10 flex justify-center items-end px-4 pt-2">
              <img
                src="/images/profile/abhishek-half.png"
                alt="Abhishek Sharma"
                className="max-h-[360px] sm:max-h-[440px] lg:max-h-[500px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] group-hover:scale-[1.025] group-hover:-translate-y-1 transition-all duration-700 ease-out"
              />
            </div>

            {/* Seamless Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-slate-100 dark:from-neutral-900/90 to-transparent pointer-events-none z-10" />

            {/* Bottom-right scroll cue */}
            <div className="absolute bottom-4 right-6 z-20 hidden sm:flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-neutral-400">
              <span>Connect below</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-600 dark:text-cyan-400" />
            </div>
          </div>
        </FadeInOnScroll>

        {/* Section Heading */}
        <FadeInOnScroll>
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              05. Contact & Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Let's Build Something Together.
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="flex items-center gap-4 p-5 bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-xl dark:shadow-2xl backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  {siteConfig.socials.email}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-xl dark:shadow-2xl backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                  LinkedIn Profile
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  linkedin.com/in/abhishek-sharma-6b2a34352
                </p>
              </div>
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-xl dark:shadow-2xl backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                  GitHub Repositories
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  github.com/abhishek-sharma-aiml
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                  Direct Phone
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {siteConfig.socials.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                  Location
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Hamirpur, HP / Mohali, Punjab, India
                </p>
              </div>
            </div>

            {/* Direct Official Resume Download Card */}
            <a
              href="/resume/Abhishek_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white dark:from-white dark:to-neutral-100 dark:text-black rounded-2xl shadow-xl hover:opacity-95 transition-all group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-cyan-400 dark:text-cyan-600" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider opacity-75">
                    Official Resume
                  </span>
                  <p className="text-sm font-extrabold">
                    Download Abhishek's Resume
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Contact Message Form Card */}
          <div className="lg:col-span-7 bg-white/95 dark:bg-neutral-900/70 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl dark:shadow-2xl backdrop-blur-md">
            {/* Clean Professional Form Header */}
            <div className="border-b border-slate-200 dark:border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Direct Inquiry
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Online · Quick Reply
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>
            </div>

            {formStatus === "success" ? (
              <div className="bg-emerald-50 dark:bg-white/[0.04] border border-emerald-500/40 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 dark:text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-600 dark:text-neutral-400">
                  Thank you for reaching out. I'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-black shadow-md"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Spam Protection (Web3Forms botcheck) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    autoComplete="off"
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or open role..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>

                {formStatus === "error" && (
                  <div className="flex items-center gap-2 text-xs text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/40 p-3 rounded-lg border border-red-300 dark:border-red-500/20">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-md disabled:opacity-50"
                >
                  {formStatus === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
