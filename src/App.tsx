/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import DeveloperBanner from "./components/DeveloperBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import Features from "./components/Features";
import Rules from "./components/Rules";
import Ranks from "./components/Ranks";
import Community from "./components/Community";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.jpg";

export default function App() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", logo);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#07030e] text-slate-100 flex flex-col relative">
      {/* Centralized Sticky Header Group */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
        <div className="pointer-events-auto">
          <DeveloperBanner />
          <Navbar />
        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <ServerInfo />
        <Features />
        <Rules />
        <Ranks />
        <Community />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
