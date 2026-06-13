"use client";

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-sm">HF</span>
              </div>
              <span className="font-bold text-foreground">
                {siteConfig.name}
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI Engineer & Machine Learning Engineer crafting intelligent solutions
              at the intersection of machine learning and modern web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Research", href: "#research" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Resources
            </h4>
            <ul className="space-y-2">
              {["Blog", "Resume", "Projects", "Publications"].map(
                (item) => (
                  <li key={item}>
                    <button className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex gap-2">
              {[
                { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
                { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-primary hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
