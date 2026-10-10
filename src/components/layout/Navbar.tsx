"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-50/85 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 py-3 shadow-sm dark:shadow-none"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand + Available dot */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </Link>
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-sm shadow-emerald-500/50" />
            {siteConfig.availability}
          </span>
        </div>

        {/* Desktop Links + Theme Toggle */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-white/70 hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          <a
            href="/resume/Abhishek_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all shadow-md group"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>

        {/* Mobile menu and theme toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-50/98 dark:bg-black/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-semibold">
              {siteConfig.availability}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-white/60 hover:text-slate-950 dark:hover:text-white py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume/Abhishek_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-bold bg-slate-900 text-white dark:bg-white dark:text-black shadow-md"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};
