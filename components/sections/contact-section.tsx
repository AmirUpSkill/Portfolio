"use client";

import { Mail, MessageSquare } from "lucide-react";
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
// Import your specific icons
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import React from "react";

// This is the reusable wrapper component for each social icon link
function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors relative overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative">{children}</span>
    </a>
  );
}

export function ContactSection() {
  return (
    <section 
      id="contact" 
      className="w-full max-w-2xl py-10 flex flex-col items-start gap-y-10"
    >
      {/* Header */}
      <div className="space-y-5">
        <HeadingBadge title="Contact" icon={<MessageSquare size={14} color="#EF4444" />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Let&apos;s <span className="text-[#08090a] dark:text-slate-200">Connect</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            I&apos;m always excited to collaborate on interesting projects or just have a great tech conversation!
          </p>
        </div>
      </div>

      {/* Main Contact Card */}
      <SpotlightCard
        gradientColor="rgba(100, 116, 139, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        multiSpotlight
        initialHovered={false}
        disableScale
        className="w-full p-8 rounded-sm border bg-white dark:bg-[#0a0a0a] border-gray-200/80 dark:border-gray-500/10 hover:border-gray-900/30 dark:hover:border-slate-500/10 transition-all duration-300"
      >
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <h4 className="text-xl font-medium text-[#08090a] dark:text-white">
            Ready to start a conversation?
          </h4>

          {/* Your Personalized Email */}
          <a
            href="mailto:amirabdallahpfe@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors"
          >
            amirabdallahpfe@gmail.com
            <Mail className="w-4 h-4 mt-1" color="#2563EB" />
          </a>

          {/* Your Personalized Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <SocialIcon href="https://www.linkedin.com/in/abdallah-amir-0b93101b8">
              <FaLinkedin className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://github.com/AmirUpSkill">
              <FaGithub className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://x.com/abdallaham56721">
              <FaXTwitter className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://medium.com/@amirabdallahpfe">
              <FaMedium className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://substack.com/@amirabdallahpfe">
              <SiSubstack className="w-5 h-5" />
            </SocialIcon>
          </div>

          <p className="inline-block px-4 py-2 text-sm text-[#737373] dark:text-[#A1A1AA] bg-gray-50 dark:bg-[#141414] rounded-sm">
            💬 Let's build something great together!
          </p>
        </div>
      </SpotlightCard>

      {/* Footer */}
      <div className="w-full flex flex-col items-center gap-4 mt-8">
        <span className="text-center text-sm text-[#737373] dark:text-[#A1A1AA]">
          Made with <span className="text-red-500">❤️</span> by Amir
        </span>
      </div>
    </section>
  );
}