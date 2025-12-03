"use client";
import { label } from "motion/react-client";
import { useEffect } from "react";

export default function Navbar() {
  // Smooth scroll for same‑page anchors
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement).getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const navItems = [
    { label: "Home", href: "/#top" },
    { label: "About", href: "/#about" },
    { label: "Process", href: "/#process" },
    { label: "Consult", href: "/#contact-form" },
    
  ];

  return (
    <nav className="w-full bg-black/90 backdrop-blur border-b border-purple-500/40 text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6 overflow-x-auto">
        <img src="/favicon.ico" alt="MyBrand" className="h-8 w-8" />

        <div className="flex-1 flex gap-6 text-sm md:text-base">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap hover:text-purple-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
